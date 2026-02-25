import { Metadata } from "next";
import { RefreshCw, CheckCircle, XCircle, AlertCircle, Calendar, Package } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Roast&Recover",
  description: "Our 30-day return policy for ritual objects and brewing equipment.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                <RefreshCw className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Returns & Exchanges
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We hope your ritual objects bring you peace. If not, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 30-Day Policy */}
        <section className="mb-12">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                  30-Day Return Policy
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  We accept returns within 30 days of delivery for items in their original condition.
                </p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Please note:</strong> Return shipping is free for domestic orders. 
                    International customers are responsible for return shipping costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Return Requirements */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
            Return Requirements
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/20">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
                Acceptable Returns
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  Unused items in original packaging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  Within 30 days of delivery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  All original materials included
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  Defective or damaged items
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
              <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
                Non-Returnable Items
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Used or washed items
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Items without original packaging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Final sale or clearance items
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  Gift cards
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
            How to Return
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                step: 1,
                title: "Initiate Return",
                description: "Email us at hello@vivelune.com with your order number and reason for return."
              },
              {
                step: 2,
                title: "Receive Label",
                description: "We'll email you a prepaid return shipping label within 24 hours."
              },
              {
                step: 3,
                title: "Pack Securely",
                description: "Pack items in original packaging with all included materials."
              },
              {
                step: 4,
                title: "Drop Off",
                description: "Take the package to any USPS or UPS location."
              },
              {
                step: 5,
                title: "Refund Processed",
                description: "Refunds issued within 5-7 business days of receipt."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-medium text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exchanges */}
        <section className="mb-12">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                <RefreshCw className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                  Exchanges
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Need a different size or color? We're happy to exchange items within 30 days.
                </p>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  Follow the same return process and note "EXCHANGE" in your email. 
                  We'll ship your new item as soon as we receive the original.
                </p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <AlertCircle className="mr-2 inline h-4 w-4" />
                    Exchange shipping is free for domestic orders. International customers pay return shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Last updated: February 2025 • This return policy does not affect your statutory rights. 
            For consumer protection information, please visit the{' '}
            <a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline dark:text-amber-400">
              FTC website
            </a>
            . For EU customers, you have the right to withdraw within 14 days under the Consumer Rights Directive.
          </p>
        </section>
      </div>
    </div>
  );
}