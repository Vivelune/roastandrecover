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

  // If we have a Sanity record with a Stripe ID, verify it still exists in Stripe
  if (existingCustomer?.stripeCustomerId) {
    try {
      // Verify the customer still exists in Stripe
      await stripe.customers.retrieve(existingCustomer.stripeCustomerId);
      
      // Customer exists in both - return existing IDs
      return {
        stripeCustomerId: existingCustomer.stripeCustomerId,
        sanityCustomerId: existingCustomer._id,
      };
    } catch (error) {
      // Stripe customer doesn't exist anymore - we'll create a new one
      console.log("Stripe customer not found, creating new one:", error);
      // Continue to create a new Stripe customer below
    }
  }

  // Check if customer exists in Stripe by email
  const existingStripeCustomers = await stripe.customers.list({
    email,
    limit: 1,
  });

  let stripeCustomerId: string;

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

  // Create or update customer in Sanity
  if (existingCustomer) {
    // Update existing Sanity customer with new Stripe ID
    await writeClient
      .patch(existingCustomer._id)
      .set({ 
        stripeCustomerId, 
        clerkUserId, 
        name,
        updatedAt: new Date().toISOString() 
      })
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
    updatedAt: new Date().toISOString(),
  });

  return {
    stripeCustomerId,
    sanityCustomerId: newSanityCustomer._id,
  };
}