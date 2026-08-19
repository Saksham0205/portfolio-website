"use client";

const items = [
  "Voice AI Agents",
  "LLM Workflows",
  "Flutter",
  "Next.js",
  "Nest.js",
  "MongoDB Pipelines",
  "Prompt Engineering",
  "GCP",
  "Product Engineering",
  "Python",
  "Dart",
  "TypeScript",
  "Docker",
  "REST APIs",
];

export function Marquee() {
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative border-y border-border bg-surface/40 py-5 backdrop-blur-sm overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee-x">
        {marqueeItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap px-8 font-mono text-sm uppercase tracking-tight text-foreground/70"
          >
            {item}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
