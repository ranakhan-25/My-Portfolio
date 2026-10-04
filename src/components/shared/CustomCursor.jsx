"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE =
  "a, button, [role='button'], summary, label[for], select, .cursor-pointer";
const TEXT_FIELD = "input, textarea, [contenteditable='true']";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [onText, setOnText] = useState(false);

  // dot follows instantly, ring follows with a soft spring
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

  // Only enable on devices with a real mouse (checked after mount, so no hydration mismatch)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches && window.innerWidth >= 768);
    update();
    mq.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target : null;
      setOnText(!!el?.closest(TEXT_FIELD));
      setHovering(!!el?.closest(INTERACTIVE));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const show = visible && !onText;

  return (
    <>
      {/* hide the native cursor (keep the text cursor on inputs) */}
      <style>{`
        html.has-custom-cursor, html.has-custom-cursor * { cursor: none !important; }
        html.has-custom-cursor input, html.has-custom-cursor textarea,
        html.has-custom-cursor [contenteditable='true'] { cursor: text !important; }
      `}</style>

      {/* Outer ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <motion.div
          animate={{
            scale: pressed ? 0.8 : hovering ? 1.9 : 1,
            opacity: show ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`-translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full border-2 transition-colors duration-300
            ${
              hovering
                ? "border-[#F97F51] bg-[#F97F51]/15 dark:border-[#FC427B] dark:bg-[#FC427B]/15"
                : "border-[#55E6C1] bg-[#55E6C1]/10 dark:border-[#1B9CFC] dark:bg-[#1B9CFC]/10"
            }`}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        aria-hidden
        style={{ x: mouseX, y: mouseY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <motion.div
          animate={{
            scale: pressed ? 1.6 : hovering ? 0.5 : 1,
            opacity: show ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full
            bg-gradient-to-br from-[#55E6C1] to-[#F97F51]
            dark:from-[#1B9CFC] dark:to-[#FC427B]"
        />
      </motion.div>
    </>
  );
}
