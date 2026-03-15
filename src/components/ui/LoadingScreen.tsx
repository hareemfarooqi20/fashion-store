"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const BRAND_NAME = "LuxeBoutique";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const containerVariants = {
    exit: {
      clipPath: "inset(100% 0 0 0)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number,number,number,number],
      },
    },
  };

  const letterContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number],
      },
    },
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.3,
        duration: 2,
        ease: [0.4, 0, 0.6, 1] as [number,number,number,number],
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0A0A0A" }}
          variants={containerVariants}
          exit="exit"
          initial={{ clipPath: "inset(0% 0 0 0)" }}
        >
          {/* Brand name with letter stagger */}
          <motion.div
            className="overflow-hidden flex items-center"
            variants={letterContainerVariants}
            initial="hidden"
            animate="visible"
            aria-label={BRAND_NAME}
          >
            {BRAND_NAME.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="font-display text-5xl md:text-7xl font-semibold tracking-widest"
                style={{ color: "#C5956A", display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase text-white/50 font-light"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            Dress Your Story
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full origin-left rounded-full"
              style={{ backgroundColor: "#C5956A" }}
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
