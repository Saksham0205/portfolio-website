"use client";

import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";

interface CertificationsProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const certifications = [
  {
    title: "Using AI as Your SEO Assistant",
    organizer: "LinkedIn",
    date: "Sep 2024",
    link: "https://www.linkedin.com/learning/certificates/036c0f1d409f3cd48f5c8b6d1870024236d5c58739b64b7a5205c59f01572dec",
  },
  {
    title: "IIT Bombay Eureka Zonalist",
    organizer: "E-Cell, IIT Bombay",
    date: "May 2024",
    link: "https://drive.google.com/file/d/1ZrnSs5wwx0y-m7MaPh0u9Hv3Owu5yZpi/view",
  },
  {
    title: "Survive AI First Position",
    organizer: "Shaheed Bhagat Singh College, DU",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/19fRDRQxMv1w1QTCcxpMSHyRxaV9_DSWc/view",
  },
  {
    title: "Pitch Your Idea",
    organizer: "MAIT, Delhi",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1JcPTqJdakrr9uGTxfK7IFi05fo3R3ywd/view",
  },
  {
    title: "Flutter Development Bootcamp with Dart",
    organizer: "Udemy",
    date: "Sep 2023",
    link: "https://drive.google.com/file/d/1jFs7ppm_BaJGSaucVTJlCmmjuL-rf7ia/view",
  },
  {
    title: "National Finalist @VENTURE VERSE",
    organizer: "SSCBS INNOVATION (SIIF)",
    date: "Sep 2023",
    link: "https://drive.google.com/file/d/1BQFGEkd8TwDU9Eb_9A83cHDd89Shgf91/view",
  },
  {
    title: "Software Engineering Job Simulation",
    organizer: "Forage - NY Jobs CEO Council",
    date: "Aug 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/New%20York%20Jobs%20CEO%20Council/7GYaMYxc6zEcbpjYL_New%20York%20Jobs%20CEO%20Council_FwPf2gJfAKBBviuhC_1693485333805_completion_certificate.pdf",
  },
  {
    title: "Mastercard Cybersecurity Virtual Experience",
    organizer: "Forage",
    date: "Apr 2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_FwPf2gJfAKBBviuhC_1649418681499_completion_certificate.pdf",
  },
];

export function Certifications({ addToRefs }: CertificationsProps) {
  return (
    <section id="certifications" ref={addToRefs} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] md:text-5xl">
            Certifications
          </h2>
          <span className="label">06 / Credentials</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.05}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-surface/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {cert.date}
                    </span>
                    <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="mt-4 font-sans font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <div className="mt-6 border-t border-border/60 pt-3">
                  <span className="label text-muted-foreground block truncate">
                    {cert.organizer}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
