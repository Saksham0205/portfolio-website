"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

const EASE = [0.19, 1, 0.22, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduced = useReducedMotion();
  const shown = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? shown : { opacity: 0, y: 28, filter: "blur(6px)" }}
      animate={reduced || inView ? shown : { opacity: 0, y: 28, filter: "blur(6px)" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  const chars = Array.from(text);
  const shown = { opacity: 1, y: 0, rotate: 0 };

  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          aria-hidden="true"
          className="inline-block"
          initial={reduced ? shown : { opacity: 0, y: "0.85em", rotate: 4 }}
          animate={shown}
          transition={{
            duration: 0.8,
            delay: reduced ? 0 : 0.1 + i * 0.035,
            ease: EASE,
          }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}
