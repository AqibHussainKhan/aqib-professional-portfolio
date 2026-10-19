function Project() {
  const projects = [
    {
      no: "01",
      title: "E-Commerce",
      type: "Web Development",
      text: "A modern shopping interface with responsive layouts and interactive components.",
      gradient: "from-purple-500/30 via-fuchsia-500/10 to-transparent",
    },
    {
      no: "02",
      title: "Portfolio",
      type: "Creative Development",
      text: "A personal portfolio focused on clean typography, animation and modern UI.",
      gradient: "from-cyan-500/30 via-blue-500/10 to-transparent",
    },
    {
      no: "03",
      title: "Dashboard",
      type: "UI Development",
      text: "A clean dashboard concept with reusable components and responsive design.",
      gradient: "from-pink-500/30 via-purple-500/10 to-transparent",
    },
    {
      no: "04",
      title: "API App",
      type: "JavaScript",
      text: "A dynamic application that fetches and presents data from an external API.",
      gradient: "from-emerald-500/30 via-cyan-500/10 to-transparent",
    },
  ];

  return (
    <section id="projects" className="px-6 py-32 sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-20 flex items-end justify-between">

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-pink-400">
              03 / Selected Work
            </p>

            <h2 className="text-5xl font-black sm:text-7xl">
              My <span className="text-zinc-600">work.</span>
            </h2>
          </div>

          <span className="hidden text-sm text-zinc-600 sm:block">
            2026 — PRESENT
          </span>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.no}
              className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111019] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/20 sm:p-9"
            >

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 transition duration-700 group-hover:scale-125 group-hover:opacity-70`}
              />

              <div className="relative flex h-full flex-col justify-between">

                <div className="flex items-start justify-between">

                  <span className="text-6xl font-black text-white/5 transition duration-500 group-hover:text-white/10">
                    {project.no}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                    {project.type}
                  </span>

                </div>

                <div>

                  <div className="mb-7 flex h-28 items-center justify-center rounded-2xl border border-white/5 bg-black/20">
                    <span className="text-5xl font-black text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-white/30">
                      {"</>"}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black transition duration-300 group-hover:text-purple-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
                    {project.text}
                  </p>

                  <button className="mt-6 flex items-center gap-3 text-sm font-bold text-white">
                    View Project
                    <span className="transition duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </button>

                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Project;