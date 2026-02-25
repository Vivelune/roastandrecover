import { Metadata } from "next";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Roast&Recover",
  description: "Terms and conditions for using Roast&Recover.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                <FileText className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Please read these terms carefully before using our site.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <section>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Last updated: February 25, 2025
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              By accessing or purchasing from Roast&Recover, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              1. Account Terms
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>You must be 18 years or older to create an account</li>
              <li>You're responsible for maintaining account security</li>
              <li>Accurate information must be provided</li>
              <li>We reserve the right to suspend accounts for suspicious activity</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              2. Product Information
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We strive for accuracy but:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Product images may vary slightly from actual items</li>
              <li>Wood grain and natural materials have unique variations</li>
              <li>Colors may appear differently on various screens</li>
              <li>We reserve the right to correct errors and update information</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              3. Pricing & Payments
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>All prices in USD unless noted</li>
              <li>Taxes calculated at checkout based on location</li>
              <li>We accept major credit cards via Stripe</li>
              <li>Prices subject to change without notice</li>
              <li>International orders may incur customs fees</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              4. Shipping & Delivery
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Risk of loss passes to you upon delivery</li>
              <li>Delivery times are estimates, not guarantees</li>
              <li>We're not liable for carrier delays</li>
              <li>International customers are responsible for customs clearance</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              5. Intellectual Property
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              All content on this site including:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Product designs and photography</li>
              <li>Brand name "Roast&Recover"</li>
              <li>Logos and trademarks</li>
              <li>Website code and design</li>
            </ul>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              ...is our property and may not be used without permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              6. Limitation of Liability
            </h2>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Roast&Recover is not liable for indirect, incidental, or consequential damages 
                arising from product use. Our total liability is limited to the purchase price 
                of the product. Some jurisdictions do not allow these limitations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              7. Governing Law
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              These terms are governed by Oregon law without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              8. Changes to Terms
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We may update these terms. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
              Questions? Contact us at{' '}
              <a href="mailto:hello@vivelune" className="text-amber-600 hover:underline">
              hello@vivelune
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}