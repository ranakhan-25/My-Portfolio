"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], summary, label[for], select, .cursor-pointer, [data-cursor]";
const TEXT_FIELD = "input, textarea, [contenteditable='true']";

/* ------------------------------------------------------------------ */
/* Tweak these to change the feel                                      */
/* ------------------------------------------------------------------ */
const TRAIL_LIFE = 480; // ms the comet tail stays visible
const TRAIL_WIDTH = 7; // max tail thickness
const BURST_COUNT = 16; // sparkles on click

const hexToRgb = (hex) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];
const PALETTES = {
  light: [hexToRgb("#55E6C1"), hexToRgb("#F97F51")], // mint -> orange
  dark: [hexToRgb("#1B9CFC"), hexToRgb("#FC427B")], // blue -> pink
};
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

function isDark() {
  const cl = document.documentElement.classList;
  if (cl.contains("dark")) return true;
  if (cl.contains("light")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function CometCursor() {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  // Only for real mouse devices (checked after mount, so no hydration mismatch)
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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // All cursor state lives in a plain object (no React re-renders)
    const s = {
      x: -100,
      y: -100,
      rx: -100,
      ry: -100,
      rr: 14,
      visible: false,
      hovering: false,
      onText: false,
      pressed: false,
      points: [],
      particles: [],
      raf: 0,
    };

    document.documentElement.classList.add("has-comet-cursor");

    /* ----------------------------- events ----------------------------- */
    const onMove = (e) => {
      s.x = e.clientX;
      s.y = e.clientY;
      if (!s.visible) {
        s.visible = true;
        s.rx = s.x;
        s.ry = s.y;
      }
      if (!reduceMotion) {
        s.points.push({ x: s.x, y: s.y, t: performance.now() });
        if (s.points.length > 60) s.points.shift();
      }
    };
    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target : null;
      s.onText = !!el?.closest(TEXT_FIELD);
      s.hovering = !!el?.closest(INTERACTIVE);
    };
    const onDown = (e) => {
      s.pressed = true;
      if (reduceMotion) return;
      for (let i = 0; i < BURST_COUNT; i++) {
        const angle = (Math.PI * 2 * i) / BURST_COUNT + Math.random() * 0.4;
        const speed = 1.5 + Math.random() * 3.2;
        s.particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 2.2,
          life: 1,
          t: Math.random(),
        });
      }
    };
    const onUp = () => (s.pressed = false);
    const onLeave = () => (s.visible = false);
    const onEnter = () => (s.visible = true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("resize", resize);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    /* ------------------------------ loop ------------------------------ */
    const frame = (now) => {
      ctx.clearRect(0, 0, width, height);
      const [c1, c2] = isDark() ? PALETTES.dark : PALETTES.light;

      // Comet tail: thick + bright near the head, thin + faded at the end
      s.points = s.points.filter((p) => now - p.t < TRAIL_LIFE);
      const pts = s.points;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const life = 1 - (now - p1.t) / TRAIL_LIFE;
        const t = i / pts.length;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = rgba(mix(c1, c2, t), Math.max(life, 0) * 0.85);
        ctx.lineWidth = 1 + Math.max(life, 0) * TRAIL_WIDTH * t;
        ctx.stroke();
      }

      // Click sparkles
      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy = p.vy * 0.95 + 0.06;
        p.life -= 0.022;
        if (p.life <= 0) {
          s.particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life + 0.3, 0, Math.PI * 2);
        ctx.fillStyle = rgba(mix(c1, c2, p.t), p.life);
        ctx.fill();
      }

      // Head: lagging ring + exact dot
      if (s.visible && !s.onText) {
        s.rx += (s.x - s.rx) * 0.18;
        s.ry += (s.y - s.ry) * 0.18;
        const targetR = s.pressed ? 9 : s.hovering ? 26 : 14;
        s.rr += (targetR - s.rr) * 0.2;

        ctx.beginPath();
        ctx.arc(s.rx, s.ry, s.rr, 0, Math.PI * 2);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = rgba(s.hovering ? c2 : c1, 0.9);
        ctx.stroke();
        if (s.hovering) {
          ctx.fillStyle = rgba(c2, 0.12);
          ctx.fill();
        }

        const dotR = s.pressed ? 7 : s.hovering ? 3 : 5;
        const g = ctx.createLinearGradient(
          s.x - dotR,
          s.y - dotR,
          s.x + dotR,
          s.y + dotR,
        );
        g.addColorStop(0, rgba(c1, 1));
        g.addColorStop(1, rgba(c2, 1));
        ctx.beginPath();
        ctx.arc(s.x, s.y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      s.raf = requestAnimationFrame(frame);
    };
    s.raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(s.raf);
      document.documentElement.classList.remove("has-comet-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", resize);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* hide native cursor (keep the text cursor on inputs) */}
      <style>{`
        html.has-comet-cursor, html.has-comet-cursor * { cursor: none !important; }
        html.has-comet-cursor input, html.has-comet-cursor textarea,
        html.has-comet-cursor [contenteditable='true'] { cursor: text !important; }
      `}</style>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
    </>
  );
}
