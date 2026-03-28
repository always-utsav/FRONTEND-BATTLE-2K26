"use client";

import { Priority } from "@/data/announcements";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, Clock } from "lucide-react";

interface AnnouncementCardProps {
  id: string;
  title: string;
  date: string;
  priority: Priority;
  description: string;
  index: number;
}

export default function AnnouncementCard({ title, date, priority, description, index }: AnnouncementCardProps) {
  const colors = {
    Urgent: "bg-red-50 text-red-600 border-red-200",
    Important: "bg-amber-50 text-amber-600 border-amber-200",
    New: "bg-cyan-50 text-cyan-600 border-cyan-200",
  };

  const ringColors = {
    Urgent: "ring-red-100",
    Important: "ring-amber-100",
    New: "ring-cyan-100",
  };

  const blobColors = {
    Urgent: "bg-red-500",
    Important: "bg-amber-500",
    New: "bg-cyan-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-12 md:gap-8 items-center border-l border-slate-200/50 md:border-l-0 ml-3 md:ml-0 relative py-6 group/timeline">
        
        {/* Date / Desktop Timeline Left */}
        <div className="hidden md:block col-span-3 text-right group-hover/timeline:text-blue-500 transition-colors">
          <p className="font-bold text-slate-800 tracking-tight">{title.split(" ")[0]} {title.split(" ")[1]}</p>
          <p className="text-sm text-slate-400 font-medium flex items-center justify-end gap-1.5 mt-1.5">
            <Clock size={14} /> {date}
          </p>
        </div>

        {/* Timeline Node */}
        <div className="absolute left-[-5px] top-10 md:relative md:col-span-1 flex justify-center h-full items-center">
          <div className="h-full w-px bg-slate-200/50 hidden md:block absolute left-1/2 -top-1/2 -z-10" />
          <div className="h-full w-px bg-slate-200/50 hidden md:block absolute left-1/2 top-1/2 -z-10" />
          <div className={cn("w-3 h-3 rounded-full ring-4 relative z-10 transition-transform duration-300 group-hover/timeline:scale-125", blobColors[priority], ringColors[priority])} />
        </div>

        {/* Mobile Date */}
        <p className="md:hidden text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1 group-hover/timeline:text-blue-500 transition-colors">
          <Clock size={12} /> {date}
        </p>

        {/* Card Content */}
        <div className="md:col-span-8 group/card">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover/card:text-blue-600 transition-colors tracking-tight">
                  {title}
                </h3>
                <span className={cn("text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border", colors[priority])}>
                  {priority}
                </span>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5">
                {description}
              </p>
              <button className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover/card:gap-2 transition-all">
                Read Details <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
