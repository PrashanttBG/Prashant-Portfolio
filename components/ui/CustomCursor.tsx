"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [targetType, setTargetType] = useState<"default" | "link" | "button">("default");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("button, [role='button']")) {
        setTargetType("button");
      } else if (target.closest("a, input, textarea")) {
        setTargetType("link");
      } else {
        setTargetType("default");
      }
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mousedown", handleDown, { passive: true });
    window.addEventListener("mouseup", handleUp, { passive: true });

    return () => {
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  if (!visible || x < 0 || y < 0) return null;

  const isInteractive = targetType !== "default";
  const boxSize = pressed ? 24 : isInteractive ? 38 : 28;
  const half = boxSize / 2;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
    >
      {/* Mission Control HUD Target Reticle */}
      <div
        style={{
          width: boxSize,
          height: boxSize,
          transform: `translate3d(${x - half}px, ${y - half}px, 0) rotate(${
            isInteractive ? "45deg" : "0deg"
          })`,
        }}
        className="fixed top-0 left-0 transition-[width,height,transform] duration-150 ease-out"
      >
        {/* 4 Corner Brackets */}
        <span
          className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 transition-colors ${
            isInteractive ? "border-cyan-400" : "border-indigo-400/80"
          }`}
        />
        <span
          className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 transition-colors ${
            isInteractive ? "border-cyan-400" : "border-indigo-400/80"
          }`}
        />
        <span
          className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 transition-colors ${
            isInteractive ? "border-cyan-400" : "border-indigo-400/80"
          }`}
        />
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 transition-colors ${
            isInteractive ? "border-cyan-400" : "border-indigo-400/80"
          }`}
        />
      </div>

      {/* Center Precision Crosshair Dot */}
      <div
        style={{
          transform: `translate3d(${x - 2}px, ${y - 2}px, 0)`,
        }}
        className={`fixed top-0 left-0 w-1 h-1 rounded-full transition-colors ${
          isInteractive ? "bg-cyan-300 shadow-[0_0_8px_#22d3ee]" : "bg-indigo-400"
        }`}
      />

      {/* Micro HUD Lock Tag on Interactive Hover */}
      {isInteractive && (
        <div
          style={{
            transform: `translate3d(${x + 22}px, ${y + 18}px, 0)`,
          }}
          className="fixed top-0 left-0 px-1.5 py-0.5 rounded bg-[#0a0a0f]/85 border border-cyan-400/40 font-mono text-[9px] tracking-wider text-cyan-300 uppercase"
        >
          {targetType === "button" ? "EXEC" : "LINK"}
        </div>
      )}
    </div>
  );
}
