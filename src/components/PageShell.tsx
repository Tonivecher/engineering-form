import type { PropsWithChildren } from "react";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,241,235,0.08),transparent_24%),linear-gradient(180deg,#0a0a0a_0%,#050505_46%,#090909_100%)]" />
        <div className="architectural-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
      </div>
      {children}
    </div>
  );
}
