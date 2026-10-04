"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaLightbulb,
  FaCode,
  FaBug,
  FaGraduationCap,
  FaSearch,
  FaUserCheck,
  FaMagic,
  FaCheck,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Data - nijer moto edit kore nin                                     */
/* ------------------------------------------------------------------ */
const tools = [
  {
    name: "ChatGPT",
    letter: "C",
    role: "Brainstorm & Explain",
    text: "Ideas, concept explanations, drafting docs and breaking down tricky problems.",
    tags: ["Brainstorming", "Learning", "Docs"],
  },
  {
    name: "Gemini",
    letter: "G",
    role: "Research & Compare",
    text: "Quick research, comparing technologies and finding the right approach faster.",
    tags: ["Research", "Comparison"],
  },
  {
    name: "Claude",
    letter: "Cl",
    role: "Code Reasoning & Review",
    text: "Deep code reasoning, refactoring, reviewing logic and working through complex features.",
    tags: ["Refactor", "Code Review", "Debugging"],
  },
  {
    name: "GitHub Copilot",
    letter: "Co",
    role: "In-Editor Assistant",
    text: "Smart autocomplete and boilerplate right inside the editor, so I stay in flow.",
    tags: ["Autocomplete", "Boilerplate"],
  },
  {
    name: "Antigravity Agent",
    letter: "A",
    role: "Agentic Development",
    text: "Agent-driven workflow for multi-step tasks, scaffolding features and speeding up delivery.",
    tags: ["AI Agents", "Automation"],
  },
];

const steps = [
  {
    icon: FaSearch,
    title: "Plan & Research",
    text: "I explore ideas, compare approaches and shape the architecture with AI before writing code.",
  },
  {
    icon: FaCode,
    title: "Build Faster",
    text: "Copilot and AI agents handle boilerplate and repetitive work so I can focus on the product.",
  },
  {
    icon: FaBug,
    title: "Debug & Review",
    text: "I use AI to trace bugs, review logic and refactor, then verify everything myself.",
  },
  {
    icon: FaGraduationCap,
    title: "Learn & Level Up",
    text: "AI helps me pick up new tech like NestJS, Prisma and PostgreSQL much faster.",
  },
];

const stats = [
  { label: "AI Tools", value: "5" },
  { label: "Daily Use", value: "Yes" },
  { label: "Code Ownership", value: "Human-led" },
];

/* ------------------------------------------------------------------ */
/* Tool card with mouse spotlight                                      */
/* ------------------------------------------------------------------ */
function ToolCard({ tool, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightSpot = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(249,127,81,0.16), transparent 80%)`;
  const darkSpot = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(252,66,123,0.16), transparent 80%)`;

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl p-6
        bg-white/80 dark:bg-white/5 backdrop-blur-md
        border border-zinc-200 dark:border-zinc-800
        hover:border-[#55E6C1]/60 dark:hover:border-[#1B9CFC]/60
        shadow-sm hover:shadow-xl transition-colors duration-300"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:hidden"
        style={{ background: lightSpot }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden dark:block"
        style={{ background: darkSpot }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white shadow-lg
              font-[family-name:var(--font-poppins)]
              bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]
              group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
          >
            {tool.letter}
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg text-zinc-900 dark:text-white">
              {tool.name}
            </h3>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#F97F51] dark:text-[#FC427B]">
              {tool.role}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {tool.text}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full
                text-[#0fa883] dark:text-[#1B9CFC]
                bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10
                border border-[#55E6C1]/40 dark:border-[#1B9CFC]/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Prompt -> review -> ship window                                     */
/* ------------------------------------------------------------------ */
function PromptWindow() {
  const lines = [
    {
      who: "me",
      text: "Design a secure JWT auth flow with role-based access for my NestJS API.",
    },
    {
      who: "ai",
      text: "Here is a structure: guards, a roles decorator, token refresh and bcrypt hashing...",
    },
    {
      who: "me",
      text: "Review it, fix edge cases and tell me what could break in production.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="absolute -inset-3 rounded-[2rem] blur-3xl opacity-25 bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]" />

      <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 shadow-xl">
        {/* Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs text-zinc-500">ai-workflow.chat</span>
        </div>

        <div className="p-5 md:p-6 space-y-4 text-[13px] md:text-sm leading-relaxed">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
              className={`flex gap-3 ${line.who === "me" ? "" : "flex-row-reverse"}`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                  line.who === "me"
                    ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold"
                    : "text-white bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
                }`}
              >
                {line.who === "me" ? "R" : <FaRobot />}
              </div>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  line.who === "me"
                    ? "bg-white dark:bg-white/5 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                    : "bg-[#55E6C1]/10 dark:bg-[#1B9CFC]/10 border border-[#55E6C1]/30 dark:border-[#1B9CFC]/30 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {line.text}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex items-center gap-2.5 pt-1 text-xs font-semibold uppercase tracking-widest text-[#0fa883] dark:text-[#1B9CFC]"
          >
            <FaCheck /> Reviewed by me, then shipped
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function AIWorkflowSection() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8
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
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3"
          >
            AI-Powered Workflow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]"
          >
            Building Smarter{" "}
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              With AI
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-zinc-600 dark:text-zinc-400"
          >
            AI is my co-pilot, not my autopilot. I use it to move faster and
            learn quicker, while I make the decisions, review every line and own
            the final product.
          </motion.p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}

          {/* Stats card fills the 6th slot */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: tools.length * 0.08 }}
            className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center
              bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] text-white shadow-xl"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
            <FaBrain className="relative text-3xl mb-4 text-white/90" />
            <div className="relative grid grid-cols-3 gap-3 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-lg md:text-xl font-bold font-[family-name:var(--font-poppins)]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-white/80">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Workflow + prompt window */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <PromptWindow />

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <FaMagic className="text-[#F97F51] dark:text-[#FC427B]" />
              <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-poppins)]">
                How I work with AI
              </h3>
            </motion.div>

            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="group flex gap-4 p-4 rounded-2xl
                      bg-white/80 dark:bg-white/5 backdrop-blur-md
                      border border-zinc-200 dark:border-zinc-800
                      hover:border-[#55E6C1]/60 dark:hover:border-[#1B9CFC]/60 transition-colors"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg
                        text-[#F97F51] dark:text-[#FC427B]
                        bg-[#F97F51]/10 dark:bg-[#FC427B]/10
                        group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-zinc-900 dark:text-white">
                        <span className="text-[#F97F51] dark:text-[#FC427B] mr-2">
                          0{i + 1}
                        </span>
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Principle strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl p-6 md:p-8 text-center
            bg-white/80 dark:bg-white/5 backdrop-blur-md
            border border-dashed border-[#F97F51]/50 dark:border-[#FC427B]/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white shadow-lg
                bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
            >
              <FaUserCheck />
            </div>
            <p className="max-w-2xl text-base md:text-lg text-zinc-700 dark:text-zinc-300">
              AI writes fast,{" "}
              <span className="font-semibold bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
                I think, review and take responsibility
              </span>
              . That balance is how I ship clean, reliable software.
            </p>
            <FaLightbulb className="hidden md:block text-2xl text-[#F97F51] dark:text-[#FC427B]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
