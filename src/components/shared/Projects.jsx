"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Find Your Perfect Ride",
    category: "fullstack",
    image: "/driveSphere.png",
    description: "Explore a wide range of cars, book instantly, and enjoy a seamless rental experience with DriveSphere.",
    tech: ["Next.js", "Tailwind", "BetterAuth","Node.js","Express.js", "MongoDB", "JWT"],
    live: "https://drive-sphere-sigma.vercel.app",
    github: "https://github.com/ranakhan-25/Drive-Sphere-Server",
    featured: true,
  },
  {
    id: 2,
    title: "Password Manager Trusted By Millions",
    category: "frontend",
    image: "/password-manager.png",
    description: "Protect more than your passwords with intuitive credential management for your whole organization. Set, forget, and trust eSoft to secure your people data against breaches.",
    tech: ["React.js", "Framer Motion", "Tailwind"],
    live: "https://password-manager-react-app.vercel.app",
    github: "https://github.com/ranakhan-25/password-manager-react-app",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    category: "fullstack",
    image: "/projects/taskify.jpg",
    description: "Collaborative task manager with real-time updates using WebSocket.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Portfolio Website 2026",
    category: "frontend",
    image: "/portfolio.png",
    description: "A MERN Stack Developer passionate about creating modern web applications that deliver seamless user experiences and real-world solutions.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "NodeMailer"],
    live: "https://ranakhanweb.vercel.app",
    github: "https://github.com/ranakhan-25/My-Portfolio",
  },
  {
    id: 5,
    title: "Friends to keep close in your life",
    category: "frontend",
    image: "/keenkeeper.png",
    description: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
    tech: ["Next.js", "Tailwind", "Chart.js", "Framer Motion"],
    live: "https://keen-keeper-eta.vercel.app",
    github: "https://github.com/ranakhan-25/keen-keeper",
  },
  {
    id: 6,
    title: "Find Your Dream Job Today",
    category: "fullstack",
    image: "/hireloop.png",
    description: "HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "jwt"],
    live: "https://hireloop-chi.vercel.app",
    github: "https://github.com/ranakhan-25/hireloop",
  },
];

const categories = ["all", "frontend", "fullstack"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="relative py-28 px-4 md:px-10 bg-white dark:bg-[#020617] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-violet-500 font-semibold mb-4">My Work</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Featured <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-transparent bg-clip-text">Projects</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all capitalize
                ${activeCategory === cat 
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50" 
                  : "bg-white/10 dark:bg-white/5 hover:bg-white/20 border border-white/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Live Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-4 py-1 text-xs font-bold bg-emerald-500 text-white rounded-full flex items-center gap-1">
                      <FaPlay className="text-xs" /> Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white/10 dark:bg-black/40 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all">
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                    <button className="flex-1 py-3 rounded-2xl border border-white/30 hover:bg-white/10 font-semibold flex items-center justify-center gap-2 transition-all">
                      <FaGithub /> Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white dark:bg-[#0f172a] max-w-4xl w-full rounded-3xl overflow-hidden"
            >
              {/* Modal Content */}
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 text-3xl text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ✕
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />

                <div className="p-10">
                  <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex gap-4">
                    <a href={selectedProject.live} target="_blank" className="flex-1 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl text-center font-semibold transition-all">
                      View Live Project
                    </a>
                    <a href={selectedProject.github} target="_blank" className="flex-1 py-4 border border-white/30 hover:bg-white/10 rounded-2xl text-center font-semibold transition-all">
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}