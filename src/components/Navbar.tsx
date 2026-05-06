import { useState } from "react";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const Navbar = ({ darkMode, toggleTheme }: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const themeLabel = darkMode ? "\u2600\uFE0F Light" : "\uD83C\uDF19 Dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
        darkMode
          ? "border-slate-800 bg-slate-950/90"
          : "border-slate-200 bg-white/90"
      }`}
    >
      <nav className="hidden lg:flex justify-between items-center px-20 h-24">
        <a href="#home" className="inline-flex items-center gap-3">
          <span
            className={`text-2xl font-semibold tracking-tight ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            MacdavisNR
          </span>
        </a>

        <ul
          className={`flex items-center gap-8 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
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

          <li>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              className={`rounded-full border px-4 py-2 text-sm transition hover:border-cyan-500 hover:text-cyan-300 ${
                darkMode
                  ? "border-slate-700 text-slate-200"
                  : "border-slate-300 text-slate-700"
              }`}
            >
              {themeLabel}
            </button>
          </li>
        </ul>
      </nav>

      <nav className="lg:hidden flex justify-between items-center px-6 h-20">
        <a href="#home" className="inline-flex items-center gap-3">
          <span
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            MacdavisNR
          </span>
        </a>

        <button
          onClick={toggleMenu}
          className={`text-3xl ${darkMode ? "text-slate-200" : "text-slate-700"}`}
        >
          &#9776;
        </button>

        {openMenu && (
          <ul
            className={`absolute right-6 top-20 w-52 rounded-3xl border p-5 shadow-2xl space-y-4 ${
              darkMode
                ? "border-slate-800 bg-slate-950 text-slate-200"
                : "border-slate-200 bg-white text-slate-700"
            }`}
          >
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
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
                className={`rounded-full border px-3 py-2 text-sm transition hover:border-cyan-500 hover:text-cyan-300 ${
                  darkMode
                    ? "border-slate-700 bg-slate-800 text-slate-200"
                    : "border-slate-300 bg-slate-100 text-slate-950"
                }`}
              >
                {themeLabel}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
