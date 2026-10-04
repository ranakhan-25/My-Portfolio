"use client";

import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { SiTransportforlondon } from "react-icons/si";
import { ActiveLink } from "../shared/ActiveLink";
import ThemeToggle from "../shared/ThemeToggle";
import { useState, useEffect } from "react";
import { FaHome, FaServicestack } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { IoIosContract } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi2";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [timeString, setTimeString] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Live Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenMenu]);

  const navItems = [
    { href: "#home", label: "Home", icon: <FaHome className="text-sm" /> },
    {
      href: "#about",
      label: "About",
      icon: <MdOutlineRoundaboutRight className="text-sm" />,
    },
    {
      href: "#service",
      label: "Service",
      icon: <FaServicestack className="text-sm" />,
    },
    {
      href: "#skills",
      label: "Skills",
      icon: <GiSkills className="text-sm" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <AiOutlineProject className="text-sm" />,
    },
    {
      href: "#contract",
      label: "Contract",
      icon: <IoIosContract className="text-sm" />,
    },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full font-[family-name:var(--font-inconsolata)] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-lg"
            : "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/40 dark:border-zinc-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] text-white shadow-md group-hover:scale-105 transition-all duration-300">
              <SiTransportforlondon className="text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
                Rana Khan
              </span>
              <span className="text-[9px] font-medium text-zinc-500 dark:text-zinc-400 tracking-widest uppercase -mt-0.5">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-700/50 p-1.5 rounded-full">
              {navItems.map((item) => (
                <li key={item.href}>
                  <ActiveLink href={item.href}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Clock - only md+ */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {timeString || "00:00:00"}
            </div>

            {/* Hire Me - Desktop */}
            <Link
              href="#contract"
              className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105
                bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
                dark:from-[#1B9CFC] dark:to-[#FC427B]
                shadow-md"
            >
              Hire Me
              <HiArrowRight className="text-sm" />
            </Link>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <div className="lg:hidden text-zinc-800 dark:text-zinc-100">
              <Hamburger
                toggled={isOpenMenu}
                toggle={setIsOpenMenu}
                size={20}
                color="currentColor"
                rounded
              />
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpenMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpenMenu(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpenMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pt-2">
            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Menu
            </span>
            <button
              onClick={() => setIsOpenMenu(false)}
              className="text-zinc-500 hover:text-zinc-800 dark:hover:text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Mobile Clock */}
          <div className="mb-6 flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs">
            <span className="text-zinc-500">Current Time</span>
            <span className="font-semibold text-[#F97F51] dark:text-[#FC427B]">
              {timeString}
            </span>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpenMenu(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-[#F97F51] dark:text-[#FC427B]">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me Mobile */}
          <div className="mt-8">
            <Link
              href="#contract"
              onClick={() => setIsOpenMenu(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white
                bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
                dark:from-[#1B9CFC] dark:to-[#FC427B]"
            >
              Hire Me
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
