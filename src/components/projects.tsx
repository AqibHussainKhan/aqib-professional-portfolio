
import { useMemo, useState } from "react";
import {
  portfolioProjects,
  type ProjectCategory,
} from "../data/projects";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", "Web Apps", "Dashboards", "Portfolios"];

function Project() {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  const visibleProjects = useMemo(() => {
    const term = search.trim().toLowerCase();
    return portfolioProjects.filter((project) => {
      const inCategory = filter === "All" || project.category === filter;
      const searchable = [
        project.title,
        project.category,
        project.description,
        ...project.tech,
      ]
        .join(" ")
        .toLowerCase();
      return inCategory && searchable.includes(term);
    });
  }, [filter, search]);

  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-pink-400">
              03 / Selected Work
            </p>
            <h2 className="text-5xl font-black sm:text-7xl">
              My <span className="text-zinc-600">work.</span>
            </h2>
          </div>
          <span className="text-sm text-zinc-500">
            {portfolioProjects.length} Projects / 2026 — Present
          </span>
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 ${
                  filter === item
                    ? "border-purple-400 bg-purple-500 text-white"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-purple-400/50 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="relative block w-full md:max-w-xs">
            <span className="sr-only">Search projects</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500">
              <circle cx="11" cy="11" r="7" />
              <path d="m16.5 16.5 4 4" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search my projects..."
              className="w-full rounded-full border border-white/10 bg-[#111019] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-purple-400/70"
            />
          </label>
        </div>

        <p aria-live="polite" className="mb-5 text-xs text-zinc-500">
          Showing {visibleProjects.length} of {portfolioProjects.length} projects
        </p>

        {visibleProjects.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => {
              const projectNumber = String(
                portfolioProjects.indexOf(project) + 1,
              ).padStart(2, "0");
              return (
                <article
                  key={project.id}
                  className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#111019] p-7 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-purple-400/30 sm:p-9"
                >
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" style={{ background: project.gradient }} />
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-6xl font-black text-white/10">{projectNumber}</span>
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                        {project.category}
                      </span>
                    </div>
                    <div className="mb-6 mt-3 flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <span className="font-mono text-4xl font-black text-white/15 transition-colors duration-300 group-hover:text-purple-300/70" aria-hidden="true">{"</>"}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">{item}</span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-purple-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                        aria-label={`Open live demo: ${project.title}`}
                      >
                        Live Preview <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                        aria-label={`View GitHub source: ${project.title}`}
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#111019] px-6 py-16 text-center">
            <p className="text-xl font-bold text-white">No projects found</p>
            <p className="mt-2 text-sm text-zinc-400">Try a different search or category.</p>
            <button type="button" onClick={() => { setSearch(""); setFilter("All"); }} className="mt-5 rounded-full border border-purple-400/40 px-5 py-2 text-sm font-semibold text-purple-300 hover:bg-purple-400/10">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
