import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Satish Kumar N in London about data, technology, collaboration or opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="detail-page contact-detail section-wrap" id="main-content">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to portfolio</Link>
      <header className="detail-hero">
        <p className="eyebrow"><span>CONTACT / 01</span> DATA · TECHNOLOGY · COLLABORATION</p>
        <h1>Let&apos;s build<br /><em>something meaningful.</em></h1>
        <p>Whether it&apos;s data, technology, collaboration or a new opportunity, I&apos;m open to a thoughtful conversation.</p>
      </header>
      <div className="contact-detail-grid">
        <section className="contact-information"><p className="eyebrow">BASED IN</p><p className="contact-location"><MapPin size={17} />{profile.location}</p><div className="contact-availability"><span className="availability"><i /> Open to meaningful opportunities</span><p>Email, LinkedIn and GitHub details have not yet been supplied.</p></div><Link className="text-link" href="/#about">Get to know my work <ArrowUpRight size={15} /></Link></section>
        <section className="contact-form-wrap"><h2>Start a conversation</h2><p className="muted">The form sends through the configured email service. If it is not set up, no message will be sent.</p><ContactForm /></section>
      </div>
    </main>
  );
}