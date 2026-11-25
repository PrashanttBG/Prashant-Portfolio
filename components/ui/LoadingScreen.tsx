"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "> Initializing Mission Control...",
  "> Mounting Full-Stack Modules [Java · Spring Boot · React]...",
  "> Connecting GitHub Telemetry...",
  "> System Online. Welcome, Explorer.",
];

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("pb-boot-seen");
    if (alreadySeen) {
      setShow(false);
      return;
    }

    const interval = setInterval(() => {
      setLineCount((prev) => {
        if (prev >= BOOT_LINES.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 280);

    const timeout = setTimeout(() => {
      sessionStorage.setItem("pb-boot-seen", "1");
      setShow(false);
    }, 1450);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("pb-boot-seen", "1");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07070c] px-6"
        >
          <div className="w-full max-w-lg rounded-2xl border border-indigo-500/30 bg-[#0d0d16] p-6 shadow-[0_0_60px_rgba(99,102,241,0.25)]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  prashant@mission-control:~
                </span>
              </div>
              <button
                type="button"
                onClick={dismiss}
                className="font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                [skip]
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs sm:text-sm">
              {BOOT_LINES.slice(0, lineCount).map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    i === BOOT_LINES.length - 1 ? "text-cyan-400 font-semibold" : "text-emerald-400"
                  }
                >
                  {line}
                </motion.div>
              ))}
            </div>

            <div className="mt-5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
