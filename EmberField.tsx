"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  alpha: number;
  hue: number;
};

export default function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const count = width < 640 ? 26 : 46;
    const embers: Ember[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.4 + 0.15,
      drift: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 265 : 290,
    }));

    let raf = 0;

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const e of embers) {
        ctx!.beginPath();
        ctx!.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${e.hue}, 80%, 70%, ${e.alpha})`;
        ctx!.fill();

        if (!prefersReduced) {
          e.y -= e.speed;
          e.x += e.drift;
          if (e.y < -10) {
            e.y = height + 10;
            e.x = Math.random() * width;
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
