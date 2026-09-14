export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  live: string;
  repo: string;
  extraLive?: { label: string; href: string };
  extraRepo?: { label: string; href: string };
  stack: string[];
  problem: string;
  built: string;
  proof: string;
  next: string;
};

export const projects: Project[] = [
  {
    slug: "axiom",
    name: "Axiom desk",
    oneLiner:
      "Living front desk for a shop: halo assistant, book, and an owner board — retargeted per client from one config file.",
    live: "https://axiom-business-template.vercel.app",
    repo: "https://github.com/rankbotaiapp-byte/axiom-business-template",
    extraLive: { label: "Scout", href: "https://axiom-scout-indol.vercel.app" },
    extraRepo: { label: "Scout repo", href: "https://github.com/rankbotaiapp-byte/axiom-scout" },
    stack: ["Next.js", "TypeScript", "Vercel"],
    problem: "Local shops lose after-hours calls and run a dead brochure site.",
    built:
      "Shop page, services, Ask Axiom halo, book-now flow, and a PIN owner desk. Scout searches a city, scores the shop, and emits business.ts so a new demo is a paste + photos + deploy.",
    proof:
      "Live Northline demo. Live Scout for Jackson + Josephine County. Client clones (Irish Ink, Foley Fades) use the same template.",
    next: "One paying shop on the template for a dated 14-day trial.",
  },
  {
    slug: "replic8",
    name: "Replic8",
    oneLiner: "Photo-to-part tool: scan an object, repair a missing piece, or describe a custom part.",
    live: "https://replic8.vercel.app",
    repo: "https://github.com/rankbotaiapp-byte/replic8",
    stack: ["Next.js", "TypeScript"],
    problem: "A broken or missing part usually means a full replacement or a guess in CAD.",
    built:
      "Three modes on a Next.js app — scan and replicate, repair from photos and measurements, vision mode from a description.",
    proof: "Live app on Vercel. Treat as an in-progress technical slice, not a finished marketplace.",
    next: "One closed loop: photo in, downloadable mesh out, documented in the README.",
  },
  {
    slug: "money-recovery-hub",
    name: "Money Recovery Hub",
    oneLiner: "One place to check unclaimed property, open settlements, and federal grants.",
    live: "https://grant-locator.vercel.app",
    repo: "https://github.com/rankbotaiapp-byte/grant-locator",
    stack: ["JavaScript", "Next.js", "Vercel"],
    problem: "People leave money on the table because the official portals are split across states and agencies.",
    built:
      "Unclaimed-property checklists and claim portals, class-action settlement browser, grant finder with a first-draft narrative assistant.",
    proof: "Live at grant-locator.vercel.app as Money Recovery Hub.",
    next: "Tighten one state path (Oregon) end to end and cut the extra chrome.",
  },
  {
    slug: "shear-skill",
    name: "Shear Skill",
    oneLiner: "Live shop site — proof the same desk pattern ships for a named business.",
    live: "https://shear-skill-barber.vercel.app",
    repo: "https://github.com/rankbotaiapp-byte/shear-skill-barber",
    stack: ["JavaScript", "Vercel"],
    problem: "A barber shop needs a page owners can send people to, not a GitHub repo.",
    built:
      "Deployed shop site from the local-business series. Same job as the Axiom clones: name, services, a URL that loads on a phone.",
    proof: "Live at shear-skill-barber.vercel.app.",
    next: "Rebuild this one on axiom-business-template so the portfolio shows template → client in one pair.",
  },
];

export const stack = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React",
  "Tailwind",
  "Vercel",
  "HTML / CSS",
];
