import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="hidden lg:flex justify-between items-center px-20 h-24">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="text-2xl font-semibold tracking-tight text-white">
            MacdavisNR
          </span>
        </a>

        <ul className="flex gap-8 text-base text-slate-400">
          <li>
            <a className="hover:text-cyan-300 transition" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-300 transition" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-300 transition" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-300 transition" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav className="lg:hidden flex justify-between items-center px-6 h-20">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="text-xl font-semibold text-white">MacdavisNR</span>
        </a>

        <button onClick={toggleMenu} className="text-3xl text-slate-200">
          ☰
        </button>

        {openMenu && (
          <ul className="absolute right-6 top-20 w-52 rounded-3xl bg-slate-950 border border-slate-800 p-5 shadow-2xl space-y-4 text-slate-200">
            <li>
              <a className="block hover:text-cyan-300 transition" href="#about">
                About
              </a>
            </li>
            <li>
              <a
                className="block hover:text-cyan-300 transition"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="block hover:text-cyan-300 transition"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block hover:text-cyan-300 transition"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
