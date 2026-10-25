import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChartNoAxesCombined, CircleHelp, LockKeyhole } from "lucide-react";
import { projects, webProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Data science research, development concepts, and digital projects by Satish Kumar N.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="detail-page section-wrap" id="main-content">
      <Link className="back-link" href="/#projects"><ArrowLeft size={15} /> Back to portfolio</Link>
      <header className="detail-hero">
        <p className="eyebrow"><span>SELECTED WORK / 2024—2026</span> RESEARCH · CONCEPTS · WEB</p>
        <h1>Projects with<br /><em>purpose.</em></h1>
        <p>Evidence-led work, clearly scoped. Research findings and unfinished concepts are not dressed up as completed products.</p>
      </header>

      <section className="case-study" id="forecasting">
        <div className="case-index"><span>01 / MSc Dissertation</span><span>Research project</span></div>
        <div className="case-content">
          <p className="eyebrow">DEMAND FORECASTING / FOOD MANUFACTURING</p>
          <h2>{projects[0]!.title}</h2>
          <p className="case-lede">{projects[0]!.description}</p>
          <div className="case-visual chart-placeholder" role="img" aria-label="Placeholder for dissertation charts; no model performance metrics are published"><ChartNoAxesCombined size={25} /><div className="chart-lines"><i /><i /><i /><i /><i /><i /><i /></div><span>CHARTS & MODEL METRICS TO BE ADDED FROM VERIFIED RESULTS</span></div>
          <div className="case-grid">
            <article><h3>Problem statement</h3><p>Explore whether machine-learning methods can support demand forecasting and operational decisions in food manufacturing.</p></article>
            <article><h3>Dataset</h3><p>{projects[0]!.dataset}. A public grocery-sales forecasting dataset used for academic research.</p></article>
            <article><h3>Methods</h3><p>Data preparation, feature engineering, time-series validation, hyperparameter tuning and model evaluation.</p></article>
            <article><h3>Models explored</h3><p>{projects[0]!.tools.join(" · ")}</p></article>
            <article><h3>Evaluation & findings</h3><p>Dissertation score: 78 / 100. Detailed performance metrics and comparative findings are not published here until the underlying results are supplied.</p></article>
            <article><h3>Limitations & relevance</h3><p>Forecast quality depends on data coverage, validation choices and the assumptions behind the target. The research considers how forecasts could inform operational planning; no business outcome is claimed.</p></article>
          </div>
          <div className="case-note"><CircleHelp size={17} /><p>Dissertation title: <strong>The Use of Machine Learning Techniques in Optimizing Food Manufacturing Operations to Meet Demands.</strong></p></div>
        </div>
      </section>

      <section className="case-study" id="portion-analysis">
        <div className="case-index"><span>02 / Proposed exercise</span><span>In development</span></div>
        <div className="case-content">
          <p className="eyebrow">CONTINUOUS IMPROVEMENT / PRIVATE UNTIL APPROVED</p>
          <h2>{projects[1]!.title}</h2>
          <p className="case-lede">{projects[1]!.description}</p>
          <div className="privacy-banner"><LockKeyhole size={18} /><div><strong>Not yet completed. No employer data is included.</strong><p>Any future public case study requires approval and must use non-confidential information.</p></div></div>
          <div className="case-grid">
            <article><h3>Potential questions</h3><p>Target versus actual weight, average variance, giveaway percentage, out-of-tolerance readings and production consistency.</p></article>
            <article><h3>Possible approach</h3><p>Summarise distributions, compare components where permitted, document assumptions and identify questions for process owners.</p></article>
            <article><h3>Status</h3><p>Proposed development exercise. No analysis, findings, savings or role appointment are claimed.</p></article>
            <article><h3>Data handling</h3><p>Internal datasets, employee details, proprietary processes and commercially sensitive metrics will not be published.</p></article>
          </div>
        </div>
      </section>

      <section className="case-study" id="club-analytics">
        <div className="case-index"><span>03 / Personal concept</span><span>Concept only</span></div>
        <div className="case-content">
          <p className="eyebrow">SPORTS ANALYTICS / KARATE</p>
          <h2>{projects[2]!.title}</h2>
          <p className="case-lede">{projects[2]!.description}</p>
          <div className="concept-metrics"><span>Attendance trends</span><span>Student progression</span><span>Grading results</span><span>Retention</span><span>Branch overview</span><span>Instructor view</span></div>
          <p className="muted">No student records, dashboards or analysis results are represented as existing functionality.</p>
        </div>
      </section>

      <section className="web-projects-detail">
        <div className="case-index"><span>04 / Web development</span><span>Selected digital work</span></div>
        <div className="case-content"><h2>Digital experiences</h2><div className="detail-web-grid">{webProjects.map((project) => <article className="detail-web-item" key={project.title}><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><span className="status-line"><i />{project.status}</span><a href={project.href} target="_blank" rel="noreferrer">Open supplied website <ArrowUpRight size={14} /></a></article>)}</div><p className="muted">Technology details and GitHub repositories are omitted until confirmed.</p></div>
      </section>
    </main>
  );
}