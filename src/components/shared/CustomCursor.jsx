"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import { useEffect, useState } from "react";

export default function PremiumCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const [clickEffect, setClickEffect] = useState(false);

  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      if (
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = () => {
      setClickEffect(true);

      setTimeout(() => {
        setClickEffect(false);
      }, 500);
    };

    window.addEventListener("mousemove", moveCursor);

    window.addEventListener("mouseover", handleHover);

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      window.removeEventListener("mouseover", handleHover);

      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="w-full h-full rounded-full border border-violet-500 bg-violet-500/10 backdrop-blur-md shadow-[0_0_40px_rgba(139,92,246,0.8)]" />
      </motion.div>

      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
      </motion.div>

      {/* CLICK EFFECT */}
      <AnimatePresence>
        {clickEffect && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: 4,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed top-0 left-0 z-[9998] pointer-events-none"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.9)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}