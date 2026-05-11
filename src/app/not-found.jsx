"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className=" max-w-7xl mx-auto min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-slate-950 text-white px-4 relative">
      
      {/* Animated Blur Circles */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-8xl md:text-9xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed,
          renamed, or temporarily unavailable.
        </p>

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-2xl font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 shadow-2xl shadow-fuchsia-500/30"
          >
            Back To Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}