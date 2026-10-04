"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaArrowUp,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { icon: FaGithub, name: "GitHub", href: "https://github.com/ranakhan-25" },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rana-khan-dev",
  },
  { icon: FaTwitter, name: "Twitter", href: "https://x.com/Ranakhan2025" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const [time, setTime] = useState("");

  // back to top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bangladesh local time
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden pt-24 pb-8 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-white via-gray-50 to-white
        dark:from-black dark:via-[#0a0a0a] dark:to-black
        text-zinc-900 dark:text-white
        font-[family-name:var(--font-inconsolata)]"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F97F51] to-transparent dark:via-[#FC427B]" />

      {/* Background Effects */}
      <div className="absolute top-[-15%] left-[-5%] w-[450px] h-[450px] bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[450px] h-[450px] bg-[#F97F51]/15 dark:bg-[#FC427B]/10 blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA Banner */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="group relative block overflow-hidden rounded-3xl p-8 md:p-12 mb-20
            bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
            dark:from-[#1B9CFC] dark:to-[#FC427B] shadow-2xl"
        >
          {/* shine */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="uppercase tracking-[5px] text-xs font-semibold text-white/80 mb-2">
                Have a project in mind?
              </p>
              <h3 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white">
                Let&apos;s build something great together
              </h3>
            </div>
            <span
              className="inline-flex shrink-0 items-center gap-3 self-start md:self-auto rounded-full bg-white px-7 py-3.5 font-semibold
                text-[#F97F51] dark:text-[#FC427B] shadow-lg"
            >
              Let&apos;s talk
              <FaArrowRight className="transition-transform group-hover:translate-x-1.5" />
            </span>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
              Atikul Haq (RANA)
              <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
                .
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xs leading-relaxed">
              MERN Stack Developer crafting beautiful and functional digital
              experiences.
            </p>

            <a
              href="mailto:ranakhandev2025@gmail.com"
              className="mt-5 inline-flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#F97F51] dark:hover:text-[#FC427B] transition-colors"
            >
              <FaEnvelope className="text-[#F97F51] dark:text-[#FC427B]" />
              ranakhandev2025@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
              Built with
              <SiNextdotjs className="text-lg text-zinc-800 dark:text-white" />
              Next.js +
              <SiFramer className="text-lg text-zinc-800 dark:text-white" />
              Framer Motion
            </div>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-[4px] font-semibold mb-6 text-[#F97F51] dark:text-[#FC427B]">
              Quick Links
            </h3>
            <div className="space-y-3">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-3 w-fit text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <span className="h-[2px] w-3 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 group-hover:bg-gradient-to-r group-hover:from-[#55E6C1] group-hover:to-[#F97F51] dark:group-hover:from-[#1B9CFC] dark:group-hover:to-[#FC427B] transition-all duration-300" />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Social & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs uppercase tracking-[4px] font-semibold mb-6 text-[#F97F51] dark:text-[#FC427B]">
              Connect With Me
            </h3>

            <div className="flex gap-4 mb-8">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    whileHover={{ y: -6, rotate: 8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl
                      text-[#F97F51] dark:text-[#FC427B]
                      bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800
                      hover:text-white hover:border-transparent
                      hover:bg-gradient-to-br hover:from-[#55E6C1] hover:to-[#F97F51]
                      dark:hover:from-[#1B9CFC] dark:hover:to-[#FC427B]
                      shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* Status card */}
            <div className="rounded-2xl p-4 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#0fa883] dark:text-[#1B9CFC]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#55E6C1] dark:bg-[#1B9CFC] opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#55E6C1] dark:bg-[#1B9CFC]" />
                </span>
                Available for work
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Bangladesh time:{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  {time || "--:--"}
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Big watermark */}
        <div
          aria-hidden
          className="pointer-events-none select-none mt-16 text-center font-[family-name:var(--font-poppins)] font-extrabold leading-none
            text-[22vw] md:text-[15vw]
            text-transparent bg-clip-text bg-gradient-to-b from-zinc-300/70 to-transparent
            dark:from-white/10 dark:to-transparent"
        >
          RANA
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {currentYear} Rana Khan. All Rights Reserved.</div>

          <motion.div
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-flex"
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            in Bangladesh
          </motion.div>

          <div>
            Designed & Developed by{" "}
            <span className="font-semibold bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Rana Khan
            </span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl
              bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
