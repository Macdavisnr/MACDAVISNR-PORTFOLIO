const projectList = [
  {
    title: "E-commerce Website",
    role: "Frontend Developer",
    description:
      "Designed a modern storefront with responsive UI, product filters, and checkout flows.",
    stack: ["React", "TypeScript", "Tailwind", "Stripe"],
    github: "https://github.com/Macdavisnr/STORE.NR",
    live: "https://store-nr.vercel.app",
    demoAvailable: true,
  },
  {
    title: "OnboardingForm Dashboard",
    role: "UI Developer",
    description:
      "Built a dashboard for sign-up management, analytics, and user approval workflows.",
    stack: ["React", "TypeScript", "Chart.js", "Firebase"],
    github: "https://github.com/Macdavisnr/Mac-OnboardingForm",
    live: "https://mac-onboarding-form.vercel.app",
    demoAvailable: true,
  },
  {
    title: "Outsourcing Board Web App",
    role: "Full Stack Contributor",
    description:
      "Created a job marketplace with listings, filters, reusable components, and client-side search.",
    stack: ["React", "Tailwind", "Vite", "REST API"],
    github: "https://github.com/yourusername/outsourcing-board",
    live: "",
    demoAvailable: false,
  },
];

type ProjectsProps = {
  darkMode: boolean;
};

const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className={`min-h-screen px-6 py-20 transition-colors duration-300 lg:px-20 ${
        darkMode ? "bg-slate-950" : "bg-sky-50"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p
            className={`uppercase tracking-[0.4em] text-sm ${
              darkMode ? "text-cyan-300" : "text-blue-600"
            }`}
          >
            Browse my recent
          </p>
          <h2
            className={`mt-3 text-5xl font-bold ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Projects
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Work samples showing user-centered products with clean interfaces,
            fast performance, and strong structure.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projectList.map((project) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-4xl border p-6 shadow-2xl transition duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-slate-800 bg-slate-950/90 hover:border-cyan-500"
                  : "border-blue-200 bg-white hover:border-blue-500"
              }`}
            >
              <div
                className={`mb-6 h-40 rounded-3xl bg-linear-to-br p-5 shadow-inner ${
                  darkMode
                    ? "from-cyan-500/10 via-slate-900 to-slate-950 text-white"
                    : "from-blue-100 via-white to-cyan-100 text-slate-950"
                }`}
              >
                <div className="flex h-full flex-col justify-between">
                  <span
                    className={`text-sm uppercase tracking-[0.4em] ${
                      darkMode ? "text-cyan-300" : "text-blue-600"
                    }`}
                  >
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>

              <p
                className={`leading-7 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      darkMode
                        ? "border-slate-800 bg-slate-900/80 text-slate-300"
                        : "border-blue-200 bg-blue-50 text-blue-700"
                    }`}
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
                  className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                    darkMode
                      ? "border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300"
                      : "border-blue-200 text-blue-700 hover:border-blue-500 hover:text-blue-900"
                  }`}
                >
                  GitHub
                </a>
                {project.demoAvailable ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                      darkMode
                        ? "border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300"
                        : "border-blue-200 text-blue-700 hover:border-blue-500 hover:text-blue-900"
                    }`}
                  >
                    Live Demo
                  </a>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                      darkMode
                        ? "border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300"
                        : "border-blue-200 text-blue-700 hover:border-blue-500 hover:text-blue-900"
                    }`}
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
