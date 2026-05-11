"use client";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`relative overflow-hidden py-28 px-4 md:px-10 
      
      bg-gradient-to-br
      from-[#f8fafc]
      via-[#eef2ff]
      to-[#e0f2fe]

      dark:from-[#020617]
      dark:via-[#0f172a]
      dark:to-[#020617]

      ${className}`}
    >
      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/15 blur-[140px] rounded-full animate-pulse"></div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/15 blur-[140px] rounded-full animate-pulse"></div>

      {/* CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[160px] rounded-full"></div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
      linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
      bg-[size:40px_40px]"
      ></div>

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')]"></div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
