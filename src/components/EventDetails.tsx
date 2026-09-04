"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EventDetails() {
  const [typedText, setTypedText] = useState("");
  const fullText = "HACK WITH INDIA";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1.5 } // Delay for typewriter
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#0a0a0a] flex flex-col pt-8 relative overflow-hidden"
    >
      {/* Background Tech Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d92323] rounded-full blur-[150px]" />
      </div>

      {/* Header with Logos */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto px-6 flex justify-between items-center h-20 z-10"
      >
        <div className="h-12 w-auto bg-white/5 rounded-md p-2 flex items-center shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10">
          <Image 
            src="/image/logo_left.png.png" 
            alt="Community Logo" 
            width={120} 
            height={48} 
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-16 w-auto bg-[#0a0a0a]/50 p-2 rounded-lg border border-[#d4af37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <Image 
            src="/image/official Logo.jpg" 
            alt="JDCOEM Logo" 
            width={140} 
            height={64} 
            className="h-full w-auto object-contain rounded-md"
          />
        </div>
      </motion.div>

      {/* Main Content - Glassmorphism */}
      <div className="flex-grow flex items-center justify-center px-4 py-8 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-14 w-full max-w-2xl text-center shadow-2xl"
        >
          {/* Gold top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#d4af37] blur-[2px] opacity-70" />
          
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-white tracking-tight mb-8 h-[72px] md:h-[90px] flex items-center justify-center">
            {typedText}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-10 md:h-14 bg-[#d4af37] ml-2"
            />
          </h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 font-serif text-xl md:text-2xl text-gray-300"
          >
            <motion.p variants={itemVariants} className="text-[#d4af37] text-2xl md:text-3xl mb-6 font-semibold tracking-wide">
              On Campus JDCOEM
            </motion.p>
            <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 text-white">
              <span className="text-[#d4af37]">📅</span>
              <p>7th September 2026</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 text-white">
              <span className="text-[#d4af37]">⏰</span>
              <p>12:00 PM onwards</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 text-white">
              <span className="text-[#d4af37]">📍</span>
              <p>Conference Hall</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="mt-14 pt-6 border-t border-white/10"
          >
            <p className="font-sans text-sm md:text-base text-gray-400 italic">
              Join us for a day of innovation, coding, and excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
