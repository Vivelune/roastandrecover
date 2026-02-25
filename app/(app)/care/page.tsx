import { Metadata } from "next";
import { Droplets, Flame, Shield, Wind, Leaf, GlassWater } from "lucide-react";

export const metadata: Metadata = {
  title: "Care Instructions | Roast&Recover",
  description: "How to care for your ritual objects to ensure they last a lifetime.",
};

export default function CarePage() {
  const materials = [
    {
      name: "Sustainable Walnut",
      icon: Leaf,
      instructions: [
        "Wipe with a soft, dry cloth",
        "Avoid direct sunlight to prevent fading",
        "Treat with food-safe mineral oil every 3-6 months",
        "Keep away from standing water",
        "Not dishwasher safe"
      ],
      warning: "Never use harsh chemicals or abrasive cleaners"
    },
    {
      name: "Bonded Steel",
      icon: Shield,
      instructions: [
        "Hand wash with mild soap and warm water",
        "Dry immediately to prevent water spots",
        "Use soft cloths only - no steel wool",
        "Stainless steel polish can restore shine",
        "Avoid abrasive cleaners"
      ],
      warning: "Dishwasher safe but hand washing recommended"
    },
    {
      name: "Borosilicate Glass",
      icon: GlassWater,
      instructions: [
        "Hand wash with mild soap",
        "Rinse with warm water",
        "Air dry or dry with lint-free cloth",
        "Handle with care - glass is fragile",
        "Heat resistant but avoid thermal shock"
      ],
      warning: "Let cool completely before washing after hot use"
    },
    {
      name: "Artisan Ceramic",
      icon: Flame,
      instructions: [
        "Hand wash recommended",
        "Avoid sudden temperature changes",
        "Use soft sponges only",
        "Some pieces are dishwasher safe (check bottom)",
        "Microwave safe unless noted"
      ],
      warning: "Lead-free glaze - food safe"
    },
    {
      name: "Technical Canvas",
      icon: Wind,
      instructions: [
        "Spot clean with damp cloth",
        "Air dry away from heat",
        "Do not machine wash",
        "Avoid overstuffing to maintain shape",
        "Store in cool, dry place"
      ],
      warning: "Keep away from open flame"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Care Instructions
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Ritual objects designed to last. Here's how to keep them in their best form.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {materials.map((material) => (
            <div
              key={material.name}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-amber-50 p-3 dark:bg-amber-950/30">
                  <material.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="font-serif text-xl font-light text-zinc-900 dark:text-zinc-100">
                  {material.name}
                </h2>
              </div>

              <ul className="space-y-3">
                {material.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="mt-0.5 text-amber-600">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Note:</strong> {material.warning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* General Tips */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
            General Care Philosophy
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <Droplets className="mb-2 h-5 w-5 text-amber-600" />
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Less is More</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Gentle cleaning preserves natural beauty
              </p>
            </div>
            <div>
              <Shield className="mb-2 h-5 w-5 text-amber-600" />
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Regular Maintenance</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Small acts of care prevent larger issues
              </p>
            </div>
            <div>
              <Leaf className="mb-2 h-5 w-5 text-amber-600" />
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Natural Products</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Avoid harsh chemicals - they damage natural materials
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>
            These care instructions are guidelines. For specific questions about your piece, 
            contact us at{' '}
            <a href="mailto:hello@vivelune.com" className="text-amber-600 hover:underline">
              hello@vivelune.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}