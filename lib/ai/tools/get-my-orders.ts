import { z } from "zod";
import { sanityFetch } from "@/sanity/lib/live";
import { ORDERS_BY_USER_QUERY } from "@/lib/sanity/queries/orders";
import {
  ORDER_STATUS_VALUES,
  getOrderStatusEmoji,
} from "@/lib/constants/orderStatus";
import { formatPrice } from "@/lib/utils";
import type { ORDERS_BY_USER_QUERYResult } from "@/sanity.types";

// Schema for argument validation
export const getMyOrdersSchema = z.object({
  status: z
    .enum(["", ...ORDER_STATUS_VALUES])
    .optional()
    .default("")
    .describe("Filter orders by status (leave empty for all orders)"),
});

export type GetMyOrdersInput = z.infer<typeof getMyOrdersSchema>;

export interface OrderSummary {
  id: string;
  orderNumber: string | null;
  total: number | null;
  totalFormatted: string | null;
  status: string | null;
  statusDisplay: string;
  itemCount: number;
  itemNames: string[];
  itemImages: string[];
  createdAt: string | null;
  orderUrl: string;
}

export interface GetMyOrdersResult {
  found: boolean;
  message: string;
  orders: OrderSummary[];
  totalOrders: number;
  isAuthenticated: boolean;
  error?: string;
}

/**
 * Pure function to fetch orders, designed for Gemini Function Calling
 */
export async function getMyOrders(
  userId: string | null,
  args: GetMyOrdersInput
): Promise<GetMyOrdersResult> {
  if (!userId) {
    return {
      found: false,
      message: "You must be signed in to view orders.",
      orders: [],
      totalOrders: 0,
      isAuthenticated: false,
    };
  }

  const { status } = args;

  try {
    const { data: orders } = await sanityFetch({
      query: ORDERS_BY_USER_QUERY,
      params: { clerkUserId: userId },
    });

    let filteredOrders = orders as ORDERS_BY_USER_QUERYResult;
    
    if (status && status.length > 0) {
      filteredOrders = filteredOrders.filter((order) => 
        String(order.status) === String(status)
      );
    }

    if (filteredOrders.length === 0) {
      return {
        found: false,
        message: status 
          ? `No orders found with status "${status}".` 
          : "You haven't placed any orders yet.",
        orders: [],
        totalOrders: 0,
        isAuthenticated: true,
      };
    }

    const formattedOrders: OrderSummary[] = filteredOrders.map((order) => ({
      id: order._id,
      orderNumber: order.orderNumber,
      total: order.total,
      totalFormatted: order.total ? formatPrice(order.total) : null,
      status: order.status,
      statusDisplay: getOrderStatusEmoji(order.status),
      itemCount: order.itemCount ?? 0,
      itemNames: (order.itemNames ?? []).filter((n): n is string => n !== null),
      itemImages: (order.itemImages ?? []).filter((u): u is string => u !== null),
      createdAt: order.createdAt,
      orderUrl: `/orders/${order._id}`,
    }));

    return {
      found: true,
      message: `Successfully retrieved ${filteredOrders.length} orders.`,
      orders: formattedOrders,
      totalOrders: filteredOrders.length,
      isAuthenticated: true,
    };
  } catch (error) {
    console.error("[GetMyOrders Error]:", error);
    return {
      found: false,
      message: "An error occurred while fetching your orders.",
      orders: [],
      totalOrders: 0,
      isAuthenticated: true,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}