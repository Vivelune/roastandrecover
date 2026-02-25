import { Metadata } from "next";
import { Truck, Package, Clock, Globe, Calendar, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping Information | Roast&Recover",
  description: "Learn about our shipping options, delivery times, and tracking for ritual objects and brewing equipment.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                <Truck className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Shipping Information
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We believe the journey to your ritual should be as intentional as the objects themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Shipping Options */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
            Shipping Options
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                <Package className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Ground Shipping
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Free on orders over $50 • $5.99 flat rate
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
                Delivery within 3-5 business days
              </p>
              <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Ships via USPS or UPS Ground
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Express Shipping
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                $15.99 flat rate
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
                Delivery within 1-2 business days
              </p>
              <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Ships via UPS 2nd Day Air
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:col-span-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                <Globe className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                International Shipping
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Calculated at checkout based on destination
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
                Delivery within 7-14 business days
              </p>
              <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Available to: UK, EU, Canada, Australia, Japan, Singapore
                </p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                  *International customers are responsible for any customs fees or import duties
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Times */}
        <section className="mb-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                  Processing Time
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Each piece is handled with care before shipment:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Orders placed by 12pm PST ship within 1-2 business days</li>
                  <li>Weekend orders ship the following Monday</li>
                  <li>Holiday processing may extend by 1-2 business days</li>
                  <li>You'll receive tracking information via email once your order ships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="mb-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              Thoughtful Packaging
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Your ritual objects arrive ready for ceremony:
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Shield className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Protective Wrapping
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    Each piece individually wrapped in acid-free tissue
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Package className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Sustainable Materials
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    100% recyclable boxes and paper tape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Last updated: February 2025 • Shipping times are estimates and not guaranteed. 
            Roast&Recover is not responsible for delays caused by carriers, customs, or unforeseen circumstances. 
            For questions about your shipment, please contact us at{' '}
            <a href="mailto:hello@vivelune.com" className="text-amber-600 hover:underline dark:text-amber-400">
              hello@vivelune.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}