"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUp, FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { contactInfo, socials } from "@/lib/data";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialIcons: Record<string, typeof FiGithub> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Instagram: FiInstagram,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="relative z-10 mt-auto overflow-hidden border-t border-white/10 bg-[#05070d]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="py-14 sm:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-transparent p-6 sm:p-10">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"
              animate={prefersReducedMotion ? undefined : { x: [0, 20, 0], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-violet-400">Let&apos;s collaborate</p>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Ready to bring your idea to life?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  From concept to launch — I help you build fast, beautiful, and scalable web products.
                </p>
              </div>
              <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-500/25 sm:w-auto sm:text-base"
                >
                  Start a project
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <AnimatedSection delay={0.05} className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                Y
              </span>
              <span className="text-lg font-bold text-white">BuiltByYuva</span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Full-stack developer crafting fast, scalable, and beautiful web experiences from Chennai, India.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Pages</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-white">
                    <span className="h-px w-0 bg-violet-400 transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="transition hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href="tel:+918939407271" className="transition hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.location}</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Social</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.label] ?? FiGithub;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-violet-400/40 hover:text-white"
                    whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.05 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {year} Yuvanesh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">Built with Next.js & Tailwind CSS</p>
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-violet-400/40 hover:text-white"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
            >
              <FiArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
