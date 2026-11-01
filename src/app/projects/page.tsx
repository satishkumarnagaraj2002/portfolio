import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CircleHelp, LockKeyhole } from "lucide-react";
import { projects, webProjects } from "@/data/portfolio";

const dissertationMetrics = [
  { model: "Random Forest", mae: 4.289, rmse: 28.684, r2: 0.11 },
  { model: "XGBoost", mae: 3.796, rmse: 28.34, r2: 0.1312 },
  { model: "LightGBM", mae: 3.9644, rmse: 28.4217, r2: 0.1262 },
] as const;

export const metadata: Metadata = {
  title: "Projects",
  description: "Data science research, operational analytics concepts, and digital projects by Satish Kumar Nagaraj.",
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
          <div className="case-visual" role="img" aria-label="Verified model performance comparison for Random Forest, XGBoost and LightGBM demand forecasting" style={{ display: "block", padding: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
              {dissertationMetrics.map((metric) => (
                <article key={metric.model} style={{ display: "grid", gap: 6, padding: "14px 12px", border: metric.model === "XGBoost" ? "1px solid rgba(199, 243, 107, .7)" : "1px solid rgba(199, 243, 107, .24)", background: metric.model === "XGBoost" ? "rgba(199, 243, 107, .08)" : "rgba(11, 14, 12, .7)", textAlign: "left" }}>
                  <span style={{ color: "#8ea08c", fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase" }}>{metric.model}</span>
                  <strong style={{ color: "#f4f7f1", fontSize: 33, fontWeight: 500, lineHeight: 1 }}>{metric.mae.toFixed(4)}</strong>
                  <small style={{ color: "#c7f36b", fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase" }}>MAE</small>
                  <span style={{ color: "#c1c9bc", fontSize: 10 }}>RMSE {metric.rmse.toFixed(4)}</span>
                  <span style={{ color: "#c1c9bc", fontSize: 10 }}>R² {metric.r2.toFixed(4)}</span>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 14, color: "#c1c9bc", fontSize: 10 }}>Best overall: XGBoost (MAE 3.7960, RMSE 28.3397, R² 0.1312). LightGBM achieved the lowest MAPE at 0.8277.</div>
          </div>
          <div className="dissertation-figure-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16, marginTop: 20 }}>
            <figure style={{ margin: 0, padding: 0, border: "1px solid var(--line)", background: "#111712" }}>
              <img src="/dissertation/average-demand-by-day-of-week.png" alt="Average demand by day of week chart from the dissertation" style={{ display: "block", width: "100%", height: "auto", background: "#f2f2f2" }} />
              <figcaption style={{ padding: "10px 12px", color: "#aeb5aa", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase" }}>Figure extracted: average demand by day of week</figcaption>
            </figure>
            <figure style={{ margin: 0, padding: 0, border: "1px solid var(--line)", background: "#111712" }}>
              <img src="/dissertation/correlation-heatmap.png" alt="Correlation heatmap from the dissertation" style={{ display: "block", width: "100%", height: "auto", background: "#f2f2f2" }} />
              <figcaption style={{ padding: "10px 12px", color: "#aeb5aa", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase" }}>Figure extracted: correlation heatmap</figcaption>
            </figure>
          </div>
          <div className="case-grid">
            <article><h3>Problem statement</h3><p>Evaluate whether tree-based machine-learning models can provide useful demand signals for food manufacturing planning without claiming direct production optimisation.</p></article>
            <article><h3>Dataset</h3><p>{projects[0]!.dataset} using the Corporación Favorita grocery sales dataset and a leakage-aware chronological split.</p></article>
            <article><h3>Methods</h3><p>CRISP-DM workflow, widespread exploratory analysis, feature engineering using lags and rolling statistics, hyperparameter tuning and time-series validation.</p></article>
            <article><h3>Models explored</h3><p>{projects[0]!.tools.join(" · ")}</p></article>
            <article><h3>Evaluation & findings</h3><p>XGBoost performed best overall with MAE 3.7960, RMSE 28.3397 and R² 0.1312. LightGBM had the lowest MAPE at 0.8277, while the low R² values showed a substantial share of demand variability remained unexplained.</p></article>
            <article><h3>Limitations & relevance</h3><p>Retail sales were used as a proxy for downstream demand rather than direct manufacturing data; forecasts are best treated as planning support rather than commercial deployment.</p></article>
          </div>
          <div className="case-note"><CircleHelp size={17} /><p>Dissertation title: <strong>The Use of Machine Learning Techniques in Optimizing Food Manufacturing Operations to Meet Demands.</strong></p></div>
          <div className="case-actions"><a className="button button-outline" href={projects[0]!.github ?? "#"} target="_blank" rel="noreferrer">Open GitHub repository <ArrowUpRight size={15} /></a></div>
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
        <div className="case-content"><h2>Digital experiences</h2><div className="detail-web-grid">{webProjects.map((project) => <article className="detail-web-item" key={project.title}><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><span className="status-line"><i />{project.status}</span><div className="project-action-row"><a href={project.href} target="_blank" rel="noreferrer" className="button button-outline">Open website <ArrowUpRight size={14} /></a>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="button button-lime">GitHub repo <ArrowUpRight size={14} /></a>}</div></article>)}</div><p className="muted">Project links are included for the supplied website and GitHub repository where available.</p></div>
      </section>
    </main>
  );
}