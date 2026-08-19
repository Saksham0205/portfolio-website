"use client";

import { Reveal } from "@/components/Reveal";

interface LeadershipProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const leadershipRoles = [
  {
    role: "Flutter Mentor",
    org: "GDG MAIT",
    period: "Sept 2024 — Apr 2025",
    desc: "Trained 100+ developers across structured Flutter workshops and hands-on building sessions.",
  },
  {
    role: "P.R Head",
    org: "TechCom, MAIT",
    period: "Oct 2023 — May 2026",
    desc: "Managed outreach and execution for HackWithMAIT and national ML/Blockchain events with 1000+ participants.",
  },
];

export function Leadership({ addToRefs }: LeadershipProps) {
  return (
    <section id="leadership" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Community & Leadership
          </h2>
          <span className="label">07 / Leadership</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadershipRoles.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1}>
              <div className="h-full border border-border bg-surface/40 p-8 backdrop-blur-sm transition-colors hover:border-primary/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold">{item.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  {item.org}
                </p>
                <p className="mt-6 text-sm md:text-base leading-relaxed text-foreground/80 font-sans">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
