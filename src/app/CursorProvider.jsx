"use client";

import DesktopCursor from "@/components/shared/DesktopCursor";
import MobileTouchCursor from "@/components/shared/MobileTouchCursor";
import { useEffect, useState } from "react";

export default function CursorProvider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileTouchCursor /> : <DesktopCursor />;
}