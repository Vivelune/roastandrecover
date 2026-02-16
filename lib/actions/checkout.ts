"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_BY_IDS_QUERY } from "@/lib/sanity/queries/products";
import { getOrCreateStripeCustomer } from "@/lib/actions/customer";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-01-28.clover",
});

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CheckoutResult {
  success: boolean;
  url?: string;
  error?: string;
}

function normalizeError(error: unknown): string {
  if (error instanceof Stripe.errors.StripeError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unexpected server error";
}

function resolveBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export async function createCheckoutSession(
  items: CartItem[]
): Promise<CheckoutResult> {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return { success: false, error: "Authentication required" };
    }

    if (!Array.isArray(items) || items.length === 0) {
      return { success: false, error: "Cart is empty" };
    }

    const productIds = [...new Set(items.map((i) => i.productId))];

    const products = await client.fetch(PRODUCTS_BY_IDS_QUERY, {
      ids: productIds,
    });

    if (!Array.isArray(products) || products.length === 0) {
      return { success: false, error: "Products unavailable" };
    }

    const validationErrors: string[] = [];
    const validatedItems: {
      product: (typeof products)[number];
      quantity: number;
    }[] = [];

    for (const item of items) {
      if (!item.productId || item.quantity <= 0) {
        validationErrors.push("Invalid cart item detected");
        continue;
      }

      const product = products.find(
        (p: { _id: string }) => p._id === item.productId
      );

      if (!product) {
        validationErrors.push(`"${item.name}" is no longer available`);
        continue;
      }

      const stock = product.stock ?? 0;

      if (stock <= 0) {
        validationErrors.push(`"${product.name}" is out of stock`);
        continue;
      }

      if (item.quantity > stock) {
        validationErrors.push(
          `Only ${stock} unit(s) of "${product.name}" available`
        );
        continue;
      }

      if ((product.price ?? 0) <= 0) {
        validationErrors.push(`Invalid price for "${product.name}"`);
        continue;
      }

      validatedItems.push({
        product,
        quantity: Math.floor(item.quantity),
      });
    }

    if (validationErrors.length > 0) {
      return { success: false, error: validationErrors.join(". ") };
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      validatedItems.map(({ product, quantity }) => ({
        price_data: {
          currency: "usd",
          unit_amount: Math.round((product.price ?? 0) * 100),
          product_data: {
            name: product.name || "Product",
            images: product.image?.asset?.url
              ? [product.image.asset.url]
              : undefined,
            metadata: {
              productId: product._id,
            },
          },
        },
        quantity,
      }));

    const userEmail =
      user.emailAddresses?.[0]?.emailAddress?.trim() || undefined;

    if (!userEmail) {
      return { success: false, error: "User email not available" };
    }

    const userName =
      `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || userEmail;

    const { stripeCustomerId, sanityCustomerId } =
      await getOrCreateStripeCustomer(userEmail, userName, userId);

    const metadata: Stripe.MetadataParam = {
      clerkUserId: userId,
      userEmail,
      sanityCustomerId,
      productIds: validatedItems.map((i) => i.product._id).join(","),
      quantities: validatedItems.map((i) => i.quantity).join(","),
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer: stripeCustomerId,
      line_items: lineItems,
      metadata,
      shipping_address_collection: {
        allowed_countries: [
          "US",
          "CA",
          "GB",
          "AU",
          "NZ",
          "DE",
          "FR",
          "IT",
          "ES",
          "NL",
          "BE",
          "CH",
          "SE",
          "NO",
          "DK",
          "FI",
          "IE",
          "JP",
          "SG",
          "HK",
          "KR",
          "AE",
          "SA",
          "IL",
          "IN",
          "ZA",
          "BR",
          "MX",
        ],
      },
      success_url: `${resolveBaseUrl()}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${resolveBaseUrl()}/checkout`,
    });

    if (!session.url) {
      return { success: false, error: "Checkout session creation failed" };
    }

    return { success: true, url: session.url };
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return { success: false, error: normalizeError(error) };
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    const { userId } = await auth();

    if (!userId || !sessionId) {
      return { success: false, error: "Unauthorized request" };
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer_details"],
    });

    if (session.metadata?.clerkUserId !== userId) {
      return { success: false, error: "Session not found" };
    }

    return {
      success: true,
      session: {
        id: session.id,
        customerEmail: session.customer_details?.email,
        customerName: session.customer_details?.name,
        amountTotal: session.amount_total,
        paymentStatus: session.payment_status,
        shippingAddress: session.customer_details?.address,
        lineItems:
          session.line_items?.data.map((item) => ({
            name: item.description,
            quantity: item.quantity,
            amount: item.amount_total,
          })) ?? [],
      },
    };
  } catch (error) {
    console.error("Retrieve Checkout Session Error:", error);
    return { success: false, error: normalizeError(error) };
  }
}
