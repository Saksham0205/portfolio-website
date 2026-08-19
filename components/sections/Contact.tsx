"use client";

import { Reveal } from "@/components/Reveal";

interface ContactProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

export function Contact({ addToRefs }: ContactProps) {
  return (
    <section id="contact" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Get in touch
          </h2>
          <span className="label">08 / Contact</span>
        </div>

        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.04em]">
            Let's build
            <br />
            <span className="text-primary">something loud.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <span className="label">Email</span>
            <a
              href="mailto:saksham252003@gmail.com"
              className="mt-3 block font-mono text-sm text-foreground/90 hover:text-primary transition-colors"
            >
              saksham252003@gmail.com
            </a>
          </div>

          <div>
            <span className="label">Phone</span>
            <a
              href="tel:+918376063400"
              className="mt-3 block font-mono text-sm text-foreground/90 hover:text-primary transition-colors"
            >
              +91-8376063400
            </a>
          </div>

          <div>
            <span className="label">Elsewhere</span>
            <div className="mt-3 flex flex-col gap-2 font-mono text-sm text-foreground/90">
              <a
                href="https://linkedin.com/in/saksham-chauhan-252003"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Saksham0205"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
