import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),_transparent_40%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          404 • Page not found
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
          Oops! This page is missing.
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          The page you’re looking for doesn’t exist or may have been moved. Let’s take
          you back to the home page and keep exploring.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Go to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-white/10"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
