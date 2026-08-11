"use client";

import { skills } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";

export default function SkillsToolListClient({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`scroll-box min-h-[280px] max-h-[380px] space-y-3 sm:min-h-[320px] sm:max-h-[420px] ${className ?? ""}`}>
      {skills.map((tool, i) => (
        <motion.div
          key={tool.label}
          initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          whileHover={prefersReducedMotion ? undefined : { x: 4, scale: 1.01 }}
          className="flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-xl"
          style={{
            background: tool.bgColor,
            border: `1px solid ${tool.borderColor}`,
          }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11"
            style={{ background: "rgba(255,255,255,0.08)", color: tool.color }}
          >
            <tool.Icon className="h-5 w-5" style={{ filter: `drop-shadow(0 0 6px ${tool.glow})` }} />
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: tool.color }}>
              {tool.label}
            </p>
            <p className="text-xs text-slate-400">{tool.percent}% proficiency</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
