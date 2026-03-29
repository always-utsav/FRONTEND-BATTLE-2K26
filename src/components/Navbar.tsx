"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { GraduationCap, Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Academics", href: "#academics" },
    { name: "Departments", href: "#departments" },
    { name: "Resources", href: "#resources" },
    { name: "Updates", href: "#announcements" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/40 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 shrink-0 group-hover:scale-105 transition-transform">
            {/* The user will place logo_mits.jpg in public/ */}
            <img src="/logo_mits.jpg" alt="MITS Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col tracking-tight min-w-0">
            <span className={`font-bold text-[10px] md:text-sm leading-[1.1] truncate transition-colors duration-500 ${isScrolled ? "text-blue-900" : "text-white"}`}>MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE</span>
            <span className={`font-bold text-[8px] md:text-[10px] leading-tight tracking-widest uppercase mt-0.5 truncate transition-colors duration-500 ${isScrolled ? "text-red-600" : "text-red-400"}`}>Deemed University &bull; NAAC A++ Grade</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-10 font-semibold text-[15px] transition-colors duration-500 ${isScrolled ? "text-slate-600" : "text-white/90"}`}>
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-blue-500 transition-colors relative group py-1">
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300 ease-out ${isScrolled ? "bg-blue-600" : "bg-white"}`} />
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">
          <SearchBar isScrolled={isScrolled} />
          <Link href="/login">
            <button className={`px-6 py-2.5 rounded-2xl font-bold text-sm transition-all hover:shadow-lg active:scale-95 border ${isScrolled ? "bg-black hover:bg-slate-800 text-white border-white/10 shadow-black/20" : "bg-white text-slate-900 hover:bg-white/90 border-transparent shadow-white/20"}`}>
              Login
            </button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 text-slate-800 bg-white/50 backdrop-blur-md rounded-xl border border-white/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-3xl border-b border-white shadow-2xl p-6 flex flex-col gap-4 mt-2 rounded-b-3xl mx-4"
        >
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-slate-800 font-bold text-lg py-3 border-b border-slate-100 last:border-0" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <SearchBar />
          </div>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
            <button className="bg-black text-white px-4 py-4 rounded-xl font-bold w-full mt-4 shadow-lg shadow-black/20">
              Login to Portal
            </button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
