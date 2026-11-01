import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Satish Kumar Nagaraj in London about data, technology, collaboration or opportunities.",
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
        <section className="contact-information">
          <p className="eyebrow">BASED IN</p>
          <p className="contact-location"><MapPin size={17} />{profile.location}</p>
          <div className="contact-availability">
            <span className="availability"><i /> Open to meaningful opportunities</span>
            <p>Reach out directly using the details below.</p>
          </div>

          <div className="contact-methods">
            {profile.email ? (
              <a className="contact-method" href={`mailto:${profile.email}`}>
                <Mail size={16} />
                <span>{profile.email}</span>
              </a>
            ) : null}
            {profile.linkedIn ? (
              <a className="contact-method" href={profile.linkedIn} target="_blank" rel="noreferrer">
                <ArrowUpRight size={16} />
                <span>LinkedIn</span>
              </a>
            ) : null}
          </div>

          <Link className="text-link" href="/#about">Get to know my work <ArrowUpRight size={15} /></Link>
        </section>

        <section className="contact-form-wrap">
          <h2>Let&apos;s talk</h2>
          <p className="muted">I&apos;m open to data analyst, BI, operations and collaboration opportunities.</p>
          <div className="contact-direct-list">
            {profile.email ? (
              <a className="direct-contact-item" href={`mailto:${profile.email}`}>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </a>
            ) : null}
            {profile.linkedIn ? (
              <a className="direct-contact-item" href={profile.linkedIn} target="_blank" rel="noreferrer">
                <strong>LinkedIn</strong>
                <span>{profile.linkedIn}</span>
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
