"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, stats } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function ProjectsPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <SectionHeader
          badge="Featured Work"
          title="Projects that shine with clean design and real impact."
          description="A curated selection of web applications built for performance, usability, and modern brand experiences."
        />

        <AnimatedSection className="mt-10" delay={0.05}>
          <motion.div
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={prefersReducedMotion ? undefined : staggerItem}>
                <GlassCard className="text-center">
                  <p className="text-xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] text-slate-400 sm:text-sm">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <GlassCard key={project.id} hover delay={0.08 + i * 0.08} className="group flex h-full flex-col">
              <motion.div
                className={`relative h-36 overflow-hidden rounded-xl bg-gradient-to-br sm:h-40 ${project.gradient}`}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.35 }}
              >
                <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.accent}
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-xs">
                  {project.category}
                </span>
              </motion.div>

              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-medium text-white">{project.highlight}</span>
                  <motion.button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-violet-400"
                    aria-label={`View ${project.name}`}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.08, borderColor: "rgba(139,92,246,0.4)", color: "#fff" }}
                  >
                    <FiExternalLink className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}
