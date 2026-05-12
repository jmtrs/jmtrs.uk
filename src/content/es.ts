import type { SiteCopy, CvCopy } from "./types";

export const web: SiteCopy = {
  pageTitle: "José Miguel Torres Hernández | Senior Software Engineer",
  description:
    "Senior software engineer con trabajo en backend, frontend, entrega segura y flujos prácticos de ingeniería asistida por IA.",
  ogLocale: "es_ES",
  languageSwitcherLabel: "Selector de idioma",
  menuLabel: "Menú",
  nav: [],
  headerCta: "CV",
  headerCtaHref: "/cv/jose-miguel-torres-hernandez-cv-es.pdf",
  themeLabel: "Tema",
  skipToContent: "Saltar al contenido",
  hero: {
    title: ["Hola, soy Josemi."],
    intro:
      "Soy Ingeniero de Software Senior en el sureste de España. Cuento con más de 10 años de experiencia en backend, frontend y APIs. Trabajo sobre todo con Java, Node.js, Python, React y ahora Rust 🦀.",
    summary:
      "También ayudo a equipos de ingeniería a sacar partido real a las herramientas de IA, definiendo cómo integrarlas en el día a día con flujos claros, buenas prácticas y control técnico.",
    actions: [
      {
        href: "/cv/jose-miguel-torres-hernandez-cv-es.pdf",
        label: "Ver CV",
        variant: "primary",
      },
      {
        href: "#contact-modal",
        label: "Contacto",
        variant: "secondary",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title:
      "Disponible para conversaciones sobre product engineering, entrega segura y adopción de IA.",
    intro:
      "Si quieres hablar de un rol, una colaboración o una conversación técnica, estas son las mejores vías para contactarme.",
    closeLabel: "Cerrar modal de contacto",
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
  footer: "Desde la Vega Baja con ❤️ José Miguel Torres Hernández",
  footerInterestsLabel: "Aficiones",
  footerInterests: [
    "código",
    "basket",
    "viajes",
    "huerta",
    "coches",
    "herramientas",
  ],
};

export const cv: CvCopy = {
  headline:
    "Senior Software Engineer | AI Enablement, Backend, Full-Stack, Secure Delivery",
  profile: [
    "Senior Software Engineer con más de 10 años de experiencia en product engineering, backend, full-stack y APIs. Base sólida en Java y Spring Boot, complementada con Node.js, NestJS, Python, FastAPI, React, Next.js, Vue, Angular, TypeScript, GraphQL y tooling orientado a Rust.",
    "Combino entrega de software enterprise con Secure SDLC, Application Security, mentoring y mejoras de developer productivity. Aplico desarrollo asistido por LLMs, AI coding workflows, automatización, documentación e instrucciones de repositorio para acelerar equipos sin perder control técnico, y también trabajo con tooling en Rust y apps desktop multiplataforma cuando aporta valor.",
  ],
  contact: {
    phone: "Tel. · disponible bajo solicitud",
    email: "jmtrs@proton.me",
    location: "Valencia, España",
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
      name: "Entrega",
      items: [
        "CI/CD",
        "Docker",
        "Kubernetes",
        "AWS (EKS)",
        "Azure (AKS)",
        "GCP (GKE)",
        "observabilidad",
        "testing",
        "soporte a releases",
      ],
    },
    {
      name: "Seguridad",
      items: [
        "Secure SDLC",
        "Application Security",
        "autenticación",
        "autorización",
        "code reviews",
      ],
    },
    {
      name: "IA & Tooling",
      items: [
        "Desarrollo asistido por LLMs",
        "AI coding workflows",
        "developer productivity",
        "automatización",
        "instrucciones de repositorio",
        "tooling con Rust",
        "apps desktop multiplataforma",
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
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2, competencia profesional" },
    { name: "Valenciano", level: "Elemental, JQCV" },
  ],
  keyStrengths: [
    {
      title: "Backend y APIs",
      description:
        "Diseño y entrega de servicios, integraciones y software enterprise con foco fuerte en backend.",
    },
    {
      title: "Entrega full-stack",
      description:
        "Capacidad para cubrir backend, frontend y APIs a lo largo de todo el ciclo de vida.",
    },
    {
      title: "Adopción de IA",
      description:
        "Flujos asistidos por LLMs, AI coding workflows y documentación práctica para equipos técnicos.",
    },
    {
      title: "Entrega segura",
      description:
        "Secure SDLC, AppSec, mentoring, automatización y preparación para producción.",
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "SNGULAR",
      location: "Remoto",
      period: "Jul 2021 - Actualidad",
      roleNote:
        "Rol senior en backend y full-stack para software enterprise, entrega segura, enablement técnico y adopción práctica de IA.",
      bullets: [
        "Diseño y entrega de software enterprise en backend y full-stack, construyendo servicios Java y Spring Boot, APIs, integraciones frontend y componentes orientados a plataforma para contextos técnicos y de negocio exigentes.",
        "Contribuciones sobre Node.js, NestJS, Python y FastAPI cuando el producto o el cliente lo requiere, manteniendo foco en arquitectura pragmática, mantenibilidad y calidad de código.",
        "Responsabilidad sobre tramos completos de delivery: diseño técnico, implementación, testing, code reviews, documentación, CI/CD, soporte a releases y preparación para producción.",
        "Refuerzo de entrega segura mediante autenticación, autorización, Secure SDLC, revisiones de Application Security y reducción de riesgos operativos y de mantenibilidad.",
        "Enablement técnico y developer productivity: mentoring, material de onboarding, estándares de código, documentación reutilizable e instrucciones de repositorio para acelerar equipos, reduciendo fricciones de incorporación y acelerando la adopción de AI coding workflows.",
        "Adopción práctica de IA con desarrollo asistido por LLMs, AI coding workflows, automatización y soporte documental para mejorar productividad sin perder control técnico.",
        "Desarrollo de tooling interno con Rust para CLI y automatización de flujos de desarrollo, complementado con trabajo en tooling y apps desktop multiplataforma fuera del contexto principal.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "nexum AG",
      period: "Mar 2019 - Jul 2021",
      bullets: [
        "Desarrollo de aplicaciones frontend en producción con React, Next.js y TypeScript para proyectos como thesting.com y manor.ch, con foco en mantenibilidad, rendimiento e implementación limpia.",
        "Migración y construcción sobre Next.js con integración de Apollo GraphQL, consiguiendo mejoras aproximadas de ~2 s en carga y reforzando SEO y experiencia de usuario.",
        "Traducción de requisitos de producto y UX a interfaces mantenibles, coordinando decisiones de arquitectura web con equipos backend y producto.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Proyectos independientes",
      period: "2015 - 2019",
      bullets: [
        "Actividad freelance paralela entre 2015 y 2019, compaginada con la etapa formativa y la transición a entornos profesionales.",
        "Entrega de proyectos web end-to-end: implementación, despliegue, comunicación con cliente, personalización de CMS y mejoras iterativas para múltiples clientes.",
        "Trabajo en frontend y backend con React, Redux y REST APIs; C# con ASP.NET y PHP con WordPress, Joomla y Laravel, incluyendo personalización de CMS, SEO, rendimiento, migraciones y mejoras orientadas a PWA.",
      ],
    },
  ],
  focus: [
    {
      title: "AI enablement y developer productivity",
      description:
        "Desarrollo asistido por LLMs, AI coding workflows, automatización, documentación e instrucciones de repositorio aplicadas de forma práctica.",
    },
    {
      title: "Backend y APIs",
      description:
        "Java, Spring Boot, Node.js, NestJS, Python, FastAPI, REST APIs y GraphQL para ejecución orientada a producto.",
    },
    {
      title: "Entrega segura",
      description:
        "Secure SDLC, autenticación, autorización, Application Security, code reviews y preparación para producción.",
    },
    {
      title: "Rust, tooling y desktop",
      description:
        "CLI y automatización con Rust, más trabajo puntual en apps desktop multiplataforma como capacidad complementaria.",
    },
  ],
  certifications: [
    { name: "PSM I", detail: "Professional Scrum Master, Scrum.org, Nov 2025" },
    { name: "Vault Fundamentals", detail: "Thought Machine, Mar 2022" },
  ],
  education: {
    degree: "Grado en Ingeniería de Software y Tecnologías de la Información",
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
    contact: "Contacto",
    techStack: "Stack técnico",
    spokenLanguages: "Idiomas",
    profile: "Perfil",
    keyStrengths: "Fortalezas clave",
    experience: "Experiencia profesional",
    experienceContinued: "Experiencia profesional, continuación",
    focus: "Foco técnico seleccionado",
    certifications: "Certificaciones",
    education: "Formación",
    profileFit: "Encaje",
    links: "Enlaces",
    eduCertLang: "Formación, certificaciones e idiomas",
    page1: "Página 1 / 2",
    page2: "Página 2 / 2",
  },
};
