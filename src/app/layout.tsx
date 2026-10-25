import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";
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
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  title: {
    default: "Satish Kumar Nagaraj | Data Science, Analytics & Karate",
    template: "%s | Satish Kumar Nagaraj",
  },
  description:
    "Explore the portfolio of Satish Kumar Nagaraj, an MSc Data Science graduate with Distinction, operations and performance analytics professional, and internationally recognised karate athlete.",
  keywords: [
    "Satish Kumar Nagaraj",
    "Satish Kumar Nagaraj Data Science",
    "Data Analytics London",
    "Operations Analytics",
    "Sports Performance Analytics",
    "Shito-Ryu Karate",
  ],
  openGraph: {
    title: "Satish Kumar Nagaraj | Data Science, Analytics & Karate",
    description: "MSc Data Science with Distinction, operations and performance analytics, and a 15+ year Shito-Ryu karate journey.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satish Kumar Nagaraj | Data Science, Analytics & Karate",
    description: "Data science, operations and performance analytics — grounded in discipline.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
