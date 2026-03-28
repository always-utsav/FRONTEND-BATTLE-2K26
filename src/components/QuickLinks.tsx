"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, Trophy, ClipboardList, ArrowRight } from "lucide-react";

export default function QuickLinks() {
  const links = [
    { title: "Syllabus", desc: "View all latest academic schemes", icon: FileText, color: "text-blue-600", bg: "bg-blue-50/50" },
    { title: "Exam Timetable", desc: "Mid Sem and End Sem schedules", icon: Calendar, color: "text-cyan-600", bg: "bg-cyan-50/50" },
    { title: "Results", desc: "Semester wise result portal", icon: Trophy, color: "text-emerald-600", bg: "bg-emerald-50/50" },
    { title: "Forms", desc: "Challan and required documents", icon: ClipboardList, color: "text-indigo-600", bg: "bg-indigo-50/50" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-30 max-w-7xl mx-auto px-6 -mt-24">
      {links.map((link, idx) => (
        <motion.div
          key={link.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
          className="group cursor-pointer bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
        >
          {/* subtle radial gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className={`${link.bg} ${link.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
            <link.icon size={26} strokeWidth={2.5} />
          </div>
          <h3 className="font-bold text-slate-900 text-xl tracking-tight mb-2 relative z-10">{link.title}</h3>
          <p className="text-slate-500 text-sm font-medium mb-4 relative z-10">{link.desc}</p>
          
          <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10 relative">
            Access <ArrowRight size={16} className="ml-1" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
