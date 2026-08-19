"use client";

import { Reveal } from "@/components/Reveal";

interface AboutProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

export function About({ addToRefs }: AboutProps) {
  return (
    <section id="about" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            About Me
          </h2>
          <span className="label">01 / Profile</span>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-sans">
                I'm a B.Tech Computer Science student from Maharaja Agrasen Institute of Technology, passionate about building products that make a real difference.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-foreground/75 font-sans">
                Currently Product Engineer at OmniDimension building conversational AI & voice agents. Previously at Spyne as an SDE Intern, where I architected AI campaign engines and shipped 5+ production products and 10+ dashboards.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-foreground/75 font-sans">
                As the founder of Ajnabee, I built a women-first salon booking ecosystem targeting 3.3M+ users across Delhi-NCR, leading a 10-member engineering and operations team.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <div className="border border-border bg-surface/50 p-8 backdrop-blur-md">
                <span className="label text-primary">Education</span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  Maharaja Agrasen Institute of Technology
                </h3>
                <p className="mt-2 text-foreground/80 text-sm">
                  B.Tech in Computer Science and Engineering
                </p>
                <div className="mt-6 flex justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                  <span>2022 — 2026</span>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
