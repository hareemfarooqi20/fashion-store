"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingBooking() {
  const [visible, setVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("fab_dismissed")) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 3000);
    const scrollHandler = () => { if (window.scrollY > 400) setVisible(true); };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const dismiss = () => {
    setDismissed(true);
    setPopupOpen(false);
    localStorage.setItem("fab_dismissed", "1");
  };

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup card */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
            className="glass rounded-2xl p-5 w-64 shadow-2xl relative"
          >
            <button
              onClick={() => setPopupOpen(false)}
              aria-label="Close popup"
              className="absolute top-3 right-3 text-white/35 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--brand)" }}>
              Limited Availability
            </p>
            <p className="text-white font-semibold text-sm mb-1">
              Only 3 styling slots left today
            </p>
            <p className="text-white/50 text-xs mb-4">
              Book your personal styling session with one of our expert stylists.
            </p>
            <Link
              href="/booking"
              className="block w-full text-center py-2.5 rounded-full text-sm font-semibold text-white btn-press brand-glow-sm transition-all hover:scale-[1.02]"
              style={{ background: "var(--brand)" }}
            >
              Book Now — It&apos;s Free
            </Link>
            <button
              onClick={dismiss}
              className="block w-full text-center mt-2 text-xs text-white/30 hover:text-white/55 transition-colors"
            >
              No thanks
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setPopupOpen((p) => !p)}
            aria-label="Book a styling session"
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl brand-pulse"
            style={{ background: "var(--brand)" }}
          >
            <Calendar className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
