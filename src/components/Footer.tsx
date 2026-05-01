const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 lg:px-20 text-center">
        <p className="text-slate-400">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-slate-300">
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
          © 2026 Macdavisnr. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
