"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageVariants } from "@/lib/animations";

function PageBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.12, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[120px]"
      />
    </>
  );
}

function NavigationProgress({ pathname }: { pathname: string }) {
  return (
    <motion.div
      key={pathname}
      className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
      initial={{ width: "0%", opacity: 1 }}
      animate={{ width: "100%", opacity: 0 }}
      transition={{
        width: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        opacity: { delay: 0.45, duration: 0.25 },
      }}
    />
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [pathname, prefersReducedMotion]);

  return (
    <div className="relative min-h-full flex-1 overflow-hidden bg-[#07090f] text-slate-100">
      {!prefersReducedMotion && <NavigationProgress pathname={pathname} />}

      <PageBackground />

      {prefersReducedMotion ? (
        <div className="relative z-10 min-h-full">{children}</div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="relative z-10 min-h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
