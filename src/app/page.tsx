"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiGithub,
  SiMongodb,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiFlask,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";

const techs = [
  { label: 'AWS', color: 'from-orange-500 to-yellow-400', Icon: FaAws },
  { label: 'Azure', color: 'from-sky-500 to-blue-600', Icon: VscAzure },
  { label: 'CSS', color: 'from-sky-500 to-blue-500', Icon: IoLogoCss3 },
  { label: 'Django', color: 'from-green-800 to-green-600', Icon: SiDjango },
  { label: 'FastAPI', color: 'from-teal-500 to-green-500', Icon: SiFastapi },
  { label: 'Flask', color: 'from-gray-700 to-slate-500', Icon: SiFlask },
  { label: 'GitHub', color: 'from-gray-800 to-black', Icon: SiGithub },
  { label: 'HTML', color: 'from-orange-500 to-orange-400', Icon: SiHtml5 },
  { label: 'JS', color: 'from-yellow-400 to-orange-300', Icon: SiJavascript },
  { label: 'MongoDB', color: 'from-green-600 to-emerald-500', Icon: SiMongodb },
  { label: 'MySQL', color: 'from-blue-600 to-cyan-500', Icon: SiMysql },
  { label: 'Next.js', color: 'from-gray-900 to-gray-700', Icon: SiNextdotjs },
  { label: 'Node', color: 'from-green-500 to-emerald-500', Icon: SiNodedotjs },
  { label: 'PostgreSQL', color: 'from-blue-700 to-indigo-600', Icon: SiPostgresql },
  { label: 'Python', color: 'from-yellow-500 to-blue-500', Icon: SiPython },
  { label: 'React', color: 'from-cyan-500 to-blue-500', Icon: SiReact },
  { label: 'TS', color: 'from-sky-600 to-blue-600', Icon: SiTypescript },
];
const repeatedTechs = [...techs, ...techs];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16">
        <section className="w-full max-w-2xl lg:grow">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300 shadow-sm ring-1 ring-violet-300/20 sm:text-sm"
          >
            I&apos;m a web developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-[#8b5cf6]">Yuvanesh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
          >
            I engineer modern web experiences that are fast, scalable, and user-focused. With expertise in full-stack development and emerging technologies, I create digital products that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 overflow-hidden rounded-[1.75rem] bg-slate-950/60 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5"
          >
            <div className="relative flex items-center overflow-hidden">
              <div className="animate-tech-loop flex gap-3 px-1 py-2">
                {repeatedTechs.map((tech, index) => {
                  const Icon = tech.Icon;
                  return (
                    <div
                      key={`${tech.label}-${index}`}
                      className={`flex min-w-[100px] max-w-[120px] flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-r ${tech.color} px-3 py-3 text-xs font-semibold text-white shadow-lg shadow-black/20 sm:min-w-[110px] sm:max-w-[130px]`}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-white shadow-inner shadow-black/20">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-xs">
                        {tech.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        <div className="mt-10 lg:mt-0 lg:max-w-xl lg:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Developer working on laptop"
              className="relative h-72 w-full rounded-[1.5rem] object-cover shadow-xl shadow-black/40 sm:h-80"
            />
            <div className="absolute right-4 top-4 rounded-3xl bg-slate-950/80 px-3 py-3 text-left text-sm text-slate-200 shadow-lg shadow-black/30 backdrop-blur-xl sm:right-6 sm:top-6 sm:px-4 sm:py-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-violet-300 sm:text-xs">&lt;/&gt; Code</p>
              <pre className="mt-2 overflow-x-auto font-mono text-[10px] leading-5 text-slate-100 sm:text-xs sm:leading-6">
                <code>{`const developer = {
  name: "Yuvanesh",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  passion: "Building things for the web"
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
