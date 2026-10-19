function About() {
  return (
    <section id="about" className="px-6 py-32 sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-purple-400">
              01 / About
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
              Who I <span className="text-zinc-600">am.</span>
            </h2>
          </div>

          <span className="hidden text-6xl font-black text-white/5 sm:block">
            01
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Statement */}
          <div>
            <p className="text-3xl font-medium leading-tight text-zinc-200 sm:text-4xl">
              I don't just build websites.
              <span className="text-purple-400">
                {" "}
                I build experiences.
              </span>
            </p>
          </div>

          {/* Details */}
          <div>
            <p className="leading-8 text-zinc-500">
              I'm a passionate web developer focused on creating
              modern, responsive and visually engaging websites.
              I enjoy turning ideas into clean and functional
              digital experiences.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My approach combines thoughtful UI design with
              practical frontend development. I'm continuously
              learning, experimenting and building projects to
              improve my skills.
            </p>

            <div className="mt-10 grid grid-cols-2 border-y border-white/10 py-8 sm:grid-cols-4">

              <div>
                <p className="text-3xl font-black">10+</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">5+</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                  Skills
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">100%</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                  Responsive
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">∞</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                  Learning
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;