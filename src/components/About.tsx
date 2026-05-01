import heroImage from "../assets/hero.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 lg:px-20 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-cyan-300 uppercase tracking-[0.4em] text-sm">
          Get to know me
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 text-white">
          About Me
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-900/80 shadow-2xl">
            <img
              src={heroImage}
              alt="About Macdavis"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-8 rounded-4xl border border-slate-800 bg-slate-950/90 p-10 shadow-2xl">
            <p className="text-slate-300 text-lg leading-8">
              I am a frontend developer who transforms ideas into polished
              digital experiences. I focus on user-first interfaces,
              performance, and reliable code for modern web applications.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-3xl font-semibold text-cyan-300">5+</p>
                <p className="mt-2 text-sm text-slate-400">
                  Projects completed
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-3xl font-semibold text-amber-300">2+</p>
                <p className="mt-2 text-sm text-slate-400">Years in frontend</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-3xl font-semibold text-cyan-300">UX</p>
                <p className="mt-2 text-sm text-slate-400">
                  User-focused design
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 text-lg font-semibold">
                What I bring to the table
              </p>
              <ul className="grid gap-3 text-slate-400">
                <li>
                  • Built responsive React experiences that keep users engaged.
                </li>
                <li>
                  • Designed accessible interfaces with clean interactions.
                </li>
                <li>
                  • Delivered projects with attention to performance and
                  maintainability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
