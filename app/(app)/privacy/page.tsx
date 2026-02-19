import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Roast&Recover",
  description: "Learn how Roast&Recover collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
            Privacy Policy
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
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Introduction
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                At Roast&Recover, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or make a purchase 
                from our store. Please read this privacy policy carefully. If you do not agree with the terms 
                of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Information We Collect
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                    <li>Register for an account</li>
                    <li>Make a purchase</li>
                    <li>Sign up for our newsletter</li>
                    <li>Contact our customer support</li>
                    <li>Use our AI shopping assistant</li>
                  </ul>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    This information may include your name, email address, shipping address, billing address, 
                    phone number, and payment information.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    Automatically Collected Information
                  </h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    When you visit our website, we automatically collect certain information about your device, 
                    including information about your web browser, IP address, time zone, and some of the cookies 
                    that are installed on your device.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                How We Use Your Information
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We use the information we collect to:
              </p>
              <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders</li>
                <li>Provide customer support</li>
                <li>Improve our website and shopping experience</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Third-Party Services
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We use the following third-party services to power our store:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Clerk</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We use Clerk for authentication. When you sign in with Google, Clerk collects your email 
                    address and profile information. See <a href="https://clerk.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Clerk's Privacy Policy</a>.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Stripe</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We use Stripe to process payments. Stripe collects your payment information and billing 
                    address. See <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Stripe's Privacy Policy</a>.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Sanity.io</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We use Sanity.io as our content management system. It stores product information and order 
                    data. See <a href="https://www.sanity.io/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Sanity's Privacy Policy</a>.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">AI Shopping Assistant</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Our AI shopping assistant uses Anthropic Claude to help you find products. Your conversations 
                    are processed securely and are not used to train AI models.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Data Security
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We implement a variety of security measures to maintain the safety of your personal information. 
                All sensitive information is encrypted via SSL technology. Payment information is processed 
                directly by Stripe and never stored on our servers.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Your Rights
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                To exercise these rights, please contact us at privacy@roastandrecover.com.
              </p>
            </section>

            {/* Contact Information */}
            <section className="rounded-lg bg-amber-50 p-6 dark:bg-amber-950/30">
              <h2 className="text-xl font-semibold text-amber-900 dark:text-amber-100">
                Contact Us
              </h2>
              <p className="mt-2 text-amber-800 dark:text-amber-200">
                If you have questions about this Privacy Policy, please contact us:
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
              href="/terms"
              className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}