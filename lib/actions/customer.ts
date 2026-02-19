"use server";

import Stripe from "stripe";
import { client, writeClient } from "@/sanity/lib/client";
import { CUSTOMER_BY_EMAIL_QUERY } from "@/lib/sanity/queries/customers";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-01-28.clover",
});

/**
 * Gets or creates a Stripe customer by email
 * Also syncs the customer to Sanity database
 */
export async function getOrCreateStripeCustomer(
  email: string,
  name: string,
  clerkUserId: string
): Promise<{ stripeCustomerId: string; sanityCustomerId: string }> {
  // First, check if customer already exists in Sanity
  const existingCustomer = await client.fetch(CUSTOMER_BY_EMAIL_QUERY, {
    email,
  });

  if (existingCustomer?.stripeCustomerId) {
    // Verify the Stripe customer still exists
    try {
      await stripe.customers.retrieve(existingCustomer.stripeCustomerId);
      // Customer exists in Stripe, return existing IDs
      return {
        stripeCustomerId: existingCustomer.stripeCustomerId,
        sanityCustomerId: existingCustomer._id,
      };
    } catch (error) {
      // Stripe customer doesn't exist anymore - will create new one
      console.log("Stripe customer not found, will create new one");
    }
  }

  // Check if customer exists in Stripe by email
  let stripeCustomerId: string;

  try {
    const existingStripeCustomers = await stripe.customers.list({
      email,
      limit: 1,
    });

    if (existingStripeCustomers.data.length > 0) {
      // Customer exists in Stripe
      stripeCustomerId = existingStripeCustomers.data[0].id;
    } else {
      // Create new Stripe customer
      const newStripeCustomer = await stripe.customers.create({
        email,
        name,
        metadata: {
          clerkUserId,
        },
      });
      stripeCustomerId = newStripeCustomer.id;
    }
  } catch (error) {
    console.error("Error with Stripe customer operation:", error);
    throw new Error("Failed to create or retrieve Stripe customer");
  }

  // Create or update customer in Sanity
  try {
    if (existingCustomer) {
      // Update existing Sanity customer with Stripe ID
      await writeClient
        .patch(existingCustomer._id)
        .set({ stripeCustomerId, clerkUserId, name })
        .commit();
      return {
        stripeCustomerId,
        sanityCustomerId: existingCustomer._id,
      };
    }

    // Create new customer in Sanity
    const newSanityCustomer = await writeClient.create({
      _type: "customer",
      email,
      name,
      clerkUserId,
      stripeCustomerId,
      createdAt: new Date().toISOString(),
    });

    return {
      stripeCustomerId,
      sanityCustomerId: newSanityCustomer._id,
    };
  } catch (error) {
    console.error("Error creating/updating Sanity customer:", error);
    throw new Error("Failed to sync customer with database");
  }
}