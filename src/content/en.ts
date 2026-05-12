import type { SiteCopy, CvCopy } from "./types";

export const web: SiteCopy = {
  pageTitle: "José Miguel Torres Hernández | Senior Software Engineer",
  description:
    "Senior software engineer working across backend, frontend, secure delivery, and practical AI-enabled engineering workflows.",
  ogLocale: "en_GB",
  languageSwitcherLabel: "Language switcher",
  menuLabel: "Menu",
  nav: [],
  headerCta: "CV",
  headerCtaHref: "/cv/jose-miguel-torres-hernandez-cv-en.pdf",
  themeLabel: "Theme",
  skipToContent: "Skip to content",
  hero: {
    title: ["Hello, I'm Josemi."],
    intro:
      "I'm a Senior Software Engineer based in southeast Spain. I have over 10 years of experience as a developer working across backend, frontend, and APIs. I work mostly in Java, Node.js, Python, React, and now Rust 🦀.",
    summary:
      "I also help engineering teams get real value from AI tools by defining how to integrate them into daily workflows with clear processes, best practices, and technical control.",
    actions: [
      {
        href: "/cv/jose-miguel-torres-hernandez-cv-en.pdf",
        label: "Open CV",
        variant: "primary",
      },
      {
        href: "#contact-modal",
        label: "Contact",
        variant: "secondary",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title:
      "Open to conversations around product engineering, secure delivery, and AI enablement.",
    intro:
      "If you want to discuss a role, a consulting engagement, or a technical conversation, these are the best ways to reach me.",
    closeLabel: "Close contact modal",
    links: [
      {
        label: "Email",
        href: "mailto:jmtrs@proton.me",
        value: "jmtrs@proton.me",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jmtrs/",
        value: "linkedin.com/in/jmtrs",
      },
      {
        label: "GitHub",
        href: "https://github.com/jmtrs",
        value: "github.com/jmtrs",
      },
    ],
  },
  footer: "From Vega Baja with ❤️ José Miguel Torres Hernández",
  footerInterestsLabel: "Interests",
  footerInterests: ["code", "basketball", "travel", "garden", "cars", "tools"],
};

export const cv: CvCopy = {
  headline:
    "Senior Software Engineer | AI Enablement, Backend, Full-Stack, Secure Delivery",
  profile: [
    "Senior Software Engineer with 10+ years of experience across product engineering, backend, full-stack delivery and APIs. Strong Java and Spring Boot foundation, complemented by Node.js, NestJS, Python, FastAPI, React, Next.js, Vue, Angular, TypeScript, GraphQL and Rust-oriented tooling.",
    "I combine enterprise software delivery with Secure SDLC, Application Security, mentoring and developer productivity improvements. I apply LLM-assisted development, AI coding workflows, automation, documentation and repository instructions to help teams move faster without losing technical control, and I also work with Rust tooling and cross-platform desktop apps when it adds value.",
  ],
  contact: {
    phone: "Tel. · available on request",
    email: "jmtrs@proton.me",
    location: "Valencia, Spain",
    linkedin: "linkedin.com/in/jmtrs",
    github: "github.com/jmtrs",
  },
  techStack: [
    {
      name: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Node.js",
        "NestJS",
        "Python",
        "FastAPI",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      name: "Frontend",
      items: [
        "React",
        "Next.js",
        "Vue",
        "Angular",
        "TypeScript",
        "Apollo GraphQL",
      ],
    },
    {
      name: "Delivery",
      items: [
        "CI/CD",
        "Docker",
        "Kubernetes",
        "AWS (EKS)",
        "Azure (AKS)",
        "GCP (GKE)",
        "observability",
        "testing",
        "release support",
      ],
    },
    {
      name: "Security",
      items: [
        "Secure SDLC",
        "Application Security",
        "authentication",
        "authorization",
        "code reviews",
      ],
    },
    {
      name: "AI & Tooling",
      items: [
        "LLM-assisted development",
        "AI coding workflows",
        "developer productivity",
        "automation",
        "repository instructions",
        "Rust-oriented tooling",
        "cross-platform desktop apps",
        "GitHub Copilot",
        "Cursor",
        "Claude Code",
        "Claude",
        "GPT-4o",
        "Llama",
      ],
    },
  ],
  spokenLanguages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2, professional working proficiency" },
    { name: "Valencian", level: "Elementary, JQCV" },
  ],
  keyStrengths: [
    {
      title: "Backend and APIs",
      description:
        "Service, integration and enterprise delivery work with a strong backend core.",
    },
    {
      title: "Full-stack delivery",
      description:
        "Ability to cover backend, frontend and APIs across the full software lifecycle.",
    },
    {
      title: "AI enablement",
      description:
        "Practical LLM-assisted workflows, AI coding workflows and documentation support for engineering teams.",
    },
    {
      title: "Secure delivery",
      description:
        "Secure SDLC, AppSec, mentoring, automation and production readiness.",
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "SNGULAR",
      location: "Remote",
      period: "Jul 2021 - Present",
      roleNote:
        "Senior backend and full-stack role across enterprise software delivery, secure engineering, technical enablement and practical AI adoption.",
      bullets: [
        "Design and deliver enterprise software across backend and full-stack contexts, building Java and Spring Boot services, APIs, frontend integrations and platform-oriented components for demanding business environments.",
        "Contribute with Node.js, NestJS, Python and FastAPI when product and client needs require it, while keeping a pragmatic focus on architecture, maintainability and code quality.",
        "Own complete delivery slices: technical design, implementation, testing, code reviews, documentation, CI/CD, release support and production readiness.",
        "Strengthen secure delivery through authentication, authorization, Secure SDLC, Application Security reviews and operational risk reduction.",
        "Drive technical enablement and developer productivity through mentoring, onboarding material, reusable documentation, repository instructions and team-facing engineering standards, reducing onboarding friction and accelerating AI coding workflow adoption across teams.",
        "Apply practical AI enablement with LLM-assisted development, AI coding workflows, automation and documentation support to improve productivity without losing technical control.",
        "Built internal Rust tooling for CLI and developer workflow automation, complemented by additional work on tooling and cross-platform desktop apps outside the main role context.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "nexum AG",
      period: "Mar 2019 - Jul 2021",
      bullets: [
        "Built production frontend applications with React, Next.js and TypeScript for projects such as thesting.com and manor.ch, focusing on maintainability, performance and clean implementation.",
        "Delivered Next.js migrations and implementations with Apollo GraphQL integration, achieving roughly ~2 s loading improvements while strengthening SEO and user experience.",
        "Translated product and UX requirements into maintainable interfaces, collaborating with backend and product teams on web architecture decisions.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Independent Projects",
      period: "2015 - 2019",
      bullets: [
        "Parallel freelance activity between 2015 and 2019, alongside academic work and the transition into full professional environments.",
        "Delivered end-to-end web projects covering implementation, deployment, client communication, CMS customization and iterative improvements for multiple clients.",
        "Worked across frontend and backend with React, Redux and REST APIs; C# with ASP.NET and PHP with WordPress, Joomla and Laravel, including CMS customization, SEO, performance, migration and PWA-oriented improvements.",
      ],
    },
  ],
  focus: [
    {
      title: "AI enablement and developer productivity",
      description:
        "LLM-assisted development, AI coding workflows, automation, documentation and repository instructions applied in practical delivery contexts.",
    },
    {
      title: "Backend and APIs",
      description:
        "Java, Spring Boot, Node.js, NestJS, Python, FastAPI, REST APIs and GraphQL for product-oriented execution.",
    },
    {
      title: "Secure delivery",
      description:
        "Secure SDLC, authentication, authorization, Application Security, code reviews and production readiness.",
    },
    {
      title: "Rust, tooling and desktop",
      description:
        "Rust CLI and automation work, plus selective cross-platform desktop app work as a complementary capability.",
    },
  ],
  certifications: [
    { name: "PSM I", detail: "Professional Scrum Master, Scrum.org, Nov 2025" },
    { name: "Vault Fundamentals", detail: "Thought Machine, Mar 2022" },
  ],
  education: {
    degree:
      "Bachelor's Degree in Software Engineering and Information Technology",
    school: "Universidad Miguel Hernández de Elche",
    period: "2012 - 2018",
  },
  profileFit: [
    "AI Enablement / Developer Productivity",
    "Senior Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Platform-oriented Software Engineer",
    "Secure Software Engineering",
  ],
  labels: {
    contact: "Contact",
    techStack: "Technical Stack",
    spokenLanguages: "Languages",
    profile: "Profile",
    keyStrengths: "Key strengths",
    experience: "Professional experience",
    experienceContinued: "Professional experience, continued",
    focus: "Selected technical focus",
    certifications: "Certifications",
    education: "Education",
    profileFit: "Profile fit",
    links: "Links",
    eduCertLang: "Education, certifications & languages",
    page1: "Page 1 / 2",
    page2: "Page 2 / 2",
  },
};
