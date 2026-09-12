"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export interface Guest {
  name: string;
  designation: string;
  department?: string;
}

// ─── Swirl ornament for INVITATION ──────────────────────────────────────────
function SwirlLeft() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="opacity-70">
      <path d="M0 6 Q 6 12 12 6 T 24 6" stroke="#cba258" strokeWidth="1" fill="none" />
    </svg>
  );
}
function SwirlRight() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="opacity-70">
      <path d="M24 6 Q 18 12 12 6 T 0 6" stroke="#cba258" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Reusable gold diamond ───────────────────────────────────────────────────
function DiamondOrnament() {
  return (
    <div className="flex items-center justify-center gap-2 opacity-50 mt-4 mb-2">
      <div className="w-12 h-[1px] bg-[#cba258]" />
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
        <rect x="3" y="0" width="2" height="2" stroke="#cba258" strokeWidth="0.8" transform="rotate(45 3 3)" />
      </svg>
      <div className="w-12 h-[1px] bg-[#cba258]" />
    </div>
  );
}

// ─── Icons ─────────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg className="w-5 h-5 text-[#cba258]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18M8 2v4M16 2v4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-[#cba258]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-[#cba258]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-5 h-5 text-[#cba258]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OfficialInvitation({ guest }: { guest: Guest }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mx, [-0.5, 0.5], ["-3deg", "3deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, 
        backgroundColor: "#0d0c0c",
        useCORS: true,
      });
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `Invitation_${guest.name.replace(/\s+/g, "_")}.png`;
      link.click();
    } catch (error) {
      console.error("Error generating invitation image:", error);
      alert("Failed to generate digital invitation. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden relative"
      style={{ perspective: 1200 }}
    >
      {/* ── Main Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-4xl relative z-10"
      >
        <div
          ref={cardRef}
          className="relative p-6 md:p-12"
          style={{
            backgroundColor: "#0d0c0c",
            border: "1px solid rgba(203,162,88,0.03)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
          }}
        >
          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-[#cba258]/30" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-[#cba258]/30" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-[#cba258]/30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[#cba258]/30" />

          {/* ── HEADER ── */}
          <div className="flex justify-between items-center w-full mb-12 px-2 md:px-8">
            {/* Left Logo (HWI Pink) */}
            <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-white flex items-center justify-center overflow-hidden border border-white/20 p-1">
              <Image src="/image/logo_left.png.png" alt="HWI" width={100} height={100} className="object-contain" />
            </div>

            {/* Title Block */}
            <div className="flex flex-col items-center flex-1 text-center px-4">
              <div className="flex items-center gap-3 mb-3">
                <SwirlLeft />
                <span
                  className="text-[#cba258] tracking-[0.4em] text-[10px] md:text-xs uppercase font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  INVITATION
                </span>
                <SwirlRight />
              </div>

              <h2
                className="text-[#cba258] text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                HACK WITH<br />INDIA
              </h2>

              <div className="flex items-center gap-4 opacity-70 mt-2">
                <div className="w-10 md:w-16 h-[1px] bg-[#cba258]" />
                <span
                  className="text-gray-300 text-[9px] md:text-xs tracking-[0.25em] uppercase font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ON CAMPUS | JDCOEM
                </span>
                <div className="w-10 md:w-16 h-[1px] bg-[#cba258]" />
              </div>
            </div>

            {/* Right Logo (JDCOEM) */}
            <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/20 p-2">
              <Image src="/image/official Logo.jpg" alt="JDCOEM" width={112} height={112} className="object-contain" />
            </div>
          </div>

          {/* ── INVITATION MESSAGE BOX ── */}
          <div
            className="w-full rounded-md border border-[#cba258]/10 py-10 px-6 flex flex-col items-center text-center mb-6"
            style={{ backgroundColor: "#151515" }}
          >
            <p
              className="text-[#cba258] italic text-lg md:text-xl mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Cordially invites
            </p>

            <h1
              className="text-white text-3xl md:text-5xl mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {guest.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#cba258]/40" />
              <p
                className="text-[#cba258] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {guest.designation}
              </p>
              <div className="w-8 h-[1px] bg-[#cba258]/40" />
            </div>

            <p
              className="text-gray-400 italic text-base md:text-lg mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              to grace the occasion of
            </p>

            <h3
              className="text-[#cba258] text-2xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HACK WITH INDIA
            </h3>

            <DiamondOrnament />
          </div>

          {/* ── EVENT DETAILS BOX ── */}
          <div
            className="w-full rounded-md border border-[#cba258]/10 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#cba258]/10"
            style={{ backgroundColor: "#151515" }}
          >
            {/* Date */}
            <div className="flex-1 flex flex-col items-center py-8 px-4 text-center">
              <div className="w-12 h-12 rounded-full border border-[#cba258]/20 flex items-center justify-center mb-4">
                <CalendarIcon />
              </div>
              <span
                className="text-[#cba258] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                DATE
              </span>
              <span
                className="text-white text-lg md:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                7 September 2026
              </span>
            </div>

            {/* Time */}
            <div className="flex-1 flex flex-col items-center py-8 px-4 text-center">
              <div className="w-12 h-12 rounded-full border border-[#cba258]/20 flex items-center justify-center mb-4">
                <ClockIcon />
              </div>
              <span
                className="text-[#cba258] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                TIME
              </span>
              <span
                className="text-white text-lg md:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                12:00 PM onwards
              </span>
            </div>

            {/* Venue */}
            <div className="flex-1 flex flex-col items-center py-8 px-4 text-center">
              <div className="w-12 h-12 rounded-full border border-[#cba258]/20 flex items-center justify-center mb-4">
                <LocationIcon />
              </div>
              <span
                className="text-[#cba258] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                VENUE
              </span>
              <span
                className="text-white text-lg md:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Conference Hall
              </span>
            </div>
          </div>
        </div>
        
        {/* ── ACTION BUTTONS ── */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 w-full max-w-2xl px-4">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#cba258] bg-[#cba258]/10 text-[#cba258] hover:bg-[#cba258]/20 transition-colors uppercase tracking-[0.1em] text-xs font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <DownloadIcon />
            {isDownloading ? "Generating Image..." : "Download Digital Invitation"}
          </button>
          
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Hack+With+India&dates=20260907T063000Z/20260907T113000Z&details=Join+us+for+an+engaging+gathering+focused+on+innovation,+coding,+technology+and+student+collaboration.&location=Conference+Hall,+JDCOEM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#cba258]/40 text-[#cba258] hover:bg-[#cba258]/10 transition-colors uppercase tracking-[0.1em] text-xs font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <CalendarIcon />
            Add to Calendar
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}