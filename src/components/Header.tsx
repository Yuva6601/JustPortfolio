"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2">
            <div className="text-[#8b5cf6] font-bold text-lg sm:text-xl flex items-center">
              <span className="mr-1">{"</>"}</span>
              <span className="text-white">CodeCraft</span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d={
                  menuOpen
                    ? "M18 6L6 18M6 6l12 12"
                    : "M4 7h16M4 12h16M4 17h16"
                }
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors pb-1 ${
                  isActive(link.href)
                    ? "text-white border-b-2 border-[#8b5cf6]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg hover:opacity-90 transition-all gap-2"
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

        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-xl shadow-black/20 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[#8b5cf6]/10 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
