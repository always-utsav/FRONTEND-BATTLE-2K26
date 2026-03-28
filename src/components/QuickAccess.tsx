"use client";

import { FileText, Bell, Trophy, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { id: "syllabus", icon: FileText, label: "Syllabus", style: "border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white hover:border-blue-600" },
  { id: "notices", icon: Bell, label: "Notices", style: "border-cyan-200 text-cyan-600 bg-cyan-50 hover:bg-cyan-600 hover:text-white hover:border-cyan-600" },
  { id: "results", icon: Trophy, label: "Results", style: "border-emerald-200 text-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white hover:border-emerald-600" },
];

export default function QuickAccess() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed right-6 bottom-12 z-50 flex flex-col gap-4 hidden md:flex">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative flex items-center justify-end group cursor-pointer"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === item.id && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 5, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-[4.5rem] bg-white/90 backdrop-blur-xl py-2 px-4 rounded-xl shadow-lg border border-white font-semibold text-slate-800 tracking-tight whitespace-nowrap flex items-center gap-2"
              >
                {item.label}
                <ChevronRight size={14} className="text-slate-400" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 border backdrop-saturate-150",
              item.style
            )}
          >
            <item.icon size={24} strokeWidth={2.5} />
          </motion.button>
        </div>
      ))}
    </div>
  );
}
