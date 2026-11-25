"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="w-9 h-9 rounded-xl border border-indigo-500/25 bg-[var(--bg-secondary)]/80 flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
