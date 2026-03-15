"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { SERVICES } from "@/lib/data";

const DATES = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return d;
});

const TIMES = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00",
];
const TAKEN = ["11:30", "14:00", "16:00"];

const GOALS = [
  "Update my everyday wardrobe",
  "Dress for a special occasion",
  "Build a capsule wardrobe",
  "Refresh my work wardrobe",
  "Bridal / wedding styling",
  "Post-partum wardrobe reset",
];

interface FormData {
  service: string;
  date: Date | null;
  time: string;
  goal: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    service: "",
    date: null,
    time: "",
    goal: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData, val: string | Date) =>
    setForm((f) => ({ ...f, [key]: val }));

  const canProceed = () => {
    if (step === 1) return !!form.service;
    if (step === 2) return !!form.date && !!form.time;
    if (step === 3) return !!form.goal;
    if (step === 4) return !!form.name && !!form.email && !!form.phone;
    return false;
  };

  const selectedService = SERVICES.find((s) => s.id === form.service);

  if (submitted) {
    return (
      <div className="text-center py-16 px-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "color-mix(in srgb, var(--brand), transparent 80%)" }}
        >
          <CheckCircle className="w-10 h-10" style={{ color: "var(--brand)" }} />
        </div>
        <h2 className="text-3xl font-display font-bold text-white mb-3">
          Booking Confirmed!
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          We&apos;ve received your booking and will send a confirmation to{" "}
          <strong className="text-white">{form.email}</strong> within 2 hours.
        </p>

        {/* Summary card */}
        <div className="glass rounded-2xl p-6 max-w-sm mx-auto text-left mb-8">
          <h3 className="text-white font-semibold mb-4">Booking Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-white/50">Service</span>
              <span className="text-white">{selectedService?.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Date</span>
              <span className="text-white">
                {form.date?.toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Time</span>
              <span className="text-white">{form.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Name</span>
              <span className="text-white">{form.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Price</span>
              <span className="font-semibold" style={{ color: "var(--brand)" }}>
                {selectedService?.price}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => { setSubmitted(false); setStep(1); setForm({ service: "", date: null, time: "", goal: "", name: "", email: "", phone: "", notes: "" }); }}
          className="px-6 py-3 glass rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all"
              style={{
                background: s <= step ? "var(--brand)" : "rgba(255,255,255,0.08)",
                color: s <= step ? "#fff" : "rgba(255,255,255,0.4)",
              }}
            >
              {s < step ? <CheckCircle className="w-4 h-4" /> : s}
            </div>
            {s < 4 && (
              <div
                className="h-0.5 flex-1 rounded-full transition-all"
                style={{ background: s < step ? "var(--brand)" : "rgba(255,255,255,0.08)" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1 — Service */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Choose Your Service
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Select the styling service that&apos;s right for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => update("service", s.id)}
                className={`text-left p-5 rounded-2xl border transition-all ${
                  form.service === s.id
                    ? "border-[var(--brand)] bg-[color-mix(in_srgb,var(--brand),transparent_90%)]"
                    : "glass hover:border-white/15"
                }`}
              >
                {s.popular && (
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-white mb-2"
                    style={{ background: "var(--brand)" }}
                  >
                    Popular
                  </span>
                )}
                <p className="text-white font-semibold">{s.title}</p>
                <p className="text-white/40 text-xs mt-1 mb-2">{s.duration}</p>
                <p className="font-bold text-sm" style={{ color: "var(--brand)" }}>
                  {s.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Date & Time */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Pick a Date & Time
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Choose your preferred appointment slot.
          </p>

          {/* Date strip */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-8">
            {DATES.map((d) => (
              <button
                key={d.toISOString()}
                onClick={() => update("date", d)}
                className={`flex-shrink-0 flex flex-col items-center px-4 py-3 rounded-xl border transition-all min-w-[70px] ${
                  form.date?.toDateString() === d.toDateString()
                    ? "border-[var(--brand)] text-white"
                    : "glass text-white/50 hover:border-white/20"
                }`}
                style={
                  form.date?.toDateString() === d.toDateString()
                    ? { background: "color-mix(in srgb, var(--brand), transparent 85%)" }
                    : {}
                }
              >
                <span className="text-xs uppercase tracking-wider">
                  {d.toLocaleDateString("en-GB", { weekday: "short" })}
                </span>
                <span className="text-xl font-bold mt-0.5">{d.getDate()}</span>
                <span className="text-xs mt-0.5">
                  {d.toLocaleDateString("en-GB", { month: "short" })}
                </span>
              </button>
            ))}
          </div>

          {/* Time grid */}
          <div className="grid grid-cols-4 gap-2">
            {TIMES.map((t) => {
              const taken = TAKEN.includes(t);
              return (
                <button
                  key={t}
                  disabled={taken}
                  onClick={() => !taken && update("time", t)}
                  className={`py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    taken
                      ? "opacity-30 cursor-not-allowed glass"
                      : form.time === t
                      ? "border-[var(--brand)] text-white"
                      : "glass hover:border-white/20 text-white/70"
                  }`}
                  style={
                    form.time === t && !taken
                      ? { background: "color-mix(in srgb, var(--brand), transparent 85%)" }
                      : {}
                  }
                >
                  {taken ? <s>{t}</s> : t}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3 — Style goal */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            What&apos;s Your Style Goal?
          </h2>
          <p className="text-white/50 text-sm mb-8">
            This helps your stylist prepare the perfect session for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GOALS.map((g) => (
              <button
                key={g}
                onClick={() => update("goal", g)}
                className={`text-left px-5 py-4 rounded-xl border text-sm transition-all ${
                  form.goal === g
                    ? "border-[var(--brand)] text-white"
                    : "glass hover:border-white/20 text-white/60"
                }`}
                style={
                  form.goal === g
                    ? { background: "color-mix(in srgb, var(--brand), transparent 88%)" }
                    : {}
                }
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 — Contact */}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Your Details
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Almost there — just a few details to confirm your booking.
          </p>

          {/* Summary */}
          <div className="glass-brand rounded-xl p-4 mb-6 text-sm">
            <p className="text-white/70">
              <strong className="text-white">{selectedService?.title}</strong> ·{" "}
              {form.date?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })} at {form.time}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/60 mb-1.5">Full Name *</label>
                <input
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1.5">Phone *</label>
                <input
                  className="form-input"
                  placeholder="07xxx xxxxxx"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1.5">Email Address *</label>
              <input
                className="form-input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1.5">Additional Notes</label>
              <textarea
                className="form-input resize-none"
                rows={3}
                placeholder="Anything you'd like your stylist to know..."
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex items-center gap-2 px-5 py-3 glass rounded-full text-sm text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            onClick={() => canProceed() && setStep((s) => s + 1)}
            disabled={!canProceed()}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ background: "var(--brand)" }}
          >
            Continue
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => canProceed() && setSubmitted(true)}
            disabled={!canProceed()}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 brand-glow"
            style={{ background: "var(--brand)" }}
          >
            Confirm Booking
            <CheckCircle className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
