import { Metadata } from "next";
import { Shield, CheckCircle, AlertCircle, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Warranty | Roast&Recover",
  description: "Our craftsmanship guarantee for ritual objects.",
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Craftsmanship Warranty
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We stand behind every piece we create.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Coverage */}
        <section className="mb-12">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
              One-Year Warranty
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              All Roast&Recover products are warranted against manufacturing defects for one year from the date of purchase.
            </p>
            
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Covered</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Manufacturing defects</li>
                  <li>• Material flaws</li>
                  <li>• Workmanship issues</li>
                  <li>• Structural integrity</li>
                  <li>• Hardware failure</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Not Covered</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Normal wear and tear</li>
                  <li>• Accidental damage</li>
                  <li>• Improper care or cleaning</li>
                  <li>• Modifications or repairs by others</li>
                  <li>• Natural wood variations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
            Warranty Process
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                step: 1,
                title: "Contact Us",
                description: "Email hello@vivelune.com with your order number and photos of the issue"
              },
              {
                step: 2,
                title: "Evaluation",
                description: "We'll review within 2-3 business days"
              },
              {
                step: 3,
                title: "Resolution",
                description: "Approved claims result in repair, replacement, or store credit"
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

        {/* Limitations */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-950/30">
          <h2 className="font-serif text-2xl font-light text-amber-900 dark:text-amber-100">
            Limitations
          </h2>
          <p className="mt-4 text-amber-800 dark:text-amber-200">
            This warranty is non-transferable and applies only to the original purchaser. 
            We reserve the right to determine whether a defect is covered. In some jurisdictions, 
            consumer rights may provide additional protections beyond this warranty.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>
            Warranty claims: <a href="mailto:hello@vivelune.com" className="text-amber-600 hover:underline">hello@vivelune.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}