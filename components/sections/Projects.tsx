"use client";

import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const projectsData = [
  {
    name: "Ajnabee",
    index: "01",
    summary:
      "One-stop solution for hassle-free salon booking for women. Explore top salons, book appointments instantly, and manage bookings with real-time availability and ratings.",
    metric: { value: "3.3M+", label: "Target Userbase Delhi-NCR" },
    tech: ["Flutter", "Firebase", "REST APIs", "UPI Payments"],
    link: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ajnabee.ajnabee" },
    screenshots: [
      "https://play-lh.googleusercontent.com/_ZthzOweDAIPnn9x7dl1aE1zhfHq54uYnhonoBWca8T2wFIy7ZRdG0yrepGgLf5fx5Y=w526-h296-rw",
      "https://play-lh.googleusercontent.com/e-XpjOzK0K9dUpsZR5vcXIPjJ5n5gG9PN3omEBR8qCRG7FTzbjh2uQ0HK8ibzSAOu3DP=w526-h296-rw",
      "https://play-lh.googleusercontent.com/p1Co7eO5hJCD0CXRT8UYK0YM8CmjvgS71LsjtURdNrKnUhkvSoP460gSMUtwg2dSY2I=w526-h296-rw",
      "https://play-lh.googleusercontent.com/owDGmGIRDoUTEZ2EcHc94tOxSdlIJn2jmmGp-_b5scSs857xM_-sici3lqT3w0_ZO4a1=w526-h296-rw",
    ],
  },
  {
    name: "Ajnabee Partner",
    index: "02",
    summary:
      "The salon-side app handling bookings, payment collection, staff scheduling, and daily workflow automation. Improved operations efficiency by 40%.",
    metric: { value: "40%", label: "ops efficiency gain" },
    tech: ["Flutter", "Firebase", "Bloc", "REST APIs"],
    link: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ajnabeecorp.ajnabee_partner" },
    screenshots: [
      "https://play-lh.googleusercontent.com/B7_pbAzEiWn5RBs5ecjJDoq4A9Jy8UN5DwJHmbi4KjkJ4V9VccHShibPXvOED0L0e6I=w526-h296-rw",
      "https://play-lh.googleusercontent.com/NxWC1GsZEwcKJTeT2QNZrgCEj1qqbn8RIDGBhCfUsi4c94oESNBzK12VVRQSd_C6Z8k=w526-h296-rw",
      "https://play-lh.googleusercontent.com/vDmhF5-Ixf4Q5ZAEh-rTTqUB5E-DqNBIrB_aD1MG-4l4-buXxLy8KmYKp_ptZd7sgLY=w526-h296-rw",
    ],
  },
  {
    name: "Reswipe",
    index: "03",
    summary:
      "ML-powered resume-matching and recommendation engine with a swipe-based UX — recruiters and candidates matched in real-time. Boosted engagement by 50%.",
    metric: { value: "50%", label: "engagement lift" },
    tech: ["Flutter", "Firebase", "Machine Learning", "Recommendation Engine"],
    link: { label: "GitHub", url: "https://github.com/Saksham0205" },
    screenshots: [
      "/images/reswipe-1.jpg",
      "/images/reswipe-5.jpg",
      "/images/reswipe-6.jpg",
      "/images/reswipe-2.jpg",
    ],
  },
];

export function Projects({ addToRefs }: ProjectsProps) {
  return (
    <section id="projects" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Things I shipped
          </h2>
          <span className="label">03 / Projects</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <TiltCard>
                <div className="group flex h-full flex-col justify-between border border-border bg-surface/50 p-7 backdrop-blur-md transition-colors duration-500 hover:border-primary/60">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="label">Project {project.index}</span>
                      {project.link && (
                        <a
                          href={project.link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-1"
                        >
                          {project.link.label} <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75 font-sans">
                      {project.summary}
                    </p>

                    {/* Screenshot Preview Strip */}
                    <div className="mt-5 overflow-hidden rounded-sm border border-border/80 bg-background/50 p-2">
                      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x">
                        {project.screenshots.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={`${project.name} preview ${idx + 1}`}
                            className="h-28 w-auto object-contain rounded-sm snap-start bg-background/80 shrink-0 border border-border/40"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-end gap-3 border-t border-border pt-4">
                      <span className="font-display text-4xl font-extrabold text-primary">
                        {project.metric.value}
                      </span>
                      <span className="pb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        {project.metric.label}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
