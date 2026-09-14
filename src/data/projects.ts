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
      "Live Northline demo. Live Scout for Jackson + Josephine County.",
    next: "One paying shop on the template for a dated 14-day trial.",
  },
  {
    slug: "z-point",
    name: "Z-Point",
    oneLiner:
      "Coherence instrument: timed session, spectrogram halo, narrator, one concrete action at close.",
    live: "https://github.com/rankbotaiapp-byte/eric-mullen-portfolio",
    repo: "https://github.com/rankbotaiapp-byte/eric-mullen-portfolio",
    stack: ["Android / web", "halo UI", "session timing"],
    problem: "Most manifestation apps end in a wish. Nothing lands in the calendar.",
    built:
      "Arrive → tune → hold with vibration and teal-cyan-blue halo → materialize one next action → close. Not a mood app. Not clinical.",
    proof:
      "Not on this GitHub account yet. Paste the public repo and live URL into src/data/projects.ts (slug z-point).",
    next: "Ship a public live URL so the Live button does not point at the portfolio repo.",
  },
  {
    slug: "boundaryloc",
    name: "BoundaryLoc",
    oneLiner: "Phone home-screen lock for a parcel or boundary — add to home screen, keep the pin on the lot.",
    live: "https://boundary-loc.vercel.app",
    repo: "https://github.com/rankbotaiapp-byte/BoundaryLoc",
    stack: ["HTML", "PWA", "Vercel"],
    problem: "Field work loses the lot when the map tab disappears under ten other apps.",
    built:
      "Installable page (Add to Home Screen) with a lock state so the boundary stays one tap away.",
    proof: "Live at boundary-loc.vercel.app. Repo BoundaryLoc.",
    next: "One sentence on the lock screen that names the parcel, not just LOCKED.",
  },
  {
    slug: "money-recovery-hub",
    name: "Money Recovery Hub",
    oneLiner:
      "One place to check unclaimed property, open settlements, and federal grants.",
    live: "https://grant-locator.vercel.app",
    repo: "https://github.com/rankbotaiapp-byte/grant-locator",
    stack: ["JavaScript", "Next.js", "Vercel"],
    problem:
      "Official portals are split across states and agencies.",
    built:
      "Unclaimed-property checklists and claim portals, class-action settlement browser, grant finder with a first-draft narrative assistant.",
    proof: "Live at grant-locator.vercel.app as Money Recovery Hub.",
    next: "Tighten one state path (Oregon) end to end.",
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
  "PWA",
];
