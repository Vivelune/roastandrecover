import { Metadata } from "next";
import Link from "next/link";
import { 
  Coffee, 
  Leaf, 
  Clock, 
  Heart, 
  Sparkles, 
  Sunrise, 
  Moon,
  ArrowRight,
  Feather,
  Wind
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Roast&Recover",
  description: "Roast&Recover is a ritual-based brand dedicated to the art of intentional brewing. We craft objects for morning ceremonies and quiet moments.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-100 bg-linear-to-br from-amber-50 to-white dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-800/10" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-100/20 blur-3xl dark:bg-amber-900/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="rounded-2xl bg-amber-100 p-4 dark:bg-amber-900/30">
                <Coffee className="h-12 w-12 text-amber-700 dark:text-amber-300" />
              </div>
            </div>
            
            <h1 className="font-serif text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Roast&Recover
            </h1>
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
              Objects for the morning ritual.
            </p>
            
            {/* Tagline */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-6 py-3 text-amber-800 backdrop-blur-sm dark:bg-amber-900/30 dark:text-amber-200">
              <Sunrise className="h-4 w-4" />
              <span className="text-sm font-medium">First light. First pour. First breath.</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="border-b border-zinc-100 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Column - The Story */}
            <div>
              <div className="sticky top-24">
                <div className="flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                  <Feather className="h-4 w-4" />
                  <span>Our Story</span>
                </div>
                <h2 className="mt-6 font-serif text-4xl font-light text-zinc-900 dark:text-zinc-100">
                  Born from the <br />morning calm.
                </h2>
              </div>
            </div>

            {/* Right Column - Narrative */}
            <div className="space-y-8 text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                Roast&Recover began in the quiet hours before dawn — when the world is still, 
                the light is soft, and the first pour of coffee becomes something more than 
                just a drink. It becomes a ritual.
              </p>
              <p>
                Our founder, a lifelong ceremony-seeker, noticed that the objects used in 
                these morning moments were often clinical, rushed, and devoid of soul. 
                Plastic drippers. Mass-produced kettles. Disposable filters. Tools that 
                encouraged speed over presence.
              </p>
              <p>
                So we set out to create something different. Objects that demand nothing 
                but reward everything. Pieces that slow you down — intentionally.
              </p>
              <div className="rounded-2xl border-l-4 border-amber-300 bg-amber-50/50 p-6 italic dark:border-amber-700 dark:bg-amber-950/20">
                "The ritual isn't about the coffee. It's about the pause. The moment 
                between waking and world. Roast&Recover exists to honor that pause."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
              Designed for presence
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Four principles guide everything we make.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock,
                title: "Slow by design",
                description: "Objects that can't be rushed. Every piece encourages a more deliberate pace."
              },
              {
                icon: Leaf,
                title: "Natural materials",
                description: "Walnut, steel, ceramic, glass — materials that age gracefully and feel honest."
              },
              {
                icon: Heart,
                title: "Made to last",
                description: "Not disposable. Not trendy. Built for decades of morning rituals."
              },
              {
                icon: Wind,
                title: "Quiet presence",
                description: "Objects that don't shout. They sit quietly, waiting for their moment."
              }
            ].map((principle) => (
              <div key={principle.title} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <principle.icon className="h-8 w-8 text-amber-700 dark:text-amber-300" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-light text-zinc-900 dark:text-zinc-100">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ritual Section */}
      <section className="border-b border-zinc-100 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left Column - Ritual Description */}
            <div>
              <h2 className="font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                The Roast&Recover ritual
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Grind",
                    description: "Whole beans, ground just before brewing. The aroma fills the room."
                  },
                  {
                    step: "02",
                    title: "Bloom",
                    description: "A small pour, a gentle swell. The coffee breathes for the first time."
                  },
                  {
                    step: "03",
                    title: "Pour",
                    description: "Slow, circular, meditative. Water meets grounds in spirals."
                  },
                  {
                    step: "04",
                    title: "Sip",
                    description: "The first taste. The day begins. You've arrived."
                  }
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="text-2xl font-light text-amber-300 dark:text-amber-700">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{step.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Highlight */}
            <div className="rounded-3xl bg-linear-to-br from-amber-50 to-amber-100 p-8 dark:from-amber-950/30 dark:to-amber-900/20 lg:p-12">
              <h3 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                The Travel Brew Kit
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Our signature expression of the morning ritual. Compact enough for travel, 
                refined enough for daily ceremony.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/80 p-4 text-center backdrop-blur-sm dark:bg-zinc-800/80">
                  <p className="text-2xl font-light text-amber-600 dark:text-amber-400">300ml</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">Perfect pour</p>
                </div>
                <div className="rounded-xl bg-white/80 p-4 text-center backdrop-blur-sm dark:bg-zinc-800/80">
                  <p className="text-2xl font-light text-amber-600 dark:text-amber-400">4 parts</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">Complete ritual</p>
                </div>
              </div>
              <Link
                href="/products/travel-brew-kit-obsidian"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Experience the ritual
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
              Honest materials
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We work with materials that have soul.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sustainable Walnut",
                description: "Responsibly sourced North American black walnut. Each piece has unique grain.",
                color: "bg-amber-800"
              },
              {
                name: "Bonded Steel",
                description: "Powder-coated steel that withstands daily use and develops character over time.",
                color: "bg-zinc-500"
              },
              {
                name: "Borosilicate Glass",
                description: "Heat-resistant glass that reveals the beauty of the brew.",
                color: "bg-blue-200"
              },
              {
                name: "Artisan Ceramic",
                description: "Hand-finished ceramic pieces from small-batch potters.",
                color: "bg-amber-200"
              },
              {
                name: "Technical Canvas",
                description: "Waxed canvas that ages beautifully, used for our travel cases.",
                color: "bg-amber-700"
              },
              {
                name: "Italian Leather",
                description: "Full-grain leather accents that patina with use.",
                color: "bg-amber-600"
              }
            ].map((material) => (
              <div key={material.name} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900">
                <div className={`mb-4 h-2 w-12 rounded-full ${material.color}`} />
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{material.name}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="border-b border-zinc-100 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
              Made by hand, in small batches
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We don't mass-produce. Each piece is crafted with attention by skilled hands.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-light text-amber-500">15+</div>
              <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">Years of craft</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">Combined artisan experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-amber-500">100%</div>
              <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">Hand-finished</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">Every piece touched by human hands</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-amber-500">Small</div>
              <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">Batch production</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">Never rushed, never mass-produced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company Note */}
      <section className="bg-white py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
            <Moon className="mx-auto h-8 w-8 text-amber-400" />
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Roast&Recover is a brand of{' '}
              <Link href="/vivelune" className="font-medium text-amber-600 hover:underline dark:text-amber-400">
                Vivélune
              </Link>
              , a collective dedicated to ritual-based living.
            </p>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
              Parent company contact: <a href="mailto:hello@vivelune.com" className="hover:text-amber-600">hello@vivelune.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}