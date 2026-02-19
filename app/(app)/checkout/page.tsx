import { CheckoutClient } from "./CheckoutClient";

export const metadata = {
  title: 'Secure Checkout | Roast&Recover',
  description: 'Complete your purchase securely. Multiple payment options available.',
  robots: {
    index: false, // Don't index checkout pages
    follow: false,
  },
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}