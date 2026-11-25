"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button'], input, textarea");
      setIsPointer(Boolean(interactive));
    };

    window.addEventListener("mouseover", handleOver, { passive: true });
    return () => window.removeEventListener("mouseover", handleOver);
  }, []);

  if (!visible || x < 0 || y < 0) return null;

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${x - (isPointer ? 20 : 14)}px, ${y - (isPointer ? 20 : 14)}px, 0)`,
        }}
        className={`pointer-events-none fixed top-0 left-0 z-[60] rounded-full border transition-all duration-150 ease-out hidden md:block ${
          isPointer
            ? "w-10 h-10 border-cyan-400/70 bg-cyan-400/10"
            : "w-7 h-7 border-indigo-400/45"
        }`}
      />
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${x - 3}px, ${y - 3}px, 0)`,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[60] w-1.5 h-1.5 rounded-full bg-cyan-400 hidden md:block"
      />
    </>
  );
}
