"use client";

import { RefObject } from "react";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { AnimatedHeading, Reveal } from "@/components/Reveal";

interface HeroProps {
  heroRef?: RefObject<HTMLDivElement | null>;
}

export function Hero({ heroRef }: HeroProps) {
  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-32 pb-20 md:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Status Badge */}
        <div className="mb-10 flex items-center gap-3">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/70" />
            <span className="size-2 rounded-full bg-primary" />
          </span>
          <span className="label">
            Currently at OmniDimension - Remote (US)
          </span>
        </div>

        {/* Big Display Name */}
        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em]">
          <AnimatedHeading text="Saksham" className="block" />
          <AnimatedHeading text="Chauhan" className="block text-primary" />
        </h1>

        {/* Tagline & Key Highlights Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <Reveal delay={0.5} className="md:col-span-6">
            <p className="text-balance text-lg leading-relaxed text-foreground/85 md:text-xl">
              I build conversational AI systems, voice agents, campaign engines, and full-stack products. SDE Intern at Spyne and Founder of Ajnabee.
            </p>
          </Reveal>
          <Reveal delay={0.62} className="md:col-span-4 md:col-start-9">
            <dl className="space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="text-right font-medium">Product Engineer</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="text-right font-medium">Voice AI · LLM workflows</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Shipped</dt>
                <dd className="text-right font-medium">5+ products · 10+ dashboards</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Action CTAs */}
        <Reveal delay={0.75} className="mt-14 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            See the work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Get in touch
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1lwalw48e_vPbcIYh1iGyvzrhXJyFaxri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <FileText className="size-3.5" />
            Resume
          </a>
        </Reveal>

        {/* Social Quick Links */}
        <Reveal delay={0.85} className="mt-8 flex items-center gap-6">
          <a
            href="https://github.com/Saksham0205"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saksham-chauhan-252003"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
          <a
            href="mailto:saksham252003@gmail.com"
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Mail className="size-4" />
            Email
          </a>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="label">Scroll</span>
      </div>
    </section>
  );
}
