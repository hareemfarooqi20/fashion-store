"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTargetDate(): Date {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  return target;
}

function calculateTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  const [prevValue, setPrevValue] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setFlipping(true);
      const t = setTimeout(() => {
        setPrevValue(value);
        setFlipping(false);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [value, prevValue]);

  const displayValue = flipping ? prevValue : value;

  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-lg px-3 py-2 min-w-[52px] flex flex-col items-center"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        <span
          className="text-2xl md:text-3xl font-bold text-white leading-none tabular-nums"
          style={{
            opacity: flipping ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          {String(displayValue).padStart(2, "0")}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-white/70 mt-1 font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function PromoCountdown() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [targetDate] = useState<Date>(getTargetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(getTargetDate())
  );

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("promo-dismissed") === "true";
    if (wasDismissed) {
      setDismissed(true);
      return;
    }
    const mountTimer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [dismissed, targetDate]);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("promo-dismissed", "true");
    setTimeout(() => setDismissed(true), 400);
  };

  if (dismissed) return null;

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
        background: "#C5956A",
      }}
      role="banner"
      aria-label="Promotional countdown"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 relative">
        {/* Label */}
        <span className="text-white/90 text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
          Spring Sale Ends In:
        </span>

        {/* Countdown units */}
        <div className="flex items-center gap-2">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="text-white/60 text-xl font-light mb-4">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="text-white/60 text-xl font-light mb-4">:</span>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <span className="text-white/60 text-xl font-light mb-4">:</span>
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-black/10"
          aria-label="Dismiss promotion"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
