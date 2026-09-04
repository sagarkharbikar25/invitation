"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";

export default function InvitationCover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      key="cover"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-[#1a0505] via-[#0a0000] to-[#050000] overflow-hidden"
    >
      <ParticlesBackground />
      {/* Subtle radial gold lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)'
        }}
      />
      
      {/* Fine particle overlay for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Center Typography & Logos */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 w-full mt-12"
      >
        <h3 className="font-sans text-[#a0a0a0] tracking-[0.2em] text-xs md:text-sm uppercase mb-12">
          You are cordially invited
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full mb-12">
          {/* College Logo */}
          <Image 
            src="/image/official Logo.jpg" 
            alt="JDCOEM Logo" 
            width={120} 
            height={120} 
            className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-95 hover:opacity-100 transition-opacity shrink-0"
          />

          <h1 className="font-serif text-4xl md:text-6xl text-[#d4af37] font-medium tracking-wide drop-shadow-md text-center">
            HACK WITH INDIA
          </h1>

          {/* Community Logo */}
          <Image 
            src="/image/logo_left.png.png" 
            alt="Community Logo" 
            width={120} 
            height={120} 
            className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-95 hover:opacity-100 transition-opacity shrink-0"
          />
        </div>
        
        <div className="flex flex-col items-center space-y-3 font-sans text-sm md:text-base text-gray-300 tracking-wider mt-4">
          <p>ON CAMPUS | JDCOEM</p>
          <div className="w-8 h-[1px] bg-[#d4af37]/30 my-2" />
          <p>7 SEPTEMBER 2026</p>
          <p>12:00 PM ONWARDS</p>
          <p className="text-[#d4af37]/80">CONFERENCE HALL</p>
        </div>
      </motion.div>

      {/* Elegant Seal & Tap to Open */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
        className="pb-16 flex flex-col items-center justify-center z-10 group cursor-pointer"
        onClick={onOpen}
      >
        {/* The Seal */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#d4af37]/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:border-[#d4af37]/80 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <div className="absolute inset-1 rounded-full border border-[#d4af37]/20 border-dashed" />
          {/* Subtle pulse ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-[#d4af37]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Inner crest / icon */}
          <div className="w-8 h-8 md:w-10 md:h-10 text-[#d4af37]/80 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
          </div>
        </div>
        
        <p className="mt-6 font-sans text-xs tracking-[0.3em] text-[#d4af37]/70 uppercase group-hover:text-[#d4af37] transition-colors duration-300">
          Tap to Open
        </p>
      </motion.div>
    </motion.div>
  );
}
