"use client";

import { useSyncExternalStore } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Modern way to detect client-side mount (no warning)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex items-center justify-center w-10 h-10 rounded-full
        transition-all duration-300 hover:scale-110 active:scale-95
        bg-gradient-to-br from-[#55E6C1] to-[#F97F51]
        dark:from-[#1B9CFC] dark:to-[#FC427B]
        text-white
        shadow-md shadow-[#F97F51]/30 dark:shadow-[#FC427B]/30
        overflow-hidden
      "
      aria-label="Toggle Theme"
    >
      {/* Sun Icon - Continuous Spin when Dark */}
      <FaSun
        className={`
          absolute text-lg transition-all duration-500
          ${
            isDark
              ? "rotate-0 scale-100 opacity-100 animate-spin"
              : "rotate-90 scale-0 opacity-0"
          }
        `}
      />

      {/* Moon Icon */}
      <FaMoon
        className={`
          absolute text-lg transition-all duration-500
          ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }
        `}
      />
    </button>
  );
}
