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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "Roast&Recover - Artisan Coffee & Tea",
    template: "%s | Roast&Recover"
  },
  description: "Discover premium coffee beans, loose leaf teas, and artisanal brewing equipment. From pour-over to espresso, craft your perfect cup with Roast&Recover.",
  keywords: ["coffee", "tea", "specialty coffee", "loose leaf tea", "brewing equipment", "pour over", "espresso", "french press"],
  authors: [{ name: "Roast&Recover" }],
  creator: "Roast&Recover",
  publisher: "Roast&Recover",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Roast&Recover - Artisan Coffee & Tea",
    description: "Discover premium coffee beans, loose leaf teas, and artisanal brewing equipment.",
    url: "/",
    siteName: "Roast&Recover",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roast&Recover - Artisan Coffee & Tea",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roast&Recover - Artisan Coffee & Tea",
    description: "Discover premium coffee beans, loose leaf teas, and artisanal brewing equipment.",
    images: ["/og-image.jpg"],
    creator: "@roastrecover",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
