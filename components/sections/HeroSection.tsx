"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { TerminalText } from "@/components/ui/TerminalText";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden mission-grid"
    >
      <ParticleBackground />

      {/* Ambient Nebula Glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card text-xs sm:text-sm font-mono">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 font-semibold">ONLINE</span>
            <span className="text-[var(--text-secondary)]">· {PROFILE.availability}</span>
          </div>

          <div>
            <p className="font-mono text-sm text-indigo-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              MISSION CONTROL // PORTFOLIO v2.0
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-[family-name:var(--font-space-grotesk)] leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="gradient-text block sm:inline">{PROFILE.name}</span>
            </h1>
          </div>

          {/* Typewriter Role */}
          <div className="text-lg sm:text-xl md:text-2xl min-h-[2rem]">
            <TerminalText phrases={PROFILE.roles} />
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            {PROFILE.tagline} I build multi-tenant SaaS platforms with the{" "}
            <span className="text-[var(--text-primary)] font-medium">MERN Stack &amp; TypeScript</span>,
            event-driven{" "}
            <span className="text-[var(--text-primary)] font-medium">Kafka &amp; Kubernetes</span>{" "}
            microservices, and{" "}
            <span className="text-[var(--text-primary)] font-medium">Java, Spring Boot &amp; GenAI</span>{" "}
            applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/30 hover:shadow-cyan-500/30 transition-shadow"
            >
              Explore Missions <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass-card hover:border-cyan-400/50 transition-colors"
            >
              <Download className="w-4 h-4 text-cyan-400" /> Resume
            </a>

            <div className="flex items-center gap-2.5 ml-1">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Telemetry Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {PROFILE.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl px-4 py-3 border-indigo-500/15"
              >
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual — Orbital Avatar Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Rotating Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-indigo-500/35"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-cyan-400/25"
            />

            {/* Floating Tech Badges */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass-card font-mono text-xs text-cyan-400 border-cyan-400/40 shadow-lg">
              MERN Stack
            </span>
            <span className="absolute bottom-2 -left-3 px-3 py-1 rounded-full glass-card font-mono text-xs text-indigo-400 border-indigo-400/40 shadow-lg">
              Kafka &amp; K8s
            </span>
            <span className="absolute bottom-2 -right-3 px-3 py-1 rounded-full glass-card font-mono text-xs text-violet-400 border-violet-400/40 shadow-lg">
              Java &amp; GenAI
            </span>

            {/* Profile Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-indigo-500/60 pulse-glow bg-[var(--bg-secondary)]">
              <Image
                src={PROFILE.photoUrl}
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
