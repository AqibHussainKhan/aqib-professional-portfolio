function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-36 sm:px-10 lg:px-16"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-[130px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Small Intro */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-[#a78bfa]" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Creative Web Developer
          </span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">

          {/* LEFT */}
          <div>

            <h1 className="text-[16vw] font-black leading-[0.78] tracking-[-0.08em] sm:text-8xl lg:text-[9.5rem]">
              AQIB
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-3 w-3 animate-pulse rounded-full bg-[#a78bfa] shadow-lg shadow-purple-500/50" />

              <p className="text-2xl font-light tracking-tight text-zinc-300 sm:text-4xl">
                Hussain Khan
              </p>
            </div>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
              I design and develop modern digital experiences
              that combine clean code, smooth interactions and
              memorable visual design.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group flex items-center gap-4 rounded-full bg-white px-6 py-3.5 font-bold text-black transition duration-300 hover:scale-105"
              >
                Explore My Work

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-7 py-4 text-sm text-zinc-300 transition duration-300 hover:border-purple-400/50 hover:bg-purple-400/5 hover:text-white"
              >
                Start a Project
              </a>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center">

            {/* Rotating ring */}
            <div className="absolute h-72 w-72 animate-spin-slow rounded-full border border-dashed border-purple-400/30" />

            <div className="absolute h-60 w-60 rounded-full border border-cyan-400/20" />

            {/* Main visual */}
            <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-[45%] bg-gradient-to-br from-[#a78bfa] via-[#7c3aed] to-[#ec4899] shadow-2xl shadow-purple-600/30">

              <div className="absolute inset-3 rounded-[42%] bg-[#0c0b12]" />

              <div className="relative text-center">
                <p className="text-6xl font-black tracking-tighter">
                  {"</>"}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-400">
                  Build · Design · Create
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-[#15141d]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                Stack
              </p>
              <p className="mt-1 font-bold text-cyan-300">
                React + Tailwind
              </p>
            </div>

            <div className="absolute bottom-12 left-0 rounded-2xl border border-white/10 bg-[#15141d]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                Status
              </p>
              <p className="mt-1 flex items-center gap-2 font-bold">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Available
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="mt-24 overflow-hidden border-y border-white/5 py-5">
          <div className="flex min-w-max animate-marquee gap-12 text-sm font-medium uppercase tracking-[0.3em] text-zinc-700">
            <span>Frontend Development ✦</span>
            <span>Creative UI ✦</span>
            <span>React Development ✦</span>
            <span>Responsive Design ✦</span>
            <span>Frontend Development ✦</span>
            <span>Creative UI ✦</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;