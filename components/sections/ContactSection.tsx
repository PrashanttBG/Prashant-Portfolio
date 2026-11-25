"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Github, Linkedin, Mail, Phone, Send, Terminal } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Uses Formspree if configured, otherwise falls back cleanly to mailto
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      if (formspreeEndpoint) {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Failed");
      } else {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Open Channel"
          title="Let's Build Together"
          subtitle="Open to full-time Software Engineering roles, ambitious projects, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4"
          >
            <GlassmorphicCard>
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                Direct Coordinates
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Whether you have a role, a product idea, or just want to talk architecture — my inbox is always open.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-cyan-400/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-[var(--text-secondary)]">Email</div>
                    <div className="text-sm font-medium truncate">{PROFILE.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-cyan-400/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-[var(--text-secondary)]">Phone</div>
                    <div className="text-sm font-medium">{PROFILE.phone}</div>
                  </div>
                </a>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-cyan-400/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-[var(--text-secondary)]">LinkedIn</div>
                    <div className="text-sm font-medium">iamprashant-baghel</div>
                  </div>
                </a>

                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-cyan-400/50 transition-colors"
                >
                  <Github className="w-5 h-5 text-violet-400 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-[var(--text-secondary)]">GitHub</div>
                    <div className="text-sm font-medium">@{PROFILE.githubUsername}</div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={PROFILE.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-amber-400/50 transition-colors"
                  >
                    <Code2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-[var(--text-secondary)]">LeetCode</div>
                      <div className="text-xs font-medium truncate">PrashantBG2301</div>
                    </div>
                  </a>

                  <a
                    href={PROFILE.hackerrankUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-emerald-400/50 transition-colors"
                  >
                    <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-[var(--text-secondary)]">HackerRank</div>
                      <div className="text-xs font-medium truncate">cseltfw2301</div>
                    </div>
                  </a>
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <GlassmorphicCard>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[var(--text-secondary)] mb-2"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)]/80 border border-indigo-500/20 focus:border-cyan-400 focus:outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[var(--text-secondary)] mb-2"
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)]/80 border border-indigo-500/20 focus:border-cyan-400 focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[var(--text-secondary)] mb-2"
                  >
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role, project, or collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)]/80 border border-indigo-500/20 focus:border-cyan-400 focus:outline-none text-sm transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <MagneticButton
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/25 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Transmitting..." : "Send Message"}
                  </MagneticButton>

                  {status === "sent" && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> Message ready / sent!
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-xs font-mono text-rose-400">
                      Something went wrong. Please email directly.
                    </span>
                  )}
                </div>
              </form>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
