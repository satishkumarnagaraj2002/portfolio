import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChartNoAxesCombined, CircleHelp, LockKeyhole } from "lucide-react";
import { projects, webProjects } from "@/data/portfolio";

const dissertationFigures = [
  {
    title: "Figure 4.3 — Distribution of unit sales",
    src: "/images/projects/dissertation/image6.png",
    description: "The target variable was highly right-skewed, with the majority of observations concentrated at low unit sales and a smaller tail of very high-demand cases.",
    insight: "This confirmed the need for models that can handle extreme demand observations and skewed operational data.",
  },
  {
    title: "Figure 4.4 — Boxplot of unit sales",
    src: "/images/projects/dissertation/image7.png",
    description: "The boxplot showed a dense central distribution with several outlying high-demand observations above the upper whisker.",
    insight: "This highlighted the operational reality that unusual, high-volume periods were not isolated anomalies but meaningful demand events.",
  },
  {
    title: "Figure 4.6 — Average demand by month",
    src: "/images/projects/dissertation/image9.png",
    description: "Average demand varied substantially across months, with a strong increase in mid-year periods before tapering again.",
    insight: "Monthly seasonality and temporal structure were clearly important for forecasting performance.",
  },
  {
    title: "Figure 4.7 — Average demand by day of week",
    src: "/images/projects/dissertation/image10.png",
    description: "The demand pattern showed clear weekly structure, with day-of-week effects materially influencing expected volumes.",
    insight: "This supported the inclusion of temporal features such as day-of-week and monthly seasonality in the models.",
  },
  {
    title: "Figure 4.8 — Correlation heatmap",
    src: "/images/projects/dissertation/image11.png",
    description: "The correlation map showed the relationships between historical, temporal and promotional features used in model development.",
    insight: "Historical demand, store-level effects, and temporal variables showed the strongest practical signal for prediction.",
  },
];

const modelMetrics = [
  { label: "MAE", modelA: "4.2890", modelB: "3.7960", modelC: "3.9644", winner: "XGBoost" },
  { label: "MSE", modelA: "822.7613", modelB: "803.1371", modelC: "807.7940", winner: "XGBoost" },
  { label: "RMSE", modelA: "28.6838", modelB: "28.3397", modelC: "28.4217", winner: "XGBoost" },
  { label: "MAPE", modelA: "0.8692", modelB: "0.8328", modelC: "0.8277", winner: "LightGBM" },
  { label: "RMSLE", modelA: "0.5603", modelB: "0.5409", modelC: "0.5432", winner: "XGBoost" },
  { label: "R²", modelA: "0.1100", modelB: "0.1312", modelC: "0.1262", winner: "XGBoost" },
];

const metricHighlights = [
  { metric: "MAE", value: "3.7960", label: "XGBoost", note: "Lowest overall error" },
  { metric: "RMSE", value: "28.3397", label: "XGBoost", note: "Best balance of fit and error" },
  { metric: "R²", value: "0.1312", label: "XGBoost", note: "Highest explained variance" },
  { metric: "MAPE", value: "0.8277", label: "LightGBM", note: "Lowest percentage error" },
];

function MetricBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  return (
    <div className="metric-bar-item">
      <div className="metric-bar-labels">
        <span>{label}</span>
        <strong>{value.toFixed(4)}</strong>
      </div>
      <div className="metric-bar-track">
        <span style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </div>
  );
}

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
              <h3>Research overview</h3>
              <p>This dissertation evaluated whether machine-learning methods could improve short-term demand forecasting for food manufacturing operations and support more reliable planning decisions.</p>
            </article>
            <article>
              <h3>Business problem</h3>
              <p>Food manufacturing is exposed to demand uncertainty, which can drive overproduction, underproduction, waste, excess stock, and inefficiencies in labour and supply planning.</p>
            </article>
            <article>
              <h3>Research objectives</h3>
              <p>To compare Random Forest, XGBoost and LightGBM, assess the impact of temporal and lagged-demand features, and evaluate which model most accurately supported operational forecasting.</p>
            </article>
            <article>
              <h3>Dataset overview</h3>
              <p>{projects[0]!.dataset} with 300,000 observations spanning 2013-01-01 to 2013-09-01, processed into a 37-feature dataset using an 80:20 chronological split.</p>
            </article>
            <article>
              <h3>Data preparation</h3>
              <p>The workflow included cleaning, validation, duplicate removal, imputation checks, feature engineering, rolling statistics and temporal variables before model training.</p>
            </article>
            <article>
              <h3>Methodology</h3>
              <p>Data loading, exploratory analysis, temporal feature engineering, TimeSeriesSplit validation and RandomizedSearchCV tuning were used to compare the three forecasting models.</p>
            </article>
          </div>

          <div className="figure-grid">
            {dissertationFigures.map((figure) => (
              <figure className="figure-card" key={figure.title}>
                <div className="figure-frame">
                  <Image src={figure.src} alt={figure.title} width={1200} height={760} />
                </div>
                <figcaption>
                  <strong>{figure.title}</strong>
                  <p>{figure.description}</p>
                  <span>{figure.insight}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="detail-section">
            <div className="section-subhead">Experimental Results & Model Evaluation</div>
            <div className="model-summary-grid">
              {metricHighlights.map((item) => (
                <div className="metric-summary-card" key={item.metric}>
                  <span>{item.metric}</span>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>

            <div className="comparison-table-wrap">
              <table className="model-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Random Forest</th>
                    <th>XGBoost</th>
                    <th>LightGBM</th>
                  </tr>
                </thead>
                <tbody>
                  {modelMetrics.map((metric) => (
                    <tr key={metric.label}>
                      <td>{metric.label}</td>
                      <td>{metric.modelA}</td>
                      <td>{metric.modelB}</td>
                      <td>{metric.modelC}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="metric-bars-wrap">
              <div className="metric-bars-card">
                <h3>MAE comparison</h3>
                <MetricBar label="Random Forest" value={4.2890} max={5} />
                <MetricBar label="XGBoost" value={3.7960} max={5} />
                <MetricBar label="LightGBM" value={3.9644} max={5} />
              </div>
              <div className="metric-bars-card">
                <h3>RMSE comparison</h3>
                <MetricBar label="Random Forest" value={28.6838} max={30} />
                <MetricBar label="XGBoost" value={28.3397} max={30} />
                <MetricBar label="LightGBM" value={28.4217} max={30} />
              </div>
              <div className="metric-bars-card">
                <h3>R² comparison</h3>
                <MetricBar label="Random Forest" value={0.1100} max={0.2} />
                <MetricBar label="XGBoost" value={0.1312} max={0.2} />
                <MetricBar label="LightGBM" value={0.1262} max={0.2} />
              </div>
              <div className="metric-bars-card">
                <h3>MAPE comparison</h3>
                <MetricBar label="Random Forest" value={0.8692} max={1} />
                <MetricBar label="XGBoost" value={0.8328} max={1} />
                <MetricBar label="LightGBM" value={0.8277} max={1} />
              </div>
            </div>

            <div className="callout-box">
              <p><strong>Key analytical findings:</strong> XGBoost achieved the strongest overall performance, with the lowest MAE, RMSE and highest R². LightGBM was highly competitive and achieved the lowest MAPE. The gap between XGBoost and LightGBM was relatively small, while Random Forest remained comparatively weaker. All models showed low R² values, indicating substantial variation in individual demand points remained unexplained.</p>
            </div>

            <div className="actual-vs-predicted-grid">
              <div className="predicted-figure-card">
                <Image src="/images/projects/dissertation/image14.png" alt="Random Forest actual vs predicted" width={1200} height={760} />
                <p><strong>Figure 4.11a:</strong> Random Forest actual vs predicted demand.</p>
              </div>
              <div className="predicted-figure-card">
                <Image src="/images/projects/dissertation/image15.png" alt="XGBoost actual vs predicted" width={1200} height={760} />
                <p><strong>Figure 4.11b:</strong> XGBoost actual vs predicted demand.</p>
              </div>
              <div className="predicted-figure-card">
                <Image src="/images/projects/dissertation/image16.png" alt="LightGBM actual vs predicted" width={1200} height={760} />
                <p><strong>Figure 4.11c:</strong> LightGBM actual vs predicted demand.</p>
              </div>
            </div>

            <div className="analysis-block">
              <h3>Actual versus predicted analysis</h3>
              <p>The actual-versus-predicted plots showed that all three models followed the overall demand direction reasonably well, while larger errors appeared in extreme high-demand observations. This is consistent with the dissertation findings: the models captured broad trend and seasonality, but the most extreme spikes remained difficult to predict accurately. That reveals a practical model limitation: while forecasting can support planning, short-lived peaks and abnormal demand surges still require additional context or managerial judgement.</p>
            </div>

            <div className="feature-panel">
              <h3>Feature importance</h3>
              <div className="feature-image-wrap">
                <Image src="/images/projects/dissertation/image17.png" alt="XGBoost daily actual and predicted demand" width={1200} height={760} />
              </div>
              <p>Historical demand variables such as lagged values and rolling statistics were the most influential predictors. These inputs capture demand inertia, recent behavioural patterns and short-term variability, while calendar variables such as month, day-of-week and weekend indicators help reflect regular temporal structure. The dissertation therefore supports the view that demand forecasting depends strongly on recent history and temporal context.</p>
            </div>
          </div>

          <div className="analysis-block">
            <h3>Key findings and business implications</h3>
            <ul>
              <li>XGBoost was the strongest overall performer across MAE, RMSE and R².</li>
              <li>LightGBM was highly competitive and achieved the lowest MAPE.</li>
              <li>Random Forest delivered comparatively higher error and weaker fit.</li>
              <li>All three models had low R² values, confirming that a substantial share of variation remained unexplained.</li>
              <li>For operational planning, forecasting was useful for supporting decisions, but not sufficient to replace managerial judgement during unusually volatile demand periods.</li>
            </ul>
          </div>

          <div className="case-note">
            <CircleHelp size={17} />
            <p><strong>MAPE note:</strong> MAPE was calculated on non-zero actual demand observations only.</p>
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
