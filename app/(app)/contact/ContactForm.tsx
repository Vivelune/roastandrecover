"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const topics = [
  { value: "general", label: "General Inquiry" },
  { value: "order", label: "Order Support" },
  { value: "product", label: "Product Question" },
  { value: "care", label: "Care Instructions" },
  { value: "wholesale", label: "Wholesale / Trade" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-amber-50 p-8 text-center dark:bg-amber-950/30">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
          <Send className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 className="mt-4 font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Thank you for reaching out. We&apos;ll respond within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-2 block w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-amber-600 dark:focus:ring-amber-600"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-2 block w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-amber-600 dark:focus:ring-amber-600"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          What can we help you with?
        </label>
        <select
          id="topic"
          required
          className="mt-2 block w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-amber-600 dark:focus:ring-amber-600"
        >
          <option value="">Select a topic</option>
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="orderNumber"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Order number (optional)
        </label>
        <input
          type="text"
          id="orderNumber"
          className="mt-2 block w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-amber-600 dark:focus:ring-amber-600"
          placeholder="ORD-2024-..."
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="mt-2 block w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 transition-colors focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-amber-600 dark:focus:ring-amber-600"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-zinc-400"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-zinc-900" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}