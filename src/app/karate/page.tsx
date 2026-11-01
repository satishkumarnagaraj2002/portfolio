import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Medal, ShieldCheck, Trophy } from "lucide-react";
import { karate, medalTotal } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Karate Journey",
  description: "Satish Kumar Nagaraj's Shito-Ryu karate journey, competition medals, coaching and recognition.",
  alternates: { canonical: "/karate" },
};

export default function KaratePage() {
  return (
    <main className="detail-page karate-detail" id="main-content">
      <div className="section-wrap">
        <Link className="back-link" href="/#achievements"><ArrowLeft size={15} /> Back to portfolio</Link>

        <header className="detail-hero karate-detail-hero">
          <p className="eyebrow"><span>SHITO-RYU KARATE</span> TRAINING · COMPETITION · TEACHING</p>
          <h1>Discipline is<br /><em>my foundation.</em></h1>
          <p>For more than 15 years, karate has shaped my approach to resilience, consistency and personal performance.</p>
        </header>

        <div className="karate-stat-strip">
          <div><span>STYLE</span><strong>{karate.style}</strong></div>
          <div><span>RANK</span><strong>{karate.rank}</strong></div>
          <div><span>EXPERIENCE</span><strong>{karate.years}</strong></div>
          <div><span>MEDALS</span><strong>{medalTotal}</strong></div>
        </div>

        <section className="detail-section">
          <p className="eyebrow"><span>01</span> COMPETITIVE ACHIEVEMENTS</p>
          <h2>Consistency on every stage.</h2>
          <div className="detail-medals">
            {[
              { label: "State-level medals", count: karate.medals.state },
              { label: "National-level medals", count: karate.medals.national },
              { label: "International-level medals", count: karate.medals.international },
              { label: "Total medals", count: medalTotal },
            ].map((item) => (
              <div key={item.label}>
                <Medal size={20} />
                <strong>{item.count}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <p className="eyebrow"><span>02</span> BLACK BELT JOURNEY</p>
          <h2>Progress through practice.</h2>
          <p className="case-lede">
            Shito-Ryu karate has been a long-running part of my development. It reinforces discipline, focus and personal standards that I carry into both professional and analytical work.
          </p>
        </section>

        <section className="detail-section">
          <p className="eyebrow"><span>03</span> WORLD BOOK RECORD RECOGNITION</p>
          <h2>Recognition beyond competition.</h2>
          <div className="record-detail-grid">
            {karate.recordYears.map((year) => (
              <article key={year}>
                <Trophy size={23} />
                <span>WORLD BOOK RECORD RECOGNITION</span>
                <strong>{year}</strong>
                <p>Recognised for contribution and achievement in the relevant record-setting context.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section coaching-section">
          <p className="eyebrow"><span>04</span> COACHING & CREDENTIALS</p>
          <h2>Teaching the values I live by.</h2>
          <p className="case-lede">
            As an assistant instructor, I support training sessions, student progression and class activities while encouraging focus, confidence and consistency.
          </p>
          <div className="credential-detail-list">
            {karate.credentials.map((item) => (
              <div key={item}>
                <ShieldCheck size={17} />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <blockquote>{karate.quote}</blockquote>
        </section>
      </div>
    </main>
  );
}
