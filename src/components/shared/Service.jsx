"use client";

import { motion } from "framer-motion";

import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Modern and responsive websites using React, Next.js and Tailwind CSS.",
  },

  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "Clean, modern and interactive user interface design with smooth user experience.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Fully responsive layouts optimized for desktop, tablet and mobile devices.",
  },

  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Fast loading, SEO friendly and optimized modern web applications.",
  },
];

export default function ServicesSection() {
  return (
      <section className="relative overflow-hidden py-28 px-4 md:px-10 bg-white dark:bg-[#020617]">
        {/* 🔥 Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[6px] text-violet-500 font-semibold mb-4">
              My Services
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
                What I Provide
              </span>
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              I create modern, interactive and high-performance digital
              experiences with beautiful UI and smooth animations.
            </p>
          </motion.div>

          {/* ================= SERVICES GRID ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.6,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-500"
              >
                {/* 🔥 Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20"></div>

                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center text-4xl shadow-lg mb-8"
                >
                  {service.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="relative z-10 text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    x: 10,
                  }}
                  className="relative z-10 flex items-center gap-3 text-violet-500 font-semibold group/button"
                >
                  Learn More
                  <FaArrowRight className="group-hover/button:translate-x-2 transition-all duration-300" />
                </motion.button>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-violet-500/40 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* ================= BOTTOM CTA ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-24 text-center"
          >
            <button className="group relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white font-semibold text-lg shadow-[0_0_50px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-500">
              <span className="relative z-10 flex items-center gap-3">
                Explore More Services
                <FaArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
              </span>

              
              <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>
            </button>
          </motion.div>
        </div>
      </section>
  );
}
