import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
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
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#F8FBFF] text-[#07152F] selection:bg-[#2453FF]/15 selection:text-[#2453FF]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
