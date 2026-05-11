"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <h1 className="text-2xl font-medium">
      <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
        <Typewriter
          words={[
            "Front-End Developer",
            "UI/UX Enthusiast",
            "Tech Explorer",
            "Always Learning New Tech",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
}