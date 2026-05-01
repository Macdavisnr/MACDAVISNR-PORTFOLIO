const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-6 lg:px-20 py-20">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="rounded-4xl border border-slate-800 bg-slate-950/90 p-10 shadow-2xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.4em] text-sm">
                Core capabilities
              </p>
              <h2 className="mt-3 text-4xl font-bold text-white">
                Skills & tools
              </h2>
            </div>
            <p className="max-w-xl text-slate-400">
              I build usable UI systems, optimize front-end performance, and ship web products that feel polished and reliable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Frontend
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">React + TypeScript</h3>
              <p className="mt-3 text-slate-400 leading-7">
                Building component-driven interfaces with strong typing, clean state management, and polished interactions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">React</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">TypeScript</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">Tailwind</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                UI & design
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Responsive interfaces</h3>
              <p className="mt-3 text-slate-400 leading-7">
                Designing layouts that scale across devices with clean spacing, accessible contrast, and polished micro-interactions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">HTML</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">CSS</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-white">Tech stack</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <span className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">React</span>
              <span className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">TypeScript</span>
              <span className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">Tailwind CSS</span>
              <span className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">Vite</span>
              <span className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">Git</span>
              <span className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
