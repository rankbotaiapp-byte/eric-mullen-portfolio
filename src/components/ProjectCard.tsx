import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-cyan-400/20 bg-[#0c1116]/80 p-5 shadow-halo sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-medium tracking-tight text-ink">
            {project.name}
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
            {project.oneLiner}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/30 px-3 py-1 text-halo-2 hover:bg-cyan-400/10"
          >
            Live
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-3 py-1 text-muted hover:text-ink"
          >
            Code
          </a>
          {project.extraLive ? (
            <a
              href={project.extraLive.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/30 px-3 py-1 text-halo-2 hover:bg-cyan-400/10"
            >
              {project.extraLive.label}
            </a>
          ) : null}
          {project.extraRepo ? (
            <a
              href={project.extraRepo.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-muted hover:text-ink"
            >
              {project.extraRepo.label}
            </a>
          ) : null}
        </div>
      </div>

      <dl className="mt-5 grid gap-4 text-sm leading-6 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-halo-1">
            Problem
          </dt>
          <dd className="mt-1 text-ink/90">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-halo-1">
            Built
          </dt>
          <dd className="mt-1 text-ink/90">{project.built}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-halo-1">
            Proof
          </dt>
          <dd className="mt-1 text-ink/90">{project.proof}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-halo-1">
            Next
          </dt>
          <dd className="mt-1 text-ink/90">{project.next}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
