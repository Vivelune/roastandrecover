"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is your shipping policy?",
    answer: "We offer free ground shipping on all orders over $50 within the contiguous US. Orders typically ship within 1-2 business days and arrive within 3-5 business days. International shipping is available for select countries at calculated rates."
  },
  {
    question: "How do I care for my walnut objects?",
    answer: "Our walnut pieces are finished with natural oils. Wipe clean with a soft, dry cloth. Avoid direct sunlight and excessive moisture. Periodically treat with food-safe mineral oil to maintain the wood's natural luster."
  },
  {
    question: "What's your return policy?",
    answer: "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Return shipping is free for domestic orders. Contact us to initiate a return."
  },
  {
    question: "How do I clean my brewing equipment?",
    answer: "Rinse immediately after use with warm water. For deeper cleaning, use a mixture of white vinegar and water (1:3 ratio). Never use soap on ceramic or wood components. Air dry completely before storing."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! All orders can be gift wrapped for an additional $5. Select the gift wrap option at checkout and add a personalized message. Our packaging is plastic-free and recyclable."
  },
  {
    question: "Are your products food-safe?",
    answer: "Yes, all our ceramic, glass, and steel products are food-safe and lead-free. Our wood pieces are finished with food-safe mineral oil. Never use harsh chemicals on any of our ritual objects."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4 first:pt-0 last:pb-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-zinc-400 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          
          <div
            className={cn(
              "mt-2 overflow-hidden transition-all duration-200",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}