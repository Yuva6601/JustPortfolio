import { FaAws } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import SkillsToolListClient from "../../components/SkillsToolListClient";

const skillGroups = [
  {
    label: "AWS",
    percent: 85,
    Icon: FaAws,
    color: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.12)",
    borderColor: "rgba(255, 153, 0, 0.35)",
    glow: "rgba(255, 153, 0, 0.45)",
  },
  {
    label: "Azure",
    percent: 80,
    Icon: VscAzure,
    color: "#0089D6",
    bgColor: "rgba(0, 137, 214, 0.12)",
    borderColor: "rgba(0, 137, 214, 0.35)",
    glow: "rgba(0, 137, 214, 0.45)",
  },
  {
    label: "CSS",
    percent: 92,
    Icon: SiCss,
    color: "#1572B6",
    bgColor: "rgba(21, 114, 182, 0.12)",
    borderColor: "rgba(21, 114, 182, 0.35)",
    glow: "rgba(21, 114, 182, 0.45)",
  },
  {
    label: "Django",
    percent: 85,
    Icon: SiDjango,
    color: "#44B78B",
    bgColor: "rgba(68, 183, 139, 0.12)",
    borderColor: "rgba(68, 183, 139, 0.35)",
    glow: "rgba(68, 183, 139, 0.45)",
  },
  {
    label: "FastAPI",
    percent: 85,
    Icon: SiFastapi,
    color: "#009688",
    bgColor: "rgba(0, 150, 136, 0.12)",
    borderColor: "rgba(0, 150, 136, 0.35)",
    glow: "rgba(0, 150, 136, 0.45)",
  },
  {
    label: "Flask",
    percent: 80,
    Icon: SiFlask,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    label: "GitHub",
    percent: 85,
    Icon: SiGithub,
    color: "#F0F6FC",
    bgColor: "rgba(240, 246, 252, 0.08)",
    borderColor: "rgba(240, 246, 252, 0.25)",
    glow: "rgba(240, 246, 252, 0.3)",
  },
  {
    label: "HTML",
    percent: 95,
    Icon: SiHtml5,
    color: "#E34F26",
    bgColor: "rgba(227, 79, 38, 0.12)",
    borderColor: "rgba(227, 79, 38, 0.35)",
    glow: "rgba(227, 79, 38, 0.45)",
  },
  {
    label: "JavaScript",
    percent: 90,
    Icon: SiJavascript,
    color: "#F7DF1E",
    bgColor: "rgba(247, 223, 30, 0.12)",
    borderColor: "rgba(247, 223, 30, 0.35)",
    glow: "rgba(247, 223, 30, 0.4)",
  },
  {
    label: "MongoDB",
    percent: 85,
    Icon: SiMongodb,
    color: "#47A248",
    bgColor: "rgba(71, 162, 72, 0.12)",
    borderColor: "rgba(71, 162, 72, 0.35)",
    glow: "rgba(71, 162, 72, 0.45)",
  },
  {
    label: "MySQL",
    percent: 80,
    Icon: SiMysql,
    color: "#4479A1",
    bgColor: "rgba(68, 121, 161, 0.12)",
    borderColor: "rgba(68, 121, 161, 0.35)",
    glow: "rgba(68, 121, 161, 0.45)",
  },
  {
    label: "Next.js",
    percent: 82,
    Icon: SiNextdotjs,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    label: "Node.js",
    percent: 80,
    Icon: SiNodedotjs,
    color: "#68A063",
    bgColor: "rgba(104, 160, 99, 0.12)",
    borderColor: "rgba(104, 160, 99, 0.35)",
    glow: "rgba(104, 160, 99, 0.45)",
  },
  {
    label: "PostgreSQL",
    percent: 85,
    Icon: SiPostgresql,
    color: "#4169E1",
    bgColor: "rgba(65, 105, 225, 0.12)",
    borderColor: "rgba(65, 105, 225, 0.35)",
    glow: "rgba(65, 105, 225, 0.45)",
  },
  {
    label: "Python",
    percent: 90,
    Icon: SiPython,
    color: "#3776AB",
    bgColor: "rgba(55, 118, 171, 0.12)",
    borderColor: "rgba(55, 118, 171, 0.35)",
    glow: "rgba(55, 118, 171, 0.45)",
  },
  {
    label: "React.js",
    percent: 88,
    Icon: SiReact,
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.12)",
    borderColor: "rgba(97, 218, 251, 0.35)",
    glow: "rgba(97, 218, 251, 0.5)",
  },
  {
    label: "Tailwind CSS",
    percent: 90,
    Icon: SiTailwindcss,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.12)",
    borderColor: "rgba(6, 182, 212, 0.35)",
    glow: "rgba(6, 182, 212, 0.5)",
  },
  {
    label: "TypeScript",
    percent: 87,
    Icon: SiTypescript,
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.12)",
    borderColor: "rgba(49, 120, 198, 0.35)",
    glow: "rgba(49, 120, 198, 0.5)",
  },
];
const toolBadges = [
  {
    label: "AWS",
    Icon: FaAws,
    color: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.12)",
    borderColor: "rgba(255, 153, 0, 0.35)",
    glow: "rgba(255, 153, 0, 0.45)",
  },
  {
    label: "Azure",
    Icon: VscAzure,
    color: "#0089D6",
    bgColor: "rgba(0, 137, 214, 0.12)",
    borderColor: "rgba(0, 137, 214, 0.35)",
    glow: "rgba(0, 137, 214, 0.45)",
  },
  {
    label: "CSS",
    Icon: SiCss,
    color: "#1572B6",
    bgColor: "rgba(21, 114, 182, 0.12)",
    borderColor: "rgba(21, 114, 182, 0.35)",
    glow: "rgba(21, 114, 182, 0.45)",
  },
  {
    label: "Django",
    Icon: SiDjango,
    color: "#44B78B",
    bgColor: "rgba(68, 183, 139, 0.12)",
    borderColor: "rgba(68, 183, 139, 0.35)",
    glow: "rgba(68, 183, 139, 0.45)",
  },
  {
    label: "FastAPI",
    Icon: SiFastapi,
    color: "#009688",
    bgColor: "rgba(0, 150, 136, 0.12)",
    borderColor: "rgba(0, 150, 136, 0.35)",
    glow: "rgba(0, 150, 136, 0.45)",
  },
  {
    label: "Flask",
    Icon: SiFlask,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    label: "GitHub",
    Icon: SiGithub,
    color: "#F0F6FC",
    bgColor: "rgba(240, 246, 252, 0.08)",
    borderColor: "rgba(240, 246, 252, 0.25)",
    glow: "rgba(240, 246, 252, 0.3)",
  },
  {
    label: "HTML",
    Icon: SiHtml5,
    color: "#E34F26",
    bgColor: "rgba(227, 79, 38, 0.12)",
    borderColor: "rgba(227, 79, 38, 0.35)",
    glow: "rgba(227, 79, 38, 0.45)",
  },
  {
    label: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    bgColor: "rgba(247, 223, 30, 0.12)",
    borderColor: "rgba(247, 223, 30, 0.35)",
    glow: "rgba(247, 223, 30, 0.4)",
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    bgColor: "rgba(71, 162, 72, 0.12)",
    borderColor: "rgba(71, 162, 72, 0.35)",
    glow: "rgba(71, 162, 72, 0.45)",
  },
  {
    label: "MySQL",
    Icon: SiMysql,
    color: "#4479A1",
    bgColor: "rgba(68, 121, 161, 0.12)",
    borderColor: "rgba(68, 121, 161, 0.35)",
    glow: "rgba(68, 121, 161, 0.45)",
  },
  {
    label: "Next.js",
    Icon: SiNextdotjs,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    color: "#68A063",
    bgColor: "rgba(104, 160, 99, 0.12)",
    borderColor: "rgba(104, 160, 99, 0.35)",
    glow: "rgba(104, 160, 99, 0.45)",
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#4169E1",
    bgColor: "rgba(65, 105, 225, 0.12)",
    borderColor: "rgba(65, 105, 225, 0.35)",
    glow: "rgba(65, 105, 225, 0.45)",
  },
  {
    label: "Python",
    Icon: SiPython,
    color: "#3776AB",
    bgColor: "rgba(55, 118, 171, 0.12)",
    borderColor: "rgba(55, 118, 171, 0.35)",
    glow: "rgba(55, 118, 171, 0.45)",
  },
  {
    label: "React.js",
    Icon: SiReact,
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.12)",
    borderColor: "rgba(97, 218, 251, 0.35)",
    glow: "rgba(97, 218, 251, 0.5)",
  },
  {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.12)",
    borderColor: "rgba(6, 182, 212, 0.35)",
    glow: "rgba(6, 182, 212, 0.5)",
  },
  {
    label: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.12)",
    borderColor: "rgba(49, 120, 198, 0.35)",
    glow: "rgba(49, 120, 198, 0.5)",
  },
];

// Shared classes for scrollable boxes: fixed min/max height, smooth scroll,
// and a slim violet-themed scrollbar so it matches the rest of the UI.
const scrollBoxClasses =
  "overflow-y-auto scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-violet-500/30 hover:[&::-webkit-scrollbar-thumb]:bg-violet-500/50";

export default function SkillsPage() {
  return (
    <div className="min-h-[110vh] bg-transparent text-white no-scrollbar selection:bg-violet-500/30">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <section
            className="space-y-8 page-text-animate"
            style={{ "--delay": "0.05s" } as React.CSSProperties}
          >
            <div
              className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-violet-300 shadow-sm ring-1 ring-violet-300/20 page-text-animate"
              style={{ "--delay": "0.05s" } as React.CSSProperties}
            >
              Skillset
            </div>
            <div className="space-y-4">
              <p
                className="text-sm uppercase tracking-[0.32em] text-slate-400 page-text-animate"
                style={{ "--delay": "0.1s" } as React.CSSProperties}
              >
                Technologies I master
              </p>
              <h1
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl page-text-animate"
                style={{ "--delay": "0.15s" } as React.CSSProperties}
              >
                Building fast, accessible interfaces with modern tools.
              </h1>
              <p
                className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg page-text-animate"
                style={{ "--delay": "0.2s" } as React.CSSProperties}
              >
                I create scalable front-end systems with a strong focus on
                responsive design, clean code, and seamless user experiences.
                These are the technologies I use to deliver polished digital
                products.
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

          <aside
            className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl page-text-animate"
            style={{ "--delay": "0.25s" } as React.CSSProperties}
          >
            <div
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/25 page-text-animate"
              style={{ "--delay": "0.3s" } as React.CSSProperties}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-violet-300">
                    UI Focus
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Design systems & motion
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/15 text-violet-300">
                  <SiFigma className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I deliver polished design systems and motion-rich interfaces
                with reusable components, accessible structure, and premium
                visual clarity.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <span className="rounded-full bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Design systems
                </span>
                <span className="rounded-full bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Motion polish
                </span>
                <span className="rounded-full bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Accessible UI
                </span>
                <span className="rounded-full bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Component-led
                </span>
              </div>
            </div>

            <SkillsToolListClient className={scrollBoxClasses} />
          </aside>
        </div>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div
            className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl page-text-animate"
            style={{ "--delay": "0.25s" } as React.CSSProperties}
          >
            <div
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/25 page-text-animate"
              style={{ "--delay": "0.3s" } as React.CSSProperties}
            >
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-300">
                  Skill mastery
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Technical competency
                </h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                2026 review
              </span>
            </div>

            <div
              className={`mt-8 min-h-[420px] max-h-[480px] space-y-5 ${scrollBoxClasses}`}
            >
              {skillGroups.map((skill) => (
                <div key={skill.label} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <skill.Icon
                        size={22}
                        style={{
                          color: skill.color,
                          filter: `drop-shadow(0 0 8px ${skill.glow})`,
                        }}
                      />

                      <span className="font-medium text-white">
                        {skill.label}
                      </span>
                    </div>

                    <span
                      className="font-semibold"
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.percent}%
                    </span>
                  </div>

                  <div
                    className="h-3 w-full rounded-full overflow-hidden backdrop-blur-md"
                    style={{
                      background: skill.bgColor,
                      border: `1px solid ${skill.borderColor}`,
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.percent}%`,
                        background: `linear-gradient(
            90deg,
            ${skill.color},
            ${skill.glow}
          )`,
                        boxShadow: `0 0 15px ${skill.glow}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl page-text-animate"
            style={{ "--delay": "0.25s" } as React.CSSProperties}
          >
            <div
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/25 page-text-animate"
              style={{ "--delay": "0.3s" } as React.CSSProperties}
            >
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-300">
                  Tools & workflow
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  What I use to work
                </h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                9 tools
              </span>
            </div>

            <div
              className={`mt-8 grid min-h-[420px] max-h-[480px] gap-3 sm:grid-cols-2 ${scrollBoxClasses}`}
            >
              {skillGroups.map((tool) => (
                <div
                  key={tool.label}
                  className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-950/90"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white/10 text-white">
                      <tool.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{tool.label}</p>
                      <p className="text-xs text-slate-400">
                        Professional level
                      </p>
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
