"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sparkles, ArrowRight, Mail, Sunrise, Wind, Leaf, Compass } from "lucide-react";

export default function VivelunePage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-[#FCFBFA] text-[#2C2C2C] selection:bg-amber-100 dark:bg-zinc-950 dark:text-zinc-50">
      
      

      {/* Hero: The Atmospheric Reveal */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/50 blur-[120px] dark:bg-amber-900/20" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <Moon className="mx-auto mb-12 h-8 w-8 stroke-[1px] text-amber-700/50" />
            <h1 className="font-serif text-[12vw] font-light leading-none tracking-tighter md:text-[8vw]">
              Vivélune
            </h1>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">
              The Art of the Ritual
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
           <div className="h-12 w-[1px] bg-gradient-to-b from-amber-700/50 to-transparent" />
        </div>
      </section>

      {/* Philosophy: The Editorial Layout */}
      <section id="philosophy" className="px-6 py-40 md:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-amber-700">
                <Sparkles className="h-3 w-3" /> Collective Ethos
              </span>
              <h2 className="mt-8 font-serif text-5xl font-light leading-[1.1] md:text-7xl">
                Objects are the <span className="italic">anchors</span> of our days.
              </h2>
              <p className="mt-12 max-w-xl text-lg leading-relaxed text-zinc-500 font-light">
                Vivélune is a parent collective curating a sanctuary of brands. 
                We believe that by refining the tools of your daily life—your morning coffee, 
                your evening pause—you refine your experience of being alive.
              </p>
            </div>
            
            <div className="lg:col-span-5 lg:pt-32">
              <div className="space-y-16">
                {[
                  { icon: Sunrise, title: "Ritual First", desc: "Every product begins with a moment of pause." },
                  { icon: Leaf, title: "Naturality", desc: "Materials that breathe: walnut, stone, and clay." }
                ].map((item) => (
                  <div key={item.title} className="group border-l border-zinc-200 pl-8 transition-colors hover:border-amber-700">
                    <item.icon className="mb-4 h-5 w-5 text-zinc-400 group-hover:text-amber-700 transition-colors" />
                    <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="mt-2 text-sm font-light text-zinc-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship: Roast & Recover */}
      <section id="brands" className="bg-[#F5F3F0] py-40 dark:bg-zinc-900/20">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="relative overflow-hidden bg-white p-1 dark:bg-zinc-900">
             <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 md:aspect-auto">
                   {/* Replace with actual high-end brand photo */}
                   <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale transition-transform duration-1000 hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center px-8 py-20 md:px-20">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-700">First Expression</span>
                   <h3 className="mt-4 font-serif text-5xl font-light">Roast&Recover</h3>
                   <p className="mt-8 text-lg font-light leading-relaxed text-zinc-500">
                     A study in coffee ceremony. Sustainable walnut systems meets hand-thrown ceramics, 
                     crafted for the slow-pour enthusiast.
                   </p>
                   <Link href="/" className="mt-12 flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition hover:gap-6 hover:text-amber-700">
                     Explore Ritual <ArrowRight className="h-4 w-4" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer: The Minimal Sign-off */}
      <footer id="contact" className="px-6 py-40">
        <div className="mx-auto max-w-screen-xl border-t border-zinc-100 pt-20 dark:border-zinc-800">
           <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-4xl font-light italic">Vivez la lune.</h2>
              <p className="mt-6 max-w-xs text-sm font-light text-zinc-400">
                Join our collective of makers and ritual seekers.
              </p>
              <div className="mt-12 flex flex-col items-center gap-8">
                 <a href="mailto:hello@vivelune.com" className="group relative text-2xl font-light">
                    hello@vivelune.com
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber-700 transition-all group-hover:w-full" />
                 </a>
                 <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <Link href="https://instagram.com/@viveluneofficial">Instagram</Link>
                 </div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}