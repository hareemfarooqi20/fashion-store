"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 15 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='hover']");
      if (interactive) setIsHovered(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='hover']");
      if (interactive) setIsHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  const ringScale = isPressed ? 0.8 : isHovered ? 2 : 1;
  const dotScale = isHovered ? 0 : 1;

  return (
    <>
      {/* Dot — follows cursor exactly */}
      <motion.div
        className="hidden md:block fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#C5956A",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{ scale: dotScale }}
        transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
      />

      {/* Ring — follows with spring */}
      <motion.div
        className="hidden md:block fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: 40,
          height: 40,
          border: "1.5px solid #C5956A",
          backgroundColor: "transparent",
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{ scale: ringScale }}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
      />
    </>
  );
}
