"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Database, GraduationCap, MapPin, Target, TrendingUp } from "lucide-react";
import { experience, karate, medalTotal, profile, projects, roles, skillGroups, webProjects } from "@/data/portfolio";

const featureStats = [
  { label: "MSc Data Science", value: "Distinction", icon: GraduationCap },
  { label: "Food demand forecasting", value: "78/100", icon: TrendingUp },
  { label: "Karate medals", value: "25 total", icon: Target },
  { label: "Operational experience", value: "UK + India", icon: Building2 },
];

const hireReasons = [
  {
    title: "Business-focused analysis",
    copy: "I translate raw data into decisions, not just charts — with emphasis on operational relevance and business understanding.",
  },
  {
    title: "Operations awareness",
    copy: "My manufacturing work taught me how process variability, stock accuracy and reporting quality affect real-world performance.",
  },
  {
    title: "Analytical toolkit",
    copy: "Excel, SQL, Power BI, Python and forecasting methods are used to support insight, reporting and decision support.",
  },
];

export function PortfolioHome() {
  const introduction = useMemo(
    () => "I’m an MSc Data Science graduate with Distinction, interested in using data analytics, machine learning and business intelligence to solve practical business problems.",
    [],
  );

  return (
    <main id="main-content" className="page-shell">
      <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span>PORTFOLIO / 2026</span> ANALYTICS · OPERATIONS · KARATE</p>
          <h1 id="hero-title" aria-label={profile.name}>
            {profile.name.split(" ").slice(0, 2).join(" ")}<br />
            <span>{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="hero-headline">{profile.headline}</p>
          <div className="hero-intro">
            <p>{introduction}</p>
            <p>
              With experience in food manufacturing operations and continuous improvement support, I bring an understanding of operational challenges alongside technical skills in Excel, Power BI, SQL and Python.
            </p>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my projects <ArrowDownRight size={16} /></a>
            <Link className="button button-secondary" href="/contact">
              Contact me <ArrowUpRight size={15} />
            </Link>
            {profile.github ? (
              <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>

          <div className="quick-links">
            {profile.linkedIn ? <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a> : null}
            {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> : null}
            {profile.email ? <a href={`mailto:${profile.email}`}>Email</a> : null}
            {profile.cvPath ? <a href={profile.cvPath} download>Download CV</a> : null}
          </div>

          <div className="location-line">
            <MapPin size={15} /> {profile.location}
          </div>
        </div>

        <div className="hero-panel" aria-label="Professional identity panel">
          <div className="panel-header">
            <span>Identity</span>
          </div>
          <div className="identity-visual" aria-label="Profile portrait">
            <Image src="/profile-portrait.jpg" alt="Satish Kumar Nagaraj portrait" width={720} height={540} className="identity-image" />
          </div>
          <div className="skills-inline">
            {roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <p>
            I enjoy transforming complex data into meaningful insights that support better decisions and improve operational outcomes.
          </p>
          <div className="mini-proof">
            <span>Data Analyst</span>
            <span>Operations Analytics</span>
            <span>BI & Reporting</span>
          </div>
        </div>
      </section>

      <section className="stats-strip section-wrap" aria-label="Summary metrics">
        {featureStats.map(({ label, value, icon: Icon }) => (
          <div className="stat-tile" key={label}>
            <Icon size={18} />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="section-wrap section-pad" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span>01</span> ABOUT</p>
          <h2>Data-informed thinking with operational awareness.</h2>
        </div>

        <div className="about-grid">
          <div className="lead-card">
            <p className="large-copy">I use data to understand business problems, connect patterns to decisions and produce insight that can be acted on.</p>
            <p>
              My experience spans data science, food manufacturing operations and continuous improvement support. I have worked with live operational data, tracked stock movements, monitored variability and used analytical thinking to interpret what matters most.
            </p>
            <p>
              My MSc in Data Science at the University of East London was supported by a practical focus on forecasting, experimental comparison and business-ready analysis. I combine that with an operations mindset shaped by hands-on work in manufacturing and a disciplined performance background in karate.
            </p>
          </div>

          <div className="focus-cards">
            <div className="focus-card">
              <Database size={18} />
              <h3>Analyst mindset</h3>
              <p>Clean data, clear interpretation and evidence-based recommendations.</p>
            </div>
            <div className="focus-card">
              <BriefcaseBusiness size={18} />
              <h3>Operations lens</h3>
              <p>Understanding actual process constraints and the business impact behind the numbers.</p>
            </div>
            <div className="focus-card">
              <Target size={18} />
              <h3>Decision support</h3>
              <p>Using forecasting, KPI reporting and dashboards to support better choices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad" id="why-me">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> WHY ME</p>
          <h2>Strong analytical foundations with practical business awareness.</h2>
        </div>

        <div className="proof-grid">
          {hireReasons.map((item, index) => (
            <article className="proof-card" key={item.title}>
              <span className="proof-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad" id="projects">
        <div className="section-heading with-link">
          <div>
            <p className="eyebrow"><span>03</span> ANALYTICS PROJECTS</p>
            <h2>Featured work and research.</h2>
          </div>
          <Link href="/projects" className="link-inline">See case studies <ArrowUpRight size={15} /></Link>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card-large" key={project.title}>
              <div className="project-card-top">
                <span className="project-index">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-details">
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-meta-box">
                <span>Dataset</span>
                <strong>{project.dataset}</strong>
              </div>
              <div className="tool-list">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <Link href={project.href} className="project-link">Read project <ArrowRight size={14} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad" id="experience">
        <div className="section-heading">
          <p className="eyebrow"><span>04</span> EXPERIENCE</p>
          <h2>Practical experience shaped by operations and analysis.</h2>
        </div>

        <div className="experience-stack">
          {experience.map((entry) => (
            <article className="experience-card" key={entry.organization}>
              <div className="experience-header">
                <div>
                  <p className="eyebrow light"><span>{entry.area}</span></p>
                  <h3>{entry.organization}</h3>
                </div>
                <span className="period">{entry.period}</span>
              </div>
              <p className="experience-description">{entry.description}</p>
              <div className="role-stack">
                {entry.roles.map((role) => (
                  <div key={role.title} className="role-item">
                    <strong>{role.title}</strong>
                    <span>{role.period}</span>
                  </div>
                ))}
              </div>
              <ul>
                {entry.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="chip-row">
                {entry.skills.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad" id="skills">
        <div className="section-heading">
          <p className="eyebrow"><span>05</span> SKILLS</p>
          <h2>Tools for analysis, reporting and delivery.</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-topline">
                <span>{group.status}</span>
              </div>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad" id="web-development">
        <div className="section-heading">
          <p className="eyebrow"><span>06</span> WEB DEVELOPMENT</p>
          <h2>Digital projects and business-facing web work.</h2>
        </div>

        <div className="web-grid">
          {webProjects.map((project) => (
            <article className="web-card" key={project.title}>
              <div className={`web-preview preview-${project.visual}`} aria-hidden="true" />
              <div className="web-copy">
                <p className="eyebrow light"><span>{project.category}</span></p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="web-meta">
                  <small>{project.status}</small>
                  <a href={project.href} target="_blank" rel="noreferrer">Visit <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad" id="achievements">
        <div className="section-heading">
          <p className="eyebrow"><span>07</span> ACHIEVEMENTS</p>
          <h2>Discipline in sport, study and performance.</h2>
        </div>

        <div className="achievement-grid">
          <div className="achievement-box">
            <span className="achieve-label">Academic</span>
            <strong>MSc Data Science</strong>
            <small>Distinction · University of East London</small>
          </div>
          <div className="achievement-box">
            <span className="achieve-label">Martial arts</span>
            <strong>{karate.rank}</strong>
            <small>{karate.style}</small>
          </div>
          <div className="achievement-box">
            <span className="achieve-label">Competition</span>
            <strong>{medalTotal} medals</strong>
            <small>13 state · 7 national · 5 international</small>
          </div>
          <div className="achievement-box">
            <span className="achieve-label">Recognition</span>
            <strong>World Book Record</strong>
            <small>Recognised in 2021 and 2024</small>
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad contact-cta" id="contact">
        <div className="cta-panel">
          <div>
            <p className="eyebrow"><span>07</span> CONTACT</p>
            <h2>Open to data analyst, BI and operations opportunities.</h2>
            <p>
              I’m looking for roles where analytical thinking, operational awareness and effective communication can support better decisions and stronger business outcomes.
            </p>
          </div>
          <div className="cta-actions">
            {profile.email ? (
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                Email me <ArrowUpRight size={15} />
              </a>
            ) : null}
            {profile.github ? (
              <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
            ) : null}
            {profile.linkedIn ? (
              <a className="button button-secondary" href={profile.linkedIn} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
