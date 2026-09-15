export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  githubHref?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Axiom",
    description:
      "A lightweight framework powering custom client scheduling, automated booking, and dispatch workflows for local business operators.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    href: "https://eric-mullen-portfolio.vercel.app",
    featured: true,
  },
  {
    title: "Scout",
    description:
      "A situational data and utility application designed for rapid resource monitoring, field data collection, and live reporting.",
    tags: ["React", "TypeScript", "REST APIs", "Tailwind CSS"],
    href: "https://eric-mullen-portfolio.vercel.app",
    featured: true,
  },
  {
    title: "Acoustic Mechanic Pro",
    description:
      "AI-driven diagnostic tool that analyzes engine sound frequencies to detect mechanical wear and predict motor failures before OBD-II alerts.",
    tags: ["AI / ML", "Audio Diagnostics", "Python", "React"],
    href: "https://eric-mullen-portfolio.vercel.app",
    featured: true,
  },
];
