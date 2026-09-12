"use client";

import { motion } from "framer-motion";
import { guests } from "@/data/guests";

export default function GuestSelection({ onSelect }: { onSelect: (token: string) => void }) {
  // Convert guests record to an array and filter out the default fallback if needed
  const guestList = Object.values(guests).filter(g => g.token !== "guest");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[70%] rounded-full bg-[#522d5b]/15 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-[#111] border border-[#cba258]/20 rounded-xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <h2 
            className="text-[#cba258] text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Select Your Identity
          </h2>
          <div className="w-16 h-[1px] bg-[#cba258]/50 mx-auto" />
          <p className="mt-4 text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Please select your name from the guest list below to generate your personalized digital invitation.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
          {guestList.map((guest) => (
            <button
              key={guest.token}
              onClick={() => onSelect(guest.token)}
              className="flex flex-col items-start p-4 border border-[#cba258]/20 rounded-lg hover:bg-[#cba258]/10 hover:border-[#cba258]/50 transition-all text-left"
            >
              <span 
                className="text-white text-lg font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {guest.name}
              </span>
              <span 
                className="text-[#cba258] text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {guest.designation} {guest.department ? `| ${guest.department}` : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Scrollbar styles inside component to keep it isolated */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(203,162,88,0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(203,162,88,0.5);
        }
      `}} />
    </motion.div>
  );
}
