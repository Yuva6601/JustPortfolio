import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-28">
      <div className="text-center">
        <Badge>404 • Page not found</Badge>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Oops! This page is missing.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Go to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
