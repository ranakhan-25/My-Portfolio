"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] text-white pt-20 pb-10 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left - Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Your Name<span className="text-violet-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-xs">
              Frontend Developer crafting beautiful and functional digital experiences.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              Built with 
              <SiNextdotjs className="text-xl" /> 
              Next.js + Framer Motion
            </div>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-violet-400">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link, i) => (
                <motion.a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 10 }}
                  className="block text-gray-400 hover:text-white transition-colors w-fit"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-violet-400">Connect With Me</h3>
            
            <div className="flex gap-5 mb-10">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl hover:bg-violet-600 transition-all"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl hover:bg-violet-600 transition-all"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl hover:bg-violet-600 transition-all"
              >
                <FaTwitter />
              </motion.a>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Have a project in mind?</p>
              <a 
                href="#contact" 
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Let&apos;s talk →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>
            © {currentYear} Rana Khan. All Rights Reserved.
          </div>
          
          <motion.div 
            className="flex items-center gap-1 mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Made with <FaHeart className="text-red-500" /> in Bangladesh
          </motion.div>

          <div className="mt-4 md:mt-0">
            Designed & Developed by <span className="text-violet-400">Rana Khan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}