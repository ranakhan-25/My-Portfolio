"use client";

import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      color="139, 92, 246"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
    />
  );
}