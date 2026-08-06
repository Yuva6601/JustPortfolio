import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />

      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-16">
        <section className="max-w-2xl lg:grow">
          <span className="animate-fade-in-up mb-4 inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300 shadow-sm ring-1 ring-violet-300/20">
            I&apos;m a web developer
          </span>

          <h1 className="animate-fade-in-up mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl [animation-delay:0.2s]">
            Hi, I&apos;m <span className="text-[#8b5cf6]">Yuvanesh</span>
          </h1>

          <p className="animate-fade-in-up mt-6 text-lg leading-8 text-slate-300 sm:text-xl [animation-delay:0.35s]">
            I engineer modern web experiences that are fast, scalable, and user-focused. With expertise in full-stack development and emerging technologies, I create digital products that make an impact.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center [animation-delay:0.5s]">
            <a
              href="/projects"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">View My Work</span>
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">Download CV</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {['HTML', 'CSS', 'JS', 'TS', 'React', 'Node'].map((label, index) => (
              <span
                key={label}
                className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10"
                style={{ animationDelay: `${0.6 + index * 0.08}s` }}
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-12 lg:mt-0 lg:max-w-xl lg:flex-1">
          <div className="animate-float-soft relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Developer working on laptop"
              className="relative h-80 w-full rounded-[1.5rem] object-cover shadow-xl shadow-black/40"
            />
            <div className="absolute right-6 top-6 rounded-3xl bg-slate-950/80 px-4 py-3 text-left text-sm text-slate-200 shadow-lg shadow-black/30 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300">&lt;/&gt; Code</p>
              <pre className="mt-2 overflow-x-auto font-mono text-xs leading-6 text-slate-100">
                <code>{`const developer = {
  name: "Yuvanesh",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  passion: "Building things for the web"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
