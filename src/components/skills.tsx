function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Design",
    "UI Design",
    "API",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/5 bg-[#0d0c13] px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
              02 / Skills
            </p>

            <h2 className="text-5xl font-black leading-none sm:text-7xl">
              Things I
              <br />
              <span className="text-zinc-600">work with.</span>
            </h2>

            <p className="mt-8 max-w-md leading-8 text-zinc-500">
              Technologies and tools I use to turn concepts
              into polished web experiences.
            </p>
          </div>

          <div className="flex flex-wrap content-center gap-3">

            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`group cursor-default rounded-full border border-white/10 px-5 py-3 transition duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-purple-400/10 ${
                  index % 3 === 0
                    ? "text-lg"
                    : "text-sm"
                }`}
              >
                <span className="text-zinc-300 transition group-hover:text-white">
                  {skill}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;