import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IQ Test – Free Online Test With Instant Results",
  description:
    "Take a free online IQ test with 20 reasoning questions, instant results, and clear explanations. No signup required. Start your test now.",
  keywords: [
    "IQ Test",
    "Free IQ Test",
    "Online IQ Test",
    "Free Online IQ Test",
    "IQ Test Free",
    "IQ Test Online",
    "Free IQ Test With Instant Results",
    "Free IQ Test With Free Results",
    "Test My IQ",
  ],
  authors: [{ name: "IQ Test Reasoning Team" }],
  openGraph: {
    title: "Free Online IQ Test – 20 Original Reasoning Questions",
    description:
      "Challenge your reasoning with 20 original questions covering numbers, logic, patterns, and spatial thinking. Get instant results and clear explanations—no signup needed.",
    type: "website",
    locale: "en_US",
    siteName: "IQ Test Assessment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online IQ Test – Instant Results & Explanations",
    description:
      "Challenge your reasoning across 4 cognitive domains with 20 original verified questions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FBFF] text-[#0F172A] font-sans selection:bg-[#4F46E5]/15 selection:text-[#4F46E5]">
        {children}
      </body>
    </html>
  );
}
