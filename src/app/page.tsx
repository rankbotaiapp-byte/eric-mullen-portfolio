import { HaloMark } from "@/components/HaloMark";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { projects, stack } from "@/data/projects";

export default function Home() {
  const mailOk = profile.email !== "YOUR_EMAIL_HERE";
  const linkedOk = profile.linkedin !== "YOUR_LINKEDIN_URL_HERE";

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <header className="flex items-start gap-4">
        <HaloMark />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-halo-2">
            {profile.location}
          </p>
          <h1 className="mt-1 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>
      </header>

      <p className="mt-8 max-w-xl text-[17px] leading-7 text-ink/90">
        {profile.pitch}
      </p>

      <nav className="mt-6 flex flex-wrap gap-3 text-sm">
        {mailOk ? (
          <a
            className="rounded-full bg-gradient-to-r from-halo-1 via-halo-2 to-halo-3 px-4 py-2 text-[#061016]"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
        ) : (
          <span className="rounded-full border border-warn/40 px-4 py-2 text-xs text-warn">
            Set email in src/data/profile.ts
          </span>
        )}
        <a
          className="rounded-full border border-cyan-400/30 px-4 py-2 text-halo-2"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {linkedOk ? (
          <a
            className="rounded-full border border-white/15 px-4 py-2 text-muted hover:text-ink"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        ) : null}
        <a
          className="rounded-full border border-white/15 px-4 py-2 text-muted hover:text-ink"
          href={profile.resumeHref}
        >
          Resume
        </a>
      </nav>

      <section className="mt-14">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-halo-1">
          Work
        </h2>
        <p className="mt-2 text-sm text-muted">
          Four keepers. The rest of the GitHub account is client clones of the
          same desk — ask if you want the list.
        </p>
        <div className="mt-6 flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-halo-1">
          Stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-muted">
        {profile.name} · {profile.location}
        {mailOk ? (
          <>
            {" · "}
            <a className="text-halo-2" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </>
        ) : null}
      </footer>
    </div>
  );
}
