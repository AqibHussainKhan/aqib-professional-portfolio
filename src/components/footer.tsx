function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">

        <a
          href="#home"
          className="text-xl font-black"
        >
          AQIB<span className="text-purple-400">+</span>
        </a>

        <p className="text-xs text-zinc-600">
          Designed & built with React + Tailwind CSS
        </p>

        <a
          href="#home"
          className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          Back to top
          <span>↑</span>
        </a>

      </div>

    </footer>
  );
}

export default Footer;