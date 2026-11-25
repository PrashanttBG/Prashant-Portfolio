"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

const TYPE_ICON = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="cat career.log"
          title="Journey & Milestones"
          subtitle="Education, engineering experience, and key systems built along the way."
        />

        <div className="relative pl-6 sm:pl-10 border-l border-indigo-500/30 space-y-8">
          {EXPERIENCE.map((item, idx) => {
            const Icon = TYPE_ICON[item.type];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Timeline Node */}
                <span className="absolute -left-[37px] sm:-left-[53px] top-6 w-7 h-7 rounded-full bg-[var(--bg-primary)] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                </span>

                <GlassmorphicCard>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-indigo-400 mb-3">
                    {item.organization}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2"
                      >
                        <span className="text-indigo-400 mt-0.5">&gt;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {item.tech && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-indigo-500/15">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-indigo-500/10 font-mono text-[11px] text-indigo-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </GlassmorphicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
