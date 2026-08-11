type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-300 ${className}`}
    >
      {children}
    </span>
  );
}
