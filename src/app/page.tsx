"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";
import QuickAccess from "@/components/QuickAccess";
import SectionWrapper from "@/components/SectionWrapper";
import AcademicsSection from "@/components/AcademicsSection";
import AnnouncementCard from "@/components/AnnouncementCard";
import { announcements } from "@/data/announcements";
import { Code, Cpu, Zap, Activity, PenTool, Home, Phone, MapPin, Mail, ChevronRight, Send, ArrowRight, Library, Bell, Building2, GraduationCap, Grid, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Subtle Doodle SVG Component
const SpiralDoodle = ({ className }: { className?: string }) => (
  <motion.svg 
    width="80" height="40" viewBox="0 0 100 50" 
    className={`absolute text-blue-400 opacity-20 pointer-events-none ${className}`}
    initial="hidden" whileInView="visible" viewport={{ once: true }}
    stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"
  >
    <motion.path 
      d="M10,40 C30,10 60,10 80,30 S40,50 30,20 C30,10 50,5 70,20" 
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } } }} 
    />
  </motion.svg>
);

const LineDoodle = ({ className }: { className?: string }) => (
  <motion.svg 
    width="150" height="20" viewBox="0 0 150 20" 
    className={`absolute text-cyan-400 opacity-20 pointer-events-none ${className}`}
    initial="hidden" whileInView="visible" viewport={{ once: true }}
    stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"
  >
    <motion.path 
      d="M5,15 Q75,0 145,15" 
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeOut" } } }} 
    />
  </motion.svg>
);

export default function HomeLayout() {
  const [activeTab, setActiveTab] = useState("Academics");

  const stats = [
    { label: "Established", value: "1957" },
    { label: "NAAC Grade", value: "A++" },
    { label: "Alumni", value: "40k+" }
  ];

  const departments = [
    { name: "Computer Science", desc: "AI, Machine Learning & Software", icon: Code, color: "text-blue-500", bg: "bg-blue-50 border-blue-100" },
    { name: "Information Tech", desc: "Data Science & Cloud Computing", icon: Activity, color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100" },
    { name: "Electronics", desc: "VLSI, IoT & Communication", icon: Cpu, color: "text-cyan-500", bg: "bg-cyan-50 border-cyan-100" },
    { name: "Electrical", desc: "Power Systems & Renewable", icon: Zap, color: "text-amber-500", bg: "bg-amber-50 border-amber-100" },
    { name: "Mechanical", desc: "Robotics & Automobile", icon: PenTool, color: "text-red-500", bg: "bg-red-50 border-red-100" },
    { name: "Civil", desc: "Structural & Smart Cities", icon: Home, color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-100" },
  ];

  const resourceTabs = ["Academics", "Forms", "Results", "Placements", "Calendar"];

  return (
    <main className="bg-background relative overflow-x-clip pt-0 m-0 w-full min-h-screen">
      <Navbar />
      <QuickAccess />
      
      {/* Hero */}
      <section id="hero" className="relative">
        <HeroCanvas />
        <QuickLinks />
      </section>

      {/* About Section */}
      <div className="relative z-10 bg-background pt-10 rounded-t-[3rem]">
        <div className="bg-noise" />
        <div className="bg-radial-glow bg-radial-glow-blue -top-[20rem] -left-[20rem]" />
        
        <SectionWrapper id="about" className="pt-32 pb-24" variant="slide-right">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <SpiralDoodle className="-top-12 -left-12" />
              <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-6 bg-blue-50 w-max px-4 py-2 rounded-full border border-blue-100">
                <Building2 size={14} /> Since 1957
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] hero-text mb-8 relative">
                Legacy of Excellence. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Future of Innovation.</span>
                <LineDoodle className="-bottom-2 left-0" />
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12">
                Madhav Institute of Technology & Science, Gwalior (MITS), is a leading technical institution dedicated to shaping the engineers of tomorrow with a perfect blend of rich history and modern pedagogy.
              </p>
              
              <div className="grid grid-cols-3 gap-8 p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-white shadow-xl shadow-slate-200/50">
                {stats.map((s, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.5, type: "spring" }}
                    key={s.label} className="flex flex-col gap-2"
                  >
                    <span className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">{s.value}</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group w-full max-w-[500px] lg:max-w-none mx-auto"
            >
              {/* Solid colored backdrop framing as seen in reference (left and bottom offset) */}
              <div className="absolute inset-0 bg-[#D8F0F8] rounded-[2.5rem] transform translate-y-6 -translate-x-6 -z-10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
              <img src="/students.png" alt="MITS Students" className="relative rounded-[2.5rem] object-cover h-[450px] md:h-[600px] w-full shadow-lg z-10 transition-transform duration-500" />
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Academics Section */}
        <div className="bg-slate-50/50 border-y border-slate-200/50 relative overflow-hidden">
           <div className="bg-radial-glow -right-[20rem] top-[10rem]" />
           <SectionWrapper id="academics" className="py-24 md:py-32" variant="fade-up">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16 relative"
            >
              <SpiralDoodle className="-top-8 right-0" />
              <div className="flex items-center justify-center gap-2 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4">
                <Library size={14} /> Knowledge Base
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight hero-text mb-4">Academic Resources</h2>
              <p className="text-lg font-medium text-slate-500">Find your scheme, syllabus, and important academic documents in one intelligent interface.</p>
            </motion.div>
            <AcademicsSection />
          </SectionWrapper>
        </div>

        {/* Departments */}
        <SectionWrapper id="departments" className="py-24 md:py-32 relative" variant="slide-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">
                <Grid size={14} /> Programs
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight hero-text mb-4">
                Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Departments</span>
              </h2>
              <p className="text-lg font-medium text-slate-500">Explore our cutting-edge departments equipped with world-class facilities and expert faculty guiding the complete lifecycle of innovation.</p>
            </motion.div>
            <Link href="/departments" className="hidden md:flex text-slate-600 font-bold items-center gap-1 hover:text-emerald-500 transition-colors h-10">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {departments.map((dept, i) => (
              <motion.div 
                key={dept.name} 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.5 }}
                className="group p-8 rounded-3xl border border-white bg-white/70 backdrop-blur-md hover:bg-white hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer overflow-hidden relative"
              >
                <div className={`w-16 h-16 rounded-2xl border ${dept.bg} ${dept.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg transition-all duration-300`}>
                  <dept.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-2 group-hover:text-emerald-500 transition-colors">{dept.name}</h3>
                <p className="text-sm font-semibold text-slate-400 mb-6 line-clamp-2">{dept.desc}</p>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Announcements */}
        <div className="bg-slate-900 relative">
          <SectionWrapper id="announcements" className="py-24 md:py-32 rounded-[3.5rem] bg-slate-900 text-white relative z-10 overflow-hidden shadow-2xl my-4 mx-4 md:mx-auto border border-slate-800" variant="pop-up">
            {/* dark mode blobs */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center mb-20 relative">
              <div className="flex items-center justify-center gap-2 text-indigo-400 font-bold tracking-widest uppercase text-xs mb-6">
                <Bell size={14} /> Official Feed
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight hero-text mb-6">Latest Updates</h2>
              <p className="text-lg font-medium text-slate-400">Stay informed with the latest notifications, events, and important schedules right when they drop.</p>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {announcements.map((ann, i) => (
                <AnnouncementCard key={ann.id} {...ann} index={i} />
              ))}
            </motion.div>
            <div className="mt-12 text-center">
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
                View All Notices
              </button>
            </div>
          </SectionWrapper>
        </div>

        {/* Student Resources */}
        <SectionWrapper id="resources" className="py-24 md:py-32" variant="fade-up">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <LineDoodle className="top-0 right-[20%]" />
            <div className="flex items-center justify-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
              <LayoutDashboard size={14} /> Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight hero-text mb-4">Student Hub</h2>
            <p className="text-lg font-medium text-slate-500 max-w-2xl mx-auto">Everything you need from your first day to graduation, organized perfectly.</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {resourceTabs.map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 text-sm border ${activeTab === tab ? 'bg-black text-white border-black shadow-lg shadow-black/20 scale-105' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-16 text-center max-w-4xl mx-auto relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-blue-100 shadow-inner"
                >
                  <Code size={36} strokeWidth={2} />
                </motion.div>
                <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">{activeTab} Resources</h3>
                <p className="text-lg text-slate-500 font-medium max-w-md mx-auto mb-10 leading-relaxed">The resources for {activeTab.toLowerCase()} are currently being assembled for the upcoming semester interface.</p>
                <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 mx-auto">
                  Explore Directory <ArrowRight size={18} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper id="contact" className="py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
                <Mail size={14} /> Connect
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight hero-text mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-500 font-medium mb-12">We are always ready to address your queries and welcome you to our campus.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg tracking-tight mb-1 group-hover:text-blue-600 transition-colors">Campus Address</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Race Course Road, Gole ka Mandir,<br/>Gwalior (M.P.) - 474005</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm text-cyan-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg tracking-tight mb-1 group-hover:text-cyan-600 transition-colors">Phone Call</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">0751-2409397<br/>0751-2409300</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">Direct Email</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">info@mitsgwalior.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgb(0,0,0,0.06)] rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Message</label>
                  <textarea rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 resize-none" placeholder="How can we help?" />
                </div>
                <button className="w-full bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20 active:scale-95">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </SectionWrapper>
        
        {/* Footer */}
        <footer className="border-t border-slate-200/60 bg-white/50 backdrop-blur-md pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 shrink-0">
                    <img src="/logo_mits.jpg" alt="MITS Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col tracking-tight min-w-0">
                    <span className="font-bold text-sm text-blue-900 leading-[1.1] truncate">MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE</span>
                    <span className="font-bold text-[10px] text-red-600 leading-tight tracking-widest uppercase mt-0.5">Deemed University &bull; NAAC A++ Grade</span>
                  </div>
                </div>
                <p className="text-slate-500 font-medium max-w-sm mb-8 leading-relaxed">
                  A premier engineering institute fostering innovation, research, and technical excellence since 1957. Empowering the next generation.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Quick Links</h4>
                <ul className="space-y-4 font-semibold text-sm text-slate-400">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">About Institute</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Admissions Portal</a></li>
                  <li><a href="#academics" className="hover:text-blue-600 transition-colors">Academics</a></li>
                  <li><a href="#departments" className="hover:text-blue-600 transition-colors">Departments Directory</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Important</h4>
                <ul className="space-y-4 font-semibold text-sm text-slate-400">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Notices & Circulars</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Tenders & Auctions</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Career Opportunities</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Campus Map</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Portals</h4>
                <ul className="space-y-4 font-semibold text-sm text-slate-400">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Student Login</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Faculty Portal</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Alumni Network</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Library Access</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between font-semibold text-xs text-slate-400">
              <p>&copy; {new Date().getFullYear()} Madhav Institute of Technology & Science. All rights reserved.</p>
              <div className="flex items-center gap-6 mt-6 md:mt-0 uppercase tracking-widest">
                <a href="#" className="hover:text-slate-800 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-800 transition-colors">Terms</a>
                <a href="#" className="hover:text-slate-800 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
