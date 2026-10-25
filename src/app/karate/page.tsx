import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Medal, ShieldCheck, Trophy } from "lucide-react";
import { karate, medalTotal, timeline } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Karate Journey",
  description: "Satish Kumar Nagaraj's Shito-Ryu karate journey, competition medals, coaching and recognition.",
  alternates: { canonical: "/karate" },
};

export default function KaratePage() {
  return (
    <main className="detail-page karate-detail" id="main-content">
      <div className="section-wrap">
        <Link className="back-link" href="/#karate"><ArrowLeft size={15} /> Back to portfolio</Link>
        <header className="detail-hero karate-detail-hero">
          <p className="eyebrow"><span>SHITO-RYU KARATE</span> TRAINING · COMPETITION · TEACHING</p>
          <h1>Beyond data:<br /><em>my journey in karate.</em></h1>
          <p>More than 15 years in Shito-Ryu karate, shaped by competition, coaching and long-term commitment to athlete development.</p>
        </header>
        <div className="karate-stat-strip">
          <div><span>STYLE</span><strong>{karate.style}</strong></div>
          <div><span>RANK</span><strong>{karate.rank}</strong></div>
          <div><span>EXPERIENCE</span><strong>{karate.years}</strong></div>
          <div><span>CURRENT INVOLVEMENT</span><strong>Assistant Instructor</strong></div>
        </div>
        <section className="detail-section">
          <p className="eyebrow"><span>01</span> COMPETITIVE ACHIEVEMENTS</p>
          <h2>Consistency, on every stage.</h2>
          <div className="detail-medals">{[{ label: "State-level medals", count: karate.medals.state }, { label: "National-level medals", count: karate.medals.national }, { label: "International-level medals", count: karate.medals.international }, { label: "Total medals", count: medalTotal }].map((item) => <div key={item.label}><Medal size={20} /><strong>{item.count}</strong><span>{item.label}</span></div>)}</div>
          <p className="muted">Specific event names, dates and placements are not included because they have not been supplied for verification.</p>
        </section>
        <section className="detail-section">
          <p className="eyebrow"><span>02</span> BLACK BELT JOURNEY</p>
          <h2>Progress through practice.</h2>
          <p className="case-lede">Shito-Ryu karate has been part of my life for more than 15 years. Specific grading dates and milestones are not included unless confirmed.</p>
          <div className="dojo-placeholder"><div className="dojo-emblem">心</div><p>Training, competition and coaching photographs to be added</p></div>
        </section>
        <section className="detail-section">
          <p className="eyebrow"><span>03</span> WORLD BOOK RECORD RECOGNITION</p>
          <h2>Recognition beyond competition.</h2>
          <div className="record-detail-grid">{karate.recordYears.map((year) => <article key={year}><Trophy size={23} /><span>WORLD BOOK RECORD RECOGNITION</span><strong>{year}</strong><p>Exact record title, organisation, certificate and official verification link to be added.</p><small>Not represented as a Guinness World Record.</small></article>)}</div>
        </section>
        <section className="detail-section coaching-section">
          <p className="eyebrow"><span>04</span> COACHING & CREDENTIALS</p>
          <h2>Teaching the values I live by.</h2>
          <p className="case-lede">As an assistant instructor at Elite Karate Club London, I support training sessions, student technical development and class activities alongside senior instructors.</p>
          <div className="credential-detail-list">{karate.credentials.map((item) => <div key={item}><ShieldCheck size={17} /><strong>{item}</strong><span>Evidence / verification to be added</span></div>)}</div>
          <blockquote>{karate.quote}</blockquote>
        </section>
        <section className="detail-section">
          <p className="eyebrow"><span>05</span> THE JOURNEY</p>
          <h2>Milestones, not assumptions.</h2>
          <div className="timeline-list">{timeline.filter((item) => item.type === "Sport" || item.type === "Discipline" || item.type === "Recognition").map((item, index) => <div className="timeline-item" key={`${item.title}-${item.period}`}><span className="timeline-index">0{index + 1}</span><span className="timeline-dot" /><div><small>{item.type}</small><h3>{item.title}</h3></div><time>{item.period}</time></div>)}</div>
        </section>
      </div>
    </main>
  );
}