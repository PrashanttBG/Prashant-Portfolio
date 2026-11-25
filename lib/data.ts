export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: "Full-Stack" | "AI / ML" | "Distributed Systems" | "Chrome Extension";
  githubUrl?: string;
  liveUrl?: string;
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
  tagline: "Developer by Passion, Engineer by Precision.",
  roles: [
    "Full-Stack Software Engineer",
    "Java & Spring Boot Architect",
    "React & TypeScript Builder",
    "AI/ML & GenAI Integrator",
  ],
  bio: [
    "Software Engineer with a B.Tech in Computer Science & Engineering and a strong command of Java, Spring Boot, React, TypeScript, and MySQL.",
    "I engineer scalable full-stack platforms, real-time distributed systems, and AI-powered applications — from enterprise Kafka messaging platforms to Gemini-driven healthcare & productivity tools.",
    "Driven by curiosity and precision, I love turning complex real-world problems into clean, resilient, user-centric software.",
  ],
  location: "India",
  email: "baghelprashant180@gmail.com",
  phone: "+91 7060426377",
  githubUsername: "PrashanttBG",
  githubUrl: "https://github.com/PrashanttBG",
  linkedinUrl: "https://www.linkedin.com/in/iamprashant-baghel/",
  resumeUrl: "https://drive.google.com/", // Update with your Google Drive resume PDF link
  photoUrl: "/images/prashant-photo.jpg",
  availability: "Open to Software Engineering & Full-Stack Roles",
  stats: [
    { label: "Projects Shipped", value: 12, suffix: "+" },
    { label: "Tech Stack", value: 20, suffix: "+" },
    { label: "GitHub Repos", value: 12, suffix: "" },
    { label: "Coffee & Commits", value: 500, suffix: "+" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    accent: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Java 21", level: "Core" },
      { name: "Spring Boot 3", level: "Core" },
      { name: "Spring Security", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "Flask / FastAPI", level: "Intermediate" },
      { name: "RESTful APIs", level: "Core" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "Layout",
    accent: "from-cyan-500 to-teal-500",
    skills: [
      { name: "React.js", level: "Core" },
      { name: "Next.js", level: "Core" },
      { name: "TypeScript", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "Zustand / React Query", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Core" },
    ],
  },
  {
    id: "databases",
    title: "Data & Streaming",
    icon: "Database",
    accent: "from-violet-500 to-purple-500",
    skills: [
      { name: "MySQL", level: "Core" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Apache Kafka", level: "Proficient" },
      { name: "Redis", level: "Proficient" },
      { name: "Firestore", level: "Intermediate" },
      { name: "Sequelize / JPA", level: "Core" },
      { name: "Socket.IO", level: "Proficient" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML & GenAI",
    icon: "Brain",
    accent: "from-pink-500 to-rose-500",
    skills: [
      { name: "Gemini API", level: "Proficient" },
      { name: "OpenAI API", level: "Proficient" },
      { name: "LangChain", level: "Intermediate" },
      { name: "Vector Search", level: "Intermediate" },
      { name: "Vertex AI", level: "Intermediate" },
      { name: "OCR (Tesseract / PDFBox)", level: "Proficient" },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    accent: "from-amber-500 to-orange-500",
    skills: [
      { name: "Docker & Compose", level: "Proficient" },
      { name: "AWS (EC2, S3)", level: "Proficient" },
      { name: "Google Cloud Run", level: "Intermediate" },
      { name: "Git & GitHub", level: "Core" },
      { name: "Vercel", level: "Proficient" },
      { name: "Linux / Shell", level: "Proficient" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Testing",
    icon: "Wrench",
    accent: "from-emerald-500 to-green-500",
    skills: [
      { name: "IntelliJ IDEA", level: "Core" },
      { name: "VS Code", level: "Core" },
      { name: "Postman", level: "Core" },
      { name: "Jest", level: "Intermediate" },
      { name: "Maven", level: "Core" },
      { name: "Chrome Extensions", level: "Proficient" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "medora",
    title: "Medora",
    subtitle: "Smart AI Medical Companion",
    description:
      "Full-stack health-tech platform that organizes medical records, extracts lab report metrics with Apache PDFBox & Tesseract OCR, and generates AI-powered health insights and specialist recommendations.",
    tech: ["React.js", "Spring Boot", "MySQL", "Gemini API", "Tailwind CSS", "JWT", "Tesseract"],
    category: "AI / ML",
    githubUrl: "https://github.com/PrashanttBG/Medora",
    repoName: "Medora",
    image: "/images/projects/medora.svg",
    highlights: [
      "PDF & image medical report parsing with PDFBox + Tesseract",
      "AI-powered prescription & lab indicator breakdown via Gemini/OpenAI",
      "Role-secured Spring Boot REST API with JWT authentication",
    ],
    featured: true,
  },
  {
    id: "gupshup",
    title: "GupShup",
    subtitle: "Enterprise Kafka Chat Platform",
    description:
      "Production-grade microservices real-time messaging platform powered by Apache Kafka streams, Socket.IO WebSockets, PostgreSQL persistence, Redis caching, Dead Letter Queues, and a live Chart.js metrics dashboard.",
    tech: ["TypeScript", "Node.js", "Apache Kafka", "PostgreSQL", "Redis", "Socket.IO", "Docker"],
    category: "Distributed Systems",
    githubUrl: "https://github.com/PrashanttBG/GupShup",
    repoName: "GupShup",
    image: "/images/projects/gupshup.svg",
    highlights: [
      "Kafka producer/consumer pipeline with exponential backoff & DLQ",
      "Real-time WebSocket delivery & live system telemetry dashboard",
      "Containerized multi-service architecture with Docker Compose",
    ],
    featured: true,
  },
  {
    id: "supporthub",
    title: "SupportHub",
    subtitle: "Customer Support Messaging System",
    description:
      "Full-stack customer support agent portal featuring automatic urgency detection (Critical, High, Medium, Low), canned quick-reply templates, real-time conversation management, and full-text search.",
    tech: ["React 18", "TypeScript", "Spring Boot 3.2", "Zustand", "React Query", "Tailwind CSS"],
    category: "Full-Stack",
    githubUrl: "https://github.com/PrashanttBG/SupportHub",
    repoName: "SupportHub",
    image: "/images/projects/supporthub.svg",
    highlights: [
      "Keyword-based automatic urgency scoring & queue sorting",
      "Optimistic UI updates with React Query + Zustand state store",
      "CSV dataset import & instant search across customers and threads",
    ],
    featured: true,
  },
  {
    id: "mailbuddy",
    title: "MailBuddy",
    subtitle: "AI Gmail Auto-Reply Assistant",
    description:
      "Seamless Chrome Extension integrated directly into Gmail's compose toolbar that drafts context-aware professional email replies using Google's Gemini API and a secure Spring Boot backend.",
    tech: ["Java", "Spring Boot", "Gemini API", "Chrome Extension", "JavaScript", "REST API"],
    category: "Chrome Extension",
    githubUrl: "https://github.com/PrashanttBG/MailBuddy",
    repoName: "MailBuddy",
    image: "/images/projects/mailbuddy.svg",
    highlights: [
      "Native Gmail DOM injection for one-click AI reply generation",
      "Tone & context-aware prompt engineering via Gemini API",
      "Spring Boot proxy backend for secure API key management",
    ],
    featured: true,
  },
  {
    id: "yoga-pose",
    title: "Yoga Pose Recommender",
    subtitle: "Vector Search AI Wellness App",
    description:
      "Intelligent wellness web app that uses Firestore Vector Search, LangChain, and Gemini on Vertex AI to recommend personalized yoga postures based on user goals like back pain relief, stress, or flexibility.",
    tech: ["Python", "Flask", "Firestore", "LangChain", "Vertex AI", "Gemini"],
    category: "AI / ML",
    githubUrl: "https://github.com/PrashanttBG/yoga-pose-recommender",
    repoName: "yoga-pose-recommender",
    image: "/images/projects/yoga.svg",
    highlights: [
      "Semantic embeddings & Firestore composite vector index search",
      "Dataset enrichment pipeline powered by Gemini",
      "Deployable serverless backend on Google Cloud Run",
    ],
  },
  {
    id: "trinetra",
    title: "Trinetra",
    subtitle: "Industrial Employee & IPC Monitoring",
    description:
      "Web-based operations platform for small-to-medium industries to manage employees, company branches, and IP camera infrastructure with role-based access control and live dashboards.",
    tech: ["Spring Boot", "Spring Security", "Data JPA", "MySQL", "AWS", "JavaScript"],
    category: "Full-Stack",
    image: "/images/projects/trinetra.svg",
    highlights: [
      "Admin & Manager RBAC powered by Spring Security",
      "Company, employee, and IPC camera inventory management",
      "Deployed on AWS with MySQL relational persistence",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2025 — Present",
    role: "Software Engineer",
    organization: "Full-Stack & AI Systems",
    location: "India",
    type: "work",
    description:
      "Building scalable full-stack web applications, microservices, and AI-assisted developer & enterprise tools using Java, Spring Boot, React, TypeScript, and modern cloud infrastructure.",
    highlights: [
      "Architected event-driven messaging systems with Apache Kafka & Redis",
      "Built AI document analysis & email automation pipelines using Gemini & OpenAI",
      "Designed responsive, accessible React & Next.js interfaces with TypeScript",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "Kafka", "Docker"],
  },
  {
    id: "exp-2",
    period: "2021 — 2025",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Bachelor of Technology",
    location: "India",
    type: "education",
    description:
      "Graduated with a strong foundation in Data Structures & Algorithms, Object-Oriented Design, DBMS, Computer Networks, Operating Systems, and Software Engineering.",
    highlights: [
      "Built 10+ full-stack and AI/ML projects from concept to production architecture",
      "Solved algorithmic challenges in Java & C++ across DSA problem sets",
      "Participated in hackathons and cloud AI codelabs (Google Cloud & Vertex AI)",
    ],
    tech: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
  {
    id: "exp-3",
    period: "2024 — 2025",
    role: "Independent Builder & Open-Source Projects",
    organization: "GitHub (@PrashanttBG)",
    location: "Remote",
    type: "achievement",
    description:
      "Shipped end-to-end systems spanning healthcare AI (Medora), distributed streaming (GupShup), customer support triage (SupportHub), and browser productivity (MailBuddy).",
    highlights: [
      "Integrated Spring Boot backends with modern React/TypeScript frontends",
      "Containerized multi-service stacks using Docker & Docker Compose",
    ],
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "AWS", "Gemini API"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "google-cloud",
    provider: "Google Cloud & AI",
    badgeColor: "from-blue-500 to-cyan-400",
    items: [
      { name: "Vector Search & Gemini in Vertex AI Codelab", date: "2025" },
      { name: "Cloud Run Serverless Application Deployment", date: "2025" },
    ],
  },
  {
    id: "backend-arch",
    provider: "Java & Enterprise Systems",
    badgeColor: "from-indigo-500 to-violet-500",
    items: [
      { name: "Spring Boot 3 & Spring Security Microservices", date: "2025" },
      { name: "Apache Kafka & Distributed Event Streaming", date: "2025" },
    ],
  },
  {
    id: "frontend-cloud",
    provider: "Modern Web & Cloud",
    badgeColor: "from-emerald-500 to-teal-400",
    items: [
      { name: "React, TypeScript & Modern Frontend Architecture", date: "2025" },
      { name: "Docker Containerization & AWS Cloud Foundations", date: "2024" },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Prashant approaches engineering problems with remarkable clarity — from designing clean Spring Boot APIs to polishing the smallest UI interaction.",
    name: "Engineering Peer",
    role: "Full-Stack Developer",
    relationship: "Project Collaborator",
    date: "2025",
  },
  {
    id: "t2",
    quote:
      "His ability to pick up complex stacks like Apache Kafka, Docker, and Gemini AI and turn them into working, well-structured software stands out immediately.",
    name: "Technical Mentor",
    role: "Senior Software Engineer",
    relationship: "Mentor",
    date: "2025",
  },
  {
    id: "t3",
    quote:
      "Reliable, detail-oriented, and fast to ship. Prashant consistently bridges backend reliability with thoughtful user experience.",
    name: "Team Lead",
    role: "Software Architect",
    relationship: "Reviewer",
    date: "2025",
  },
];

export const MARQUEE_TECH = [
  "Java 21",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "Apache Kafka",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Gemini AI",
  "Python",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
];
