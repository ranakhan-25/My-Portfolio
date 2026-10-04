"use client";

import Image from "next/image";
import TypingText from "./TypingText";
import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube, FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden px-4 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-[#0a0a0a] dark:to-black text-zinc-900 dark:text-white font-[family-name:var(--font-inconsolata)]">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#55E6C1]/20 dark:bg-[#1B9CFC]/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#F97F51]/20 dark:bg-[#FC427B]/15 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

      <section className="relative z-10 w-full max-w-7xl mx-auto md:flex justify-between items-center py-12 md:py-20 gap-12 lg:gap-16 px-2 sm:px-6">
        {/* ================= MOBILE IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="md:hidden mb-12"
        >
          <div className="relative w-72 h-72 mx-auto flex items-center justify-center group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] animate-[spin_12s_linear_infinite] p-[3px]">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#020617]"></div>
            </div>

            <div className="absolute inset-4 rounded-full bg-[#55E6C1]/30 dark:bg-[#1B9CFC]/25 blur-3xl group-hover:blur-[80px] transition-all duration-700"></div>

            <div className="relative z-20 w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
              <Image
                src="/image.png"
                alt="Atikul Haq Rana"
                width={600}
                height={600}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="md:w-[52%] max-md:pb-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg font-medium text-[#F97F51] dark:text-[#FC427B] mb-2"
          >
            Hello, It&apos;s Me 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-4 font-[family-name:var(--font-poppins)]"
          >
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Atikul Haq
            </span>
            <span className="text-zinc-700 dark:text-zinc-200 italic font-medium ml-2">
              (Rana)
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold flex flex-wrap items-center gap-2 mb-6"
          >
            I&apos;m a
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              <TypingText />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-[580px] mb-8"
          >
            A Full Stack Developer passionate about creating modern web
            applications that deliver seamless user experiences and real-world
            solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Link
              href="https://drive.google.com/file/d/1lR011baW2GmcwHbaxWsHgdJn7men3fTB/view?usp=sharing"
              target="_blank"
              className="group relative px-7 py-3.5 rounded-full overflow-hidden font-semibold text-white
                bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]
                shadow-lg shadow-[#F97F51]/30 dark:shadow-[#FC427B]/30
                hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
            >
              Download CV
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>

            <a href="#contract">
              <button className="px-7 py-3.5 rounded-full font-semibold border-2 border-[#F97F51] dark:border-[#FC427B] text-[#F97F51] dark:text-[#FC427B] hover:bg-[#F97F51] dark:hover:bg-[#FC427B] hover:text-white dark:hover:text-white transition-all duration-300">
                Hire Me
              </button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: <FaGithub />, href: "https://github.com/ranakhan-25" },
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/in/rana-khan-dev",
              },
              {
                icon: <FaYoutube />,
                href: "https://www.youtube.com/@Ranakhan-r5b",
              },
              { icon: <FaTwitter />, href: "https://x.com/Ranakhan2025" },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-xl text-zinc-700 dark:text-zinc-200 hover:text-white hover:bg-gradient-to-br hover:from-[#55E6C1] hover:to-[#F97F51] dark:hover:from-[#1B9CFC] dark:hover:to-[#FC427B] transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= DESKTOP IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden md:flex md:w-[45%] justify-center"
        >
          <div className="relative w-[400px] h-[400px] lg:w-[440px] lg:h-[440px] flex items-center justify-center group">
            {/* Spinning Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#55E6C1] via-[#F97F51] to-[#55E6C1] dark:from-[#1B9CFC] dark:via-[#FC427B] dark:to-[#1B9CFC] animate-[spin_14s_linear_infinite] p-[3px]">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#020617]"></div>
            </div>

            {/* Glow */}
            <div className="absolute inset-6 rounded-full bg-[#55E6C1]/25 dark:bg-[#1B9CFC]/20 blur-[60px] group-hover:blur-[90px] transition-all duration-700"></div>

            {/* Text Badges */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 top-16 z-30 px-4 py-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 shadow-xl text-sm font-semibold text-zinc-700 dark:text-zinc-200"
            >
              Full Stack Developer
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-4 bottom-20 z-30 px-4 py-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 shadow-xl text-sm font-semibold text-zinc-700 dark:text-zinc-200"
            >
              MERN Stack
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.8,
                ease: "easeInOut",
              }}
              className="absolute right-4 top-8 z-30 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 shadow-lg text-xs font-medium text-zinc-600 dark:text-zinc-300"
            >
              UI / UX
            </motion.div>

            {/* Main Image + Hover Code Overlay */}
            <div className="relative z-20 w-[88%] h-[88%] rounded-full overflow-hidden border-4 border-white/30 dark:border-white/10 shadow-2xl">
              <Image
                src="/image.png"
                alt="Atikul Haq Rana"
                width={900}
                height={900}
                priority
                quality={100}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Code Overlay */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                <pre className="text-[11px] sm:text-xs leading-relaxed text-left text-[#55E6C1] dark:text-[#1B9CFC] font-mono overflow-hidden">
                  {`const aboutMe = {
  name: "Atikul Haq Rana",
  role: "Full Stack Developer",
  stack: ["Next.js", "Node.js","MongoDB", "PostgresSQL"],
  passion: "Building modern web apps",
  available: true
};

console.log(aboutMe);`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
