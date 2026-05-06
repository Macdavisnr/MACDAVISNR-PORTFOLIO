type FooterProps = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className={`border-t py-10 transition-colors duration-300 ${
        darkMode
          ? "border-slate-800 bg-slate-950"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center lg:px-20">
        <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
          Built with React, TypeScript, and Tailwind CSS.
        </p>
        <div
          className={`flex flex-wrap justify-center gap-4 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <a
            href="https://github.com/Macdavisnr"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ikennannadirinwa@gmail.com"
            className="transition hover:text-cyan-300"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-slate-500">
          &copy; 2026 Macdavisnr. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
