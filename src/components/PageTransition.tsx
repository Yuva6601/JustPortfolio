"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(pathname);

  useEffect(() => {
    setAnimationKey(pathname);
  }, [pathname]);

  return (
    <div key={animationKey} className="page-transition flex-1 min-h-full relative overflow-hidden bg-[#0B0F14] text-[#EDEFF2]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/10 blur-[140px]"
      />
      <div className="relative z-10 min-h-full">{children}</div>
    </div>
  );
}
