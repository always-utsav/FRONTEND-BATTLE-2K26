"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const placeholders = [
  "Search syllabus...",
  "Search exam results...",
  "Search department notices...",
  "Lookup faculty...",
];

export default function SearchBar({ isScrolled = true }: { isScrolled?: boolean }) {
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (isFocused) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isFocused]);

  return (
    <div className="relative group flex items-center">
      <motion.div
        animate={{ width: isFocused ? 320 : 220, backgroundColor: isFocused ? "#ffffff" : isScrolled ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn(
          "flex items-center backdrop-blur-xl border rounded-2xl overflow-hidden transition-colors shadow-sm relative h-11",
          isFocused ? "border-cyan-400 shadow-[0_0_15px_rgba(0,168,232,0.15)]" : isScrolled ? "border-slate-200/60 hover:border-slate-300 hover:bg-white/90" : "border-white/20 hover:bg-white/20 hover:border-white/40"
        )}
      >
        <div className={cn("pl-4 pr-3 transition-colors duration-300", isFocused ? "text-cyan-500" : isScrolled ? "text-slate-400" : "text-white/70")}>
          <Search size={18} strokeWidth={2.5} />
        </div>
        
        <div className="relative w-full h-full flex items-center">
          <AnimatePresence mode="wait">
            {!isFocused && (
              <motion.div
                key={placeholderIndex}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                className={cn("absolute left-0 text-sm font-medium pointer-events-none transition-colors", isScrolled ? "text-slate-400" : "text-white/80")}
              >
                {placeholders[placeholderIndex]}
              </motion.div>
            )}
          </AnimatePresence>
          <input
            type="text"
            className={cn("w-full h-full text-sm bg-transparent outline-none font-medium z-10 transition-colors", isFocused || isScrolled ? "text-slate-800 placeholder:text-slate-400" : "text-white placeholder:text-white/60")}
            placeholder={isFocused ? "Type something..." : ""}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </motion.div>
    </div>
  );
}
