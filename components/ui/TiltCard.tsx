"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`h-full [perspective:1200px] ${className}`}
      whileHover={{ rotateX: -4, rotateY: 5, translateZ: 12 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
