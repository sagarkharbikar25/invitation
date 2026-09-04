"use client";

import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-[#d92323]"
      onClick={onComplete}
    >
      {/* Abstract Tech Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 10 L 50 10 L 100 50 L 100 100" stroke="white" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 300 200 L 250 250 L 200 250" stroke="white" strokeWidth="2" fill="none" opacity="0.4"/>
          <circle cx="50" cy="10" r="3" fill="white"/>
          <circle cx="100" cy="100" r="4" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="200" cy="250" r="3" fill="white"/>
          <path d="M 80vw 10vh L 70vw 20vh L 70vw 50vh" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
          <circle cx="80vw" cy="10vh" r="4" fill="white"/>
          <circle cx="70vw" cy="50vh" r="3" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      {/* Envelope Flap (CSS shape) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#b91d1d] z-10 origin-top"
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
        exit={{ rotateX: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Central Content */}
      <motion.div 
        className="relative z-20 mt-40 flex flex-col items-center"
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-24 h-24 border-2 border-[#d4af37]/50 rounded-full flex items-center justify-center mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <div className="w-16 h-16 border border-[#d4af37] rounded-full flex items-center justify-center bg-[#b91d1d]">
            <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>
        
        <motion.h2 
          className="text-[#d4af37] font-serif text-2xl uppercase tracking-widest drop-shadow-md"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Tap to Open
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
