"use client";

import { motion, useReducedMotion } from "framer-motion";
import Badge from "./Badge";
import { fadeUpVariants } from "@/lib/animations";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  className?: string;
  delay?: number;
};

export default function SectionHeader({
  badge,
  title,
  description,
  className = "",
  delay = 0,
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`space-y-4 ${className}`}>
        <Badge>{badge}</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className={`space-y-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
      variants={fadeUpVariants}
    >
      <motion.div custom={delay + 0.05} variants={fadeUpVariants}>
        <Badge>{badge}</Badge>
      </motion.div>
      <motion.h1
        custom={delay + 0.1}
        variants={fadeUpVariants}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          custom={delay + 0.15}
          variants={fadeUpVariants}
          className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
