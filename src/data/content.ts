export interface Milestone {
  title: string;
  organization: string;
  period: string;
  date: string;
  description: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
}

export const intro = {
  headline: "Pablo Deeleman",
  subtitle: "UI Frontend Architect",
  text: "25+ years building high-impact, scalable web applications at the intersection of branding, UX, and frontend engineering. Leading UX teams, scaling Design Systems, and shipping platforms used by millions. Formerly at Twilio, Dynatrace, Red Hat, Gameloft...",
};

export const experience: Milestone[] = [
  {
    title: "Marketing Programs Manager",
    organization: "Energy Sistem",
    period: "1998–2000",
    date: "1998-01-01",
    description:
      'Managed the marketing team and led promotional campaigns. Spearheaded the creation of the "Energy Sistem" brand for computer peripherals — a seed project that grew into one of Spain\'s most recognized electronics brands. First foray into designing web interfaces.',
  },
  {
    title: "UI Designer & Front-End Developer",
    organization: "Trymedia Systems",
    period: "2000–2001",
    date: "2000-06-01",
    description:
      "Designed and crafted the online presence for ActiveMARK, Trymedia's flagship DRM product, in Mountain View, California. Created web portals, multimedia presentations, and interactive proof-of-concepts that helped pave the way for the company's acquisition by Macrovision.",
  },
  {
    title: "Founder & FullStack UI Developer",
    organization: "KOALAB",
    period: "2001–2011",
    date: "2001-06-01",
    description:
      "Co-founded an interactive agency specializing in e-commerce solutions for the hospitality industry. Defined UX strategy and technical direction for all client projects — from booking engines to corporate websites — designing and implementing UIs on HTML, CSS, JavaScript, and ASP.NET.",
  },
  {
    title: "Senior UX Engineer",
    organization: "Dreamstar Cash",
    period: "2011–2013",
    date: "2011-01-01",
    description:
      "Led UI/UX design and implementation for high-traffic web projects serving 4+ million daily users. Pivoted into a FullStack JavaScript role and built the company's first mobile web app on Node.js and Express, doubling site portfolio traffic.",
  },
  {
    title: "Senior Frontend Engineer",
    organization: "Casumo",
    period: "2013–2015",
    date: "2013-06-01",
    description:
      "Contributed to the EGR-awarded social gambling platform in Malta, developing SASS and JavaScript modules and advanced web components on a complex JavaScript monolith using Knockout.js and Durandal, while contributing to its overall UI/UX vision.",
  },
  {
    title: "Senior Frontend Engineer",
    organization: "Gameloft",
    period: "2015–2016",
    date: "2015-06-01",
    description:
      "Built internal JavaScript tools for the Game Design and HR teams at Gameloft Barcelona. Led the company's migration to ES6 and developed projects using Babel, Backbone, D3, Three.js, and Node.",
  },
  {
    title: "Lead Frontend Engineer",
    organization: "We Are Blue Orange",
    period: "2016–2017",
    date: "2016-06-01",
    description:
      "Co-founding employee who led the front-end department, designing reactive architectures with TypeScript, Angular, RxJS, and Redux. Architected and shipped the UI engine for flagship casino products Karjala Kasino and Agent Spinner, then onboarded a team to continue development.",
  },
  {
    title: "Senior Frontend Engineer",
    organization: "Red Hat",
    period: "2017–2018",
    date: "2017-06-01",
    description:
      "Contributed components and services to JBoss Fuse, an enterprise API integration platform built on Angular. Engineered a Redux state management layer with NgRX and a custom i18n engine for product localization.",
  },
  {
    title: "Senior Frontend Engineer",
    organization: "Dynatrace",
    period: "2018–2021",
    date: "2018-06-01",
    description:
      "Designed modular UI component architectures in Angular and React for Dynatrace's monitoring suite. Led the architectural design of the Session Replay UI layer and its web rendering engine. Contributed to Dynatrace's next-generation Design System using React and Storybook.",
  },
  {
    title: "Staff Frontend Engineer",
    organization: "The Hotels Network",
    period: "2021–2022",
    date: "2021-01-01",
    description:
      "Core member of the Agent team, building the monitoring script consumed by 12,000+ hotel websites worldwide. Developed JavaScript and Vue.js-powered widgets dynamically injected at runtime to boost hotel conversion rates through AI-driven targeting.",
  },
  {
    title: "Staff Frontend Engineer",
    organization: "Twilio",
    period: "2022–2024",
    date: "2022-01-01",
    description:
      "Contributed to the Web Platform team, improving Developer Experience for 20+ teams maintaining 700+ apps. Led implementation of the UI and Auth layers for Twilio Admin. Built projects with Nx, React, Redux, TypeScript, and Twilio Paste.",
  },
  {
    title: "Visiting Lecturer",
    organization: "Harbour.Space University",
    period: "2022–2025",
    date: "2022-09-01",
    description:
      'Taught "Design Systems for Interactive Applications" as part of the core curriculum for Interaction Design and Front-end Engineering at Harbour.Space University\'s Bachelor and Master programs, guiding students from research and design to implementation.',
  },
  {
    title: "Frontend Architect",
    organization: "GitKraken",
    period: "2024–2025",
    date: "2024-01-01",
    description:
      "Served as Frontend Architecture Consultant, improving software architecture and enhancing GitKraken Desktop — a tool used by 25K+ developers across 100K organizations. Focused on performance, scalability, and developer experience.",
  },
  {
    title: "Staff Product Engineer",
    organization: "Nory",
    period: "2025–Present",
    date: "2025-01-01",
    description:
      "Leading Nory's most critical frontend challenges, driving complex React and TypeScript projects across multiple teams. Focused on web frontend reliability, scalability, and the internal Design System as a force-multiplier for developer experience.",
  },
];

export const projects: Project[] = [
  {
    name: "Spaghettify",
    url: "https://github.com/deeleman/spaghettify",
    description:
      "Open-source TypeScript library that transforms static pages into single-page applications with zero dependencies.",
  },
  {
    name: "GitSquid",
    url: "https://github.com/deeleman/gitsquid",
    description:
      "Desktop app built with TypeScript for navigating and managing GitHub issues across repositories.",
  },
  {
    name: "Learning Angular 2",
    url: "https://www.amazon.com/Learning-Angular-2-Pablo-Deeleman/dp/1785882074",
    description:
      "Published by Packt. Helped thousands of developers master the Angular framework and TypeScript ecosystem.",
  },
  {
    name: "Learning Angular",
    url: "https://www.packtpub.com/product/learning-angular-third-edition/9781839210662",
    description:
      "Third edition covering modern Angular, reactive patterns, and enterprise-grade application architecture.",
  },
];

export const skills: Skill[] = [
  { name: "Design Systems", description: "Sound experience on implementing scalable UI libraries" },
  { name: "React", description: "Modern UI development with React up to v19" },
  { name: "TypeScript & JavaScript", description: "Type-safe development with full-stack expertise" },
  { name: "AI Engineering", description: "LLMs, Agents design, AI-driven tooling" },
  { name: "Angular", description: "Enterprise-grade apps" },
  { name: "JavaScript", description: "Full-stack expertise" },
  { name: "State Management", description: "Redux, RxJS, Jotai, Zustand..." },
  { name: "TailwindCSS & SASS", description: "Styling architecture" },
  { name: "Node.js", description: "Server-side platforms with Express, NestJS..." },
];

export const contact = {
  email: "deeleman@gmail.com",
  github: "https://github.com/deeleman",
  website: "https://uiux.es",
};

export const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
