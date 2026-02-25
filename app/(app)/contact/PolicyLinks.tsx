import Link from "next/link";

const policies = [
  {
    title: "Shipping Information",
    description: "Delivery times, rates, and tracking",
    href: "/shipping"
  },
  {
    title: "Returns & Exchanges",
    description: "30-day return policy and process",
    href: "/returns"
  },
  {
    title: "Care Instructions",
    description: "How to care for your ritual objects",
    href: "/care"
  },
  {
    title: "Warranty",
    description: "Our craftsmanship guarantee",
    href: "/warranty"
  },
  {
    title: "Privacy Policy",
    description: "How we handle your data",
    href: "/privacy"
  },
  {
    title: "Terms of Service",
    description: "Terms and conditions",
    href: "/terms"
  }
];

export function PolicyLinks() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
      <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
        Policies & Information
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map((policy) => (
          <Link
            key={policy.title}
            href={policy.href}
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-600"
          >
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              {policy.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {policy.description}
            </p>
            <span className="mt-4 inline-block text-sm text-amber-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-amber-400">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}