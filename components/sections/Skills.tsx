"use client";

import { Reveal } from "@/components/Reveal";

interface SkillsProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const skillGroups = [
  {
    group: "Languages",
    items: ["Python", "Dart", "JavaScript", "TypeScript", "C/C++", "SQL"],
  },
  {
    group: "Backend & Databases",
    items: ["Node.js", "Nest.js", "REST APIs", "Firebase & Firestore", "MongoDB Pipelines", "Redis", "ClickHouse", "Docker"],
  },
  {
    group: "Frontend & Mobile",
    items: ["Flutter (Bloc / Provider)", "Next.js", "React", "Tailwind CSS", "Modern Web Architecture"],
  },
  {
    group: "AI & Voice Engineering",
    items: ["Conversational Voice Agents", "LLM Workflows & Tool Calling", "Prompt Engineering", "Vapi & ElevenLabs", "Evaluation & Analytics"],
  },
  {
    group: "Cloud & DevSecOps",
    items: ["Google Cloud Platform (GCP)", "AWS", "CI/CD Pipelines", "Git & GitHub Actions", "Postman & API Specs"],
  },
];

export function Skills({ addToRefs }: SkillsProps) {
  return (
    <section id="skills" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Tools of the trade
          </h2>
          <span className="label">04 / Stack</span>
        </div>

        {/* flex-wrap instead of a fixed grid: uneven last row just hugs left, no empty cell */}
        <div className="flex flex-wrap border-l border-t border-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.08} className="flex w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative w-full border-b border-r border-border bg-background p-8 transition-colors duration-500 hover:bg-surface/70">
                <span className="absolute left-0 top-0 h-0 w-[2px] bg-primary transition-all duration-500 group-hover:h-full" />
                <span className="label text-primary">{group.group}</span>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}