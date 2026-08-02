"use client";

import { useEffect, useRef, useState } from "react";
import SystemWindow from "./SystemWindow";

type Phase = "idle" | "waiting" | "go" | "early" | "result";

export default function ReflexGame() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reaction, setReaction] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const startRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function start() {
    setPhase("waiting");
    setReaction(null);
    const delay = 1200 + Math.random() * 2200;
    timeoutRef.current = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("go");
    }, delay);
  }

  function handleTap() {
    if (phase === "idle" || phase === "result" || phase === "early") {
      start();
      return;
    }
    if (phase === "waiting") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setPhase("early");
      return;
    }
    if (phase === "go") {
      const time = Math.round(performance.now() - startRef.current);
      setReaction(time);
      setBest((b) => (b === null ? time : Math.min(b, time)));
      setPhase("result");
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const rankOf = (ms: number) => {
    if (ms < 220) return "S — Refleks Cultivator Tingkat Dewa";
    if (ms < 300) return "A — Kencang Banget";
    if (ms < 400) return "B — Lumayan";
    return "C — Santai Amat Hidup Lu";
  };

  return (
    <SystemWindow label="Side Quest // Uji Refleks">
      <p className="mb-5 text-sm text-smoke">
        Tunggu kotak berubah jadi ungu terang, terus tap secepat mungkin.
        Jangan gaspol duluan.
      </p>

      <button
        onClick={handleTap}
        className={`flex h-40 w-full items-center justify-center rounded-sm border transition-colors sm:h-48 ${
          phase === "go"
            ? "border-violet-bright bg-violet/90"
            : phase === "early"
            ? "border-magenta bg-magenta/20"
            : "border-panelEdge bg-panel"
        }`}
      >
        <span className="tag px-4 text-center text-sm text-bone">
          {phase === "idle" && "Tap untuk mulai"}
          {phase === "waiting" && "Tunggu..."}
          {phase === "go" && "TAP SEKARANG"}
          {phase === "early" && "Kecepetan. Tap buat ulang."}
          {phase === "result" &&
            reaction !== null &&
            `${reaction} ms — tap untuk coba lagi`}
        </span>
      </button>

      {phase === "result" && reaction !== null && (
        <div className="mt-5 space-y-1 border-t border-panelEdge pt-4">
          <div className="tag text-xs text-violet-bright">
            Rank: {rankOf(reaction)}
          </div>
          {best !== null && (
            <div className="tag text-xs text-smoke">
              Rekor terbaik sesi ini: {best} ms
            </div>
          )}
        </div>
      )}
    </SystemWindow>
  );
}
