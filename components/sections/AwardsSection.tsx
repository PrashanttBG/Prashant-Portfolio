"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

export function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Focus Areas & Learning"
          subtitle="Continuous hands-on specialization across cloud AI, enterprise Java, and modern web engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <GlassmorphicCard className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.badgeColor} flex items-center justify-center text-white shadow-md`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                    {group.provider}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex items-start justify-between gap-2 text-sm pb-3 border-b border-indigo-500/10 last:border-0 last:pb-0"
                    >
                      <span className="flex items-start gap-2 text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cert.name}</span>
                      </span>
                      <span className="font-mono text-xs text-indigo-400 shrink-0">
                        {cert.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
