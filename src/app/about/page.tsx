export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <section className="space-y-8 page-text-animate" style={{ "--delay": "0.05s" } as React.CSSProperties}>
            <div className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-violet-300 shadow-sm ring-1 ring-violet-300/20 page-text-animate" style={{ "--delay": "0.05s" } as React.CSSProperties}>
              About Me
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400 page-text-animate" style={{ "--delay": "0.1s" } as React.CSSProperties}>A creative digital partner</p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl page-text-animate" style={{ "--delay": "0.15s" } as React.CSSProperties}>
                Building premium web experiences with modern UI and strong performance.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg page-text-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
                I’m a software engineer focused on creating user-focused web products that feel polished, responsive, and fast. My work combines strong visual design with reliable engineering and thoughtful frontend architecture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Years Experience</p>
                <p className="mt-3 text-3xl font-semibold text-white">4+</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Projects Completed</p>
                <p className="mt-3 text-3xl font-semibold text-white">15+</p>
              </div>
            </div>
          </section>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6 page-text-animate" style={{ "--delay": "0.25s" } as React.CSSProperties}>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-sky-500/10" />
            <div className="relative flex h-full flex-col gap-6 page-text-animate" style={{ "--delay": "0.3s" } as React.CSSProperties}>
              <div className="flex shrink-0 items-center gap-4 rounded-[1.75rem] bg-slate-950/90 p-5 shadow-xl shadow-black/25">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#8b5cf6]/20 text-[#8b5cf6]">
                  <span className="text-2xl font-bold">Y</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-violet-300">Yuvanesh</p>
                  <p className="mt-1 text-lg font-semibold text-white">Product UI Designer</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-black/25">
                <div className="mb-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-4 text-center text-sm text-slate-200">
                    <span className="block text-3xl font-semibold">95%</span>
                    <span className="mt-2 block text-slate-400">UI Accuracy</span>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-center text-sm text-slate-200">
                    <span className="block text-3xl font-semibold">88%</span>
                    <span className="mt-2 block text-slate-400">Client Retention</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-slate-400">Design System</span>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]" />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-400">Front-end Delivery</span>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#2563eb]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 rounded-[1.5rem] bg-slate-950/90 p-5 text-sm text-slate-200 shadow-xl shadow-black/25">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Branding</span>
                  <span>91%</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Prototyping</span>
                  <span>87%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interaction</span>
                  <span>94%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
