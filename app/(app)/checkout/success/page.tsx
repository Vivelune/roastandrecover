import { redirect } from "next/navigation";
import { SuccessClient } from "./SuccessClient";
import { getCheckoutSession } from "@/lib/actions/checkout";

export const metadata = {
  title: 'Order Confirmed | Your Ritual Awaits',
  description: 'Thank you for choosing Roast&Recover. Your order confirmation and ritual preparation guide.',
  robots: {
    index: false,
    follow: false,
  },
};
interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    redirect("/");
  }

  const result = await getCheckoutSession(sessionId);

  if (!result.success || !result.session) {
    redirect("/");
  }

  return (
  <SuccessClient session={result.session}
   />
  
  )  
  
}