"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Development",
    shortDescription:
      "Modern and responsive websites using React, Next.js, Node.js and Tailwind CSS with clean architecture.",
    fullDescription:
      "I build modern, scalable, and high-performance web applications using the MERN stack and Next.js. From frontend to backend, I focus on clean code, reusable components, proper folder structure, and best practices so that your project remains maintainable and future-proof.",
    features: [
      "React & Next.js Development",
      "RESTful API Integration",
      "Authentication (NextAuth / Better Auth)",
      "Clean & Scalable Code Architecture",
    ],
  },
  {
    id: 2,
    icon: <FaPalette />,
    title: "UI/UX Design",
    shortDescription:
      "Clean, modern and interactive user interfaces focused on smooth experience and visual hierarchy.",
    fullDescription:
      "I design clean and modern user interfaces that are not only beautiful but also highly usable. My focus is on creating smooth interactions, proper visual hierarchy, and delightful user experiences that keep users engaged.",
    features: [
      "Modern & Clean UI Design",
      "Interactive Micro-animations",
      "Consistent Design System",
      "User-Centered Approach",
    ],
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    shortDescription:
      "Fully responsive layouts carefully optimized for desktop, tablet and mobile devices.",
    fullDescription:
      "Every website I build is fully responsive and looks perfect on all devices — from large desktop screens to tablets and mobile phones. I use mobile-first approach and modern CSS techniques to ensure the best experience across all screen sizes.",
    features: [
      "Mobile-First Approach",
      "Perfect on All Devices",
      "Flexible Grid Systems",
      "Touch-Friendly Interfaces",
    ],
  },
  {
    id: 4,
    icon: <FaRocket />,
    title: "Performance Optimization",
    shortDescription:
      "Fast loading, SEO-friendly and highly optimized modern web applications.",
    fullDescription:
      "Performance is a key part of every project I work on. I optimize images, code splitting, lazy loading, and follow best SEO practices so that your website loads fast and ranks better on search engines.",
    features: [
      "Fast Loading Speed",
      "SEO Best Practices",
      "Code Splitting & Lazy Loading",
      "Core Web Vitals Optimization",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="service"
      className="relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-white via-gray-50 to-white
        dark:from-black dark:via-[#0a0a0a] dark:to-black
        text-zinc-900 dark:text-white
        font-[family-name:var(--font-inconsolata)]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#F97F51]/15 dark:bg-[#FC427B]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="uppercase tracking-[5px] text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3">
            My Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]">
            What I{" "}
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Provide
            </span>
          </h2>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            I create modern, interactive and high-performance digital
            experiences with beautiful UI and smooth animations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 
                bg-white/80 dark:bg-white/5 backdrop-blur-xl p-7 md:p-8 
                shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#55E6C1]/10 to-[#F97F51]/10 dark:from-[#1B9CFC]/10 dark:to-[#FC427B]/10" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] text-white flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold mb-3 text-zinc-800 dark:text-white font-[family-name:var(--font-poppins)]">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="relative z-10 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-[15px] mb-6">
                {service.shortDescription}
              </p>

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedService(service)}
                className="relative z-10 flex items-center gap-2 text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] text-white flex items-center justify-center text-xl">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)]">
                    {selectedService.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {selectedService.fullDescription}
                </p>

                <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">
                  What you get:
                </h4>

                <ul className="space-y-2.5 mb-8">
                  {selectedService.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contract">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full py-3.5 rounded-xl font-semibold text-white
                      bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
                      dark:from-[#1B9CFC] dark:to-[#FC427B]
                      hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Get Started
                    <FaArrowRight className="text-sm" />
                  </button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
