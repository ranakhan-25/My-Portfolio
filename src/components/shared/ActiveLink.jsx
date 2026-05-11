"use client";

import { useEffect, useState } from "react";

export const ActiveLink = ({ href, children }) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <a
      href={href}
      className={`px-4 py-2 flex items-center gap-2 font-medium rounded-4xl transition-all duration-300 ${
        activeHash === href
          ? "bg-linear-to-r from-violet-300 via-fuchsia-300 to-pink-300 text-purple-700"
          : "text-black"
      }`}
    >
      {children}
    </a>
  );
};