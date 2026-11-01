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
    default: "Satish Kumar N | Data, Discipline & Innovation",
    template: "%s | Satish Kumar N",
  },
  description:
    "The portfolio of Satish Kumar N, a London-based data science graduate, operations professional, Shito-Ryu karate athlete and web developer.",
  keywords: [
    "Satish Kumar N",
    "Satish Kumar Data Science",
    "Satish Kumar London",
    "Satish Kumar Karate",
    "Satish Kumar Web Developer",
    "Satish Kumar Data Analyst",
  ],
  openGraph: {
    title: "Satish Kumar N | Data, Discipline & Innovation",
    description: "A portfolio spanning data science, operations, karate and digital work.",
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
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
