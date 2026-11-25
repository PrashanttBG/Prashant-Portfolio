"use client";

import { useEffect, useState } from "react";

interface TerminalTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function TerminalText({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseMs = 1600,
}: TerminalTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex] || "";
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(
        () => {
          const nextLength = text.length + (isDeleting ? -1 : 1);
          setText(current.slice(0, nextLength));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="font-mono text-cyan-400">
      <span className="text-indigo-400 mr-2">&gt;</span>
      {text}
      <span className="inline-block w-2 h-5 ml-1 align-middle bg-cyan-400 animate-pulse" />
    </span>
  );
}
