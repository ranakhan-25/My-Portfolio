"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

// jump() snaps a spring to a value instantly (falls back to set() on older versions)
const snap = (mv, v) =>
  typeof mv.jump === "function" ? mv.jump(v) : mv.set(v);

export default function MobileTouchCursor() {
  const [enabled, setEnabled] = useState(false);
  const [touching, setTouching] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Finger position (no re-render on every touchmove)
  const touchX = useMotionValue(-100);
  const touchY = useMotionValue(-100);

  // Ring + glow follow the finger with a soft lag
  const ringX = useSpring(touchX, { stiffness: 320, damping: 26, mass: 0.5 });
  const ringY = useSpring(touchY, { stiffness: 320, damping: 26, mass: 0.5 });
  const glowX = useSpring(touchX, { stiffness: 110, damping: 18, mass: 0.9 });
  const glowY = useSpring(touchY, { stiffness: 110, damping: 18, mass: 0.9 });

  // Only on touch devices (checked after mount, so no hydration mismatch)
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onStart = (e) => {
      const t = e.touches[0];
      if (!t) return;

      // place everything exactly under the finger first (no flying in from the old spot)
      touchX.set(t.clientX);
      touchY.set(t.clientY);
      [ringX, glowX].forEach((m) => snap(m, t.clientX));
      [ringY, glowY].forEach((m) => snap(m, t.clientY));

      setTouching(true);
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: t.clientX, y: t.clientY }]);
    };

    const onMove = (e) => {
      const t = e.touches[0];
      if (!t) return;
      touchX.set(t.clientX);
      touchY.set(t.clientY);
    };

    const onEnd = () => setTouching(false);

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    window.addEventListener("touchcancel", onEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
    };
  }, [enabled, touchX, touchY, ringX, ringY, glowX, glowY]);

  if (!enabled) return null;

  return (
    <>
      {/* Soft glow that trails the finger */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed left-0 top-0 z-[9996]"
      >
        <motion.div
          animate={{ opacity: touching ? 1 : 0, scale: touching ? 1 : 0.4 }}
          transition={{ duration: 0.35 }}
          className="-translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full blur-2xl
            bg-[#55E6C1]/30 dark:bg-[#1B9CFC]/30"
        />
      </motion.div>

      {/* Tap ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            aria-hidden
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() =>
              setRipples((list) => list.filter((x) => x.id !== r.id))
            }
            style={{ left: r.x, top: r.y }}
            className="pointer-events-none fixed z-[9997] -ml-7 -mt-7 h-14 w-14 rounded-full border-2
              border-[#F97F51] dark:border-[#FC427B]"
          />
        ))}
      </AnimatePresence>

      {/* Ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
      >
        <motion.div
          animate={{ opacity: touching ? 1 : 0, scale: touching ? 1 : 0.5 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="-translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full border-[1.5px]
            border-[#55E6C1] bg-[#55E6C1]/10
            dark:border-[#1B9CFC] dark:bg-[#1B9CFC]/10"
        />
      </motion.div>

      {/* Dot under the finger */}
      <motion.div
        aria-hidden
        style={{ x: touchX, y: touchY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <motion.div
          animate={{ opacity: touching ? 1 : 0, scale: touching ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="-translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full shadow-lg
            bg-gradient-to-br from-[#55E6C1] to-[#F97F51]
            dark:from-[#1B9CFC] dark:to-[#FC427B]"
        />
      </motion.div>
    </>
  );
}
