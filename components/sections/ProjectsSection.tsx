"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Layers } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import type { GitHubRepoStats } from "@/lib/github";

const CATEGORIES = [
  "All",
  "Freelance",
  "AI / ML",
  "Distributed Systems",
  "Full-Stack",
] as const;

interface ProjectsSectionProps {
  repoStats?: GitHubRepoStats[];
}

export function ProjectsSection({ repoStats = [] }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getRepoStars = (project: ProjectItem) => {
    if (!project.repoName) return null;
    const match = repoStats.find(
      (r) => r.name.toLowerCase() === project.repoName?.toLowerCase()
    );
    return match ? match.stars : null;
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Featured Missions"
          title="Projects & Builds"
          subtitle="Real-world systems spanning healthcare AI, Kafka microservices, customer support triage, and Chrome automation."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  active
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/25"
                    : "glass-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, idx) => {
            const stars = getRepoStars(project);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <TiltCard className="h-full">
                  <article className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:border-cyan-400/50 transition-colors">
                    {/* Preview Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-[#0b0f19] border-b border-indigo-500/15">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-cyan-400 flex items-center gap-1.5">
                        <Layers className="w-3 h-3" />
                        {project.category}
                      </div>
                      {stars !== null && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-amber-400 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {stars}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-indigo-400 mt-0.5 mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                          {project.description}
                        </p>

                        <ul className="space-y-1.5 mb-5">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                            >
                              <span className="text-cyan-400 mt-0.5">▸</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 font-mono text-[11px] text-indigo-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3 pt-3 border-t border-indigo-500/15">
                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
                            >
                              <Github className="w-4 h-4" /> Source Code
                            </a>
                          ) : (
                            <span className="text-xs font-mono text-[var(--text-secondary)]">
                              Private Client Repo
                            </span>
                          )}
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:underline ml-auto"
                            >
                              Live Demo <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : project.liveLabel ? (
                            <span className="ml-auto px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 font-mono text-[11px] text-emerald-400">
                              {project.liveLabel}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
