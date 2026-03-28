"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionWrapper({ children, className, delay = 0, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} // smooth apple-like spring curve
      className={cn("w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10", className)}
    >
      {children}
    </motion.section>
  );
}
