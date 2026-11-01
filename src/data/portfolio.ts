export const profile = {
  name: "Satish Kumar Nagaraj",
  location: "London, United Kingdom",
  headline: "Data Analyst | Data Science Graduate | Operations Analytics",
  summary:
    "I’m an MSc Data Science graduate with Distinction interested in using data analytics, machine learning and business intelligence to solve practical business problems. With experience in food manufacturing operations and continuous improvement support, I bring operational understanding alongside technical skills in Excel, Power BI, SQL and Python.",
  email: "satishkumarnagaj2002@gmail.com",
  linkedIn: "https://www.linkedin.com/in/satish-kumar-nagaraj-a24893279",
  github: "https://github.com/satishkumarnagaraj2002",
  cvPath: null as string | null,
};

export const roles = [
  "Data Analyst",
  "Data Science Graduate",
  "Operations Analytics",
  "Business Intelligence",
  "Machine Learning",
  "Shito-Ryu Karate",
];

export const experience = [
  {
    organization: "Elite Karate Club London",
    area: "Community sport / martial arts",
    location: "London",
    period: "October 2025 — Present",
    roles: [
      { title: "Assistant Karate Instructor", period: "October 2025 — October 2026" },
      { title: "Performance & Data Analyst", period: "October 2026 — Present" },
    ],
    description:
      "Working at the intersection of Data Analytics and Sports Performance, supporting athlete development and data-driven decision-making at Elite Karate Club London.",
    responsibilities: [
      "Analyse athlete performance, progression and development",
      "Monitor attendance, engagement and retention trends",
      "Develop data-driven insights to support coaching and performance improvement",
      "Explore performance tracking and reporting solutions",
      "Support operational efficiency and the club's long-term development",
    ],
    skills: [
      "Leadership",
      "Communication",
      "Mentorship",
      "Discipline",
      "Performance analysis",
      "Data-informed coaching",
      "Athlete development",
      "Attendance tracking",
      "Engagement analysis",
      "Retention analysis",
      "Coaching insights",
      "Performance reporting",
      "Operational efficiency",
      "Sports performance analytics",
    ],
    note: "",
  },
  {
    organization: "Frive",
    area: "Food manufacturing / meal production",
    location: "United Kingdom",
    period: "December 2025 — Present",
    roles: [
      { title: "Production Operative", period: "December 2025 — June 2026" },
      { title: "Operations / Goods In / Ins & Outs", period: "June 2026 — Present" },
    ],
    description:
      "Supporting production and operational workflows, with day-to-day exposure to inventory movements, dispatch preparation and the accuracy behind reliable food manufacturing operations.",
    responsibilities: [
      "Inventory reconciliation and stock discrepancy investigation",
      "Production scheduling support, dispatch preparation and stock movement tracking",
      "Operational Excel records, delivery documentation and purchase-order records",
      "Variance analysis and KPI monitoring in a live production environment",
      "Cross-functional collaboration across production, goods in and dispatch teams",
      "Continuous improvement support with an emphasis on data accuracy and process reliability",
    ],
    skills: [
      "Inventory reconciliation",
      "Excel-based reporting",
      "Variance analysis",
      "Operational data accuracy",
      "KPI monitoring",
      "Continuous improvement",
    ],
    note: "The role is described accurately as operations-focused work; no analyst title or formal business-impact claim is implied.",
  },
  {
    organization: "Princeton Smart Engineers",
    area: "Data science internship",
    location: "India",
    period: "July 2024 — July 2025",
    roles: [{ title: "Data Science Intern", period: "July 2024 — July 2025" }],
    description:
      "Developed practical familiarity with data science workflows, analytical problem solving and machine-learning concepts in a professional learning environment.",
    responsibilities: [
      "Python, Pandas and NumPy-based analysis",
      "Data cleaning and exploratory data analysis",
      "Data visualisation and practical reporting",
      "Machine-learning workflow design and model evaluation",
    ],
    skills: ["Python", "SQL", "Data analysis", "Preprocessing", "Visualisation"],
    note: "No verified outcome claims are presented beyond the stated learning and technical development.",
  },
];

export const education = [
  {
    qualification: "MSc Data Science",
    institution: "University of East London",
    period: "2025–2026",
    result: "Distinction",
    dissertation: "Food Demand Forecasting Using Machine Learning",
    score: 78,
    research: [
      "Demand forecasting",
      "Food manufacturing operations",
      "Supply chain planning",
      "Predictive modelling",
      "Operational decision support",
    ],
    methods: [
      "Data cleaning and quality assessment",
      "Exploratory data analysis",
      "Temporal feature engineering",
      "TimeSeriesSplit cross-validation",
      "RandomizedSearchCV tuning",
    ],
    models: ["Random Forest Regressor", "XGBoost Regressor", "LightGBM Regressor"],
    dataset: "Corporación Favorita Grocery Sales Forecasting",
  },
  {
    qualification: "Bachelor of Computer Applications",
    institution: "Global Institute of Management Sciences",
    period: "2022–2025",
    result: "Completed",
  },
] as const;

export const skillGroups = [
  {
    title: "Data Analysis",
    status: "Core skill set",
    skills: ["Microsoft Excel", "SQL", "Python", "Pandas", "NumPy", "Data cleaning", "Exploratory Data Analysis"],
  },
  {
    title: "Business Intelligence & Visualisation",
    status: "Practical application",
    skills: ["Power BI", "Tableau", "KPI reporting", "Dashboard development", "Data visualisation", "Matplotlib"],
  },
  {
    title: "Machine Learning",
    status: "Project experience",
    skills: ["Scikit-learn", "Random Forest", "XGBoost", "LightGBM", "Predictive analytics", "Demand forecasting", "Model evaluation"],
  },
  {
    title: "Operations & Business Analytics",
    status: "Workplace experience",
    skills: ["Data quality", "Inventory reconciliation", "Variance analysis", "Operational reporting", "Root-cause investigation", "Continuous improvement"],
  },
  {
    title: "Additional Technical Skills",
    status: "Extended toolkit",
    skills: ["MySQL", "SQLite", "Git", "GitHub", "HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Food Demand Forecasting Using Machine Learning",
    type: "MSc Dissertation",
    status: "Research project",
    description:
      "Comparative evaluation of Random Forest, XGBoost and LightGBM for food supply chain decision support using a large grocery sales forecasting dataset.",
    dataset: "Corporación Favorita Grocery Sales Forecasting",
    tools: ["Random Forest", "XGBoost", "LightGBM", "Time-series validation"],
    href: "/projects#forecasting",
    accent: "chart",
  },
  {
    number: "02",
    title: "Karate Club Performance & Business Intelligence System",
    type: "In development",
    status: "In Development",
    description:
      "A planned centralised analytics solution for attendance, retention, grading, branch performance and management reporting in a multi-site karate organisation.",
    dataset: "Anonymised concept data only",
    tools: ["Excel", "SQL", "Power BI", "Python"],
    href: "/projects#club-analytics",
    accent: "dojo",
  },
  {
    number: "03",
    title: "Portion Weight & Giveaway Analysis",
    type: "Proposed development exercise",
    status: "Proposed",
    description:
      "A development exercise supporting variance analysis, process review and operational reporting with emphasis on recipe accuracy and production consistency.",
    dataset: "No employer data published",
    tools: ["Variance analysis", "Excel", "Operational reporting"],
    href: "/projects#portion-analysis",
    accent: "measure",
  },
];

export const webProjects = [
  {
    title: "Chocoberry Moments",
    category: "Dessert & live events",
    description: "A refined digital experience for a dessert and live-events concept connected to Chocoberry Cafe.",
    href: "https://chocoberry-moments.vercel.app/",
    status: "Live · checked October 2026",
    visual: "chocoberry",
  },
  {
    title: "Elite Karate Club London",
    category: "Martial arts organisation",
    description: "A modern web presence for a London karate organisation and its training community.",
    href: "https://elitekaratelondon.uk/",
    status: "Live · checked October 2026",
    visual: "elite",
  },
  {
    title: "Elite Karate Events",
    category: "Events platform",
    description: "A dedicated digital experience for karate events, competition information and registration.",
    href: "https://elitekarate-events.uk/",
    status: "Live · checked October 2026",
    visual: "events",
  },
  {
    title: "Dojo Republic",
    category: "Karate-related digital brand",
    description: "A karate-related digital brand and website project.",
    href: "https://dojorepublic.com/",
    status: "Supplied URL · status not independently verified",
    visual: "dojo",
  },
];

export const karate = {
  style: "Shito-Ryu Karate",
  rank: "Second Dan Black Belt",
  years: "More than 15 years",
  medals: { state: 13, national: 7, international: 5 },
  recordYears: [2021, 2024],
  quote: "Discipline built my foundation. Data gives me the tools to create impact.",
  credentials: [
    "Assistant Karate Instructor",
    "Coach Clean",
    "Child Protection / Safeguarding Training",
    "First Aid Level 3",
    "Martial Arts First Aid",
  ],
};

export const timeline = [
  { title: "Shito-Ryu karate journey", period: "15+ years", type: "Discipline" },
  { title: "State-level competition success", period: "13 medals", type: "Sport" },
  { title: "National and international success", period: "12 medals", type: "Sport" },
  { title: "World Book Record recognition", period: "2021", type: "Recognition" },
  { title: "World Book Record recognition", period: "2024", type: "Recognition" },
  { title: "Data Science internship", period: "July 2024 — July 2025", type: "Experience" },
  { title: "MSc Data Science", period: "2025 — 2026", type: "Education" },
  { title: "Frive operations experience", period: "December 2025 — Present", type: "Experience" },
  { title: "MSc Distinction", period: "2026", type: "Academic" },
];

export const training = [
  { title: "Data Science Internship / Training", provider: "Princeton Smart Engineers", status: "Completed" },
  { title: "Coach Clean", provider: "Training credential", status: "Verified where provided" },
  { title: "Child Protection Training", provider: "Safeguarding", status: "Verified where provided" },
  { title: "First Aid Level 3 & Martial Arts First Aid", provider: "First aid training", status: "Verified where provided" },
];

export const medalTotal = karate.medals.state + karate.medals.national + karate.medals.international;
