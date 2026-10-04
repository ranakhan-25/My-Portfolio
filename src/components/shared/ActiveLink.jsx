"use client";

import { useEffect, useState } from "react";

export const ActiveLink = ({ href, children, className = "" }) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "service",
        "skills",
        "projects",
        "contract",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = activeHash === href;

  return (
    <a
      href={href}
      className={`
        relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-300
        ${
          isActive
            ? "bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/15 text-[#F97F51] dark:text-[#FC427B]"
            : "text-zinc-700 dark:text-zinc-200 hover:text-[#F97F51] dark:hover:text-[#FC427B]"
        }
        ${className}
      `}
    >
      {children}

      {/* Underline */}
      <span
        className={`
          absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full
          transition-all duration-300
          ${
            isActive
              ? "w-3/5 bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
              : "w-0 bg-transparent"
          }
        `}
      />
    </a>
  );
};
