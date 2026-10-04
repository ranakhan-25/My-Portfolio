"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
} from "react-icons/si";

export default function AboutSection() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
  ];

  const stats = [
    { label: "Projects", value: "15+" },
    { label: "Technologies", value: "20+" },
    { label: "Learning", value: "Always" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-15 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-white via-gray-50 to-white
        dark:from-black dark:via-[#0a0a0a] dark:to-black
        text-zinc-900 dark:text-white
        font-[family-name:var(--font-inconsolata)]"
    >
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#F97F51]/15 dark:bg-[#FC427B]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]"
          >
            Passionate{" "}
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            Developer
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Code Block Style */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 shadow-xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-zinc-500">about-me.js</span>
              </div>

              {/* Code Content */}
              <div className="p-5 md:p-6 text-[13px] md:text-sm leading-7 font-mono overflow-x-auto">
                <p>
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-[#F97F51] dark:text-[#FC427B]">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>
                <p className="pl-4">
                  name:{" "}
                  <span className="text-green-500">"Atikul Haq Rana"</span>,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-green-500">"Full Stack Developer"</span>
                  ,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-green-500">"MERN"</span>,{" "}
                  <span className="text-green-500">"Next.js"</span>],
                </p>
                <p className="pl-4">
                  passion:{" "}
                  <span className="text-green-500">
                    "Building modern web apps"
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  currentlyLearning: [
                  <span className="text-green-500">"NestJS"</span>,{" "}
                  <span className="text-green-500">"Prisma"</span>,{" "}
                  <span className="text-green-500">"PostgreSQL"</span>],
                </p>
                <p className="pl-4">
                  available: <span className="text-blue-500">true</span>
                </p>
                <p>{"}"}</p>
                <p className="mt-3">
                  <span className="text-purple-500">export default</span>{" "}
                  developer;
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-xl bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Description + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
              I am a passionate Full Stack Developer focused on building modern,
              responsive, and user-friendly web applications. I love turning
              ideas into real products using React, Next.js, Node.js,
              Express.js, Nest.js, MongoDB and PostgresSQL. Currently expanding
              my skills with NestJS, Prisma and PostgreSQL.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10">
              I write clean code, care about performance & user experience, and
              continuously learn to stay updated with the latest technologies.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800 hover:border-[#55E6C1]/50 dark:hover:border-[#1B9CFC]/50 transition-all duration-300"
                >
                  <span className="text-2xl text-[#F97F51] dark:text-[#FC427B]">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contract">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group px-7 py-3.5 rounded-full font-semibold text-white
                    bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
                    dark:from-[#1B9CFC] dark:to-[#FC427B]
                    shadow-lg flex items-center gap-2.5"
                >
                  Contact Me
                  <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </motion.button>
              </a>

              <a href="#projects">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full font-semibold border-2 border-[#F97F51] dark:border-[#FC427B] text-[#F97F51] dark:text-[#FC427B] hover:bg-[#F97F51] dark:hover:bg-[#FC427B] hover:text-white dark:hover:text-white transition-all duration-300"
                >
                  View Projects
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
