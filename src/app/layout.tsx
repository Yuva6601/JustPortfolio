import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Yuvanesh | Software Engineer",
  description:
    "Portfolio of Yuvanesh — full-stack developer building modern, fast, and user-focused web experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
