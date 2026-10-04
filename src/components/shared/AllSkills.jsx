"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFire,
  FaMobileAlt,
  FaPalette,
  FaExchangeAlt,
  FaGlobe,
  FaCloudDownloadAlt,
  FaCookieBite,
  FaLayerGroup,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFramer,
  SiRedux,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiJsonwebtokens,
} from "react-icons/si";

/* ------------------------------------------------------------------ */
/* Data - level gulo nijer moto edit kore nin                          */
/* ------------------------------------------------------------------ */
const frontend = [
  { name: "HTML5", icon: FaHtml5, level: 95 },
  { name: "CSS3", icon: FaCss3Alt, level: 92 },
  { name: "JavaScript", icon: FaJs, level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
  { name: "DaisyUI", icon: SiDaisyui, level: 90 },
  { name: "Bootstrap", icon: FaBootstrap, level: 80 },
  { name: "React JS", icon: FaReact, level: 92 },
  { name: "Next JS", icon: SiNextdotjs, level: 90 },
  { name: "Framer Motion", icon: SiFramer, level: 90 },
  { name: "Responsive UI", icon: FaMobileAlt, level: 96 },
  { name: "UI/UX Design", icon: FaPalette, level: 87 },
];

const stateAndWeb = [
  { name: "Redux Toolkit", icon: SiRedux, level: 80 },
  { name: "Zustand", icon: FaLayerGroup, level: 75 },
  { name: "Fetch API & Axios", icon: FaCloudDownloadAlt, level: 90 },
  { name: "Browser APIs", icon: FaGlobe, level: 88 },
  { name: "Local Storage & Cookies", icon: FaCookieBite, level: 87 },
  { name: "CORS Handling", icon: FaExchangeAlt, level: 85 },
];

const backend = [
  { name: "Node JS", icon: FaNodeJs, level: 75 },
  { name: "Express JS", icon: SiExpress, level: 80 },
  { name: "NestJS", icon: SiNestjs, level: 60 },
  { name: "Better Auth", icon: FaFire, level: 78 },
  { name: "JWT (Token Auth)", icon: SiJsonwebtokens, level: 85 },
  { name: "bcryptjs (Password Hash)", icon: FaLock, level: 85 },
];

const database = [
  { name: "MongoDB", icon: SiMongodb, level: 84 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 62 },
  { name: "Prisma", icon: SiPrisma, level: 58 },
  { name: "Firebase", icon: SiFirebase, level: 86 },
];

const categories = [
  {
    id: "all",
    label: "All",
    skills: [...frontend, ...stateAndWeb, ...backend, ...database],
  },
  { id: "frontend", label: "Frontend", skills: frontend },
  { id: "state", label: "State & Web", skills: stateAndWeb },
  { id: "backend", label: "Backend", skills: backend },
  { id: "database", label: "Database", skills: database },
];

const allSkills = categories[0].skills;

const learning = ["NestJS", "Prisma", "PostgreSQL"];

const getLevelLabel = (level) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  return "Learning";
};

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}%</span>;
}

/* ------------------------------------------------------------------ */
/* Skill card with mouse spotlight                                     */
/* ------------------------------------------------------------------ */
function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightSpot = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(249,127,81,0.16), transparent 80%)`;
  const darkSpot = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(252,66,123,0.16), transparent 80%)`;

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6) }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl p-5
        bg-white/80 dark:bg-white/5 backdrop-blur-md
        border border-zinc-200 dark:border-zinc-800
        hover:border-[#55E6C1]/60 dark:hover:border-[#1B9CFC]/60
        shadow-sm hover:shadow-xl transition-colors duration-300"
    >
      {/* Spotlight (light) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:hidden"
        style={{ background: lightSpot }}
      />
      {/* Spotlight (dark) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden dark:block"
        style={{ background: darkSpot }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl
              text-[#F97F51] dark:text-[#FC427B]
              bg-[#F97F51]/10 dark:bg-[#FC427B]/10
              group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
          >
            <Icon />
          </div>

          <span
            className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full
              text-[#0fa883] dark:text-[#1B9CFC]
              bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10
              border border-[#55E6C1]/40 dark:border-[#1B9CFC]/30"
          >
            {getLevelLabel(skill.level)}
          </span>
        </div>

        <div className="flex items-end justify-between gap-3 mb-3">
          <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-base text-zinc-900 dark:text-white">
            {skill.name}
          </h3>
          <span className="text-sm font-bold bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
            <Counter value={skill.level} />
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.15 }}
            className="relative h-full rounded-full bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
          >
            {/* shine */}
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: "300%" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function SkillsSection() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-white via-gray-50 to-white
        dark:from-black dark:via-[#0a0a0a] dark:to-black
        text-zinc-900 dark:text-white
        font-[family-name:var(--font-inconsolata)]"
    >
      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-[#F97F51]/15 dark:bg-[#FC427B]/10 blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3"
          >
            My Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]"
          >
            Technologies I{" "}
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Use
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-zinc-600 dark:text-zinc-400"
          >
            I create modern, responsive and interactive web applications using
            the latest technologies.
          </motion.p>
        </div>

        {/* Marquee */}
        <div
          className="relative mb-14 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...allSkills, ...allSkills].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full whitespace-nowrap
                    bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800"
                >
                  <Icon className="text-lg text-[#F97F51] dark:text-[#FC427B]" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-3xl sm:rounded-full
              bg-white/80 dark:bg-white/5 backdrop-blur-md
              border border-zinc-200 dark:border-zinc-800"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  active === cat.id
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="skill-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full shadow-lg bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {current.skills.map((skill, i) => (
              <SkillCard
                key={`${active}-${skill.name}`}
                skill={skill}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-2xl p-6 md:p-8
            bg-white/80 dark:bg-white/5 backdrop-blur-md
            border border-dashed border-[#F97F51]/50 dark:border-[#FC427B]/50"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white
                  bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] shadow-lg"
              >
                <FaRocket />
              </motion.div>
              <div>
                <p className="text-xs uppercase tracking-[4px] font-semibold text-[#F97F51] dark:text-[#FC427B]">
                  Currently Learning
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Always leveling up to stay ahead.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:ml-auto">
              {learning.map((item, i) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.08, y: -2 }}
                  animate={{ opacity: [0.75, 1, 0.75] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="px-5 py-2 rounded-full text-sm font-semibold
                    border-2 border-[#F97F51] dark:border-[#FC427B]
                    text-[#F97F51] dark:text-[#FC427B]
                    hover:bg-[#F97F51] dark:hover:bg-[#FC427B] hover:text-white dark:hover:text-white
                    transition-colors duration-300 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
