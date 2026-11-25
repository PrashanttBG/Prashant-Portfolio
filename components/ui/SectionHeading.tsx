"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={align === "center" ? "text-center max-w-2xl mx-auto mb-14" : "mb-12"}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
