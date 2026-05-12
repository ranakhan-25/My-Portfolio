"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileTouchCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleTouch = (e) => {
      const touch = e.touches[0];
      setPos({ x: touch.clientX, y: touch.clientY });
      setShow(true);
    };

    const hide = () => setShow(false);

    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("touchend", hide);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", hide);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-400 pointer-events-none z-[9999]"
      animate={{
        x: pos.x - 16,
        y: pos.y - 16,
        scale: show ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
    />
  );
}