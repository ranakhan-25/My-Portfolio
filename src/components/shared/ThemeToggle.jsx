"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme("dark");
  
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    setTheme(theme === "dark" ? "light" : "dark")
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full
      bg-linear-to-r from-violet-200 via-fuchsia-200 to-pink-200
      text-white shadow-lg hover:scale-110 duration-300"
    >
      {darkMode ? (
        <FaSun className="text-2xl animate-spin text-white" />
      ) : (
        <FaMoon className="text-2xl text-black" />
      )}
    </button>
  );
}