import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service | Roast&Recover",
  description: "Terms and conditions for using Roast&Recover's website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Header */}
      <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Last updated: February 19, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="space-y-8">
            {/* Agreement */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Agreement to Terms
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                By accessing or using the Roast&Recover website, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using or accessing this site.
              </p>
            </section>

            {/* Account Terms */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Account Terms
              </h2>
              <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                <li>You must be at least 18 years old to create an account</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must provide accurate and complete information</li>
                <li>We reserve the right to suspend or terminate accounts for violations</li>
              </ul>
            </section>

            {/* Products and Orders */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Products and Orders
              </h2>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Pricing and Availability</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    All prices are in GBP (£) and include applicable taxes. We strive to display accurate 
                    pricing and stock information, but errors may occur. We reserve the right to correct any 
                    errors and to change or update information at any time without prior notice.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Order Acceptance</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Your receipt of an order confirmation does not signify our acceptance of your order. 
                    We reserve the right to accept or decline your order for any reason at any time, including 
                    product availability, errors in pricing, or suspicion of fraud.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Cancellations</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    You may cancel your order within 1 hour of placing it, provided it has not yet been processed 
                    for shipping. Once an order has been shipped, it cannot be cancelled.
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping and Returns */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Shipping and Returns
              </h2>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Shipping Policy</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    We ship to select countries worldwide. Shipping times and costs vary based on location and 
                    shipping method. Risk of loss and title for items purchased pass to you upon delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Return Policy</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    We accept returns within 30 days of delivery. Items must be unused and in original packaging. 
                    Return shipping costs are the responsibility of the customer unless the item is defective.
                  </p>
                </div>
              </div>
            </section>

            {/* AI Shopping Assistant */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                AI Shopping Assistant
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Our AI shopping assistant is provided to help you find products and answer questions. By using 
                this feature, you agree that:
              </p>
              <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                <li>The AI may make mistakes or provide inaccurate information</li>
                <li>You should verify important information before making decisions</li>
                <li>We are not liable for any errors in AI-generated content</li>
                <li>Conversations may be reviewed to improve the service</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Intellectual Property
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                The content on our website, including product images, descriptions, logos, and trademarks, is 
                owned by or licensed to Roast&Recover and is protected by intellectual property laws. You may 
                not use, reproduce, or distribute our content without written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
              <h2 className="text-xl font-semibold text-red-800 dark:text-red-200">
                Limitation of Liability
              </h2>
              <p className="mt-2 text-red-700 dark:text-red-300">
                To the fullest extent permitted by law, Roast&Recover shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible 
                losses, resulting from:
              </p>
              <ul className="mt-4 list-disc pl-5 text-red-700 dark:text-red-300">
                <li>Your use or inability to use our services</li>
                <li>Any conduct or content of any third party</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Statements or conduct of any third party</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="rounded-lg bg-amber-50 p-6 dark:bg-amber-950/30">
              <h2 className="text-xl font-semibold text-amber-900 dark:text-amber-100">
                Contact Us
              </h2>
              <p className="mt-2 text-amber-800 dark:text-amber-200">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="mt-4 space-y-2 text-amber-800 dark:text-amber-200">
              <li>Email: ritual@roastandrecover.com</li>
              <li>Address: Roast and Recover , 30 Gould Ste St R, Sheridan, WY, U.S</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Roast&Recover. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}