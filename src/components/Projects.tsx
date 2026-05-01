const projectList = [
  {
    title: "E-commerce Website",
    role: "Frontend Developer",
    description:
      "Designed a modern storefront with responsive UI, product filters, and checkout flows.",
    stack: ["React", "TypeScript", "Tailwind", "Stripe"],
    github: "https://github.com/Macdavisnr/STORE.NR",
    live: "https://store-nr-git-main-macdavisnrs-projects.vercel.app",
  },
  {
    title: "OnboardingForm Dashboard",
    role: "UI Developer",
    description:
      "Built a dashboard for sign-up management, analytics, and user approval workflows.",
    stack: ["React", "TypeScript", "Chart.js", "Firebase"],
    github: "https://github.com/Macdavisnr/Mac-OnboardingForm",
    live: "https://mac-onboarding-form-git-main-macdavisnrs-projects.vercel.app",
  },
  {
    title: "Outsourcing Board Web App",
    role: "Full Stack Contributor",
    description:
      "Created a job marketplace with listings, filters, reusable components, and client-side search.",
    stack: ["React", "Tailwind", "Vite", "REST API"],
    github: "https://github.com/yourusername/outsourcing-board",
    live: "https://your-live-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 lg:px-20 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-cyan-300 uppercase tracking-[0.4em] text-sm">
            Browse my recent
          </p>
          <h2 className="mt-3 text-5xl font-bold text-white">Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Work samples showing user-centered products with clean interfaces,
            fast performance, and strong structure.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-4xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500"
            >
              <div className="mb-6 h-40 rounded-3xl bg-linear-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-5 text-white shadow-inner">
                <div className="flex h-full flex-col justify-between">
                  <span className="text-sm uppercase tracking-[0.4em] text-cyan-300">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>

              <p className="text-slate-400 leading-7">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-500 hover:text-cyan-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-500 hover:text-cyan-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
