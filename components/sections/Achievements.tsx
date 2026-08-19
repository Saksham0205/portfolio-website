"use client";

import { Reveal } from "@/components/Reveal";

interface AchievementsProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const achievementsData = [
  {
    title: "IIIT Delhi 25 Under 25 — Winner",
    year: "2023",
    detail:
      "Selected as one of Delhi's top young innovators under 25, and won Best Startup Idea at age 20 for building Ajnabee — a scalable salon booking ecosystem for 3.3M+ users.",
  },
  {
    title: "Survive-AI, Enspire'23 — Winner",
    year: "2023",
    detail:
      "Secured 1st place at Survive AI (Young Entrepreneurs Society, University of Delhi). Built an AI system that outperformed 100+ competing teams.",
  },
  {
    title: "Pitch Your Idea Summit — Winner",
    year: "2023",
    detail:
      "Secured 3rd place pitching Ajnabee to a panel of 10+ active angel and venture investors at MAIT's Pitch Your Idea Summit.",
  },
];

export function Achievements({ addToRefs }: AchievementsProps) {
  return (
    <section id="achievements" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Recognition & Awards
          </h2>
          <span className="label">05 / Awards</span>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {achievementsData.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="group py-8 transition-colors hover:bg-surface/30 px-4 -mx-4 rounded-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary font-display">
                    {a.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{a.year}</span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-foreground/75 font-sans max-w-3xl">
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}