"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork, Github, Star, Users } from "lucide-react";
import type { GitHubProfileStats } from "@/lib/github";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface GitHubSectionProps {
  stats: GitHubProfileStats;
}

export function GitHubSection({ stats }: GitHubSectionProps) {
  return (
    <section id="github" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Live Telemetry"
          title="GitHub Activity & Stats"
          subtitle="Real-time repository metrics and language distribution fetched directly from GitHub."
        />

        {/* Top Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <GlassmorphicCard className="text-center">
            <Github className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
            <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
              <AnimatedCounter value={stats.publicRepos} />
            </div>
            <div className="text-xs font-mono text-[var(--text-secondary)] mt-1">
              Public Repositories
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center">
            <Star className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
              <AnimatedCounter value={stats.totalStars} />
            </div>
            <div className="text-xs font-mono text-[var(--text-secondary)] mt-1">
              Total Stars
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center">
            <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
              <AnimatedCounter value={stats.followers} />
            </div>
            <div className="text-xs font-mono text-[var(--text-secondary)] mt-1">
              Followers
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center">
            <GitFork className="w-6 h-6 text-violet-400 mx-auto mb-2" />
            <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
              <AnimatedCounter value={stats.languages.length} />
            </div>
            <div className="text-xs font-mono text-[var(--text-secondary)] mt-1">
              Primary Languages
            </div>
          </GlassmorphicCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Language Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <GlassmorphicCard className="h-full">
              <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
                Language Breakdown
              </h3>
              <div className="space-y-4">
                {stats.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        {lang.name}
                      </span>
                      <span className="text-[var(--text-secondary)]">
                        {lang.percentage}% ({lang.count} repos)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* Highlighted Repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <GlassmorphicCard className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                    Active Repositories
                  </h3>
                  <a
                    href={stats.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                  >
                    View Profile <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stats.topRepos.slice(0, 4).map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-[var(--bg-tertiary)]/70 border border-indigo-500/15 hover:border-cyan-400/50 transition-all group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-sm font-semibold group-hover:text-cyan-400 transition-colors truncate">
                          {repo.name}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-amber-400 shrink-0">
                          <Star className="w-3 h-3" /> {repo.stars}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-1.5 line-clamp-2">
                        {repo.description || "Full-stack / systems engineering repository"}
                      </p>
                      {repo.language && (
                        <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300">
                          {repo.language}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
