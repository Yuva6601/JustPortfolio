import { FiExternalLink } from "react-icons/fi";

const featuredProjects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "Web App",
    description:
      "A premium shopping experience with clean UI, product filters, and seamless checkout flows.",
    accent: "01",
    highlight: "Modern UI/UX",
  },
  {
    id: 2,
    name: "Task Management App",
    category: "Productivity",
    description:
      "A collaboration tool for teams, featuring board views, analytics, and phase tracking.",
    accent: "02",
    highlight: "Workflow System",
  },
  {
    id: 3,
    name: "Crypto Dashboard",
    category: "Dashboard",
    description:
      "Real-time market insights and interactive charts for monitoring crypto performance.",
    accent: "03",
    highlight: "Analytics Suite",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6 page-text-animate" style={{ "--delay": "0.05s" } as React.CSSProperties}>
            <div className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-violet-300 ring-1 ring-violet-300/20 page-text-animate" style={{ "--delay": "0.05s" } as React.CSSProperties}>
              Featured work
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl page-text-animate" style={{ "--delay": "0.1s" } as React.CSSProperties}>
                Projects that shine with clean design and real impact.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg page-text-animate" style={{ "--delay": "0.15s" } as React.CSSProperties}>
                Explore a curated selection of web applications built for performance, usability, and modern brand experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Projects completed</p>
                <p className="mt-3 text-3xl font-semibold text-white">50+</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Happy clients</p>
                <p className="mt-3 text-3xl font-semibold text-white">30+</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl page-text-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-inner shadow-black/15 page-text-animate" style={{ "--delay": "0.25s" } as React.CSSProperties}>
              <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Project insights</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">High-value builds</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Every project is designed to be visually strong, intuitive to use, and built with scalable front-end architecture.
              </p>
            </div>

            <div className="grid gap-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.32em] text-slate-400">{project.accent}</span>
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-violet-300">
                      {project.category}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4 text-sm text-slate-300">
                    <span className="font-medium text-white">{project.highlight}</span>
                    <FiExternalLink className="h-5 w-5 text-violet-300 transition group-hover:text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
