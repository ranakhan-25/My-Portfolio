"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/* ------------------------------------------------------------------ */
/* Tweak these to change the feel                                      */
/* ------------------------------------------------------------------ */
const SMOOTH_TOUCH = true; // false = mobile uses normal native scroll
const ANCHOR_OFFSET = 0; // set e.g. -80 if you have a fixed navbar

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Respect users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      // Desktop wheel
      smoothWheel: true,
      lerp: 0.09, // lower = floatier (note: when lerp is set, `duration` is ignored)
      wheelMultiplier: 0.9,

      // Mobile touch: Lenis leaves touch alone unless syncTouch is on
      syncTouch: SMOOTH_TOUCH,
      syncTouchLerp: 0.1,
      touchMultiplier: 1.2,

      infinite: false,
    });

    // Keep the frame id so the loop really stops on cleanup
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth scroll for in-page links like #about, #projects, #contact
    const onClick = (e) => {
      const link =
        e.target instanceof Element ? e.target.closest('a[href^="#"]') : null;
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.4 });
        return;
      }

      let target = null;
      try {
        target = document.querySelector(hash);
      } catch {
        return;
      }
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: ANCHOR_OFFSET, duration: 1.4 });
      window.history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return children;
}
