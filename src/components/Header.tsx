"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { mobileMenuVariants, navLinkVariants } from "@/lib/animations";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4 sm:py-3 lg:px-5 ${
            scrolled
              ? "border-white/10 bg-[#07090f]/85 shadow-2xl shadow-violet-950/30 backdrop-blur-2xl"
              : "border-white/5 bg-[#07090f]/40 backdrop-blur-md"
          }`}
        >
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <motion.span
              className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-500/25"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.06, rotate: 3 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
            >
              Y
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#07090f]" />
            </motion.span>
            <div className="hidden min-[380px]:block">
              <p className="text-sm font-bold leading-none text-white sm:text-base">BuiltByYuva</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                Software Engineer
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors xl:px-4 ${
                  isActive(link.href) ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-violet-500/20 ring-1 ring-violet-400/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}>
              <Link
                href="/contact"
                className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-3.5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/35 sm:inline-flex sm:px-4"
              >
                Hire Me
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
            >
              <span className="sr-only">Menu</span>
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                className="absolute h-0.5 w-5 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute h-0.5 w-5 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                className="absolute h-0.5 w-5 rounded-full bg-white"
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={prefersReducedMotion ? undefined : mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#07090f]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col px-5 pb-8 pt-24">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 text-xs uppercase tracking-[0.3em] text-violet-400"
              >
                Navigation
              </motion.p>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={prefersReducedMotion ? undefined : navLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-lg font-medium transition ${
                        isActive(link.href)
                          ? "border-violet-400/30 bg-violet-500/10 text-white"
                          : "border-white/5 bg-white/[0.03] text-slate-300"
                      }`}
                    >
                      {link.label}
                      <FiArrowUpRight className="h-5 w-5 opacity-60" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-auto"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/25"
                >
                  Hire Me
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
