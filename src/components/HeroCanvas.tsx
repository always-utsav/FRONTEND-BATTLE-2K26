"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasTriggeredAudio = useRef(false);
  const hasAttemptedScrollPlay = useRef(false);
  const hasFadedOutAudio = useRef(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameCount = 288;
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstFrameRendered, setFirstFrameRendered] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Ensure exactly the naming format requested
      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      loadedImages.push(img);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++; // prevent freezing if some fail
        if (loadedCount === frameCount) {
          setImages(loadedImages); 
          setIsLoaded(true);
        }
      };
    }
  }, []);

  // Sync scroll to frame
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Strict DPR cap of 2 for smooth performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = canvasRef.current;
    
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      renderFrame(0);
    };

    const renderFrame = (index: number) => {
      const img = images[index];
      // Guard against bad frames or uninitialized drawings causing flicker
      if (!img || !img.complete || img.naturalHeight === 0) return;

      const cw = window.innerWidth;
      const ch = window.innerHeight;

      const scale = Math.max(cw / img.width, ch / img.height);
      const x = (cw / 2) - (img.width / 2) * scale;
      const y = (ch / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      
      if (!firstFrameRendered) setFirstFrameRendered(true);
    };

    window.addEventListener("resize", resize);
    resize();
    
    // Auto-play workaround for browsers that block audio on simple scroll events.
    // It captures the very first user interaction anywhere on the document (clicking, tapping, typing).
    const startAudioInteraction = () => {
      if (!hasTriggeredAudio.current && audioRef.current && !hasFadedOutAudio.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().then(() => {
          hasTriggeredAudio.current = true;
          // Clean up listeners immediately after success
          const events = ["click", "pointerdown", "keydown", "scroll", "wheel", "touchstart"];
          events.forEach(e => window.removeEventListener(e, startAudioInteraction));
        }).catch(() => {});
      }
    };

    // Try engaging immediately on any page interaction
    const events = ["click", "pointerdown", "keydown", "scroll", "wheel", "touchstart"];
    events.forEach(e => window.addEventListener(e, startAudioInteraction, { passive: true }));

    // Initial explicit play attempt (often blocked unless MEI is high)
    if (audioRef.current) {
       audioRef.current.volume = 0.4;
       audioRef.current.play().then(() => {
         hasTriggeredAudio.current = true;
       }).catch(() => {});
    }

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.floor(latest * (frameCount - 1));
      requestAnimationFrame(() => renderFrame(frameIndex));

      // Trigger audio play on first scroll iteration without spamming
      if (!hasTriggeredAudio.current && audioRef.current && !hasAttemptedScrollPlay.current) {
         hasAttemptedScrollPlay.current = true;
         audioRef.current.volume = 0.4;
         audioRef.current.play().then(() => {
            hasTriggeredAudio.current = true;
         }).catch(() => {
            console.log("Autoplay blocked by browser policy. Awaiting click/touch interaction...");
         });
      }

      // Handle audio volume fading out when leaving the hero section
      if (audioRef.current && !hasFadedOutAudio.current) {
        const targetVol = latest > 0.8 ? Math.max(0, 0.4 - ((latest - 0.8) * 2)) : 0.4;
        audioRef.current.volume = targetVol;
        
        if (targetVol === 0) {
           hasFadedOutAudio.current = true; // permanently disable once scrolled past
           audioRef.current.pause();
        }
      }
    });

    return () => {
      window.removeEventListener("resize", resize);
      const events = ["click", "pointerdown", "keydown", "scroll", "wheel", "touchstart"];
      events.forEach(e => window.removeEventListener(e, startAudioInteraction));
      unsubscribe();
    };
  }, [isLoaded, images, scrollYProgress, firstFrameRendered]);

  // Smoother Gradient Overlays - No abrupt stopping
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.22], [1, 1, 0, 0]);
  const everythingOpacity = useTransform(scrollYProgress, [0.18, 0.28, 0.40, 0.48], [0, 1, 1, 0]);
  const academicsOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const builtOpacity = useTransform(scrollYProgress, [0.70, 0.85, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[650vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-900 flex items-center justify-center">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-30 bg-slate-900 text-white">
            <div className="flex flex-col items-center gap-4">
               <div className="w-8 h-8 rounded-full border-4 border-white/20 border-t-blue-500 animate-spin" />
               <p className="font-medium tracking-widest text-sm uppercase text-slate-300">Loading Experience (288 Frames)...</p>
            </div>
          </div>
        )}
        
        <canvas 
          ref={canvasRef} 
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${firstFrameRendered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/10 to-transparent h-1/3" />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none bg-gradient-to-t from-[#F5F7FB] via-[#F5F7FB]/50 to-transparent h-48" />

        {/* Audio Element Hidden */}
        <audio ref={audioRef} src="/ambient.wav" preload="auto" autoPlay />

        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center flex-col">
          <motion.div style={{ opacity: welcomeOpacity }} className="absolute flex flex-col items-center">
            <h1 className="hero-text text-white text-[clamp(2.5rem,8vw,6rem)] text-center px-4 mix-blend-overlay drop-shadow-2xl leading-[1.1]">
              Welcome to MITS
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium mt-4 mix-blend-overlay max-w-lg text-center drop-shadow-md">
              Access academics, notices, departments and everything in seconds.
            </p>
          </motion.div>

          <motion.div style={{ opacity: everythingOpacity }} className="absolute hero-text text-white text-[clamp(2.5rem,8vw,6rem)] text-center px-4 max-w-5xl leading-[1.1] drop-shadow-2xl">
            Everything You Need.<br/><span className="text-cyan-400">One Place.</span>
          </motion.div>

          <motion.div style={{ opacity: academicsOpacity }} className="absolute hero-text text-white text-[clamp(2rem,6vw,5rem)] text-center px-4 max-w-6xl leading-[1.1] drop-shadow-2xl">
            Academics. <span className="text-cyan-400">Departments.</span><br/>Resources.
          </motion.div>

          <motion.div style={{ opacity: builtOpacity }} className="absolute hero-text text-white text-[clamp(3rem,8vw,7rem)] text-center px-4 drop-shadow-2xl">
            Built for <span className="text-cyan-400">Students.</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
