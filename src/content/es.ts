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
  footerInterests:
    "Aficiones: código · basket · viajes · huerta · coches · herramientas",
};

export const cv: CvCopy = {
  headline:
    "Senior Software Engineer | Full-Stack, Backend, Entrega Segura y Adopción de IA",
  profile: [
    "Senior Software Engineer con un perfil amplio de product engineering en backend, frontend, APIs, entrega segura y flujos de desarrollo habilitados por IA. Sólida base en Java y Spring Boot, complementada con Node.js, NestJS, Python, FastAPI, React, Vue, Angular, TypeScript y tooling orientado a Rust.",
    "Capaz de moverse desde arquitectura e implementación hasta testing, CI/CD, observabilidad, documentación, soporte a releases y preparación para producción. Enfoque en mantenibilidad, calidad de código, seguridad, mentoring y mejoras prácticas de productividad para equipos de desarrollo.",
  ],
  contact: {
    phone: "[REDACTED]",
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
        "fundamentos de Kubernetes",
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
        "automatización",
        "instrucciones de repositorio",
        "tooling con Rust",
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
      title: "Entrega full-stack",
      description:
        "Backend, frontend y APIs a lo largo de todo el ciclo de vida del software.",
    },
    {
      title: "Ingeniería segura",
      description:
        "Entrega con mentalidad AppSec, seguridad y preparación para producción.",
    },
    {
      title: "Adopción de IA",
      description:
        "Flujos asistidos por LLMs aplicados de forma práctica en equipos técnicos.",
    },
    {
      title: "Productividad técnica",
      description:
        "Mentoring, documentación, automatización y prácticas reutilizables de delivery.",
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "SNGULAR",
      location: "Remoto",
      period: "Jul 2021 - Actualidad",
      roleNote:
        "Rol senior en entrega de software empresarial, backend y full-stack, prácticas de ingeniería segura, mentoring técnico y adopción práctica de IA.",
      bullets: [
        "Entrega de software enterprise full-stack: diseño y desarrollo de servicios backend, APIs, integraciones frontend y componentes orientados a plataforma en contextos técnicos y de negocio exigentes.",
        "Trabajo con varios stacks backend: principalmente Java y Spring Boot, con contribuciones en Node.js, NestJS, Python y FastAPI según las necesidades del proyecto y del cliente.",
        "Contribución al ciclo completo de delivery: diseño técnico, implementación, testing, code reviews, documentación, flujos CI/CD, soporte a releases y preparación para producción.",
        "Mejora de la entrega segura: soporte en autenticación y autorización, prácticas Secure SDLC, revisiones de Application Security, reducción de riesgos y mejora de mantenibilidad.",
        "Soporte a la ejecución full-stack: colaboración en aplicaciones React, Vue, Angular y TypeScript, conectando requisitos de producto con implementación backend y frontend fiable.",
        "Mentoring y enablement de equipos: mejora de calidad de código, material de onboarding, prácticas de delivery y toma de decisiones técnicas en equipos internos y de cliente.",
        "Impulso de adopción práctica de IA: aplicación de desarrollo asistido por LLMs, AI coding workflows, automatización y soporte documental para mejorar la productividad de forma controlada y reutilizable.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "nexum AG",
      period: "Mar 2019 - Jul 2021",
      bullets: [
        "Desarrollo de aplicaciones frontend en producción: creación de interfaces complejas con React, Next.js y TypeScript, con foco en mantenibilidad, rendimiento e implementación limpia.",
        "Integración de flujos de datos modernos: consumo de datos mediante Apollo GraphQL y colaboración con equipos backend y producto en decisiones de arquitectura web.",
        "Entrega de experiencias UI fiables: traducción de requisitos de producto y UX a interfaces mantenibles para entornos productivos.",
        "Proyectos seleccionados: thesting.com y manor.ch.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Proyectos independientes",
      period: "2015 - 2019",
      bullets: [
        "Entrega de proyectos web end-to-end: implementación, despliegue, comunicación con cliente, personalización de CMS y mejoras iterativas para múltiples clientes.",
        "Trabajo en frontend y backend: desarrollo de aplicaciones con React y Redux, integración de REST APIs y contribuciones backend en C# y PHP.",
        "Mejora de productos digitales existentes: soporte a portales, flujos de reserva, migraciones, mejoras SEO, optimización de rendimiento y evolución hacia PWA.",
      ],
    },
  ],
  focus: [
    {
      title: "Entrega enterprise full-stack",
      description:
        "Servicios backend, integración frontend, APIs, documentación, testing, soporte a releases y ejecución orientada a producción.",
    },
    {
      title: "Ingeniería de software segura",
      description:
        "Secure SDLC, autenticación, autorización, mentalidad AppSec, code reviews, reducción de riesgos y mantenibilidad.",
    },
    {
      title: "Adopción de IA",
      description:
        "Desarrollo asistido por LLMs, AI coding tools, automatización de flujos, instrucciones de repositorio, documentación y mejoras de onboarding.",
    },
    {
      title: "Tooling orientado a Rust",
      description:
        "Exploración de CLI, tooling y automatización centrada en flujos fiables para desarrolladores, sin posicionarlo como especialización comercial principal.",
    },
    {
      title: "Liderazgo técnico",
      description:
        "Mentoring, documentación técnica, arquitectura pragmática, calidad de código y delivery cross-functional.",
    },
    {
      title: "Entrega cloud-ready",
      description:
        "Entornos contenerizados, flujos orientados a CI/CD, observabilidad y preparación para producción.",
    },
  ],
  certifications: [
    { name: "PSM I", detail: "Professional Scrum Master, Scrum.org, Nov 2025" },
    { name: "Vault Fundamentals", detail: "Thought Machine, Mar 2022" },
  ],
  education: {
    degree: "Ingeniería de Software / Tecnologías de la Información",
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
