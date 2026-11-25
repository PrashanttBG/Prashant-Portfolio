"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-indigo-500/15 py-8 px-4 sm:px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg font-[family-name:var(--font-space-grotesk)] gradient-text">
            {PROFILE.shortName}
          </span>
          <span className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & Framer Motion.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-400 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
