function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 sm:px-10 lg:px-16"
    >

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
            04 / Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-zinc-600">
              Let's make it real.
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="leading-8 text-zinc-500">
              Whether you have a project, an idea or simply want
              to say hello — my inbox is always open.
            </p>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-zinc-600">
                Let's connect
              </p>

              <p className="mt-3 text-lg font-medium text-white">
                Available for freelance work
              </p>
            </div>
          </div>

          <form className="grid gap-4">

            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60"
            />

            <input
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/60"
            />

            <button
              type="submit"
              className="group flex items-center justify-between rounded-2xl bg-white px-6 py-5 font-bold text-black transition duration-300 hover:bg-purple-300"
            >
              Send Message

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:rotate-45">
                ↗
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;