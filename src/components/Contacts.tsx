import { useState } from "react";
import emailjs from "@emailjs/browser";

type ContactProps = {
  darkMode: boolean;
};

const Contact = ({ darkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      emailjs.init("we7drtHMLAJOTToPY");

      await emailjs.send("service_df4sb5k", "template_87y71et", {
        to_email: "ikennannadirinwa@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      const whatsappMessage = encodeURIComponent(
        `New project inquiry from ${formData.name} (${formData.email}):\n\n${formData.message}`,
      );
      window.open(
        `https://wa.me/2348119204713?text=${whatsappMessage}`,
        "_blank",
      );

      setStatus("Message sent successfully! Check your WhatsApp.");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 5000);
    } catch {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const panelClass = darkMode
    ? "border-slate-800 bg-slate-950/90"
    : "border-slate-200 bg-white";
  const inputClass = darkMode
    ? "border-slate-800 bg-slate-900 text-white"
    : "border-slate-300 bg-white text-slate-950";

  return (
    <section
      id="contact"
      className={`min-h-screen px-6 py-20 transition-colors duration-300 lg:px-20 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p
            className={`uppercase tracking-[0.4em] text-sm ${
              darkMode ? "text-cyan-300" : "text-blue-600"
            }`}
          >
            Let's work together
          </p>
          <h2
            className={`mt-3 text-5xl font-bold ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Contact Me
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Ready to launch your next project? I'm available for freelance work,
            contract roles, and collaborative opportunities.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className={`rounded-4xl border p-10 shadow-2xl ${panelClass}`}>
            <h3
              className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-slate-950"
              }`}
            >
              Contact details
            </h3>
            <p
              className={`mt-4 leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I respond quickly to thoughtful messages. Use the form to share
              your project details, or reach out directly through email and
              GitHub.
            </p>

            <div
              className={`mt-10 space-y-6 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <div>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
                  Email
                </p>
                <a
                  href="mailto:ikennannadirinwa@gmail.com"
                  className="text-lg hover:text-cyan-300 transition"
                >
                  ikennannadirinwa@gmail.com
                </a>
              </div>
              <div>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
                  GitHub
                </p>
                <a
                  href="https://github.com/Macdavisnr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-cyan-300 transition"
                >
                  github.com/Macdavisnr
                </a>
              </div>
              <div>
                <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/2348119204713"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-cyan-300 transition"
                >
                  +234 811 920 4713
                </a>
              </div>
            </div>
          </div>

          <form
            className={`rounded-4xl border p-10 shadow-2xl ${panelClass}`}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6">
              <label
                className={`space-y-2 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full rounded-3xl border px-5 py-4 outline-none transition focus:border-cyan-500 ${inputClass}`}
                  placeholder="Your name"
                />
              </label>
              <label
                className={`space-y-2 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full rounded-3xl border px-5 py-4 outline-none transition focus:border-cyan-500 ${inputClass}`}
                  placeholder="you@example.com"
                />
              </label>
              <label
                className={`space-y-2 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full min-h-40 rounded-3xl border px-5 py-4 outline-none transition focus:border-cyan-500 ${inputClass}`}
                  placeholder="Tell me about your project..."
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("successfully")
                      ? "text-cyan-300"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
