import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Satish Kumar Nagaraj in London about data analytics, operations, sports performance or opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="detail-page contact-detail section-wrap" id="main-content">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to portfolio</Link>
      <header className="detail-hero">
      <p className="eyebrow"><span>CONTACT / 01</span> DATA · OPERATIONS · PERFORMANCE</p>
      <h1>Let&apos;s connect<br /><em>and create something meaningful.</em></h1>
        <p>Whether it&apos;s data, technology, collaboration or a new opportunity, I&apos;m open to a thoughtful conversation.</p>
      </header>
      <div className="contact-detail-grid">
        <section className="contact-information"><p className="eyebrow">BASED IN</p><p className="contact-location"><MapPin size={17} />{profile.location}</p>{profile.email && <p className="contact-location"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>}{profile.linkedIn && <p className="contact-location"><a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn: Satish Kumar Nagaraj</a></p>}{profile.github && <p className="contact-location"><a href={profile.github} target="_blank" rel="noreferrer">GitHub: satishkumarnagaraj2002</a></p>}<div className="contact-availability"><span className="availability"><i /> Open to meaningful opportunities</span><p>Email is the best way to get in touch, and LinkedIn / GitHub are available for a quick profile review.</p></div>{profile.email && <a className="button button-lime" href={`mailto:${profile.email}`}>Email Satish <ArrowUpRight size={15} /></a>}<Link className="text-link" href="/#about">Get to know my work <ArrowUpRight size={15} /></Link></section>
        <section className="contact-form-wrap"><h2>Start a conversation</h2><p className="muted">The form sends through the configured email service. If it is not set up, no message will be sent.</p><ContactForm /></section>
      </div>
    </main>
  );
}