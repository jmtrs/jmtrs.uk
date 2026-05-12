export type Locale = "en" | "es";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "José Miguel Torres Hernández",
  jobTitle: "Senior Software Engineer",
  email: "mailto:jmtrs@proton.me",
  sameAs: ["https://github.com/jmtrs", "https://www.linkedin.com/in/jmtrs/"],
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export type Action = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type CvTechCategory = {
  name: string;
  items: string[];
};

export type CvSpokenLanguage = {
  name: string;
  level: string;
};

export type CvCertification = {
  name: string;
  detail: string;
};

export type CvEducation = {
  degree: string;
  school: string;
  period: string;
};

export type CvKeyStrength = {
  title: string;
  description: string;
};

export type CvFocusItem = {
  title: string;
  description: string;
};

export type CvExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  roleNote?: string;
  bullets: string[];
};

export type CvCopy = {
  headline: string;
  profile: string[];
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  techStack: CvTechCategory[];
  spokenLanguages: CvSpokenLanguage[];
  keyStrengths: CvKeyStrength[];
  experience: CvExperienceItem[];
  focus: CvFocusItem[];
  certifications: CvCertification[];
  education: CvEducation;
  profileFit: string[];
  labels: {
    contact: string;
    techStack: string;
    spokenLanguages: string;
    profile: string;
    keyStrengths: string;
    experience: string;
    experienceContinued: string;
    focus: string;
    certifications: string;
    education: string;
    profileFit: string;
    links: string;
    eduCertLang: string;
    page1: string;
    page2: string;
  };
};

export type SiteCopy = {
  pageTitle: string;
  description: string;
  ogLocale: string;
  languageSwitcherLabel: string;
  menuLabel: string;
  nav: NavItem[];
  headerCta: string;
  headerCtaHref: string;
  themeLabel: string;
  skipToContent: string;
  hero: {
    title: string[];
    intro: string;
    summary: string;
    actions: Action[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    closeLabel: string;
    links: ContactLink[];
  };
  footer: string;
  footerInterests: string;
};
