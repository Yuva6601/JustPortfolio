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
import type { IconType } from "react-icons";

export type Skill = {
  label: string;
  percent: number;
  Icon: IconType;
  color: string;
  bgColor: string;
  borderColor: string;
  glow: string;
};

export const skills: Skill[] = [
  { label: "HTML", percent: 95, Icon: SiHtml5, color: "#E34F26", bgColor: "rgba(227, 79, 38, 0.12)", borderColor: "rgba(227, 79, 38, 0.35)", glow: "rgba(227, 79, 38, 0.45)" },
  { label: "CSS", percent: 92, Icon: SiCss, color: "#1572B6", bgColor: "rgba(21, 114, 182, 0.12)", borderColor: "rgba(21, 114, 182, 0.35)", glow: "rgba(21, 114, 182, 0.45)" },
  { label: "JavaScript", percent: 90, Icon: SiJavascript, color: "#F7DF1E", bgColor: "rgba(247, 223, 30, 0.12)", borderColor: "rgba(247, 223, 30, 0.35)", glow: "rgba(247, 223, 30, 0.4)" },
  { label: "TypeScript", percent: 87, Icon: SiTypescript, color: "#3178C6", bgColor: "rgba(49, 120, 198, 0.12)", borderColor: "rgba(49, 120, 198, 0.35)", glow: "rgba(49, 120, 198, 0.5)" },
  { label: "React.js", percent: 88, Icon: SiReact, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.12)", borderColor: "rgba(97, 218, 251, 0.35)", glow: "rgba(97, 218, 251, 0.5)" },
  { label: "Next.js", percent: 82, Icon: SiNextdotjs, color: "#FFFFFF", bgColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.25)", glow: "rgba(255, 255, 255, 0.3)" },
  { label: "Tailwind CSS", percent: 90, Icon: SiTailwindcss, color: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.12)", borderColor: "rgba(6, 182, 212, 0.35)", glow: "rgba(6, 182, 212, 0.5)" },
  { label: "Node.js", percent: 80, Icon: SiNodedotjs, color: "#68A063", bgColor: "rgba(104, 160, 99, 0.12)", borderColor: "rgba(104, 160, 99, 0.35)", glow: "rgba(104, 160, 99, 0.45)" },
  { label: "Python", percent: 90, Icon: SiPython, color: "#3776AB", bgColor: "rgba(55, 118, 171, 0.12)", borderColor: "rgba(55, 118, 171, 0.35)", glow: "rgba(55, 118, 171, 0.45)" },
  { label: "Django", percent: 85, Icon: SiDjango, color: "#44B78B", bgColor: "rgba(68, 183, 139, 0.12)", borderColor: "rgba(68, 183, 139, 0.35)", glow: "rgba(68, 183, 139, 0.45)" },
  { label: "FastAPI", percent: 85, Icon: SiFastapi, color: "#009688", bgColor: "rgba(0, 150, 136, 0.12)", borderColor: "rgba(0, 150, 136, 0.35)", glow: "rgba(0, 150, 136, 0.45)" },
  { label: "Flask", percent: 80, Icon: SiFlask, color: "#FFFFFF", bgColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.25)", glow: "rgba(255, 255, 255, 0.3)" },
  { label: "PostgreSQL", percent: 85, Icon: SiPostgresql, color: "#4169E1", bgColor: "rgba(65, 105, 225, 0.12)", borderColor: "rgba(65, 105, 225, 0.35)", glow: "rgba(65, 105, 225, 0.45)" },
  { label: "MySQL", percent: 80, Icon: SiMysql, color: "#4479A1", bgColor: "rgba(68, 121, 161, 0.12)", borderColor: "rgba(68, 121, 161, 0.35)", glow: "rgba(68, 121, 161, 0.45)" },
  { label: "MongoDB", percent: 85, Icon: SiMongodb, color: "#47A248", bgColor: "rgba(71, 162, 72, 0.12)", borderColor: "rgba(71, 162, 72, 0.35)", glow: "rgba(71, 162, 72, 0.45)" },
  { label: "AWS", percent: 85, Icon: FaAws, color: "#FF9900", bgColor: "rgba(255, 153, 0, 0.12)", borderColor: "rgba(255, 153, 0, 0.35)", glow: "rgba(255, 153, 0, 0.45)" },
  { label: "Azure", percent: 80, Icon: VscAzure, color: "#0089D6", bgColor: "rgba(0, 137, 214, 0.12)", borderColor: "rgba(0, 137, 214, 0.35)", glow: "rgba(0, 137, 214, 0.45)" },
  { label: "GitHub", percent: 85, Icon: SiGithub, color: "#F0F6FC", bgColor: "rgba(240, 246, 252, 0.08)", borderColor: "rgba(240, 246, 252, 0.25)", glow: "rgba(240, 246, 252, 0.3)" },
];

export type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  accent: string;
  highlight: string;
  tags: string[];
  gradient: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Income Tracker App",
    category: "Finance",
    description:
      "Personal finance management app for tracking income, expenses, transactions, and spending insights with interactive analytics.",
    accent: "01",
    highlight: "Personal Finance",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-violet-600/40 to-fuchsia-600/20",
    link: "https://incomeexpenseapi.vercel.app/"
  },

  {
    id: 2,
    name: "Workout Planner App",
    category: "Health & Fitness",
    description:
      "Workout planning application to organize exercises, track daily routines, monitor progress, and maintain consistent fitness goals.",
    accent: "02",
    highlight: "Fitness Planning",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-cyan-600/40 to-blue-600/20",
    link: "https://workout-buddy-app-delta.vercel.app"
  },

  {
    id: 3,
    name: "Speech To Text App",
    category: "Productivity",
    description:
      "Speech-to-text application for converting spoken language into written text with real-time transcription and editing capabilities.",
    accent: "03",
    highlight: "Text Conversion",
    tags: ["Python", "Flask"],
    gradient: "from-emerald-600/40 to-teal-600/20",
    link: "https://speech-to-text-ten-xi.vercel.app"
  },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "18+" },
  { label: "Happy Clients", value: "10+" },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvaneshraji/" },
  { label: "GitHub", href: "https://github.com/Yuva6601" },
  { label: "Instagram", href: "https://www.instagram.com/______mr.why______/" },
];

export const contactInfo = {
  email: "yyuvanesh8@gmail.com",
  phone: "+91 89394 07271",
  location: "Chennai, India",
};
