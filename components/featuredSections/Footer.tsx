import Link from "next/link";
import { Mail, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
            <h3 className="font-serif text-lg font-light text-zinc-900 dark:text-zinc-100">
              Roast&Recover
            </h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Ritual objects for intentional living.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/@roastandrecover" className="text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400">
                <Instagram className="h-5 w-5" />
              </a>
             
            </div>
            </div>

            <div>
            <h3 className="font-serif text-lg font-light text-zinc-900 dark:text-zinc-100">
              <Link href="/vivelune" className="hover:text-amber-600 dark:hover:text-amber-400">
                Vivélune
              </Link>
               </h3>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                A collective of ritual-based brands.
              </p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                Parent company of <Link href="/" className="text-amber-600 hover:underline">Roast&Recover</Link>
              </p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Shop</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/?category=coffee-ritual`} className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Coffee Ritual
                </Link>
              </li>
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/?category=tea-ceremony`} className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Tea Ceremony
                </Link>
              </li>
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/?category=ritual-objects`}  className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Ritual Objects
                </Link>
              </li>
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/?category=gifting-editions`}  className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Gifting Editions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Support</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Warranty
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
                  Terms of Service
                </Link>
              </li>
             
            </ul>
            
            {/* Newsletter Signup */}
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Roast&Recover. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-amber-600 dark:hover:text-amber-400">Privacy</Link>
            {' • '}
            <Link href="/terms" className="hover:text-amber-600 dark:hover:text-amber-400">Terms</Link>
            {' • '}
            <Link href="/shipping" className="hover:text-amber-600 dark:hover:text-amber-400">Shipping</Link>
            {' • '}
            <Link href="/returns" className="hover:text-amber-600 dark:hover:text-amber-400">Returns</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}