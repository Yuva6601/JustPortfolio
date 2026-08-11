"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { projects, skills, stats, socials } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const marqueeSkills = [...skills.slice(0, 10), ...skills.slice(0, 10)];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Available for freelance & full-time</Badge>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m <span className="text-gradient">Yuvanesh</span>
              <br />
              <span className="text-slate-300">Software Engineer</span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              I build modern web applications that are fast, scalable, and delightful to use.
              From polished frontends to robust backends — I turn ideas into production-ready products.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 sm:px-6"
                >
                  View Projects
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white sm:px-6"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex gap-3"
            >
              {socials.slice(0, 2).map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400"
                  aria-label={social.label}
                  whileHover={prefersReducedMotion ? undefined : { y: -3, borderColor: "rgba(139,92,246,0.4)", color: "#fff" }}
                >
                  {social.label === "GitHub" ? <FiGithub className="h-5 w-5" /> : <FiLinkedin className="h-5 w-5" />}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <motion.div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/20 to-indigo-600/10 blur-2xl"
              animate={prefersReducedMotion ? undefined : { opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <GlassCard className="relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/5" />
              <div className="relative p-5 sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500">developer.ts</span>
                </div>
                <pre className="overflow-x-auto font-mono text-[11px] leading-6 text-slate-300 sm:text-sm sm:leading-7">
                  <code>{`const developer = {
  name: "Yuvanesh",
  role: "Software Engineer",
  location: "Chennai, India",
  skills: [
    "React", "Next.js", "TypeScript",
    "Python", "Node.js", "AWS"
  ],
  passion: "Building for the web"
};`}</code>
                </pre>
              </div>
              <div className="border-t border-white/10 bg-black/20 px-5 py-4 sm:px-8">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Status: Open to work</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <AnimatedSection className="mt-16 sm:mt-20">
          <motion.div
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={prefersReducedMotion ? undefined : staggerItem} custom={i}>
                <GlassCard className="text-center" delay={i * 0.05}>
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="mt-16 sm:mt-20" delay={0.05}>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Tech Stack
          </p>
          <div className="tech-stack-zone overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4">
            <div className="animate-tech-loop flex gap-3 px-4 sm:gap-4">
              {marqueeSkills.map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={`${skill.label}-${index}`}
                    whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.04 }}
                    className="flex min-w-[90px] shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 sm:min-w-[100px] sm:px-4"
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: skill.color }} />
                    <span className="text-[11px] font-medium text-slate-300 sm:text-xs">{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 sm:mt-24" delay={0.1}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div>
              <Badge>Featured Work</Badge>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Recent projects</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300">
              View all
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <GlassCard key={project.id} hover delay={i * 0.08} className="h-full">
                <motion.div
                  className={`mb-4 h-28 rounded-xl bg-gradient-to-br sm:h-32 ${project.gradient}`}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 sm:mt-24" delay={0.15}>
          <GlassCard className="relative overflow-hidden text-center">
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-indigo-600/5 to-cyan-600/10"
              animate={prefersReducedMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative px-2 py-8 sm:py-12">
              <h2 className="text-xl font-bold text-white sm:text-3xl">Have a project in mind?</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400 sm:text-base">
                Let&apos;s collaborate and build something great together.
              </p>
              <motion.div className="mt-6" whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white sm:px-8"
                >
                  Start a conversation
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </main>
    </div>
  );
}
