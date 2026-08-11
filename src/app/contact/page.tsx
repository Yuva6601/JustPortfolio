"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { contactInfo, socials } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactHighlights = [
  { label: "Email", value: contactInfo.email, icon: FiMail, href: `mailto:${contactInfo.email}` },
  { label: "Phone", value: contactInfo.phone, icon: FiPhone, href: "tel:+918939407271" },
  { label: "Location", value: contactInfo.location, icon: FiMapPin },
];

const socialIcons: Record<string, typeof FiGithub> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Instagram: FiInstagram,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-500"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
          </span>
          Open for new projects
        </motion.div>

        <section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <SectionHeader
              badge="Let's Collaborate"
              title="Ready to build your next digital experience?"
              description="Share your idea, project scope, or collaboration request — I'll reply with a plan that blends design, performance, and business impact."
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            >
              {contactHighlights.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-violet-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="mt-4">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:text-xs">{item.label}</p>
                      <p className="mt-1 break-words text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </>
                );

                return (
                  <motion.div key={item.label} variants={staggerItem}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.05]"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">{inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <GlassCard delay={0.1}>
            <p className="text-xs uppercase tracking-[0.2em] text-violet-400">Contact form</p>
            <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Drop a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </GlassCard>
        </section>

        <section className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          <AnimatedSection delay={0.05}>
            <GlassCard>
              <p className="text-xs uppercase tracking-[0.2em] text-violet-400">Stay connected</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Follow along</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Project sneak peeks, build logs, and design notes — posted as they happen.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.label] ?? FiGithub;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-slate-400 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                      <FiArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <GlassCard>
              <p className="text-xs uppercase tracking-[0.2em] text-violet-400">Availability</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Available for new projects</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Open for freelance work, web applications, design systems, and ongoing collaborations.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm">
                <span className="text-slate-500">Response time</span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-medium text-white">~1 business day</span>
              </div>
            </GlassCard>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
}
