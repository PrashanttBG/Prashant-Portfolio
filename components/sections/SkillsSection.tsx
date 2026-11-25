"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Database, Layout, Server, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Layout,
  Database,
  Brain,
  Cloud,
  Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Tech Arsenal"
          title="Skills & Capabilities"
          subtitle="Core technologies I use to architect, build, and deploy full-stack and AI-powered systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = ICON_MAP[category.icon] || Server;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <GlassmorphicCard className="h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.accent} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-tertiary)]/80 border border-indigo-500/15 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                      >
                        <span>{skill.name}</span>
                        <span className="text-[10px] font-mono text-[var(--text-secondary)] opacity-75">
                          · {skill.level}
                        </span>
                      </span>
                    ))}
                  </div>
                </GlassmorphicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
