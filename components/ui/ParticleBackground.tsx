"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.35,
            },
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? ["#6366f1", "#06b6d4", "#8b5cf6"] : ["#4f46e5", "#0891b2"],
        },
        links: {
          color: theme === "dark" ? "#6366f1" : "#6366f1",
          distance: 145,
          enable: true,
          opacity: theme === "dark" ? 0.18 : 0.14,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 55,
        },
        opacity: {
          value: theme === "dark" ? 0.5 : 0.35,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!init) return null;

  return (
    <Particles
      id="mission-particles"
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
