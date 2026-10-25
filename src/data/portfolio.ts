export const profile = {
  name: "Satish Kumar Nagaraj",
  location: "London, United Kingdom",
  headline: "Data science, operations and performance analytics — grounded in discipline.",
  summary:
    "I’m an MSc Data Science graduate with Distinction, building experience across food manufacturing operations, continuous improvement support and sports performance analytics. A Shito-Ryu second dan with more than 15 years in karate, I bring analytical thinking and long-term discipline to practical challenges.",
  email: "satishkumarnagaraj2002@gmail.com",
  linkedIn: null as string | null,
  github: null as string | null,
  cvPath: null as string | null,
};

export const roles = [
  "MSc Data Science · Distinction",
  "Operations & Performance Analytics",
  "Continuous Improvement Support",
  "Shito-Ryu Karate · 2nd Dan",
  "International Karate Medalist",
  "Web Developer",
];

export const experience = [
  {
    organization: "Frive",
    area: "Food manufacturing / meal production",
    location: "United Kingdom",
    period: "December 2025 — Present",
    roles: [
      { title: "Production Operative", period: "December 2025 — May 2026" },
      {
        title: "Operations Intake – Inbound & Outbound | Continuous Improvement Support",
        period: "June 2026 — Present",
      },
    ],
    description:
      "Progressed from production operations into Operations Intake, supporting inbound and outbound workflows, data accuracy, inventory movement, production coordination and continuous improvement activity in a fast-paced food manufacturing environment.",
    responsibilities: [
      "Monitor inbound and outbound activity, Goods In and Goods Out processes",
      "Record and verify meal production, dispatch quantities and palletisation",
      "Maintain operational records in Microsoft Excel, including temperature data",
      "Review purchase orders, delivery documents and Advance Shipping Notices",
      "Monitor inventory movement, stock discrepancies, waste and loss reasons",
      "Support stock reconciliation, production weight analysis and variance review",
      "Work with production, warehouse, supply chain and operations colleagues",
    ],
    skills: [
      "Operational data accuracy",
      "Excel reporting",
      "Inventory management",
      "Inbound & outbound operations",
      "Continuous improvement support",
      "Variance analysis",
      "Cross-functional communication",
    ],
    note: "Continuous improvement and analytical work are described as support and exposure; no formal analyst appointment or measured business outcome is claimed.",
  },
  {
    organization: "Allied Karate Club London",
    area: "Sports performance analytics",
    location: "London, United Kingdom",
    period: "October 2026 — Present",
    roles: [{ title: "Performance & Data Analyst", period: "October 2026 — Present" }],
    description:
      "Applying data analytics knowledge alongside extensive karate experience to explore athlete development and support informed coaching and club decisions.",
    responsibilities: [
      "Explore student attendance, athlete performance and progression",
      "Review grading performance and retention trends",
      "Support club performance reporting and data-informed discussions",
      "Explore appropriate dashboards and reporting approaches",
    ],
    skills: ["Sports analytics", "Performance monitoring", "Reporting", "Karate"],
    note: "Dashboards, implemented systems and measured improvements are not claimed as completed outcomes.",
  },
  {
    organization: "Prinston Smart Engineers",
    area: "Data science internship",
    location: "India",
    period: "July 2024 — July 2025",
    roles: [{ title: "Data Science Intern", period: "July 2024 — July 2025" }],
    description:
      "Built practical familiarity with data science workflows and analytical problem-solving through Python programming, structured datasets and foundational machine-learning concepts.",
    responsibilities: [
      "Python programming and data manipulation with Pandas and NumPy",
      "Data preprocessing and exploratory data analysis",
      "Data visualisation and work with structured datasets",
      "Machine-learning fundamentals and analytical problem-solving",
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
    period: "September 2025 — September 2026",
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
      "Data preprocessing and exploratory data analysis",
      "Feature engineering",
      "Time-series validation",
      "Hyperparameter tuning",
      "Model evaluation and comparative performance analysis",
    ],
    models: ["Random Forest", "XGBoost", "LightGBM"],
    dataset: "Corporación Favorita Grocery Sales Forecasting",
  },
  {
    qualification: "Bachelor of Computer Applications (BCA)",
    institution: "Global Institute of Management Sciences",
    period: "August 2022 — August 2025",
    result: "Academic results not supplied",
  },
] as const;

export const skillGroups = [
  {
    title: "Programming & data analysis",
    status: "Project experience",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Data cleaning", "Exploratory data analysis", "Data preprocessing"],
  },
  {
    title: "Visualisation & business intelligence",
    status: "Working knowledge",
    skills: ["Microsoft Excel", "Power BI", "Tableau", "Matplotlib", "Reporting", "Dashboard development", "Data visualisation"],
  },
  {
    title: "Machine learning",
    status: "Project experience",
    skills: ["Machine-learning fundamentals", "Scikit-learn", "Random Forest", "XGBoost", "LightGBM", "Predictive analytics", "Forecasting", "Time-series validation", "Model evaluation"],
  },
  {
    title: "Databases & development",
    status: "Currently developing",
    skills: ["MySQL", "SQLite", "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "GitHub", "Vercel", "Visual Studio Code", "Website development", "AI-assisted development"],
  },
  {
    title: "Operations & business",
    status: "Practical experience",
    skills: ["Operational reporting", "Inventory reconciliation", "Supply chain operations", "Continuous improvement", "Process analysis", "Variance analysis", "Performance monitoring", "Data accuracy", "Stakeholder communication"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Food manufacturing demand forecasting",
    type: "MSc dissertation",
    status: "Research project",
    description:
      "A master's dissertation exploring how machine-learning techniques can support demand forecasting and data-informed decision-making in food manufacturing.",
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
  years: "15+ years",
  medals: { state: 13, national: 7, international: 5 },
  recordYears: [2021, 2024],
  quote: "Discipline built my foundation. Data gives me the tools to create impact.",
  credentials: [
    "Coach Clean Certification — 26 November 2025",
    "Child Protection / Safeguarding Training",
    "First Aid Level 3",
    "Martial Arts First Aid",
    "DBS",
    "Public Liability Insurance",
  ],
};

export const timeline = [
  { title: "Shito-Ryu karate journey", period: "15+ years", type: "Discipline" },
  { title: "State, national & international competition", period: "Years to be added", type: "Sport" },
  { title: "World Book Record recognition", period: "2021", type: "Recognition" },
  { title: "World Book Record recognition", period: "2024", type: "Recognition" },
  { title: "Data Science internship", period: "July 2024 — July 2025", type: "Experience" },
  { title: "Bachelor of Computer Applications", period: "August 2022 — August 2025", type: "Education" },
  { title: "MSc Data Science", period: "September 2025 — September 2026", type: "Education" },
  { title: "Frive", period: "December 2025 — Present", type: "Experience" },
  { title: "Performance & Data Analyst · Allied Karate Club London", period: "October 2026 — Present", type: "Experience" },
  { title: "MSc Distinction", period: "2026", type: "Academic" },
  { title: "Digital projects & continuous development", period: "Ongoing", type: "Building" },
];

export const training = [
  { title: "Python Full Stack Course", provider: "Python Sphere", status: "Completion status not supplied" },
  { title: "Data Science Internship / Training", provider: "Prinston Smart Engineers", status: "Experience listed separately" },
  { title: "Anthropic AI Course", provider: "Anthropic", status: "Completion status not supplied" },
  { title: "Coach Clean Certification", provider: "Training credential", status: "26 November 2025" },
  { title: "Child Protection Training", provider: "Safeguarding", status: "Verification details to be added" },
  { title: "First Aid Level 3 & Martial Arts First Aid", provider: "First aid training", status: "Verification details to be added" },
];

export const medalTotal = karate.medals.state + karate.medals.national + karate.medals.international;