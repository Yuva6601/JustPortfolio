"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SiFigma } from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillsToolListClient from "@/components/SkillsToolListClient";
import { skills } from "@/lib/data";

export default function SkillsPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <section className="space-y-8">
            <SectionHeader
              badge="Skillset"
              title="Building fast, accessible interfaces with modern tools."
              description="I create scalable front-end systems with a strong focus on responsive design, clean code, and seamless user experiences."
            />

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <GlassCard>
                  <p className="text-xs text-slate-400 sm:text-sm">Technologies</p>
                  <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">{skills.length}+</p>
                </GlassCard>
                <GlassCard delay={0.05}>
                  <p className="text-xs text-slate-400 sm:text-sm">UI Projects</p>
                  <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">30+</p>
                </GlassCard>
              </div>
            </AnimatedSection>
          </section>

          <aside className="space-y-5 sm:space-y-6">
            <GlassCard delay={0.05}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-400">UI Focus</p>
                  <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">Design systems & motion</h2>
                </div>
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 sm:h-12 sm:w-12"
                  animate={prefersReducedMotion ? undefined : { rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiFigma className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Polished design systems and motion-rich interfaces with reusable components and accessible structure.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Design systems", "Motion polish", "Accessible UI", "Component-led"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.1}>
              <p className="mb-4 text-sm font-medium text-white">Core tools</p>
              <SkillsToolListClient />
            </GlassCard>
          </aside>
        </div>

        <AnimatedSection className="mt-12 sm:mt-16" delay={0.1}>
          <GlassCard>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-400">Skill mastery</p>
                <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Technical competency</h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">2026</span>
            </div>

            <div className="scroll-box max-h-[520px] space-y-5">
              {skills.map((skill, i) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <skill.Icon size={20} style={{ color: skill.color }} />
                      <span className="text-sm font-medium text-white sm:text-base">{skill.label}</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: skill.color }}>
                      {skill.percent}%
                    </span>
                  </div>
                  <div
                    className="h-2.5 w-full overflow-hidden rounded-full"
                    style={{ background: skill.bgColor, border: `1px solid ${skill.borderColor}` }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.glow})`,
                        boxShadow: `0 0 12px ${skill.glow}`,
                      }}
                      initial={prefersReducedMotion ? { width: `${skill.percent}%` } : { width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </main>
    </div>
  );
}
