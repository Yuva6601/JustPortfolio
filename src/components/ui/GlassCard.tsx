"use client";

import { motion, useReducedMotion } from "framer-motion";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
};

export default function GlassCard({
  children,
  className = "",
  hover = false,
  delay = 0,
}: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const classes = `rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-xl ${
    hover ? "transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.06]" : ""
  } ${className}`;

  if (prefersReducedMotion) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
