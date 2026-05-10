export type Locale = "en" | "es";

type NavItem = {
  href: string;
  label: string;
};

type Stat = {
  label: string;
  value: string;
};

type Action = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
};

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

type StrengthItem = {
  title: string;
  description: string;
};

type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type SiteCopy = {
  locale: Locale;
  pageTitle: string;
  description: string;
  ogLocale: string;
  languageName: string;
  switchToLabel: string;
  languageSwitcherLabel: string;
  nav: NavItem[];
  headerCta: string;
  headerCtaHref: string;
  themeLabel: string;
  darkLabel: string;
  lightLabel: string;
  skipToContent: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    summary: string;
    actions: Action[];
    stats: Stat[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ProjectItem[];
  };
  strengths: {
    eyebrow: string;
    title: string;
    items: StrengthItem[];
  };
  workingStyle: {
    eyebrow: string;
    title: string;
    bullets: string[];
  };
  downloads: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Action[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    links: ContactLink[];
  };
  footer: string;
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    locale: "en",
    pageTitle: "José Miguel Torres Hernández | Senior Software Engineer",
    description:
      "Senior software engineer working across backend, frontend, secure delivery, and practical AI-enabled engineering workflows.",
    ogLocale: "en_GB",
    languageName: "English",
    switchToLabel: "Ver en español",
    languageSwitcherLabel: "Language switcher",
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#strengths", label: "Strengths" },
      { href: "#contact", label: "Contact" },
    ],
    headerCta: "Download CV",
    headerCtaHref: "/cv/jose-miguel-torres-hernandez-cv-en.pdf",
    themeLabel: "Theme",
    darkLabel: "Dark",
    lightLabel: "Light",
    skipToContent: "Skip to content",
    hero: {
      eyebrow: "jmtrs.uk",
      title:
        "Senior software engineer building secure delivery systems and practical AI workflows.",
      intro:
        "I work across backend, frontend, APIs, release delivery, and AI-enabled engineering practices.",
      summary:
        "My focus is maintainability, clear execution, and helping teams ship with better technical control.",
      actions: [
        {
          href: "/cv/jose-miguel-torres-hernandez-cv-en.pdf",
          label: "Download CV (EN)",
          variant: "primary",
        },
        {
          href: "mailto:jmtorres15@gmail.com",
          label: "Email me",
          variant: "secondary",
        },
      ],
      stats: [
        { label: "Based in", value: "Valencia, Spain" },
        { label: "Focus", value: "Full-stack, backend, AI enablement" },
        { label: "Delivery", value: "Secure, production-oriented, pragmatic" },
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
        "These examples come directly from the current CV, but reframed for the web as concise cases rather than a document list.",
      items: [
        {
          title: "AI workflow enablement",
          description:
            "Supported practical LLM-assisted development through repository instructions, documentation, automation, and team-oriented workflow patterns.",
          tags: ["AI workflows", "Developer productivity", "Documentation"],
        },
        {
          title: "Enterprise full-stack delivery",
          description:
            "Built backend services, APIs, frontend integrations, and release-ready systems for demanding product and platform environments.",
          tags: ["Java", "Spring Boot", "Node.js", "Delivery"],
        },
        {
          title: "Frontend product platforms",
          description:
            "Delivered maintainable React and Next.js interfaces with GraphQL-based data flows, including work for thesting.com and manor.ch.",
          tags: ["React", "Next.js", "TypeScript", "GraphQL"],
        },
        {
          title: "Independent web products",
          description:
            "Shipped sites and apps end-to-end with deployment, CMS customization, SEO, performance improvements, and iterative product changes.",
          tags: ["End-to-end", "SEO", "Performance", "Client work"],
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
    footer: "Built for clarity, delivery, and long-lived maintainability.",
  },
  es: {
    locale: "es",
    pageTitle: "José Miguel Torres Hernández | Senior Software Engineer",
    description:
      "Senior software engineer con trabajo en backend, frontend, entrega segura y flujos prácticos de ingeniería asistida por IA.",
    ogLocale: "es_ES",
    languageName: "Español",
    switchToLabel: "View in English",
    languageSwitcherLabel: "Selector de idioma",
    nav: [
      { href: "#about", label: "Perfil" },
      { href: "#experience", label: "Experiencia" },
      { href: "#projects", label: "Proyectos" },
      { href: "#strengths", label: "Fortalezas" },
      { href: "#contact", label: "Contacto" },
    ],
    headerCta: "Descargar CV",
    headerCtaHref: "/cv/jose-miguel-torres-hernandez-cv-es.pdf",
    themeLabel: "Tema",
    darkLabel: "Oscuro",
    lightLabel: "Claro",
    skipToContent: "Saltar al contenido",
    hero: {
      eyebrow: "jmtrs.uk",
      title:
        "Senior software engineer orientado a entrega segura y flujos prácticos de trabajo con IA.",
      intro:
        "Trabajo entre backend, frontend, APIs, delivery técnico y prácticas de ingeniería asistida por IA.",
      summary:
        "Mi foco está en la mantenibilidad, la ejecución clara y ayudar a los equipos a entregar con mejor control técnico.",
      actions: [
        {
          href: "/cv/jose-miguel-torres-hernandez-cv-es.pdf",
          label: "Descargar CV (ES)",
          variant: "primary",
        },
        {
          href: "mailto:jmtorres15@gmail.com",
          label: "Escribirme",
          variant: "secondary",
        },
      ],
      stats: [
        { label: "Base", value: "Valencia, España" },
        { label: "Foco", value: "Full-stack, backend, adopción de IA" },
        {
          label: "Entrega",
          value: "Segura, pragmática y lista para producción",
        },
      ],
    },
    about: {
      eyebrow: "Perfil",
      title:
        "Cobertura técnica amplia, desde implementación hasta enablement de equipos.",
      paragraphs: [
        "Tengo un perfil amplio de product engineering en Java y Spring Boot, Node.js, Python, React, TypeScript, APIs, testing, CI/CD y preparación para producción.",
        "Me muevo con comodidad entre arquitectura, implementación, calidad de código, soporte a releases, documentación y mejoras prácticas de workflow para equipos de ingeniería.",
      ],
    },
    experience: {
      eyebrow: "Experiencia seleccionada",
      title:
        "Profundidad de delivery en software enterprise, productos frontend y trabajo web end-to-end.",
      intro:
        "El hilo conductor de estos roles es el mismo: entrega fiable, estándares claros de ingeniería y ejecución práctica a lo largo de todo el stack.",
      items: [
        {
          role: "Senior Software Engineer",
          company: "SNGULAR",
          location: "Remoto",
          period: "Jul 2021 - Actualidad",
          summary:
            "Entrega de software enterprise en backend y full-stack, prácticas de ingeniería segura, mentoring y adopción práctica de IA.",
          bullets: [
            "Entrego servicios backend, APIs, integraciones frontend y componentes orientados a plataforma en contextos técnicos exigentes.",
            "Trabajo principalmente con Java y Spring Boot, y también contribuyo en soluciones con Node.js, NestJS, Python y FastAPI.",
            "Refuerzo entrega segura, calidad de código, flujos CI/CD, preparación para release y workflows reutilizables asistidos por IA.",
          ],
        },
        {
          role: "Frontend Developer",
          company: "nexum AG",
          location: "Remoto",
          period: "Mar 2019 - Jul 2021",
          summary:
            "Trabajo frontend en producción con foco en mantenibilidad, rendimiento y ejecución fiable de producto.",
          bullets: [
            "Construí interfaces complejas con React, Next.js, TypeScript y Apollo GraphQL.",
            "Colaboré de cerca con equipos de backend y producto para convertir requisitos en sistemas mantenibles orientados al usuario.",
            "Participé en proyectos como thesting.com y manor.ch.",
          ],
        },
        {
          role: "Freelance Web Developer",
          company: "Proyectos independientes",
          location: "España",
          period: "2015 - 2019",
          summary:
            "Entrega end-to-end de proyectos web, desde implementación y despliegue hasta comunicación con cliente y mejora iterativa.",
          bullets: [
            "Trabajé en frontend y backend con React, Redux, REST APIs, C# y PHP.",
            "Me ocupé de SEO, mejoras de rendimiento, migraciones y evolución de productos digitales ya existentes.",
            "Aprendí a equilibrar restricciones de negocio con implementación mantenible desde el inicio.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos clave",
      title: "Trabajo que refleja cómo me gusta construir.",
      intro:
        "Estos ejemplos salen del CV actual, pero aquí están reordenados como casos breves en formato web.",
      items: [
        {
          title: "Enablement de workflows con IA",
          description:
            "Soporte a desarrollo asistido por LLMs mediante instrucciones de repositorio, documentación, automatización y patrones de trabajo reutilizables para equipos.",
          tags: ["IA", "Productividad", "Documentación"],
        },
        {
          title: "Entrega enterprise full-stack",
          description:
            "Construcción de servicios backend, APIs, integraciones frontend y sistemas preparados para release en entornos de producto y plataforma.",
          tags: ["Java", "Spring Boot", "Node.js", "Delivery"],
        },
        {
          title: "Plataformas frontend de producto",
          description:
            "Entrega de interfaces mantenibles en React y Next.js con flujos de datos vía GraphQL, incluyendo trabajo para thesting.com y manor.ch.",
          tags: ["React", "Next.js", "TypeScript", "GraphQL"],
        },
        {
          title: "Productos web independientes",
          description:
            "Entrega completa de webs y apps con despliegue, personalización de CMS, SEO, rendimiento y cambios iterativos de producto.",
          tags: ["End-to-end", "SEO", "Rendimiento", "Cliente"],
        },
      ],
    },
    strengths: {
      eyebrow: "Fortalezas técnicas",
      title: "Capacidades que aporto de forma más consistente.",
      items: [
        {
          title: "Backend y APIs",
          description:
            "Java, Spring Boot, Node.js, NestJS, Python, FastAPI, REST y GraphQL.",
        },
        {
          title: "Ejecución frontend",
          description:
            "React, Next.js, Vue, Angular, TypeScript y delivery de UI mantenible.",
        },
        {
          title: "Ingeniería segura",
          description:
            "Secure SDLC, autenticación, autorización, mentalidad AppSec, reducción de riesgos y preparación para producción.",
        },
        {
          title: "Adopción práctica de IA",
          description:
            "Desarrollo asistido por LLMs, workflows de coding, automatización y guías a nivel de repositorio.",
        },
        {
          title: "Sistemas de delivery",
          description:
            "Testing, CI/CD, observabilidad, soporte a releases y hábitos cloud-ready.",
        },
        {
          title: "Colaboración técnica",
          description:
            "Mentoring, documentación, arquitectura pragmática y delivery cross-functional.",
        },
      ],
    },
    workingStyle: {
      eyebrow: "Forma de trabajo",
      title: "Cómo suelo operar dentro de equipos de ingeniería.",
      bullets: [
        "Prefiero claridad antes que ceremonia y me interesan los estándares que la gente realmente puede seguir.",
        "Me importa la entrega segura y la preparación para producción, no solo sacar features.",
        "Me gusta mejorar workflows cuando el resultado es reutilizable, documentado y medible.",
        "Soy especialmente útil donde se cruzan delivery de producto, calidad de ingeniería y enablement práctico.",
      ],
    },
    downloads: {
      eyebrow: "Descargas",
      title: "Archivos del CV en ambos idiomas.",
      intro:
        "La web es el formato principal, pero el CV original sigue disponible como PDF descargable.",
      items: [
        {
          href: "/cv/jose-miguel-torres-hernandez-cv-en.pdf",
          label: "Descargar PDF en inglés",
          variant: "secondary",
        },
        {
          href: "/cv/jose-miguel-torres-hernandez-cv-es.pdf",
          label: "Descargar PDF en español",
          variant: "primary",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title:
        "Abierto a conversaciones sobre product engineering, entrega segura y adopción de IA.",
      intro:
        "Si quieres hablar de un rol, una colaboración o una conversación técnica, estas son las mejores vías para contactarme.",
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
    footer: "Construido para durar, explicar bien y entregar con control.",
  },
};
