export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: "Full-Stack" | "AI / ML" | "Distributed Systems" | "Freelance";
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  repoName?: string;
  image: string;
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  accent: string;
  skills: { name: string; level: string }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "work" | "education" | "achievement";
  description: string;
  highlights: string[];
  tech?: string[];
}

export interface CertificationItem {
  id: string;
  provider: string;
  badgeColor: string;
  items: {
    name: string;
    date: string;
    credentialUrl?: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  relationship: string;
  date: string;
}

export const PROFILE = {
  name: "Prashant Baghel",
  shortName: "PB•",
  headline: "Software Engineer | Distributed Systems | Event-Driven Architecture | Multi-Tenant SaaS",
  tagline: "Developer by Passion, Engineer by Precision.",
  roles: [
    "Associate Software Engineer @ Simpplr",
    "MERN Stack & Distributed Systems Engineer",
    "Kafka & Event-Driven Architecture Builder",
    "1,000+ DSA Problems · CodeVita Global #1090",
  ],
  bio: [
    "Software Engineer with 1.5+ years of experience building, testing, and operating multi-tenant SaaS applications, RESTful microservices, and Kafka-based event-driven workflows in Agile (Scrum) teams.",
    "At Simpplr, I work across the MERN stack (Node.js, TypeScript, Express.js, NestJS, MongoDB, ReactJS, Micro-Frontends), Apache Kafka, Redis, Kubernetes, and observability tooling — shipping high-volume APIs serving 30M+ requests/week.",
    "I also bring a strong Java & Spring Boot foundation from my internship at Zidio Development and GenAI projects, alongside freelance full-stack web development.",
  ],
  location: "Gurugram, India",
  email: "baghelprashant180@gmail.com",
  phone: "+91 70604 26377",
  githubUsername: "PrashanttBG",
  githubUrl: "https://github.com/PrashanttBG",
  linkedinUrl: "https://www.linkedin.com/in/iamprashant-baghel/",
  leetcodeUrl: "https://leetcode.com/u/PrashantBG2301/",
  hackerrankUrl: "https://www.hackerrank.com/profile/cseltfw2301",
  resumeUrl: "https://drive.google.com/file/d/1FjqbT2ApmRPGu04t4IzDzPdwthkEnjIz/view?usp=sharing",
  photoUrl: "/images/prashant-photo.jpg",
  availability: "Associate Software Engineer @ Simpplr · Open to Connect",
  stats: [
    { label: "Prod Services", value: 15, suffix: "+" },
    { label: "Weekly API Reqs", value: 30, suffix: "M+" },
    { label: "DSA Solved", value: 1000, suffix: "+" },
    { label: "Playwright Tests", value: 2000, suffix: "+" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Microservices",
    icon: "Server",
    accent: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Node.js", level: "Prod" },
      { name: "TypeScript", level: "Prod" },
      { name: "NestJS", level: "Prod" },
      { name: "Express.js", level: "Prod" },
      { name: "Java & Spring Boot", level: "Strong" },
      { name: "Spring Data JPA / Hibernate", level: "Strong" },
      { name: "Multi-Tenant SaaS & JWT", level: "Prod" },
      { name: "RESTful Microservices", level: "Prod" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Architecture",
    icon: "Layout",
    accent: "from-cyan-500 to-teal-500",
    skills: [
      { name: "ReactJS", level: "Prod" },
      { name: "Next.js", level: "Proficient" },
      { name: "Micro-Frontends", level: "Prod" },
      { name: "JavaScript (ES6+)", level: "Prod" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Core" },
    ],
  },
  {
    id: "databases",
    title: "Data & Event Streaming",
    icon: "Database",
    accent: "from-violet-500 to-purple-500",
    skills: [
      { name: "Apache Kafka", level: "Prod" },
      { name: "MongoDB & Atlas Search", level: "Prod" },
      { name: "Redis", level: "Prod" },
      { name: "Debezium CDC", level: "Prod" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Mongoose / Sequelize", level: "Prod" },
    ],
  },
  {
    id: "devops",
    title: "Cloud, DevOps & Observability",
    icon: "Cloud",
    accent: "from-amber-500 to-orange-500",
    skills: [
      { name: "AWS & EKS", level: "Prod" },
      { name: "Kubernetes & Helm", level: "Prod" },
      { name: "Docker & Buildx", level: "Prod" },
      { name: "Jenkins & GitHub Actions", level: "Prod" },
      { name: "HashiCorp Vault", level: "Prod" },
      { name: "Groundcover / Coralogix", level: "Prod" },
      { name: "Grafana & OpenTelemetry", level: "Prod" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Code Quality",
    icon: "Wrench",
    accent: "from-emerald-500 to-green-500",
    skills: [
      { name: "Playwright (2,000+ E2E)", level: "Prod" },
      { name: "Jest", level: "Prod" },
      { name: "Mocha / Chai / Sinon", level: "Prod" },
      { name: "Snyk Security", level: "Prod" },
      { name: "SonarQube", level: "Prod" },
      { name: "Postman", level: "Core" },
    ],
  },
  {
    id: "aiml",
    title: "AI, Agile & Fundamentals",
    icon: "Brain",
    accent: "from-pink-500 to-rose-500",
    skills: [
      { name: "GenAI / LLM Integration", level: "Proficient" },
      { name: "Cursor AI & Claude", level: "Daily" },
      { name: "Prompt Engineering", level: "Proficient" },
      { name: "Agile / Scrum / JIRA", level: "Prod" },
      { name: "DSA (1,000+ Solved)", level: "Strong" },
      { name: "System Design / OOP / DBMS", level: "Core" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pal-dairy",
    title: "Pal Dairy",
    subtitle: "Freelance Business Website & Storefront",
    description:
      "Freelance client web platform built for a dairy business to showcase fresh dairy products, daily farm delivery offerings, and brand story with a fast, mobile-first Next.js experience.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    category: "Freelance",
    image: "/images/projects/pal-dairy.svg",
    liveLabel: "Live Link Coming Soon",
    highlights: [
      "Custom responsive storefront & product catalog architecture",
      "Optimized Next.js App Router performance & SEO metadata",
      "Active freelance engagement — production deployment in progress",
    ],
    featured: true,
  },
  {
    id: "medora",
    title: "Medora",
    subtitle: "GenAI Medical Report & OCR Companion",
    description:
      "GenAI healthcare application that parses uploaded medical PDFs and image reports using Tesseract OCR and LLM analysis, backed by JWT authentication and RESTful Spring Boot APIs.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "ReactJS", "MySQL", "Tesseract OCR", "GenAI"],
    category: "AI / ML",
    githubUrl: "https://github.com/PrashanttBG/Medora",
    repoName: "Medora",
    image: "/images/projects/medora.svg",
    highlights: [
      "Automated medical document & prescription extraction via Tesseract OCR",
      "LLM-powered health indicator breakdown and specialist insights",
      "JWT-secured Spring Boot & Hibernate backend with MySQL",
    ],
    featured: true,
  },
  {
    id: "gupshup",
    title: "GupShup",
    subtitle: "Event-Driven Kafka Chat Platform",
    description:
      "Real-time chat platform built with Node.js, TypeScript, Express, and Apache Kafka for asynchronous message processing, priority queues, Dead Letter Queues, and live analytics.",
    tech: ["Node.js", "TypeScript", "Express", "Apache Kafka", "PostgreSQL", "Docker", "Jest"],
    category: "Distributed Systems",
    githubUrl: "https://github.com/PrashanttBG/GupShup",
    repoName: "GupShup",
    image: "/images/projects/gupshup.svg",
    highlights: [
      "Kafka-based async message processing with prioritization & DLQ",
      "PostgreSQL persistence, Redis caching, and Socket.IO delivery",
      "Containerized with Docker Compose and tested with Jest",
    ],
    featured: true,
  },
  {
    id: "mailbuddy",
    title: "MailBuddy",
    subtitle: "AI Gmail Auto-Reply Chrome Extension",
    description:
      "Chrome Extension integrated with Gmail that drafts context-aware professional email replies using the Gemini API, powered by a CORS-enabled Spring Boot REST backend.",
    tech: ["Java", "Spring Boot", "Gemini API", "Chrome Extension", "JavaScript", "REST API"],
    category: "AI / ML",
    githubUrl: "https://github.com/PrashanttBG/MailBuddy",
    repoName: "MailBuddy",
    image: "/images/projects/mailbuddy.svg",
    highlights: [
      "Native Gmail compose integration for one-click AI reply drafting",
      "Context-aware prompt engineering using Google Gemini API",
      "CORS-enabled Spring Boot API for secure LLM orchestration",
    ],
    featured: true,
  },
  {
    id: "supporthub",
    title: "SupportHub",
    subtitle: "Customer Support Triage Portal",
    description:
      "Full-stack customer support agent workspace featuring automatic urgency detection (Critical, High, Medium, Low), canned quick-reply templates, and instant conversation search.",
    tech: ["React 18", "TypeScript", "Spring Boot 3.2", "Zustand", "React Query", "Tailwind CSS"],
    category: "Full-Stack",
    githubUrl: "https://github.com/PrashanttBG/SupportHub",
    repoName: "SupportHub",
    image: "/images/projects/supporthub.svg",
    highlights: [
      "Automatic urgency scoring & priority queue sorting",
      "Optimistic UI updates with React Query + Zustand",
      "CSV dataset import & full-text message search",
    ],
  },
  {
    id: "yoga-pose",
    title: "Yoga Pose Recommender",
    subtitle: "Vector Search AI Wellness App",
    description:
      "Flask web application using Firestore Vector Search, LangChain, and Gemini in Vertex AI to recommend personalized yoga postures based on user wellness goals.",
    tech: ["Python", "Flask", "Firestore", "LangChain", "Vertex AI", "Gemini"],
    category: "AI / ML",
    githubUrl: "https://github.com/PrashanttBG/yoga-pose-recommender",
    repoName: "yoga-pose-recommender",
    image: "/images/projects/yoga.svg",
    highlights: [
      "Composite vector index search in Google Cloud Firestore",
      "Gemini-enriched pose descriptions & LangChain retrieval",
      "Cloud Run ready serverless Python backend",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "simpplr",
    period: "Aug 2025 — Present",
    role: "Associate Software Engineer",
    organization: "Simpplr Software India Pvt Ltd",
    location: "Gurugram, India",
    type: "work",
    description:
      "Promoted from SDE Intern after contributing across 15+ production services. Own end-to-end delivery across multi-tenant Node.js & MERN microservices in Agile (Scrum) sprints.",
    highlights: [
      "Optimized high-volume RESTful discovery & listing APIs via MongoDB Atlas Search and indexing, serving 3M, 15M+, and 30M+ requests/week",
      "Designed Kafka event-driven workflows for notifications, entity creation, localization (Kafka, MongoDB, Redis), and multi-channel delivery (in-app, email, Mobile, Browser, Slack, MS Teams)",
      "Contributed to micro-frontends (ReactJS) and external content-distribution integrations including LinkedIn sharing",
      "Expanded automated regression coverage to 2,000+ Playwright test cases; resolved critical/high Snyk findings and improved SonarQube compliance",
      "Enhanced CI/CD with Docker Buildx, Jenkins, and GitHub Actions (~40% faster build/deploy) and debugged production issues via Groundcover, Coralogix, and Grafana",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Express / NestJS",
      "MongoDB Atlas",
      "ReactJS",
      "Apache Kafka",
      "Redis",
      "Kubernetes",
      "Playwright",
    ],
  },
  {
    id: "zidio",
    period: "May 2025 — Jul 2025",
    role: "Java Full Stack Developer Intern",
    organization: "Zidio Development",
    location: "Remote",
    type: "work",
    description:
      "Built end-to-end job-portal workflows for authentication, user profiles, and job search using Java, Spring Boot, Hibernate, ReactJS, and MySQL.",
    highlights: [
      "Developed RESTful APIs with Spring Boot and Hibernate ORM for candidate & recruiter workflows",
      "Implemented user authentication, profile management, and dynamic job search filters in ReactJS",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "ReactJS", "MySQL"],
  },
  {
    id: "education",
    period: "2022 — Jun 2026",
    role: "B.Tech, Computer Science and Engineering",
    organization: "GL Bajaj Institute of Technology and Management",
    location: "CGPA: 8.31 / 10",
    type: "education",
    description:
      "Completed Bachelor of Technology in Computer Science & Engineering with strong foundations in DSA, System Design, OOP, DBMS, and Operating Systems.",
    highlights: [
      "Solved 1,000+ DSA problems (800+ on LeetCode, max rating 1719)",
      "Secured Global Rank 1,090 in TCS CodeVita Season 12",
      "Built GenAI & full-stack projects including Medora and MailBuddy using Java & Spring Boot",
    ],
    tech: ["DSA", "System Design", "Java", "OOP", "DBMS", "OS"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "simpplr-awards",
    provider: "Simpplr Recognitions",
    badgeColor: "from-indigo-500 to-cyan-400",
    items: [
      { name: "Simpplr Rising Star Award", date: "2025–26" },
      { name: "Simpplr Spirit Award & Hidden Gem", date: "2025–26" },
      { name: "Galactic Gratitude & Promoted from SDE Intern (15+ Prod Services)", date: "2025" },
    ],
  },
  {
    id: "competitive-coding",
    provider: "Competitive Coding & DSA",
    badgeColor: "from-amber-500 to-orange-500",
    items: [
      {
        name: "1,000+ DSA Problems Solved (800+ LeetCode, Max Rating 1719)",
        date: "LeetCode",
        credentialUrl: "https://leetcode.com/u/PrashantBG2301/",
      },
      {
        name: "Global Rank 1,090 — TCS CodeVita Season 12",
        date: "Global",
      },
      {
        name: "HackerRank Problem Solving & Language Badges",
        date: "HackerRank",
        credentialUrl: "https://www.hackerrank.com/profile/cseltfw2301",
      },
    ],
  },
  {
    id: "engineering-scale",
    provider: "Production Scale & Quality",
    badgeColor: "from-emerald-500 to-teal-400",
    items: [
      { name: "30M+ Weekly Requests Optimized (MongoDB Atlas Search)", date: "Scale" },
      { name: "2,000+ Automated E2E Regression Cases (Playwright)", date: "Quality" },
      { name: "~40% CI/CD Pipeline Speedup (Docker Buildx & Jenkins)", date: "DevOps" },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Recognized with Simpplr Rising Star, Spirit Award, Hidden Gem, and Galactic Gratitude for high-ownership delivery across 15+ production services.",
    name: "Simpplr Engineering",
    role: "Production Impact & Recognitions",
    relationship: "Associate Software Engineer",
    date: "2025–2026",
  },
  {
    id: "t2",
    quote:
      "Expanded automated regression coverage to 2,000+ Playwright cases while cutting CI/CD build and deployment times by ~40% with Docker Buildx and Jenkins.",
    name: "Quality & DevOps Impact",
    role: "CI/CD, Snyk & SonarQube Compliance",
    relationship: "Multi-Tenant SaaS",
    date: "2025–2026",
  },
  {
    id: "t3",
    quote:
      "Strong algorithmic problem-solving foundation with 1,000+ DSA problems solved, 800+ on LeetCode (1719 max rating), and Global Rank 1,090 in TCS CodeVita Season 12.",
    name: "Algorithmic Rigor",
    role: "Competitive Programming",
    relationship: "LeetCode & CodeVita",
    date: "Verified",
  },
];

export const MARQUEE_TECH = [
  "Node.js",
  "TypeScript",
  "NestJS",
  "Express.js",
  "ReactJS",
  "Next.js",
  "MongoDB Atlas",
  "Apache Kafka",
  "Redis",
  "Kubernetes",
  "Docker",
  "Playwright",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Grafana",
];
