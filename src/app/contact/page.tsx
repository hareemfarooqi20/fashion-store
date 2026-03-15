"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Whether you have a question about an order, want to book a consultation, or just want to say hello — our team is here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="glass rounded-3xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "color-mix(in srgb, var(--brand), transparent 80%)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--brand)" }} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  Message Sent!
                </h2>
                <p className="text-white/50 mb-6">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-6 py-3 glass rounded-full text-sm text-white hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Send a Message
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">
                    Subject
                  </label>
                  <input
                    className="form-input"
                    placeholder="What's it about?"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    className="form-input resize-none"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] btn-press"
                  style={{ background: "var(--brand)" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="glass rounded-2xl p-7">
              <h2 className="text-lg font-semibold text-white mb-5">
                Contact Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                  <div>
                    <p className="text-white text-sm font-medium">Address</p>
                    <p className="text-white/50 text-sm">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                  <div>
                    <p className="text-white text-sm font-medium">Phone</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-2 text-white font-semibold mb-5">
                <Clock className="w-5 h-5" style={{ color: "var(--brand)" }} />
                Opening Hours
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hrs: "10:00 – 19:00" },
                  { day: "Saturday", hrs: "10:00 – 18:00" },
                  { day: "Sunday", hrs: "12:00 – 17:00" },
                ].map(({ day, hrs }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-white/50">{day}</span>
                    <span className="text-white">{hrs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: "var(--brand)" }} />
                <p className="text-white/50 text-sm">14 King Street, Mayfair</p>
                <p className="text-white/30 text-xs mt-1">London W1J 9AA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
