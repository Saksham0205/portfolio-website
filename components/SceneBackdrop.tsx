"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WaveScene = dynamic(() => import("./three/WaveScene"), {
  ssr: false,
});

export function SceneBackdrop() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      setEnabled(true);
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base dark canvas backdrop */}
      <div className="absolute inset-0 bg-background" />

      {/* Ambient bloom and primary accent glow orbs */}
      <div className="absolute -top-40 left-1/2 h-[45rem] w-[45rem] -translate-x-1/2 rounded-full bg-bloom/25 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] translate-x-1/3 rounded-full bg-primary/15 blur-[150px]" />

      {/* 3D Wave Scene */}
      {enabled ? (
        <div className="pointer-events-auto absolute inset-0">
          <WaveScene />
        </div>
      ) : (
        <StaticWaveFallback />
      )}

      {/* Subtle depth gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/80" />
    </div>
  );
}

function StaticWaveFallback() {
  const bars = Array.from({ length: 48 });
  return (
    <div className="absolute inset-x-0 top-1/3 flex h-40 items-end justify-center gap-1 px-6 opacity-40">
      {bars.map((_, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-primary/60"
          style={{ height: `${(20 + Math.abs(Math.sin(i * 0.6)) * 78).toFixed(2)}%` }}
        />
      ))}
    </div>
  );
}
