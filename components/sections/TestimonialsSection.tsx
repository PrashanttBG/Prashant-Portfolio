"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Endorsements"
          title="Peer & Mentor Notes"
          subtitle="Feedback on engineering precision, collaboration, and delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => {
            const isHighlighted = idx === index;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <GlassmorphicCard
                  className={`h-full flex flex-col justify-between ${
                    isHighlighted ? "border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.14)]" : ""
                  }`}
                >
                  <div>
                    <Quote className="w-7 h-7 text-indigo-400/60 mb-4" />
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-indigo-500/15">
                    <div className="font-semibold text-sm font-[family-name:var(--font-space-grotesk)]">
                      {item.name}
                    </div>
                    <div className="text-xs text-indigo-400">{item.role}</div>
                    <div className="text-[11px] font-mono text-[var(--text-secondary)] mt-1">
                      {item.relationship} · {item.date}
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous endorsement"
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-cyan-400/50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next endorsement"
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-cyan-400/50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
