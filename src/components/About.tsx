import heroImage from "../assets/hero.png";

type AboutProps = {
  darkMode: boolean;
};

const About = ({ darkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className={`min-h-screen px-6 py-20 transition-colors duration-300 lg:px-20 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <p className={`text-center uppercase tracking-[0.4em] text-sm ${darkMode ? "text-cyan-300" : "text-blue-600"}`}>
          Get to know me
        </p>

        <h2 className={`text-5xl font-bold text-center mt-4 ${darkMode ? "text-white" : "text-slate-950"}`}>
          About Me
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className={`overflow-hidden rounded-4xl border shadow-2xl ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
            <img
              src={heroImage}
              alt="About Macdavis"
              className="h-full w-full object-cover"
            />
          </div>

          <div className={`space-y-8 rounded-4xl border p-10 shadow-2xl ${darkMode ? "border-slate-800 bg-slate-950/90" : "border-slate-200 bg-white"}`}>
            <p className={`text-lg leading-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              I am a frontend developer who transforms ideas into polished
              digital experiences. I focus on user-first interfaces,
              performance, and reliable code for modern web applications.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className={`rounded-3xl border p-5 ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-slate-50"}`}>
                <p className="text-3xl font-semibold text-cyan-300">5+</p>
                <p className="mt-2 text-sm text-slate-400">
                  Projects completed
                </p>
              </div>
              <div className={`rounded-3xl border p-5 ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-slate-50"}`}>
                <p className="text-3xl font-semibold text-amber-300">2+</p>
                <p className="mt-2 text-sm text-slate-400">Years in frontend</p>
              </div>
              <div className={`rounded-3xl border p-5 ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-slate-50"}`}>
                <p className="text-3xl font-semibold text-cyan-300">UX</p>
                <p className="mt-2 text-sm text-slate-400">
                  User-focused design
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className={`text-lg font-semibold ${darkMode ? "text-slate-300" : "text-slate-800"}`}>
                What I bring to the table
              </p>
              <ul className={`grid gap-3 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
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
