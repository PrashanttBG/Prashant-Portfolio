"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useScrollAnimation";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-3">
      <nav
        aria-label="Primary Navigation"
        className="max-w-6xl mx-auto glass-card rounded-2xl px-4 sm:px-6 h-14 flex items-center justify-between shadow-lg shadow-black/10"
      >
        {/* Brand */}
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 font-bold text-lg tracking-tight cursor-pointer group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)]">
            {PROFILE.shortName}
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-cyan-400"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-indigo-500/12 border border-indigo-500/30 -z-10"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-9 h-9 rounded-xl border border-indigo-500/25 flex items-center justify-center text-[var(--text-primary)] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto glass-card rounded-2xl p-4 shadow-2xl"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                      active === item.id
                        ? "bg-indigo-500/15 text-cyan-400 border border-indigo-500/30"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
