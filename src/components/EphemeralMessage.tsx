"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function EphemeralMessage({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // 5 seconds display
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] z-50 p-6"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center"
      >
        <h2 
          className="text-[#cba258] text-2xl md:text-4xl leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          &quot;Innovation distinguishes between a leader and a follower.&quot;
          <br /><br />
          <span className="text-white text-lg md:text-2xl italic">
            Welcome to Hack With India, JDCOEM.
          </span>
        </h2>
      </motion.div>
    </motion.div>
  );
}
