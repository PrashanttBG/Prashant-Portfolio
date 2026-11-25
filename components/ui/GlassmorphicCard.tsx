"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassmorphicCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function GlassmorphicCard({
  children,
  className,
  hoverGlow = true,
  ...props
}: GlassmorphicCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hoverGlow &&
          "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.16)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
