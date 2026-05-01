const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen px-6 lg:px-20 py-20"
    >
      <div className="absolute inset-0 bg-cyan-500/10 opacity-20 pointer-events-none" />
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-10 top-1/3 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center rounded-4xl border border-slate-800 bg-slate-950/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="relative flex justify-center">
            <div className="relative rounded-4xl bg-linear-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-6 shadow-2xl">
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-800 bg-slate-900">
                <img
                  src="/profile.jpg"
                  alt="Macdavis Ikenna Nnadirinwa"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -bottom-3 rounded-3xl border border-cyan-500/20 bg-slate-950/90 px-4 py-3 text-sm text-cyan-200 shadow-xl">
                Frontend Developer
              </div>
            </div>
          </div>

          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              Creative UI-focused developer
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                Hello, I'm
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                Macdavis Ikenna Nnadirinwa
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                I craft polished, high-performance web apps using React,
                TypeScript, and modern UI design.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-left shadow-sm">
                <p className="text-3xl font-semibold text-cyan-300">5+</p>
                <p className="mt-2 text-sm text-slate-400">
                  Projects delivered
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-amber-300">2+</p>
                <p className="mt-2 text-sm text-slate-400">Years experience</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-cyan-300">React</p>
                <p className="mt-2 text-sm text-slate-400">Modern web apps</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/Macdavis Ikenna Nnadirinwa CV.pdf"
                download
                className="group inline-flex items-center justify-center rounded-full border border-cyan-500 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-500"
              >
                Download CV
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                Let’s collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
