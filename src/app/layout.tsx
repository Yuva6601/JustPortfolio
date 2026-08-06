import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Engineer",
  description: "A showcase of my work and experience in web development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
