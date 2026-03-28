"use client";

import { useState } from "react";
import { branches, years, schemes } from "@/data/academicsData";
import { Download, FileText, SearchX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AcademicsSection() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0].id);
  const [selectedYear, setSelectedYear] = useState(years[0].id);

  const filteredSchemes = schemes.filter(
    (s) => s.branchId === selectedBranch && s.yearId === selectedYear
  );

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white relative z-10 overflow-hidden">
      {/* Decorative blobs inside card */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Department
            </h4>
            <div className="flex flex-col gap-2 relative">
              {branches.map(br => (
                <button
                  key={br.id}
                  onClick={() => setSelectedBranch(br.id)}
                  className={cn(
                    "text-left px-5 py-3.5 rounded-2xl transition-all duration-300 font-semibold text-sm",
                    selectedBranch === br.id 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 translate-x-2" 
                      : "bg-transparent text-slate-600 hover:bg-slate-100 hover:translate-x-1"
                  )}
                >
                  {br.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Academic Year
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {years.map(yr => (
                <button
                  key={yr.id}
                  onClick={() => setSelectedYear(yr.id)}
                  className={cn(
                    "px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm text-center border",
                    selectedYear === yr.id 
                      ? "bg-blue-50 text-blue-700 border-blue-200 ring-2 ring-blue-500/20" 
                      : "bg-white text-slate-600 border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                  )}
                >
                  {yr.id}{['st','nd','rd','th'][parseInt(yr.id)-1]} Year
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Available Documents</h3>
              <p className="text-slate-500 font-medium mt-2 flex items-center gap-2">
                Showing resources for <strong className="text-slate-800">{branches.find(b => b.id === selectedBranch)?.short}</strong> &bull; Year {selectedYear}
              </p>
            </div>
            <div className="hidden sm:flex text-sm font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-full">
              {filteredSchemes.length} Results
            </div>
          </div>

          <div className="grid gap-4 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {filteredSchemes.length > 0 ? (
                filteredSchemes.map((scheme, i) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    key={scheme.id} 
                    className="group p-5 sm:p-6 rounded-3xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-all flex sm:items-center items-start gap-5 cursor-pointer flex-col sm:flex-row"
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 p-4 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FileText size={28} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors text-lg tracking-tight mb-1">{scheme.title}</h4>
                      <p className="text-sm font-medium text-slate-400">{scheme.date} &bull; PDF Document</p>
                    </div>
                    <button className="bg-slate-50 w-full sm:w-auto px-6 py-3 sm:p-4 rounded-xl text-slate-500 font-semibold group-hover:text-white group-hover:bg-blue-600 transition-colors shrink-0 flex items-center justify-center gap-2">
                      <span className="sm:hidden">Download</span>
                      <Download size={20} strokeWidth={2.5} />
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-24 text-center bg-slate-50/50 rounded-3xl border border-slate-200 border-dashed col-span-full flex flex-col items-center justify-center h-full"
                >
                  <div className="bg-white p-5 rounded-full shadow-sm mb-4 text-slate-300">
                    <SearchX size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 tracking-tight mb-2">No documents found</h3>
                  <p className="text-slate-500 font-medium max-w-sm">We couldn't find any resources matching the selected department and academic year.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
