import type { SiteCopy, CvCopy } from "./types";

export const web: SiteCopy = {
  locale: "en",
  pageTitle: "José Miguel Torres Hernández | Senior Software Engineer",
  description:
    "Senior software engineer working across backend, frontend, secure delivery, and practical AI-enabled engineering workflows.",
  ogLocale: "en_GB",
  languageName: "English",
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
      "I'm a Senior Software Engineer based in southeast Spain. I've been in this professionally since 2015, across backend, frontend, and APIs. I work mostly in Java, Node.js, Python, React, and now Rust 🦀.",
    summary:
      " I also help engineering teams adopt AI tooling in ways that actually work: not just using the tools, but designing the governance, workflows, and practices that make it sustainable.",
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
    stats: [
      { label: "Experience", value: "10+ years" },
      { label: "Stack", value: "Java · Node.js · Python · React" },
      { label: "Based in", value: "Southeast Spain" },
    ],
  },
  about: {
    eyebrow: "Profile",
    title:
      "Broad engineering coverage, from implementation to team enablement.",
    paragraphs: [
      "I have a broad product engineering profile across Java and Spring Boot, Node.js, Python, React, TypeScript, APIs, testing, CI/CD, and production readiness.",
      "I am comfortable moving between architecture, implementation, code quality, release support, documentation, and practical workflow improvements for engineering teams.",
    ],
  },
  experience: {
    eyebrow: "Selected experience",
    title:
      "Delivery depth across enterprise software, frontend products, and end-to-end web work.",
    intro:
      "The thread across these roles is the same: reliable delivery, clear engineering standards, and practical execution across the stack.",
    items: [
      {
        role: "Senior Software Engineer",
        company: "SNGULAR",
        location: "Remote",
        period: "Jul 2021 - Present",
        summary:
          "Enterprise software delivery across backend and full-stack work, secure engineering practices, mentoring, and practical AI enablement.",
        bullets: [
          "Deliver backend services, APIs, frontend integrations, and platform-oriented components in demanding technical contexts.",
          "Work mainly with Java and Spring Boot while also contributing to Node.js, NestJS, Python, and FastAPI solutions.",
          "Support secure delivery, code quality, CI/CD flows, release readiness, and reusable AI-assisted development workflows.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "nexum AG",
        location: "Remote",
        period: "Mar 2019 - Jul 2021",
        summary:
          "Production frontend work focused on maintainability, performance, and reliable product execution.",
        bullets: [
          "Built complex interfaces with React, Next.js, TypeScript, and Apollo GraphQL.",
          "Worked closely with backend and product teams to translate requirements into maintainable user-facing systems.",
          "Contributed to projects including thesting.com and manor.ch.",
        ],
      },
      {
        role: "Freelance Web Developer",
        company: "Independent projects",
        location: "Spain",
        period: "2015 - 2019",
        summary:
          "End-to-end delivery for web projects, from implementation and deployment to client communication and iterative improvement.",
        bullets: [
          "Built across frontend and backend with React, Redux, REST APIs, C#, and PHP.",
          "Handled SEO, performance improvements, migration work, and product evolution for existing digital properties.",
          "Learned to balance business constraints with maintainable implementation from day one.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Key projects",
    title: "Work that reflects how I like to build.",
    intro:
      "Selected work from the past 10 years across enterprise delivery, product frontend, and practical AI enablement.",
    items: [
      {
        title: "AI workflow enablement",
        description:
          "Built LLM-assisted development workflows at SNGULAR — repository instructions, automated documentation, prompt engineering patterns, and coding productivity tooling adopted by engineering teams.",
        tags: ["Python", "LLMs", "Prompt engineering", "Developer tooling"],
      },
      {
        title: "Enterprise full-stack delivery",
        description:
          "Delivered Java/Spring Boot backend services, APIs, and full-stack integrations for enterprise clients at SNGULAR. Covers CI/CD, secure SDLC, production readiness, and cross-stack execution.",
        tags: ["Java", "Spring Boot", "Node.js", "Secure SDLC"],
      },
      {
        title: "Frontend product platforms",
        description:
          "Production frontend work across e-commerce, retail, and fintech platforms for international clients. React, Next.js, TypeScript, and Apollo GraphQL — complex, data-rich interfaces delivered reliably to production.",
        tags: ["React", "Next.js", "TypeScript", "Apollo GraphQL"],
      },
      {
        title: "Independent web products",
        description:
          "End-to-end delivery for web clients — React frontends, REST API integrations, CMS setup, SEO improvements, performance optimization, and deployment across multiple independent projects.",
        tags: ["React", "REST APIs", "SEO", "End-to-end"],
      },
    ],
  },
  strengths: {
    eyebrow: "Technical strengths",
    title: "The capabilities I bring most consistently.",
    items: [
      {
        title: "Backend and API delivery",
        description:
          "Java, Spring Boot, Node.js, NestJS, Python, FastAPI, REST, and GraphQL.",
      },
      {
        title: "Frontend product execution",
        description:
          "React, Next.js, Vue, Angular, TypeScript, and maintainable UI delivery.",
      },
      {
        title: "Secure engineering",
        description:
          "Secure SDLC, authentication, authorization, AppSec awareness, risk reduction, and production readiness.",
      },
      {
        title: "AI enablement",
        description:
          "LLM-assisted development, practical coding workflows, automation, and repository-level guidance.",
      },
      {
        title: "Delivery systems",
        description:
          "Testing, CI/CD, observability, release support, and cloud-ready execution habits.",
      },
      {
        title: "Technical collaboration",
        description:
          "Mentoring, documentation, pragmatic architecture, and cross-functional delivery.",
      },
    ],
  },
  workingStyle: {
    eyebrow: "Working style",
    title: "How I tend to operate inside engineering teams.",
    bullets: [
      "I bias toward clarity over ceremony and prefer standards that people can actually follow.",
      "I care about secure delivery and production readiness, not just feature throughput.",
      "I like improving workflows when the result is reusable, documented, and measurable.",
      "I am most useful where product delivery, engineering quality, and practical enablement overlap.",
    ],
  },
  downloads: {
    eyebrow: "Downloads",
    title: "CV files in both languages.",
    intro:
      "The website is the primary format, but the original resume remains available as downloadable PDFs.",
    items: [
      {
        href: "/cv/jose-miguel-torres-hernandez-cv-en.pdf",
        label: "Download English PDF",
        variant: "primary",
      },
      {
        href: "/cv/jose-miguel-torres-hernandez-cv-es.pdf",
        label: "Download Spanish PDF",
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
        href: "mailto:jmtorres15@gmail.com",
        value: "jmtorres15@gmail.com",
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
  footerInterests:
    "Interests: code · basketball · travel · garden · cars · tools",
};

export const cv: CvCopy = {
  headline:
    "Senior Software Engineer | Full-Stack, Backend, Secure Delivery & AI Enablement",
  profile: [
    "Senior Software Engineer with a broad product engineering profile across backend, frontend, APIs, secure delivery and AI-enabled development workflows. Strong Java and Spring Boot background, complemented by Node.js, NestJS, Python, FastAPI, React, Vue, Angular, TypeScript and Rust-oriented tooling.",
    "Comfortable moving from architecture and implementation to testing, CI/CD, observability, documentation, release support and production readiness. Focused on maintainability, code quality, security, mentoring and practical developer productivity improvements.",
  ],
  contact: {
    phone: "[REDACTED]",
    email: "jmtorres15@gmail.com",
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
        "Kubernetes fundamentals",
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
        "automation",
        "repository instructions",
        "Rust-oriented tooling",
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
      title: "Full-stack delivery",
      description:
        "Backend, frontend and API work across the full software lifecycle.",
    },
    {
      title: "Secure engineering",
      description:
        "Security-aware delivery, AppSec mindset and production readiness.",
    },
    {
      title: "AI enablement",
      description: "Practical LLM-assisted workflows for engineering teams.",
    },
    {
      title: "Developer productivity",
      description:
        "Mentoring, documentation, automation and reusable delivery practices.",
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "SNGULAR",
      location: "Remote",
      period: "Jul 2021 - Present",
      roleNote:
        "Senior engineering role across enterprise software delivery, backend and full-stack development, secure engineering practices, technical mentoring and practical AI enablement.",
      bullets: [
        "Deliver enterprise software across the stack: design and build backend services, APIs, frontend integrations and platform-oriented components for demanding business and technical contexts.",
        "Work with multiple backend stacks: mainly Java and Spring Boot, while also contributing to Node.js, NestJS, Python and FastAPI solutions depending on project and client needs.",
        "Contribute to full lifecycle delivery: technical design, implementation, testing, code reviews, documentation, CI/CD workflows, release support and production readiness.",
        "Improve secure delivery: support authentication and authorization flows, Secure SDLC practices, Application Security reviews, risk reduction and maintainability improvements.",
        "Support full-stack execution: collaborate on React, Vue, Angular and TypeScript applications, connecting product requirements with reliable backend and frontend implementation.",
        "Mentor and enable teams: improve code quality, onboarding material, delivery practices and technical decision-making for internal and client-side teams.",
        "Drive practical AI enablement: apply LLM-assisted development, AI coding workflows, automation and documentation support to improve productivity in controlled and reusable ways.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "nexum AG",
      period: "Mar 2019 - Jul 2021",
      bullets: [
        "Built production frontend applications: developed complex interfaces using React, Next.js and TypeScript, with focus on maintainability, performance and clean implementation.",
        "Integrated modern data flows: consumed data through Apollo GraphQL and collaborated with backend and product teams on web architecture decisions.",
        "Delivered reliable UI experiences: translated product and UX requirements into maintainable interfaces for production environments.",
        "Selected projects: thesting.com and manor.ch.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Independent Projects",
      period: "2015 - 2019",
      bullets: [
        "Delivered end-to-end web projects: covered implementation, deployment, client communication, CMS customization and iterative improvements for multiple clients.",
        "Worked across frontend and backend: built React and Redux applications, integrated REST APIs and contributed backend work in C# and PHP.",
        "Improved existing digital products: supported portals, booking flows, migrations, SEO improvements, performance optimization and PWA-oriented enhancements.",
      ],
    },
  ],
  focus: [
    {
      title: "Full-stack enterprise delivery",
      description:
        "Backend services, frontend integration, APIs, documentation, testing, release support and production-oriented execution.",
    },
    {
      title: "Secure software engineering",
      description:
        "Secure SDLC, authentication, authorization, AppSec awareness, code reviews, risk reduction and maintainability.",
    },
    {
      title: "AI enablement",
      description:
        "LLM-assisted development, AI coding tools, workflow automation, repository instructions, documentation support and onboarding improvements.",
    },
    {
      title: "Rust-oriented tooling",
      description:
        "CLI/tooling exploration and automation work focused on reliable developer workflows, not positioned as primary commercial Rust specialization.",
    },
    {
      title: "Engineering leadership",
      description:
        "Mentoring, technical documentation, pragmatic architecture, code quality and cross-functional delivery.",
    },
    {
      title: "Cloud-ready delivery",
      description:
        "Containerized environments, CI/CD-oriented workflows, observability and production readiness practices.",
    },
  ],
  certifications: [
    { name: "PSM I", detail: "Professional Scrum Master, Scrum.org, Nov 2025" },
    { name: "Vault Fundamentals", detail: "Thought Machine, Mar 2022" },
  ],
  education: {
    degree: "Software Engineering / Information Technology",
    school: "Universidad Miguel Hernández de Elche",
    period: "2012 - 2018",
  },
  profileFit: [
    "Senior Software Engineer",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Platform-oriented Software Engineer",
    "AI Enablement / Developer Productivity",
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
