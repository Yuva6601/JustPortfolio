import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";

const contactHighlights = [
  {
    label: "Email",
    value: "yyuvanesh8@gmail.com",
    icon: FiMail,
    href: "mailto:yyuvanesh8@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 89394 07271",
    icon: FiPhone,
    href: "tel:+918939407271",
  },
  {
    label: "Location",
    value: "Chennai, India",
    icon: FiMapPin,
    href: undefined,
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuvaneshraji/",
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/______mr.why______/",
    icon: FiInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/Yuva6601",
    icon: FiGithub,
  },
];

// technical-drawing style corner marks — the page's one signature motif
function CornerMarks() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#8B5CF6]/0 transition-colors duration-300 group-hover:border-[#8B5CF6]/70" />
      <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#7C3AED]/0 transition-colors duration-300 group-hover:border-[#7C3AED]/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#7C3AED]/0 transition-colors duration-300 group-hover:border-[#7C3AED]/70" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#8B5CF6]/0 transition-colors duration-300 group-hover:border-[#8B5CF6]/70" />
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28">
        {/* status strip */}
        <div
          className="mb-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#8FA3B8] page-text-animate"
          style={{ "--delay": "0.05s" } as React.CSSProperties}
        >
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6]" />
          </span>
          status · open for new projects
        </div>

        <section className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <p
                className="font-mono text-xs uppercase tracking-[0.35em] text-[#8B5CF6] page-text-animate"
                style={{ "--delay": "0.1s" } as React.CSSProperties}
              >
                // let&apos;s collaborate
              </p>
              <h1
                className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl page-text-animate"
                style={{ "--delay": "0.15s" } as React.CSSProperties}
              >
                Ready to build your next digital experience?
              </h1>
              <p
                className="max-w-lg text-base leading-7 text-[#8FA3B8] sm:text-lg sm:leading-8 page-text-animate"
                style={{ "--delay": "0.2s" } as React.CSSProperties}
              >
                Share your idea, project scope, or collaboration request — I&apos;ll reply with a plan that blends design, performance, and business impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactHighlights.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <CornerMarks />
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#232B35] bg-[#0B0F14] text-[#8B5CF6]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="mt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5B6B7C]">
                        {item.label}
                      </p>
                      <p className="mt-1.5 break-words text-sm font-medium text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#232B35] bg-[#12181F] p-5 transition-colors duration-300 hover:border-[#8B5CF6]/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group relative flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#232B35] bg-[#12181F] p-5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="group relative rounded-2xl border border-[#232B35] bg-[#12181F] p-6 sm:p-8 page-text-animate"
            style={{ "--delay": "0.25s" } as React.CSSProperties}
          >
            <CornerMarks />
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B5CF6]">
                  contact form
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Drop a message
                </h2>
              </div>

              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-[#8FA3B8]">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5B6B7C]">
                      Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#232B35] bg-[#0B0F14] px-4 py-3 text-white outline-none placeholder:text-[#5B6B7C] focus:border-[#8B5CF6]/60 focus:ring-2 focus:ring-[#8B5CF6]/15"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-[#8FA3B8]">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5B6B7C]">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#232B35] bg-[#0B0F14] px-4 py-3 text-white outline-none placeholder:text-[#5B6B7C] focus:border-[#8B5CF6]/60 focus:ring-2 focus:ring-[#8B5CF6]/15"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-[#8FA3B8]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5B6B7C]">
                    Project details
                  </span>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project"
                    className="w-full rounded-xl border border-[#232B35] bg-[#0B0F14] px-4 py-3 text-white outline-none placeholder:text-[#5B6B7C] focus:border-[#8B5CF6]/60 focus:ring-2 focus:ring-[#8B5CF6]/15"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8B5CF6] px-6 py-3.5 text-sm font-semibold text-[#0B0F14] transition hover:bg-[#A78BFA] sm:w-auto"
                >
                  Send message
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="group relative rounded-2xl border border-[#232B35] bg-[#12181F] p-6 sm:p-8">
            <CornerMarks />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B5CF6]">
              stay connected
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Follow along</h2>
            <p className="mt-4 text-sm leading-7 text-[#8FA3B8]">
              Project sneak peeks, build logs, and design notes — posted as they happen.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2.5 rounded-xl border border-[#232B35] bg-[#0B0F14] px-4 py-3 text-sm font-medium text-[#8FA3B8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/50 hover:text-white"
                  >
                    <Icon className="h-4 w-4 transition-colors group-hover/link:text-[#8B5CF6]" />
                    {social.label}
                    <FiArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="group relative rounded-2xl border border-[#232B35] bg-[#12181F] p-6 sm:p-8">
            <CornerMarks />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B5CF6]">
              let&apos;s talk
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Available for new projects
            </h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-[#8FA3B8]">
              <p>
                Open for freelance work, web applications, design systems, and ongoing collaborations.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5B6B7C]">
                  response time
                </span>
                <span className="h-px flex-1 bg-[#232B35]" />
                <span className="font-mono text-sm font-semibold text-white">
                  ~1 business day
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}