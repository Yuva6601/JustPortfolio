import Header from "@/components/Header";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

const contactHighlights = [
  {
    label: "Email",
    value: "hello@alexdev.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    icon: FiPhone,
  },
  {
    label: "Location",
    value: "San Francisco, CA",
    icon: FiMapPin,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-violet-300 ring-1 ring-violet-300/20">
              Let’s collaborate
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to build your next digital experience?
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Share your idea, project scope, or collaboration request and I’ll get back to you with a plan that blends design, performance, and business impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="mt-2 font-semibold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Contact form</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Drop a message</h2>
              </div>

              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Email</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Project details</span>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project"
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Send message
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Stay connected</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Follow me on social</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              For the latest updates, project sneak peeks, and design insights, connect with me on social media.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-violet-400/40 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Let&apos;s talk</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Available for new projects</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p>
                I&apos;m available for freelance work, web applications, design systems, and ongoing collaborations. Send a message and I&apos;ll be in touch soon.
              </p>
              <p>
                Typical response time: <span className="font-semibold text-white">1 business day</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
