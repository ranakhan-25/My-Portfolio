"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  FaNodeJs,
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiTypescript,
  SiJsonwebtokens,
  SiStripe,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { FaLock } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Data - image, link, tech sob nijer moto edit kore nin               */
/* Image gulo `public/projects/` folder-e rakhun                       */
/* ------------------------------------------------------------------ */
const projects = [
  {
    id: "01",
    title: "FitNexus",
    subtitle: "Fitness & Gym Management Platform",
    image: "/projects/fitnexus.png",
    description:
      "A full stack fitness and gym management platform. Its REST API backend, built with Node.js and Express, handles role-based access control, multi-layered JWT verification, MongoDB persistence and secure Stripe payments, all tuned for low latency and production stability.",
    highlights: ["Role-Based Access", "Stripe Payments", "JWT Security"],
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Stripe", icon: SiStripe },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    steps: [
      {
        title: "REST API Foundation",
        text: "A robust backend engine built with Node.js and Express that powers the whole platform.",
      },
      {
        title: "Role-Based Access Control",
        text: "RBAC with multi-layered JWT verification so every role only reaches what it is allowed to.",
      },
      {
        title: "MongoDB Persistence",
        text: "High-efficiency queries and advanced aggregation pipelines that safely decouple booking data from the transactional system.",
      },
      {
        title: "Secure Stripe Payments",
        text: "Payment aggregation through Stripe, kept separate from the rest of the data for safety.",
      },
      {
        title: "Admin Soft Blocking",
        text: "Custom middleware that handles administrative restrictions by soft-blocking users without deleting their data.",
      },
      {
        title: "Optimized for Production",
        text: "Low-latency data transmission and strict data validation for a stable production release.",
      },
    ],
    live: "https://fitnexus-client.vercel.app",
    client: "https://github.com/ranakhan-25/FitNexus-client",
    server: "https://github.com/ranakhan-25/fitNexus-server",
  },
  {
    id: "02",
    title: "RealBiz Pro",
    subtitle: "Real Estate CRM, Sales & Billing Platform",
    image: "/projects/realbiz.png",
    description:
      "Real estate teams were running multi-crore operations out of spreadsheets and group chats. RealBiz brings CRM, property sales, billing and reporting into one place, designed around how real estate businesses in Bangladesh work day to day.",
    highlights: ["3 Role Dashboards", "CRM + Billing", "Secure Login"],
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Sequelize", icon: SiSequelize },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "bcryptjs", icon: FaLock },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    steps: [
      {
        title: "The Problem",
        text: "Leads got lost, follow-ups were missed and owners had no single view of the business.",
      },
      {
        title: "One Unified Platform",
        text: "CRM, property sales, billing and reporting built together in a single place.",
      },
      {
        title: "Separate Role Dashboards",
        text: "HR, Super Admin and User each get their own dedicated dashboard with the tools they need.",
      },
      {
        title: "Secure Login System",
        text: "Authentication with protected routes so each role only sees its own workspace.",
      },
      {
        title: "Built for Bangladesh",
        text: "Designed around how real estate businesses in Bangladesh actually work every day.",
      },
    ],
    live: "https://real-biz-pro.vercel.app",
    client: "#",
    server: "#",
  },
];

/* ------------------------------------------------------------------ */
/* Project image: browser frame + 3D tilt + scroll parallax            */
/* ------------------------------------------------------------------ */
function ProjectImage({ project }) {
  const frameRef = useRef(null);

  // mouse tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 120,
    damping: 18,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1400 }}
      className="group relative"
    >
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-[2rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700
          bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
      />

      <motion.div
        ref={frameRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800
          bg-zinc-50 dark:bg-zinc-950 shadow-2xl"
      >
        {/* Browser header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 max-w-sm truncate rounded-md bg-white dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
            {project.title.toLowerCase().replace(/\s/g, "")}.app
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#55E6C1]/20 to-[#F97F51]/20 dark:from-[#1B9CFC]/20 dark:to-[#FC427B]/20">
          {/* Full image, natural ratio, no cropping */}
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1920}
            height={1080}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="block w-full h-auto"
          />

          {/* Shine sweep on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Step by step timeline with scroll-linked progress line              */
/* ------------------------------------------------------------------ */
function Timeline({ steps }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <div ref={ref} className="relative pl-12">
      {/* Track */}
      <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full" />
      {/* Progress */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-[19px] top-2 bottom-2 w-[2px] rounded-full
          bg-gradient-to-b from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
      />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative group/step"
          >
            {/* Node */}
            <motion.div
              initial={{ scale: 0.4 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full
                text-sm font-bold text-white shadow-lg
                bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]
                ring-4 ring-white dark:ring-black"
            >
              {i + 1}
            </motion.div>

            <div
              className="rounded-xl p-4 -mt-1 transition-all duration-300
                bg-white/60 dark:bg-white/5 backdrop-blur-md
                border border-zinc-200 dark:border-zinc-800
                group-hover/step:border-[#55E6C1]/60 dark:group-hover/step:border-[#1B9CFC]/60
                group-hover/step:translate-x-1.5"
            >
              <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-zinc-900 dark:text-white">
                {step.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Single project block                                                */
/* ------------------------------------------------------------------ */
function ProjectBlock({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <div className="relative">
      {/* Big outlined number (above the image, not overlapping it) */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`mb-8 flex items-center gap-5 select-none ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <span
          className="font-[family-name:var(--font-poppins)] font-extrabold text-[72px] md:text-[110px] leading-none
            text-transparent [-webkit-text-stroke:2px_#F97F51] dark:[-webkit-text-stroke:2px_#FC427B]"
        >
          {project.id}
        </span>
        <span className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] opacity-60" />
      </motion.div>

      <ProjectImage project={project} />

      <div
        className={`mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[4px] text-xs font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3">
            Full Stack Project
          </p>
          <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              {project.title}
            </span>
          </h3>
          <p className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-200">
            {project.subtitle}
          </p>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full
                  text-[#0fa883] dark:text-[#1B9CFC]
                  bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10
                  border border-[#55E6C1]/40 dark:border-[#1B9CFC]/30"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <p className="mt-8 mb-3 text-xs uppercase tracking-[3px] font-semibold text-zinc-500">
            Tech Stack
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.tech.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl
                    bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800
                    hover:border-[#55E6C1]/60 dark:hover:border-[#1B9CFC]/60 transition-colors"
                >
                  <Icon className="text-lg shrink-0 text-[#F97F51] dark:text-[#FC427B]" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {t.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group px-7 py-3.5 rounded-full font-semibold text-white
                  bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
                  dark:from-[#1B9CFC] dark:to-[#FC427B]
                  shadow-lg flex items-center gap-2.5"
              >
                Live Demo
                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </a>

            <a href={project.client} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full font-semibold border-2 border-[#F97F51] dark:border-[#FC427B]
                  text-[#F97F51] dark:text-[#FC427B] hover:bg-[#F97F51] dark:hover:bg-[#FC427B]
                  hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2.5"
              >
                <FaGithub /> Client
              </motion.button>
            </a>

            <a href={project.server} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full font-semibold border-2 border-[#F97F51] dark:border-[#FC427B]
                  text-[#F97F51] dark:text-[#FC427B] hover:bg-[#F97F51] dark:hover:bg-[#FC427B]
                  hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2.5"
              >
                <FaGithub /> Server
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Step by step overview */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3"
          >
            <FaArrowRight className="text-[#F97F51] dark:text-[#FC427B]" />
            <h4 className="text-xl font-bold font-[family-name:var(--font-poppins)]">
              Project Overview{" "}
              <span className="text-zinc-500 font-medium text-base">
                · step by step
              </span>
            </h4>
          </motion.div>
          <Timeline steps={project.steps} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-white via-gray-50 to-white
        dark:from-black dark:via-[#0a0a0a] dark:to-black
        text-zinc-900 dark:text-white
        font-[family-name:var(--font-inconsolata)]"
    >
      {/* Parallax glows */}
      <motion.div
        style={{ y: glowY1 }}
        className="absolute top-[-5%] left-[-8%] w-[500px] h-[500px] bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="absolute bottom-[-5%] right-[-8%] w-[500px] h-[500px] bg-[#F97F51]/15 dark:bg-[#FC427B]/10 blur-[150px] rounded-full pointer-events-none"
      />
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
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3"
          >
            My Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Full Stack Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-zinc-600 dark:text-zinc-400"
          >
            Real products, built end to end: from database and API to a polished
            interface.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="space-y-32 md:space-y-44">
          {projects.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
