"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";
import { MARQUEE_TECH, PROFILE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

const PILLARS = [
  {
    icon: Code2,
    title: "Full-Stack Precision",
    desc: "End-to-end architecture from Spring Boot & Node.js microservices to responsive React & Next.js UIs.",
    color: "text-indigo-400",
  },
  {
    icon: Cpu,
    title: "AI & Event-Driven Systems",
    desc: "Integrating Gemini/OpenAI LLMs, OCR pipelines, vector search, and Apache Kafka real-time streams.",
    color: "text-cyan-400",
  },
  {
    icon: Rocket,
    title: "Production Mindset",
    desc: "Containerized deployments with Docker, JWT security, clean code, and performance-first engineering.",
    color: "text-violet-400",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="whoami"
          title="About Me"
          subtitle="Engineering scalable software with precision, curiosity, and real-world impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Terminal Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <GlassmorphicCard className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 pb-4 mb-5 border-b border-indigo-500/15">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-xs text-[var(--text-secondary)]">
                    prashant@mission-control:~/about.md
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                  {PROFILE.tagline}
                </h3>

                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  {PROFILE.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-indigo-500/15 flex flex-wrap gap-3 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  B.Tech CSE Graduate
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Java + Spring Boot + React
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  AI/ML &amp; Distributed Systems
                </span>
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <GlassmorphicCard key={pillar.title} className="flex items-start gap-4 p-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center shrink-0">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base font-[family-name:var(--font-space-grotesk)]">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </GlassmorphicCard>
              );
            })}
          </motion.div>
        </div>

        {/* Infinite Tech Marquee */}
        <div className="mt-12 overflow-hidden rounded-2xl glass-card py-4">
          <div className="animate-marquee flex items-center gap-6">
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, idx) => (
              <span
                key={`${tech}-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 font-mono text-xs sm:text-sm text-[var(--text-secondary)] whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
