import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChartNoAxesCombined, CircleHelp, LockKeyhole } from "lucide-react";
import { projects, webProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Data science research, development concepts, and digital projects by Satish Kumar Nagaraj.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="detail-page section-wrap" id="main-content">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to portfolio</Link>

      <header className="detail-hero">
        <p className="eyebrow"><span>SELECTED WORK / 2024–2026</span> RESEARCH · CONCEPTS · WEB</p>
        <h1>Projects with<br /><em>purpose.</em></h1>
        <p>Analytical work with a clear business lens: forecasting, practical reporting, digital product work and concept exploration.</p>
      </header>

      <section className="case-study" id="forecasting">
        <div className="case-index"><span>01 / MSc Dissertation</span><span>Research project</span></div>
        <div className="case-content">
          <p className="eyebrow">DEMAND FORECASTING / FOOD MANUFACTURING</p>
          <h2>{projects[0]!.title}</h2>
          <p className="case-lede">{projects[0]!.description}</p>

          <div className="case-visual" aria-label="Dissertation model comparison summary">
            <ChartNoAxesCombined size={24} />
            <div className="chart-bars">
              <span style={{ height: "48%" }} />
              <span style={{ height: "72%" }} />
              <span style={{ height: "66%" }} />
            </div>
            <strong>XGBoost strongest overall performance</strong>
          </div>

          <div className="case-grid">
            <article>
              <h3>Research focus</h3>
              <p>Investigated whether machine-learning methods could improve demand forecasting and support food manufacturing planning.</p>
            </article>
            <article>
              <h3>Dataset</h3>
              <p>{projects[0]!.dataset} with 300,000 observations and 37 processed features used in a chronological 80:20 split.</p>
            </article>
            <article>
              <h3>Methodology</h3>
              <p>Data loading, cleaning, exploratory analysis, temporal feature engineering, TimeSeriesSplit validation and RandomizedSearchCV tuning.</p>
            </article>
            <article>
              <h3>Models explored</h3>
              <p>{projects[0]!.tools.join(" · ")}</p>
            </article>
            <article>
              <h3>Key outcomes</h3>
              <p>XGBoost achieved the lowest MAE, MSE, RMSE and RMSLE and the highest R². LightGBM had the lowest MAPE, although results were very similar.</p>
            </article>
            <article>
              <h3>Research relevance</h3>
              <p>The project explored how forecasting can support production planning, inventory decisions and waste-related operational planning.</p>
            </article>
          </div>

          <div className="case-note">
            <CircleHelp size={17} />
            <p>Dissertation title: <strong>Food Demand Forecasting Using Machine Learning.</strong></p>
          </div>
        </div>
      </section>

      <section className="case-study" id="club-analytics">
        <div className="case-index"><span>02 / In development</span><span>Concept project</span></div>
        <div className="case-content">
          <p className="eyebrow">SPORTS ANALYTICS / MANAGEMENT REPORTING</p>
          <h2>{projects[1]!.title}</h2>
          <p className="case-lede">{projects[1]!.description}</p>

          <div className="concept-metrics">
            <span>Attendance</span>
            <span>Retention</span>
            <span>Progression</span>
            <span>Branch overview</span>
            <span>Management dashboard</span>
            <span>Decision support</span>
          </div>

          <div className="case-grid">
            <article>
              <h3>Project context</h3>
              <p>A multi-branch karate organisation with around 150 students and a need for centralised attendance, retention, grading and operational reporting.</p>
            </article>
            <article>
              <h3>Planned modules</h3>
              <p>Attendance analytics, retention and engagement trends, performance grading, branch comparisons and management recommendations.</p>
            </article>
            <article>
              <h3>Technology stack</h3>
              <p>Excel, SQL, Power BI and Python for structured analysis and dashboard design, with anonymised demonstration records only.</p>
            </article>
            <article>
              <h3>Status</h3>
              <p>Currently in development. No completed dashboards, retention rates or club performance claims are presented as implemented results.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study" id="portion-analysis">
        <div className="case-index"><span>03 / Proposed exercise</span><span>Private until approved</span></div>
        <div className="case-content">
          <p className="eyebrow">CONTINUOUS IMPROVEMENT / VARIANCE ANALYSIS</p>
          <h2>{projects[2]!.title}</h2>
          <p className="case-lede">{projects[2]!.description}</p>

          <div className="privacy-banner">
            <LockKeyhole size={18} />
            <div>
              <strong>Not yet completed. No employer data is included.</strong>
              <p>Any public case study would require approval and non-confidential data only.</p>
            </div>
          </div>

          <div className="case-grid">
            <article>
              <h3>Possible questions</h3>
              <p>Target versus actual weight, average variance, giveaway percentage, out-of-tolerance readings and process consistency.</p>
            </article>
            <article>
              <h3>Possible approach</h3>
              <p>Distribution analysis, control checks, variance review and operational recommendations where approved data is available.</p>
            </article>
            <article>
              <h3>Data handling</h3>
              <p>Internal operational datasets and commercially sensitive metrics are not published without relevant approval.</p>
            </article>
            <article>
              <h3>Status</h3>
              <p>Proposed development activity only. No completed savings, analysis or formal role claim is presented.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="web-projects-detail">
        <div className="case-index"><span>04 / Web development</span><span>Selected work</span></div>
        <div className="case-content">
          <h2>Digital experiences</h2>
          <div className="detail-web-grid">
            {webProjects.map((project) => (
              <article className="detail-web-item" key={project.title}>
                <p className="eyebrow light"><span>{project.category}</span></p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="status-line"><i />{project.status}</span>
                <a href={project.href} target="_blank" rel="noreferrer">Open supplied website <ArrowUpRight size={14} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
