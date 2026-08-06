"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-[#8b5cf6] font-bold text-xl flex items-center">
              <span className="mr-1">{"</>"}</span>
              <span className="text-white">CodeCraft</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors pb-1 ${
                isActive("/") ? "text-white border-b-2 border-[#8b5cf6]" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors pb-1 ${
                isActive("/about") ? "text-white border-b-2 border-[#8b5cf6]" : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/skills"
              className={`text-sm font-medium transition-colors pb-1 ${
                isActive("/skills") ? "text-white border-b-2 border-[#8b5cf6]" : "text-gray-400 hover:text-white"
              }`}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors pb-1 ${
                isActive("/projects") ? "text-white border-b-2 border-[#8b5cf6]" : "text-gray-400 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors pb-1 ${
                isActive("/blog") ? "text-white border-b-2 border-[#8b5cf6]" : "text-gray-400 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors pb-1 ${
                isActive("/contact") ? "text-white border-b-2 border-[#8b5cf6]" : "text-gray-400 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Hire Me Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg hover:opacity-90 transition-all gap-2"
            >
              Hire Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
