"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub, FaArrowRight } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";

export default function AboutSection() {
  const skills = [
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ];

  return (
      <section className="relative overflow-hidden py-28 px-6 md:px-16 bg-white dark:bg-[#020617]">
        {/* 🔥 Animated Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full animate-pulse"></div>

        {/* GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* 🔥 Rotating Gradient Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-[spin_8s_linear_infinite]"></div>

              {/* 🔥 Glow */}
              <div className="absolute -inset-6 rounded-full bg-green-500/30 blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Image */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative z-20 w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-white dark:border-[#0f172a] shadow-[0_0_50px_rgba(34,197,94,0.5)]"
              >
                <Image
                  src="/owner1.png"
                  alt="developer"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute top-5 -left-10 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl text-green-500 text-3xl"
              >
                <FaReact />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute bottom-10 -right-10 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl text-blue-500 text-3xl"
              >
                <SiNextdotjs />
              </motion.div>
            </div>
          </motion.div>

          {/* ================= CONTENT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Small Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[6px] text-green-500 font-semibold mb-4"
            >
              About Me
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-medium leading-tight mb-6"
            >
              Passionate{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Front-End
              </span>{" "}
              Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-10"
            >
              I build modern, interactive and fully responsive web applications
              with React, Next.js and Tailwind CSS. I love creating smooth user
              experiences, animated UI, clean code architecture and beautiful
              interfaces.
            </motion.p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group px-5 py-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-lg flex items-center gap-3 cursor-pointer overflow-hidden relative"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <span className="relative z-10 text-2xl text-green-500">
                    {skill.icon}
                  </span>

                  <span className="relative z-10 font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              {/* Primary Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center gap-3 overflow-hidden relative"
              >
                <span className="relative z-10">More Know</span>

                <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-all duration-300" />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-8 py-4 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
