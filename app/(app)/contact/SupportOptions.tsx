import { MessageCircle, Clock, Truck, RefreshCw } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    availability: "Mon-Fri, 9am-5pm PST",
    action: "Start chat",
    href: "#"
  },
  {
    icon: Clock,
    title: "Order Status",
    description: "Track your order",
    availability: "24/7 self-service",
    action: "Track order",
    href: "/orders"
  },
  {
    icon: Truck,
    title: "Shipping Info",
    description: "Delivery updates",
    availability: "Real-time tracking",
    action: "Learn more",
    href: "/shipping"
  },
  {
    icon: RefreshCw,
    title: "Returns",
    description: "Start a return",
    availability: "30-day policy",
    action: "Return portal",
    href: "/returns"
  }
];

export function SupportOptions() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {supportOptions.map((option) => (
        <a
          key={option.title}
          href={option.href}
          className="group rounded-lg border border-zinc-200 bg-white p-4 transition-all hover:border-amber-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-600"
        >
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-amber-50 p-2 dark:bg-amber-950/30">
              <option.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                {option.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {option.description}
              </p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                {option.availability}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-amber-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-amber-400">
                {option.action} →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}