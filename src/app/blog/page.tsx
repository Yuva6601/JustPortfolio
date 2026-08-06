import Header from "@/components/Header";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto flex max-w-5xl flex-col px-4 pt-24 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Share tutorials, ideas, and development notes through this dedicated blog page.
        </p>
      </main>
    </div>
  );
}
