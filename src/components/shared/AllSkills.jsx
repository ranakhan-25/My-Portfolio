"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFire,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDaisyui,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFramer,
} from "react-icons/si";

const skills = [
  // তোমার আগের স্কিলগুলো এখানে রাখা আছে...
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "from-orange-500 to-red-500",
    level: "95%",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "from-blue-500 to-cyan-500",
    level: "92%",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "from-yellow-400 to-yellow-500",
    level: "85%",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-cyan-400 to-sky-500",
    level: "95%",
  },
  {
    name: "DaisyUI",
    icon: <SiDaisyui />,
    color: "from-fuchsia-500 to-pink-500",
    level: "90%",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "from-violet-500 to-purple-600",
    level: "80%",
  },
  {
    name: "React JS",
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
    level: "92%",
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs />,
    color: "from-gray-700 to-black",
    level: "90%",
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
    color: "from-green-500 to-emerald-600",
    level: "75%",
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
    color: "from-gray-500 to-slate-700",
    level: "80%",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-green-500 to-lime-500",
    level: "84%",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "from-yellow-400 to-orange-500",
    level: "86%",
  },
  {
    name: "Better Auth",
    icon: <FaFire />,
    color: "from-rose-500 to-red-500",
    level: "78%",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "from-pink-500 to-violet-500",
    level: "90%",
  },
  {
    name: "Responsive UI",
    icon: "📱",
    color: "from-sky-500 to-indigo-500",
    level: "96%",
  },
  {
    name: "UI/UX Design",
    icon: "🎨",
    color: "from-rose-400 to-purple-500",
    level: "87%",
  },
  {
    name: "CORS Handling",
    icon: "🔄",
    color: "from-orange-500 to-red-500",
    level: "85%",
  },
  {
    name: "Browser APIs",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
    level: "88%",
  },
  {
    name: "Fetch API & Axios",
    icon: "📡",
    color: "from-emerald-500 to-teal-500",
    level: "90%",
  },
  {
    name: "Local Storage & Cookies",
    icon: "💾",
    color: "from-amber-500 to-orange-500",
    level: "87%",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-28 px-4 md:px-10 bg-white dark:bg-[#020617]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-violet-500 font-semibold mb-4">
            My Skills
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
              Technologies I Use
            </span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            I create modern, responsive and interactive web applications using
            the latest technologies.
          </p>
        </motion.div>

        {/* Animated Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.12,
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
                type: "spring",
                stiffness: 200,
              }}
              // viewport={{ once: true }}
              className="group relative flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 shadow-lg overflow-hidden"
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-br ${skill.color} blur-xl`}
              ></div>

              {/* Icon Container */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl shadow-inner transition-transform group-hover:rotate-12`}
              >
                {skill.icon}
              </div>

              {/* Text */}
              <div className="relative z-10 text-left">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-sm font-medium text-violet-500">
                  {skill.level}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="group relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white font-semibold text-lg shadow-[0_0_50px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-500">
            <span className="relative z-10 flex items-center gap-3">
              Explore My Projects 🚀
            </span>
            <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
