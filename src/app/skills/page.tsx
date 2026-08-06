import Header from "@/components/Header";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto flex max-w-5xl flex-col px-4 pt-24 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">Skills</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          My toolkit includes Next.js, React, TypeScript, Tailwind CSS, and modern UI
          development practices.
        </p>
      </main>
    </div>
  );
}
