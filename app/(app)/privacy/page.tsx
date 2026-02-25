import { Metadata } from "next";
import { Shield, Lock, Eye, Database, Mail, Cookie, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Roast&Recover",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                <Shield className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Your privacy is as important as your ritual practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Last updated: February 25, 2025
          </p>

          {/* Introduction */}
          <section className="mt-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              At Roast&Recover, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              Information We Collect
            </h2>
            
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <Database className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    When you make a purchase or create an account, we collect:
                  </p>
                  <ul className="mt-2 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Payment information (processed securely by Stripe)</li>
                    <li>Order history and preferences</li>
                    <li>Account credentials (if you create an account)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Cookie className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    Automated Information
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    When you browse our site, we automatically collect:
                  </p>
                  <ul className="mt-2 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral source</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              How We Use Your Information
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Process your orders and payments",
                "Communicate about your order",
                "Send marketing emails (with consent)",
                "Improve our website and products",
                "Prevent fraud",
                "Comply with legal obligations"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              Information Sharing
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We never sell your personal information. We only share data with trusted partners who help us operate:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  name: "Stripe",
                  purpose: "Payment processing",
                  privacy: "stripe.com/privacy"
                },
                {
                  name: "Sanity.io",
                  purpose: "Content management",
                  privacy: "sanity.io/privacy"
                },
                {
                  name: "Clerk",
                  purpose: "Authentication",
                  privacy: "clerk.com/privacy"
                },
                {
                  name: "ShipStation",
                  purpose: "Order fulfillment",
                  privacy: "shipstation.com/privacy"
                }
              ].map((partner) => (
                <div key={partner.name} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{partner.name}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {partner.purpose} • <a href={`https://${partner.privacy}`} target="_blank" rel="noopener" className="text-amber-600 hover:underline">Privacy Policy</a>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Your Rights */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              Your Privacy Rights
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
              <li>Opt out of marketing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              To exercise these rights, email us at{' '}
              <a href="mailto:hello@vivelune" className="text-amber-600 hover:underline">
              hello@vivelune
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              Cookies
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We use essential cookies for cart functionality and authentication. 
              Optional analytics cookies help us improve your experience. You can control cookies in your browser settings.
            </p>
          </section>

          {/* Security */}
          <section className="mt-12">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-amber-600" />
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Security Measures
                </h3>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                We implement industry-standard security measures including:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>256-bit SSL encryption</li>
                <li>PCI-DSS compliant payment processing</li>
                <li>Regular security audits</li>
                <li>Limited employee access to data</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              Contact Us
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              For privacy-related questions:
            </p>
            <div className="mt-4 rounded-lg bg-amber-50 p-6 dark:bg-amber-950/30">
              <p className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                <Mail className="h-4 w-4" />
                <a href="hello@vivelune.com" className="hover:underline">
                  hello@vivelune.com
                </a>
              </p>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                Roast&Recover
                <br />
                30 N Gould St
                <br />
                Sheridan, WY 82801
              </p>
            </div>
          </section>

          {/* Legal Notice */}
          <section className="mt-12 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
            <p>
              This privacy policy is for informational purposes and does not constitute legal advice. 
              We comply with applicable data protection laws including GDPR, CCPA, and others where required.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}