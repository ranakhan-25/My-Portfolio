"use client";

import Image from "next/image";
import TypingText from "./TypingText";
import Link from "next/link";

import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden py-14 px-4 bg-gradient-to-br from-white via-slate-100 to-gray-200 dark:from-[#020617] dark:via-[#0f172a] dark:to-black text-black dark:text-white">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* 🔥 Floating Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* ================= HERO SECTION ================= */}

      <section className="relative z-10 w-full m-auto md:flex justify-between items-center py-16 gap-10 md:px-6 lg:px-16">

        {/* ================= MOBILE IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:hidden mb-10"
        >

          <div className="relative w-75 h-75 mx-auto flex items-center justify-center group">

            {/* 🔥 Rotating Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 animate-[spin_10s_linear_infinite]"></div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl group-hover:blur-[100px] transition-all duration-500"></div>

            {/* Inner Layer */}
            <div className="absolute inset-2 rounded-full bg-white dark:bg-[#020617] z-10"></div>

            {/* Floating Dots */}
            <div className="absolute top-3 left-10 w-4 h-4 rounded-full bg-cyan-400 animate-bounce z-30"></div>

            <div className="absolute bottom-10 right-5 w-3 h-3 rounded-full bg-pink-500 animate-ping z-30"></div>

            {/* IMAGE */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative z-20 w-[97%] h-[97%] rounded-full overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.5)]"
            >

              <Image
                src="/image.png"
                alt="image"
                width={700}
                height={700}
                priority
                className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
              />

            </motion.div>

          </div>
        </motion.div>

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[55%] max-md:pb-10"
        >

          {/* Small Intro */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-medium py-1 text-violet-500"
          >
            Hello, It&apos;s Me 👋
          </motion.h3>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="my-4 text-[42px] md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              Atikul Haq
            </span>

            <span className="text-gray-800 dark:text-white italic">
              ( Rana )
            </span>
          </motion.h1>

          {/* Typing Text */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[22px] md:text-3xl font-semibold flex flex-wrap items-center gap-2"
          >
            I&apos;m a

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-transparent bg-clip-text">
              <TypingText />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[16px] md:text-lg py-5 pb-8 leading-relaxed text-gray-600 dark:text-gray-300 max-w-[650px]"
          >
            I build responsive, modern and interactive web applications using
            React, Next.js, Tailwind CSS and JavaScript.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-5"
          >

            {/* CV Button */}
            <Link
              href="https://drive.google.com/file/d/1lcDNLbEI0Q-mSYnmzYi6VShs11WLxei4/view?usp=sharing"
              target="_blank"
              className="group relative px-7 py-3 rounded-full overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-500 flex items-center gap-3"
            >

              <span className="relative z-10">
                Download CV
              </span>

              <FaArrowRight className="group-hover:translate-x-2 transition-all duration-300" />

            </Link>

            {/* Contact Button */}
            <button className="px-7 py-3 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white transition-all duration-500 font-semibold">
              Hire Me
            </button>

          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5 mt-10"
          >

            {[
              {
                icon: <FaGithub />,
                color:
                  "hover:text-white hover:bg-black",
              },

              {
                icon: <FaLinkedinIn />,
                color:
                  "hover:text-white hover:bg-blue-500",
              },

              {
                icon: <FaYoutube />,
                color:
                  "hover:text-white hover:bg-red-500",
              },

              {
                icon: <FaTwitter />,
                color:
                  "hover:text-white hover:bg-sky-500",
              },
            ].map((social, index) => (
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                key={index}
              >

                <Link
                  href=""
                  className={`w-14 h-14 rounded-2xl border border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl transition-all duration-500 shadow-lg ${social.color}`}
                >
                  {social.icon}
                </Link>

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        {/* ================= DESKTOP IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-md:hidden md:w-[45%]"
        >

          <div className="relative w-[420px] h-[420px] mx-auto flex items-center justify-center group">

            {/* 🔥 Rotating Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 animate-[spin_10s_linear_infinite]"></div>

            {/* 🔥 Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-[80px] opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Inner Layer */}
            <div className="absolute inset-3 rounded-full bg-white dark:bg-[#020617] z-10"></div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute top-10 left-0 z-30 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-cyan-500 text-3xl"
            >
              ⚛️
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute bottom-10 right-0 z-30 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-pink-500 text-3xl"
            >
              💻
            </motion.div>

            {/* IMAGE */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative z-20 w-[96%] h-[96%] rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.5)]"
            >

              <Image
                src="/image.png"
                alt="image"
                width={1200}
                height={1200}
                priority
                quality={100}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
              />

            </motion.div>

          </div>

        </motion.div>
      </section>
    </main>
  );
}