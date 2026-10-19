import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#111019]/80 px-5 py-3 shadow-2xl shadow-purple-950/20 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#home"
          className="group text-xl font-black tracking-tight"
        >
          AQIB
          <span className="ml-1 inline-block text-[#a78bfa] transition duration-300 group-hover:rotate-180">
            +
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/5 hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#a78bfa] px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#c4b5fd] active:scale-95 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 px-3 py-2 text-sm md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[#111019]/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;