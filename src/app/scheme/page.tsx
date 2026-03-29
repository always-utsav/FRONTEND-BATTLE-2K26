"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import { Search, Filter, FileText, Download, ChevronRight, BookOpen, GraduationCap, Building2 } from "lucide-react";

const schemes = [
  { id: 1, department: "Computer Science & Engineering", batch: "2023-27", semester: "III & IV", title: "Flexible Curriculum Scheme", date: "2024-05-12" },
  { id: 2, department: "Information Technology", batch: "2023-27", semester: "III & IV", title: "Outcome Based Education Scheme", date: "2024-05-10" },
  { id: 3, department: "Electronics Engineering", batch: "2022-26", semester: "V & VI", title: "Modernized Technical Scheme", date: "2024-04-15" },
  { id: 4, department: "Mechanical Engineering", batch: "2023-27", semester: "I & II", title: "Core Engineering Foundation", date: "2023-09-20" },
  { id: 5, department: "Civil Engineering", batch: "2022-26", semester: "V & VI", title: "Structural Specialization Scheme", date: "2024-04-02" },
  { id: 6, department: "Electrical Engineering", batch: "2021-25", semester: "VII & VIII", title: "Project Based Learning Scheme", date: "2024-03-28" },
  { id: 7, department: "Computer Science & Engineering", batch: "2024-28", semester: "I & II", title: "AI-First Curriculum", date: "2024-08-01" },
];

export default function SchemePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");

  const departments = ["All Departments", ...Array.from(new Set(schemes.map(s => s.department)))];

  const filteredSchemes = schemes.filter(s => {
    const matchesSearch = s.department.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         s.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All Departments" || s.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <main className="bg-slate-50 min-h-screen pt-24">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-600/20 shrink-0">
              <FileText className="text-white" size={36} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">Academic Schemes</h1>
              <p className="text-lg text-slate-500 font-medium max-w-2xl">Access official Schemes of Study and Examination (Syllabus) for all departments and batches.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <SectionWrapper className="py-12 md:py-16">
        {/* Controls */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-12 bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by department or scheme title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-5 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800"
            />
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl">
              <Filter size={18} className="text-slate-400" />
              <select 
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-transparent focus:outline-none font-bold text-slate-700 text-sm appearance-none cursor-pointer pr-4"
              >
                {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
              </select>
            </div>
            <div className="bg-blue-50 text-blue-600 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border border-blue-100 shadow-sm shadow-blue-600/5">
              {filteredSchemes.length} FOUND
            </div>
          </div>
        </div>

        {/* Table View */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Department & Scheme</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Batch</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Semester</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <AnimatePresence mode="popLayout">
                  {filteredSchemes.map((scheme) => (
                    <motion.tr 
                      key={scheme.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      layout
                      className="group hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-8 py-8">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                            {scheme.department.includes("Computer") || scheme.department.includes("Information") ? <GraduationCap size={20} /> : <Building2 size={20} />}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg tracking-tight mb-1 group-hover:text-blue-600 transition-colors">{scheme.title}</h4>
                            <p className="text-slate-500 font-medium text-sm flex items-center gap-2">
                              {scheme.department}
                              <span className="w-1 h-1 bg-slate-300 rounded-full" />
                              Updated {new Date(scheme.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm border border-slate-200">
                          {scheme.batch}
                        </span>
                      </td>
                      <td className="px-8 py-8">
                        <span className="font-bold text-slate-600 text-lg">{scheme.semester}</span>
                      </td>
                      <td className="px-8 py-8">
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all">
                          <Download size={18} />
                          DOWNLOAD
                          <ChevronRight size={16} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          
          {filteredSchemes.length === 0 && (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No schemes found</h3>
              <p className="text-slate-500 font-medium">Try adjusting your search or department filter.</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* Footer Info */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" size={20} />
            <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">Academic Integrity Portal</span>
          </div>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">&copy; Madhav Institute of Technology & Science, Gwalior</p>
        </div>
      </footer>
    </main>
  );
}
