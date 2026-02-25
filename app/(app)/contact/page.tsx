import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PolicyLinks } from "./PolicyLinks";
import { FAQSection } from "./FAQSection";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Support | Roast&Recover",
  description: "Get in touch with our team for questions about ritual objects, brewing equipment, orders, or care instructions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              We&apos;re here to help
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Whether you have questions about a product, need care instructions, 
              or just want to learn more about our ritual objects — reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Contact Info & Quick Links */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Quick Support Options */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="font-serif text-xl font-light text-zinc-900 dark:text-zinc-100">
                  Quick Support
                </h2>
                <div className="mt-4 space-y-4">
                  <a
                    href="mailto:support@roastrecover.com"
                    className="flex items-center gap-3 text-zinc-600 transition-colors hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                      <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Email us
                      </p>
                      <p className="text-sm">hello@vivelune.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-3 text-zinc-600 transition-colors hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                      <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Call us
                      </p>
                      <p className="text-sm">+86 156 7155 2076</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Response time
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Location (if you have one) */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="font-serif text-xl font-light text-zinc-900 dark:text-zinc-100">
                  Studio
                </h2>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      30 N Gould Ste St R
                      <br />
                      Sheridan, WY 82801
                      <br />
                      United States
                    </p>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="font-serif text-xl font-light text-zinc-900 dark:text-zinc-100">
                  Follow along
                </h2>
                <div className="mt-4 flex gap-4">
                  {["Instagram"].map((social) => (
                    <a
                      key={social}
                      href="https://instagram.com/roastandrecover"
                      className="text-sm text-zinc-600 underline-offset-2 hover:text-amber-600 hover:underline dark:text-zinc-400 dark:hover:text-amber-400"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form & FAQ */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Contact Form */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
                <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* FAQ Section */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
                <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6">
                  <FAQSection />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Links Section */}
        <div className="mt-16">
          <PolicyLinks />
        </div>
      </div>
    </div>
  );
}