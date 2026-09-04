"use client";

import { motion } from "framer-motion";

export default function Interstitial({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-40 bg-[#0a0a0a] flex items-center justify-center cursor-pointer"
      onClick={onComplete}
    >
      <motion.h1
        initial={{ y: 20, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-[#d4af37] font-serif text-4xl md:text-6xl italic text-center px-6 drop-shadow-lg"
      >
        You are Cordially Invited
      </motion.h1>
    </motion.div>
  );
}
