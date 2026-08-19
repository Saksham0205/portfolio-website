"use client";

import { Reveal } from "@/components/Reveal";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ExperienceProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const experienceData = [
  {
    company: "OmniDimension",
    url: "https://omnidim.io",
    role: "Product Engineer — Voice AI Agents",
    period: "May 2026 — Present",
    year: "2026",
    place: "Remote · US",
    points: [
      "Work directly with customers and internal teams to scope agent requirements, design advanced workflows, and deliver new capabilities.",
      "Own the loop from conversation design to analytics — prompt systems, tool calling, and evaluation of live agent behaviour.",
      "Architect and refine high-reliability conversational voice agents and multi-channel LLM workflows.",
    ],
    tech: ["Voice AI", "LLMs", "Prompt Engineering", "Python", "REST APIs", "Analytics pipelines"],
  },
  {
    company: "Spyne",
    url: "https://www.spyne.ai/",
    role: "SDE Intern",
    period: "May 2025 — Jan 2026",
    year: "2025",
    place: "Gurgaon, India",
    points: [
      "Architected a multi-channel AI outbound campaign engine from scratch — automated voice-call workflows built with Sales and Ops, specced end-to-end and launched to production.",
      "Delivered 5+ production-grade products within six months, accelerating cross-team delivery cycles.",
      "Built 10+ internal dashboards on MongoDB aggregation pipelines and REST APIs, giving leadership real-time operational visibility.",
      "Designed and deployed an AI-enabled call insights platform analyzing 100+ sales/service calls weekly with automated scoring.",
    ],
    featuredBuild: {
      title: "Conversational AI for Car Dealers",
      summary: "Virtual sales assistant handling after-hours inbound calls — understands customer intent, answers inventory queries, and schedules appointments autonomously with a human-like voice.",
      pipeline: ["Inbound Call", "Speech-to-Text", "LLM Intent", "Response Gen", "Text-to-Speech", "Action"],
      integrations: ["Vapi", "ElevenLabs"],
    },
    tech: ["Next.js", "Nest.js", "MongoDB", "REST APIs", "CI/CD", "AI Voice Workflows"],
  },
  {
    company: "Ajnabee",
    url: "https://play.google.com/store/apps/details?id=com.ajnabee.ajnabee",
    role: "Founder & Lead Engineer",
    period: "Jan 2024 — May 2025",
    year: "2024",
    place: "New Delhi, India",
    points: [
      "Founded and directed a 10-member engineering and operations team building a women-first salon booking ecosystem targeting 3.3M+ users across Delhi-NCR.",
      "Built the entire Flutter app from the ground up — screen flows, Bloc state management, and backend API integration.",
      "Implemented robust UPI payment infrastructure, reducing payment failures by 30%.",
    ],
    tech: ["Flutter", "Firebase", "Node.js", "Firestore", "GCP", "REST APIs", "Bloc"],
  },
];

export function Experience({ addToRefs }: ExperienceProps) {
  return (
    <section id="experience" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Where I've built
          </h2>
          <span className="label">02 / Experience</span>
        </div>

        <div className="space-y-24">
          {experienceData.map((role) => (
            <Reveal key={role.company}>
              <article className="grid gap-8 md:grid-cols-12">
                {/* Year Indicator */}
                <div className="md:col-span-3">
                  <div className="md:sticky md:top-28">
                    <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-foreground/80 md:font-normal md:text-surface-2">
                      {role.year}
                    </span>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {role.period}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                      {role.role}
                    </h3>
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-primary flex items-center gap-2">
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline inline-flex items-center gap-1"
                      >
                        {role.company}
                        <ExternalLink className="size-3" />
                      </a>
                    ) : (
                      role.company
                    )}
                    <span className="text-muted-foreground"> · {role.place}</span>
                  </p>

                  <ul className="mt-6 space-y-4">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-4 text-foreground/80">
                        <span className="mt-2 h-px w-6 shrink-0 bg-primary/70" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Featured Build Callout if Spyne */}
                  {role.featuredBuild && (
                    <div className="mt-8 border-l-2 border-primary/50 bg-surface/30 p-6 backdrop-blur-sm space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="label text-primary">Featured Build</span>
                        <span className="text-muted-foreground text-xs">·</span>
                        <span className="font-medium text-sm text-foreground">{role.featuredBuild.title}</span>
                      </div>
                      <p className="text-sm text-foreground/75 leading-relaxed">
                        {role.featuredBuild.summary}
                      </p>

                      {/* Pipeline */}
                      <div className="pt-2">
                        <span className="label block mb-2">Workflow Pipeline</span>
                        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                          {role.featuredBuild.pipeline.map((step, idx, arr) => (
                            <div key={step} className="flex items-center gap-1.5">
                              <span className="border border-border/80 bg-background/60 px-2.5 py-1 text-foreground/90 rounded-sm">
                                {step}
                              </span>
                              {idx < arr.length - 1 && (
                                <span className="text-primary/70">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Integrations */}
                      <div className="pt-1 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        <span className="label">Engineered via</span>
                        {role.featuredBuild.integrations.map((tag) => (
                          <span
                            key={tag}
                            className="border border-primary/30 text-primary px-2 py-0.5 text-[10px] uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
