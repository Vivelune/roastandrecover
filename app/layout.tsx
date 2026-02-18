import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.roastrecover.com'; // Use your actual domain
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    // The default template for all pages
    template: '%s | Roast & Recover',
    default: 'Roast & Recover - Modern Rituals for Coffee, Tea & Mindful Living',
  },
  description: 'Discover premium accessories for coffee, tea, and contemplative living. Transform your daily routine into a ritual with our curated collections of minimalist designs.',
  keywords: ['coffee accessories', 'tea ceremony set', 'mindful living', 'premium gifts', 'minimalist decor', 'travel tea set', 'titanium flask', 'moka pot gift'],
  authors: [{ name: 'Roast & Recover' }],
  creator: 'Roast & Recover',
  publisher: 'Roast & Recover',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Roast & Recover',
    description: 'Modern rituals for coffee, tea & mindful living.',
    url: baseUrl,
    siteName: 'Roast & Recover',
    images: [
      {
        url: '/Roastandrecovercard.png', // Create a killer 1200x630 social card
        width: 1200,
        height: 630,
        alt: 'Roast & Recover - Elevate Your Everyday',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roast & Recover',
    description: 'Modern rituals for coffee, tea & mindful living.',
    images: ['/ROAST&RECOVERBrandLogo.png'],
    creator: '@roastandrecover', // Add if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/RRFavicon.png' },
      { url: '/RRFavicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/RRFavicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/RRFavicon.png' }, // Create an Apple touch icon
    ],
  },
  manifest: '/site.webmanifest', // We'll create this
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    
  );
}
