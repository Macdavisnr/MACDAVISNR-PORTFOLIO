type SkillsProps = {
  darkMode: boolean;
};

const Skills = ({ darkMode }: SkillsProps) => {
  const stackPillClass = darkMode
    ? "border-slate-800 bg-slate-950/80 text-slate-200"
    : "border-slate-200 bg-white text-slate-700";

  return (
    <section
      id="skills"
      className={`min-h-screen px-6 py-20 transition-colors duration-300 lg:px-20 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <div className={`rounded-4xl border p-10 shadow-2xl ${darkMode ? "border-slate-800 bg-slate-950/90" : "border-slate-200 bg-white"}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.4em] text-sm">
                Core capabilities
              </p>
              <h2 className={`mt-3 text-4xl font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>
                Skills & tools
              </h2>
            </div>
            <p className={`max-w-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              I build usable UI systems, optimize front-end performance, and ship web products that feel polished and reliable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className={`rounded-3xl border p-8 shadow-sm ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-slate-50"}`}>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Frontend
              </p>
              <h3 className={`mt-4 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>React + TypeScript</h3>
              <p className={`mt-3 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Building component-driven interfaces with strong typing, clean state management, and polished interactions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">React</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">TypeScript</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">Tailwind</span>
              </div>
            </div>

            <div className={`rounded-3xl border p-8 shadow-sm ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-slate-50"}`}>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                UI & design
              </p>
              <h3 className={`mt-4 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>Responsive interfaces</h3>
              <p className={`mt-3 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Designing layouts that scale across devices with clean spacing, accessible contrast, and polished micro-interactions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">HTML</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">CSS</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">Tailwind</span>
              </div>
            </div>
          </div>

          <div className={`mt-10 rounded-3xl border p-8 shadow-sm ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-slate-50"}`}>
            <h3 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>Tech stack</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <span className={`rounded-3xl border px-4 py-3 text-sm ${stackPillClass}`}>React</span>
              <span className={`rounded-3xl border px-4 py-3 text-sm ${stackPillClass}`}>TypeScript</span>
              <span className={`rounded-3xl border px-4 py-3 text-sm ${stackPillClass}`}>Tailwind CSS</span>
              <span className={`rounded-3xl border px-4 py-3 text-sm ${stackPillClass}`}>Vite</span>
              <span className={`rounded-3xl border px-4 py-3 text-sm ${stackPillClass}`}>Git</span>
              <span className={`rounded-3xl border px-4 py-3 text-sm ${stackPillClass}`}>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
