"use client";

import React from "react";
import { FaAws } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const toolBadges = [
  {
    label: "AWS",
    Icon: FaAws,
    color: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.12)",
    borderColor: "rgba(255, 153, 0, 0.35)",
    glow: "rgba(255, 153, 0, 0.45)",
  },
  {
    label: "Azure",
    Icon: VscAzure,
    color: "#0089D6",
    bgColor: "rgba(0, 137, 214, 0.12)",
    borderColor: "rgba(0, 137, 214, 0.35)",
    glow: "rgba(0, 137, 214, 0.45)",
  },
  {
    label: "CSS",
    Icon: SiCss,
    color: "#1572B6",
    bgColor: "rgba(21, 114, 182, 0.12)",
    borderColor: "rgba(21, 114, 182, 0.35)",
    glow: "rgba(21, 114, 182, 0.45)",
  },
  {
    label: "Django",
    Icon: SiDjango,
    color: "#44B78B",
    bgColor: "rgba(68, 183, 139, 0.12)",
    borderColor: "rgba(68, 183, 139, 0.35)",
    glow: "rgba(68, 183, 139, 0.45)",
  },
  {
    label: "FastAPI",
    Icon: SiFastapi,
    color: "#009688",
    bgColor: "rgba(0, 150, 136, 0.12)",
    borderColor: "rgba(0, 150, 136, 0.35)",
    glow: "rgba(0, 150, 136, 0.45)",
  },
  {
    label: "Flask",
    Icon: SiFlask,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    label: "GitHub",
    Icon: SiGithub,
    color: "#F0F6FC",
    bgColor: "rgba(240, 246, 252, 0.08)",
    borderColor: "rgba(240, 246, 252, 0.25)",
    glow: "rgba(240, 246, 252, 0.3)",
  },
  {
    label: "HTML",
    Icon: SiHtml5,
    color: "#E34F26",
    bgColor: "rgba(227, 79, 38, 0.12)",
    borderColor: "rgba(227, 79, 38, 0.35)",
    glow: "rgba(227, 79, 38, 0.45)",
  },
  {
    label: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    bgColor: "rgba(247, 223, 30, 0.12)",
    borderColor: "rgba(247, 223, 30, 0.35)",
    glow: "rgba(247, 223, 30, 0.4)",
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    bgColor: "rgba(71, 162, 72, 0.12)",
    borderColor: "rgba(71, 162, 72, 0.35)",
    glow: "rgba(71, 162, 72, 0.45)",
  },
  {
    label: "MySQL",
    Icon: SiMysql,
    color: "#4479A1",
    bgColor: "rgba(68, 121, 161, 0.12)",
    borderColor: "rgba(68, 121, 161, 0.35)",
    glow: "rgba(68, 121, 161, 0.45)",
  },
  {
    label: "Next.js",
    Icon: SiNextdotjs,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    color: "#68A063",
    bgColor: "rgba(104, 160, 99, 0.12)",
    borderColor: "rgba(104, 160, 99, 0.35)",
    glow: "rgba(104, 160, 99, 0.45)",
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#4169E1",
    bgColor: "rgba(65, 105, 225, 0.12)",
    borderColor: "rgba(65, 105, 225, 0.35)",
    glow: "rgba(65, 105, 225, 0.45)",
  },
  {
    label: "Python",
    Icon: SiPython,
    color: "#3776AB",
    bgColor: "rgba(55, 118, 171, 0.12)",
    borderColor: "rgba(55, 118, 171, 0.35)",
    glow: "rgba(55, 118, 171, 0.45)",
  },
  {
    label: "React.js",
    Icon: SiReact,
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.12)",
    borderColor: "rgba(97, 218, 251, 0.35)",
    glow: "rgba(97, 218, 251, 0.5)",
  },
  {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.12)",
    borderColor: "rgba(6, 182, 212, 0.35)",
    glow: "rgba(6, 182, 212, 0.5)",
  },
  {
    label: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.12)",
    borderColor: "rgba(49, 120, 198, 0.35)",
    glow: "rgba(49, 120, 198, 0.5)",
  },
];

const defaultScrollClasses =
  "overflow-y-auto scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-violet-500/30 hover:[&::-webkit-scrollbar-thumb]:bg-violet-500/50";

export default function SkillsToolListClient({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`min-h-[380px] max-h-[420px] space-y-4 ${className ?? defaultScrollClasses}`}>
      {toolBadges.map((tool) => (
        <div
          key={tool.label}
          className="group flex items-center gap-3 rounded-3xl px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
          style={{
            background: tool.bgColor,
            border: `1px solid ${tool.borderColor}`,
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.25)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${tool.glow}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "inset 0 0 20px rgba(0,0,0,0.25)";
          }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: tool.color,
            }}
          >
            <tool.Icon
              className="h-6 w-6"
              style={{ filter: `drop-shadow(0 0 8px ${tool.glow})` }}
            />
          </div>

          <div>
            <p className="text-sm font-semibold" style={{ color: tool.color }}>
              {tool.label}
            </p>
            <p className="text-xs text-slate-400">Core tool</p>
          </div>
        </div>
      ))}
    </div>
  );
}
