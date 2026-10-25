export const profile = {
  name: "Satish Kumar N",
  location: "London, United Kingdom",
  headline: "Driven by data. Defined by discipline. Inspired by innovation.",
  summary:
    "Data science graduate, operations professional, Shito-Ryu karate athlete and digital creator. I bring analytical thinking and a disciplined approach to complex, practical challenges.",
  email: null as string | null,
  linkedIn: null as string | null,
  github: null as string | null,
  cvPath: null as string | null,
};

export const roles = [
  "Data Science Graduate",
  "Data & Analytics Professional",
  "Shito-Ryu Karate Athlete",
  "Web Developer",
  "Continuous Improvement Enthusiast",
];

export const experience = [
  {
    organization: "Frive",
    area: "Food manufacturing / meal production",
    location: "United Kingdom",
    period: "December 2025 — Present",
    roles: [
      { title: "Production Operative", period: "December 2025 — June 2026" },
      {
        title: "Operations / Goods In / Ins & Outs responsibilities",
        period: "June 2026 — Present",
      },
    ],
    description:
      "Supporting daily production and operational workflows, with hands-on exposure to inventory movements, dispatch preparation and the accuracy behind reliable food manufacturing.",
    responsibilities: [
      "Production workflows, meal quantities and dispatch preparation",
      "Palletisation, goods intake and inventory movements",
      "Delivery documentation, purchase orders and stock-related records",
      "Operational Excel records and temperature logs",
      "Stock discrepancy reporting and inventory reconciliation support",
      "Understanding material flows, hand-offs and operational bottlenecks",
    ],
    skills: [
      "Operational data accuracy",
      "Excel reporting",
      "Inventory management",
      "Process understanding",
      "Problem solving",
      "Cross-functional communication",
    ],
    note: "Functional responsibilities are described accurately; no formal promotion or analyst appointment is implied.",
  },
  {
    organization: "Princeton Smart Engineers",
    area: "Data science internship",
    location: "India",
    period: "July 2024 — July 2025",
    roles: [{ title: "Data Science Intern", period: "July 2024 — July 2025" }],
    description:
      "Developed practical familiarity with data science workflows, analytical problem solving and foundational machine-learning concepts.",
    responsibilities: [
      "Python, Pandas and NumPy",
      "Data preprocessing and analysis",
      "Data visualisation",
      "Machine-learning fundamentals",
    ],
    skills: ["Python", "Data analysis", "Preprocessing", "Visualisation"],
    note: "No unverified project outcomes or performance claims are included.",
  },
  {
    organization: "Elite Karate Club London",
    area: "Community sport / martial arts",
    location: "London",
    period: "Current involvement",
    roles: [{ title: "Assistant Karate Instructor", period: "Current involvement" }],
    description:
      "Supporting training sessions and student progression alongside senior instructors, with an emphasis on technique, confidence and discipline.",
    responsibilities: [
      "Support karate sessions and class activities",
      "Assist students with technical development and progression",
      "Encourage discipline, confidence and teamwork",
      "Support senior instructors and student mentoring",
    ],
    skills: ["Leadership", "Communication", "Mentorship", "Discipline"],
    note: "",
  },
];

export const education = [
  {
    qualification: "MSc Data Science",
    institution: "University of East London",
    period: "September 2025 intake · graduated 2026",
    result: "Distinction",
    dissertation:
      "The Use of Machine Learning Techniques in Optimizing Food Manufacturing Operations to Meet Demands",
    score: 78,
    research: [
      "Demand forecasting",
      "Food manufacturing",
      "Supply chain analytics",
      "Predictive modelling",
      "Operational decision-making",
    ],
    methods: [
      "Data preprocessing and feature engineering",
      "Time-series validation",
      "Hyperparameter tuning",
      "Model evaluation and forecasting analysis",
    ],
    models: ["Random Forest", "XGBoost", "LightGBM"],
    dataset: "Corporación Favorita Grocery Sales Forecasting",
  },
  {
    qualification: "Bachelor of Computer Applications (BCA)",
    institution: "University in India",
    period: "Details to be added",
    result: "Academic results not supplied",
  },
] as const;

export const skillGroups = [
  {
    title: "Data analytics",
    status: "Project experience",
    skills: ["Python", "SQL", "Excel", "Pandas", "NumPy", "Data cleaning", "EDA", "Visualisation"],
  },
  {
    title: "Business intelligence",
    status: "Working knowledge",
    skills: ["Power BI", "Tableau", "Reporting", "Dashboards", "Business metrics", "KPI analysis"],
  },
  {
    title: "Machine learning",
    status: "Project experience",
    skills: ["Scikit-learn", "Random Forest", "XGBoost", "LightGBM", "Regression", "Forecasting", "Evaluation"],
  },
  {
    title: "Development",
    status: "Currently developing",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "GitHub", "Vercel"],
  },
  {
    title: "Business & operations",
    status: "Practical experience",
    skills: ["Inventory", "Production operations", "Process improvement", "Supply chain", "Operational reporting", "Problem solving"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Food manufacturing demand forecasting",
    type: "MSc dissertation",
    status: "Research project",
    description:
      "Researching how machine-learning techniques can support demand forecasting and operational decisions in food manufacturing.",
    dataset: "Corporación Favorita Grocery Sales Forecasting",
    tools: ["Random Forest", "XGBoost", "LightGBM"],
    href: "/projects#forecasting",
    accent: "chart",
  },
  {
    number: "02",
    title: "Portion weight & giveaway analysis",
    type: "Proposed development exercise",
    status: "In development · not completed",
    description:
      "A proposed analytical exercise comparing production portion weights with recipe targets. It is not presented as completed work, and no employer data is shown.",
    dataset: "No company data published",
    tools: ["Variance analysis", "Excel", "Process improvement"],
    href: "/projects#portion-analysis",
    accent: "measure",
  },
  {
    number: "03",
    title: "Karate club performance analytics",
    type: "Personal concept",
    status: "Concept · in development",
    description:
      "A concept for exploring attendance, student progression, grading and retention through clear, useful reporting.",
    dataset: "Conceptual; no student data",
    tools: ["Attendance", "Progression", "Retention"],
    href: "/projects#club-analytics",
    accent: "dojo",
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
  rank: "2nd Dan Black Belt",
  years: "7+ years",
  medals: { state: 13, national: 7, international: 5 },
  recordYears: [2021, 2024],
  quote: "Discipline built my foundation. Data gives me the tools to create impact.",
  credentials: [
    "Coach Clean",
    "Child Protection / Safeguarding Training",
    "First Aid Level 3",
    "Martial Arts First Aid",
    "DBS",
    "Public Liability Insurance",
  ],
};

export const timeline = [
  { title: "Karate training journey", period: "Year to be added", type: "Discipline" },
  { title: "State, national & international competition", period: "Years to be added", type: "Sport" },
  { title: "World Book Record recognition", period: "2021", type: "Recognition" },
  { title: "World Book Record recognition", period: "2024", type: "Recognition" },
  { title: "Data Science internship", period: "July 2024 — July 2025", type: "Experience" },
  { title: "MSc Data Science", period: "2025 — 2026", type: "Education" },
  { title: "Frive", period: "December 2025 — Present", type: "Experience" },
  { title: "MSc Distinction", period: "2026", type: "Academic" },
  { title: "Digital projects & continuous development", period: "Ongoing", type: "Building" },
];

export const training = [
  { title: "Python Full Stack Course", provider: "Python Sphere", status: "Completion status not supplied" },
  { title: "Data Science Internship / Training", provider: "Princeton Smart Engineers", status: "Experience listed separately" },
  { title: "Anthropic AI Course", provider: "Anthropic", status: "Completion status not supplied" },
  { title: "Coach Clean", provider: "Training credential", status: "Verification details to be added" },
  { title: "Child Protection Training", provider: "Safeguarding", status: "Verification details to be added" },
  { title: "First Aid Level 3 & Martial Arts First Aid", provider: "First aid training", status: "Verification details to be added" },
];

export const medalTotal = karate.medals.state + karate.medals.national + karate.medals.international;