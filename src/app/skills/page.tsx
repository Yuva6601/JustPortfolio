import Header from "@/components/Header";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  { label: "HTML", percent: 95, Icon: SiHtml5 },
  { label: "CSS", percent: 92, Icon: SiCss },
  { label: "JavaScript", percent: 90, Icon: SiJavascript },
  { label: "React.js", percent: 88, Icon: SiReact },
  { label: "Next.js", percent: 82, Icon: SiNextdotjs },
  { label: "TypeScript", percent: 87, Icon: SiTypescript },
  { label: "Tailwind CSS", percent: 90, Icon: SiTailwindcss },
  { label: "Node.js", percent: 80, Icon: SiNodedotjs },
];

const toolBadges = [
  { label: "Git", Icon: SiGit },
  { label: "Figma", Icon: SiFigma },
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Tailwind", Icon: SiTailwindcss },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          <section className="space-y-8">
            <div className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-violet-300 shadow-sm ring-1 ring-violet-300/20">
              Skillset
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Technologies I master</p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Building fast, accessible interfaces with modern tools.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I create scalable front-end systems with a strong focus on responsive design, clean code, and seamless user experiences. These are the technologies I use to deliver polished digital products.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm text-slate-400">UI / UX Projects</p>
                <p className="mt-3 text-3xl font-semibold text-white">30+</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Hours of design</p>
                <p className="mt-3 text-3xl font-semibold text-white">4k+</p>
              </div>
            </div>
          </section>

          <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/25">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-violet-300">UI Focus</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Design systems & motion</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/15 text-violet-300">
                  <SiFigma className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I deliver consistent interfaces with reusable components, motion polish, and accessible visual language that feels premium and easy to use.
              </p>
            </div>

            <div className="grid gap-4">
              {toolBadges.map((tool) => (
                <div
                  key={tool.label}
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 shadow-inner shadow-black/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
                    <tool.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{tool.label}</p>
                    <p className="text-xs text-slate-400">Core tool</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Skill mastery</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Technical competency</h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                2024 review
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {skillGroups.map((skill) => (
                <div key={skill.label} className="space-y-3">
                  <div className="flex items-center justify-between gap-4 text-sm font-semibold text-white">
                    <span>{skill.label}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]" style={{ width: `${skill.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Tools & workflow</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">What I use every day</h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                9 tools
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {skillGroups.slice(0, 6).map((tool) => (
                <div key={tool.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white/10 text-white">
                      <tool.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{tool.label}</p>
                      <p className="text-xs text-slate-400">Professional level</p>
                    </div>
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
