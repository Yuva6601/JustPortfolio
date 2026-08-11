"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { stats } from "@/lib/data";

const highlights = [
  {
    title: "Frontend Engineering",
    description: "React, Next.js, TypeScript, and Tailwind — building responsive, accessible interfaces.",
  },
  {
    title: "Backend Development",
    description: "Python, Node.js, Django, FastAPI — APIs, databases, and scalable server architecture.",
  },
  {
    title: "Cloud & DevOps",
    description: "AWS, Azure, GitHub — deployment pipelines and cloud-native solutions.",
  },
];

const strengths = [
  { label: "Frontend Development", width: "90%" },
  { label: "Backend & APIs", width: "85%" },
  { label: "UI/UX Design", width: "80%" },
];

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <section className="space-y-8">
            <SectionHeader
              badge="About Me"
              title="Building premium web experiences with modern UI and strong performance."
              description="I'm a software engineer focused on creating user-centered web products that feel polished, responsive, and fast. My work combines strong visual design with reliable engineering."
            />

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.slice(0, 2).map((stat, i) => (
                  <GlassCard key={stat.label} delay={i * 0.05}>
                    <p className="text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                    <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  </GlassCard>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20"
                >
                  Work with me
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </section>

          <aside className="space-y-5 sm:space-y-6">
            <GlassCard className="relative overflow-hidden" delay={0.05}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/5" />
              <div className="relative flex items-center gap-4">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-xl font-bold text-violet-400 sm:h-16 sm:w-16 sm:text-2xl"
                  animate={prefersReducedMotion ? undefined : { rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  Y
                </motion.div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-violet-400 sm:text-sm">Yuvanesh</p>
                  <p className="text-base font-semibold text-white sm:text-lg">Software Engineer</p>
                  <p className="text-sm text-slate-400">Chennai, India</p>
                </div>
              </div>
            </GlassCard>

            {highlights.map((item, i) => (
              <GlassCard key={item.title} hover delay={0.1 + i * 0.08}>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
              </GlassCard>
            ))}

            <GlassCard delay={0.35}>
              <p className="text-sm text-slate-400">Core strengths</p>
              <div className="mt-4 space-y-4">
                {strengths.map((skill, i) => (
                  <div key={skill.label}>
                    <span className="text-sm text-slate-300">{skill.label}</span>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        initial={prefersReducedMotion ? { width: skill.width } : { width: 0 }}
                        whileInView={{ width: skill.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </aside>
        </div>
      </main>
    </div>
  );
}
