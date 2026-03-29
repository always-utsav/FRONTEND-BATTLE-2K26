"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { User, Lock, ArrowLeft, ShieldCheck, ChevronRight, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "", captcha: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simulated Captcha
  const captchaText = "M7T2S";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formData.captcha.toUpperCase() === captchaText) {
        setIsSuccess(true);
      } else {
        alert("Invalid Captcha! Please try again.");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/mits_campus_blurred_bg.png" 
          alt="Campus Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
      </div>

      {/* Floating Blobs for Depth */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] animate-pulse delay-700" />

      <Link 
        href="/" 
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white font-bold transition-all group"
      >
        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/10">
          <ArrowLeft size={18} />
        </div>
        <span className="text-sm tracking-widest uppercase">Back to Portal</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[450px]"
      >
        {/* Glassmorphic Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          
          <div className="pt-12 pb-8 px-10 text-center">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20"
            >
              <GraduationCap size={40} className="text-white" />
            </motion.div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">Student Login</h1>
            <p className="text-blue-100/60 font-medium text-sm">Access your academic record and IUMS portal</p>
          </div>

          <form onSubmit={handleLogin} className="pb-12 px-10 space-y-6">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-200/50 uppercase tracking-[0.2em] ml-2">Enrollment Number</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" size={20} />
                      <input 
                        required
                        type="text" 
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
                        placeholder="0108CS211001"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-200/50 uppercase tracking-[0.2em] ml-2">Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" size={20} />
                      <input 
                        required
                        type="password" 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-blue-200/50 uppercase tracking-[0.2em] ml-2">Verification Code</label>
                      <input 
                        required
                        type="text" 
                        value={formData.captcha}
                        onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium text-center tracking-[0.5em]"
                        placeholder="CODE"
                      />
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="h-[58px] bg-slate-800/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group cursor-pointer">
                        <span className="text-xl font-black text-blue-300 italic tracking-widest select-none">{captchaText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    {isLoading ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      <>
                        SIGN IN TO IUMS
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                    <ShieldCheck size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                  <p className="text-blue-100/60 font-medium mb-8">Successfully authenticated. Redirecting...</p>
                  <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 1.5 }}
                      className="h-full bg-emerald-500" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="bg-black/20 py-6 px-10 border-t border-white/5 flex items-center justify-between">
            <a href="#" className="text-[10px] font-bold text-blue-200/40 hover:text-blue-300 uppercase tracking-widest transition-colors">Forgot Password?</a>
            <a href="#" className="text-[10px] font-bold text-blue-200/40 hover:text-blue-300 uppercase tracking-widest transition-colors">Help Desk</a>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-slate-400 font-medium text-xs"
        >
          &copy; 1957-2026 MITS Gwalior. All Portal rights reserved.
        </motion.p>
      </motion.div>
    </main>
  );
}
