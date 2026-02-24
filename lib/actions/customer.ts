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
  console.log("getOrCreateStripeCustomer called:", { email, name, clerkUserId });

  // First, check if customer already exists in Sanity
  const existingCustomer = await client.fetch(CUSTOMER_BY_EMAIL_QUERY, {
    email,
  });

  console.log("Existing customer in Sanity:", existingCustomer);

  // If we have a customer with a Stripe ID in Sanity, verify it still exists in Stripe
  if (existingCustomer?.stripeCustomerId) {
    try {
      console.log("Verifying Stripe customer:", existingCustomer.stripeCustomerId);
      
      // Try to retrieve the customer from Stripe to verify it exists
      const stripeCustomer = await stripe.customers.retrieve(existingCustomer.stripeCustomerId);
      
      // Check if the customer was deleted
      if (!stripeCustomer.deleted) {
        console.log("Stripe customer verified and active");
        return {
          stripeCustomerId: existingCustomer.stripeCustomerId,
          sanityCustomerId: existingCustomer._id,
        };
      } else {
        console.log("Stripe customer was deleted, will create new one");
        // Continue to create a new customer below
      }
    } catch (error) {
      // Customer doesn't exist in Stripe anymore
      console.log(`Stripe customer ${existingCustomer.stripeCustomerId} not found, will create new one`);
      // Continue to create a new customer below
    }
  }

  // Check if customer exists in Stripe by email
  console.log("Checking Stripe for existing customer by email:", email);
  let stripeCustomerId: string;

  try {
    const existingStripeCustomers = await stripe.customers.list({
      email,
      limit: 1,
    });

    if (existingStripeCustomers.data.length > 0) {
      // Customer exists in Stripe
      stripeCustomerId = existingStripeCustomers.data[0].id;
      console.log("Found existing Stripe customer:", stripeCustomerId);
    } else {
      // Create new Stripe customer
      console.log("Creating new Stripe customer");
      const newStripeCustomer = await stripe.customers.create({
        email,
        name,
        metadata: {
          clerkUserId,
        },
      });
      stripeCustomerId = newStripeCustomer.id;
      console.log("Created new Stripe customer:", stripeCustomerId);
    }
  } catch (stripeError) {
    console.error("Error interacting with Stripe:", stripeError);
    throw new Error(`Failed to create/find Stripe customer: ${stripeError instanceof Error ? stripeError.message : 'Unknown error'}`);
  }

  // Create or update customer in Sanity
  try {
    if (existingCustomer) {
      // Update existing Sanity customer with new Stripe ID
      console.log("Updating existing Sanity customer with new Stripe ID");
      await writeClient
        .patch(existingCustomer._id)
        .set({ 
          stripeCustomerId, 
          clerkUserId, 
          name,
          // Also update the timestamp to track when it was last synced
          updatedAt: new Date().toISOString() 
        })
        .commit();
      
      return {
        stripeCustomerId,
        sanityCustomerId: existingCustomer._id,
      };
    }

    // Create new customer in Sanity
    console.log("Creating new Sanity customer");
    const newSanityCustomer = await writeClient.create({
      _type: "customer",
      email,
      name,
      clerkUserId,
      stripeCustomerId,
      createdAt: new Date().toISOString(),
    });

    console.log("Created new Sanity customer:", newSanityCustomer._id);

    return {
      stripeCustomerId,
      sanityCustomerId: newSanityCustomer._id,
    };
  } catch (sanityError) {
    console.error("Error updating Sanity:", sanityError);
    throw new Error(`Failed to update Sanity with customer data: ${sanityError instanceof Error ? sanityError.message : 'Unknown error'}`);
  }
}