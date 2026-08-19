"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { MagneticCursor } from "@/components/MagneticCursor";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div className="relative min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Scroll Progress Bar at top */}
      <motion.div
        className="fixed left-0 top-0 z-[65] h-px w-full origin-left bg-primary pointer-events-none"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* 3D WebGL Particle Wave Sculpture & Ambient Glows */}
      <SceneBackdrop />

      {/* Custom Spring Magnetic Cursor */}
      <MagneticCursor />

      {/* Site Header */}
      <Navigation />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
