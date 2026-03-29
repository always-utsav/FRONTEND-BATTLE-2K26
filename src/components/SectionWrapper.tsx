"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  variant?: "fade-up" | "slide-left" | "slide-right" | "pop-up";
}

export default function SectionWrapper({ 
  children, 
  className, 
  delay = 0, 
  id,
  variant = "fade-up" 
}: SectionWrapperProps) {
  const animations = {
    "fade-up": {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
    },
    "pop-up": {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      whileInView: { opacity: 1, scale: 1, y: 0 },
    }
  };

  const selectedAnimation = animations[variant];

  return (
    <motion.section
      id={id}
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10", className)}
    >
      {children}
    </motion.section>
  );
}

