import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaxVue - Coming Soon | Digital Vision Correction",
  description: "Join the waitlist for MaxVue - Real prescription-strength vision correction for your phone. Ditch the reading glasses. Launching Q2 2025.",
  keywords: ["vision correction", "presbyopia", "reading glasses alternative", "digital vision", "smart glasses", "optical correction"],
  openGraph: {
    title: "MaxVue - Coming Soon | Digital Vision Correction",
    description: "Real prescription-strength vision correction for your phone. Join the waitlist for early access.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxVue - Coming Soon | Digital Vision Correction",
    description: "Real prescription-strength vision correction for your phone. Join the waitlist for early access.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
