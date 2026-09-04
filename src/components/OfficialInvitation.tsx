"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export interface Guest {
  name: string;
  designation: string;
  department?: string;
}

// ─── Reusable gold divider ───────────────────────────────────────────────────
function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/40" />
      {/* Diamond ornament */}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect x="5" y="0" width="2" height="2" fill="#d4af37" opacity="0.7" transform="rotate(45 6 6)" />
        <rect x="4" y="4" width="4" height="4" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.5" transform="rotate(45 6 6)" />
      </svg>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/40" />
    </div>
  );
}

// ─── "INVITATION" top label ──────────────────────────────────────────────────
function InvitationTopLabel() {
  return (
    <div className="flex items-center gap-3 justify-center mb-1">
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
      {/* Small ornament left */}
      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="opacity-70">
        <path d="M0 4 Q4 0 8 4 Q12 8 16 4" stroke="#d4af37" strokeWidth="0.8" fill="none" />
      </svg>
      <span
        className="text-[#d4af37] tracking-[0.35em] text-xs font-light"
        style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.35em" }}
      >
        INVITATION
      </span>
      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="opacity-70">
        <path d="M0 4 Q4 8 8 4 Q12 0 16 4" stroke="#d4af37" strokeWidth="0.8" fill="none" />
      </svg>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
    </div>
  );
}

// ─── Calendar icon SVG ───────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 2v4M16 2v4" />
      <rect x="7" y="13" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// ─── Clock icon SVG ──────────────────────────────────────────────────────────
function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" />
    </svg>
  );
}

// ─── Location pin icon SVG ───────────────────────────────────────────────────
function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

// ─── Brain / AI icon (left decoration in message panel) ─────────────────────
function BrainIcon() {
  return (
    <svg className="w-12 h-12 opacity-20" viewBox="0 0 48 48" fill="none" stroke="#d4af37" strokeWidth="1.2">
      <path d="M24 8c-4 0-7 3-7 7 0 1 .2 2 .6 3-3 .5-5.6 3-5.6 6 0 2 .9 3.8 2.4 5-1 1-1.4 2.4-1.4 3.8 0 3.4 2.8 6.2 6.2 6.2H24" />
      <path d="M24 8c4 0 7 3 7 7 0 1-.2 2-.6 3 3 .5 5.6 3 5.6 6 0 2-.9 3.8-2.4 5 1 1 1.4 2.4 1.4 3.8 0 3.4-2.8 6.2-6.2 6.2H24" />
      <line x1="24" y1="8" x2="24" y2="40" />
      <circle cx="24" cy="20" r="2" fill="#d4af37" opacity="0.4" />
      <circle cx="18" cy="26" r="1.5" fill="#d4af37" opacity="0.3" />
      <circle cx="30" cy="26" r="1.5" fill="#d4af37" opacity="0.3" />
    </svg>
  );
}

// ─── Lock shield icon (right decoration in message panel) ────────────────────
function LockIcon() {
  return (
    <svg className="w-12 h-12 opacity-20" viewBox="0 0 48 48" fill="none" stroke="#d4af37" strokeWidth="1.2">
      <path d="M24 4l16 6v12c0 10-8 18-16 22C16 40 8 32 8 22V10L24 4z" />
      <rect x="17" y="22" width="14" height="11" rx="2" />
      <path d="M19 22v-4a5 5 0 0110 0v4" />
      <circle cx="24" cy="28" r="1.5" fill="#d4af37" opacity="0.5" />
    </svg>
  );
}

// ─── Check icon for confirmed state ─────────────────────────────────────────
function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function OfficialInvitation({ guest }: { guest: Guest }) {
  const [rsvpState, setRsvpState] = useState<"idle" | "confirmed">("idle");

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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };

  const googleCalendarLink =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Hack+With+India&dates=20260907T063000Z/20260907T113000Z&details=Join+us+for+an+engaging+gathering+focused+on+innovation,+coding,+technology+and+student+collaboration.&location=Conference+Hall,+JDCOEM";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden relative"
      style={{
        backgroundColor: "#0A0A0A",
        perspective: 1200,
      }}
    >
      <ParticlesBackground />

      {/* ── Main Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-3xl relative z-10"
      >
        {/* Outer gold border frame */}
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1a1a1a, #111111)",
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow:
              "0 0 0 1px rgba(212,175,55,0.06), 0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,175,55,0.03)",
          }}
        >
          {/* Corner accents — exactly as in the image */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-[#d4af37]/50" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#d4af37]/50" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-[#d4af37]/50" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-[1.5px] border-r-[1.5px] border-[#d4af37]/50" />

          <div className="px-8 py-10 md:px-14 md:py-12">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >

              {/* ── SECTION 1: Logos + Title Row ── */}
              <motion.div
                variants={item}
                className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 w-full mb-5"
              >
                {/* Community / Hack With India logo — LEFT */}
                <div className="flex-shrink-0">
                  <Image
                    src="/image/logo_left.png.png"
                    alt="Hack With India — JDCOEM"
                    width={90}
                    height={90}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    priority
                  />
                </div>

                {/* Center title block */}
                <div className="flex flex-col items-center gap-1 flex-1">
                  {/* "INVITATION" label with ornaments */}
                  <InvitationTopLabel />

                  {/* EVENT NAME — large gold serif */}
                  <h2
                    className="text-[#d4af37] font-semibold leading-tight text-4xl md:text-5xl tracking-wider"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    HACK WITH INDIA
                  </h2>

                  {/* Subtitle */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-[0.5px] w-10 bg-[#d4af37]/30" />
                    <span
                      className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      On Campus | JDCOEM
                    </span>
                    <div className="h-[0.5px] w-10 bg-[#d4af37]/30" />
                  </div>
                </div>

                {/* College logo — RIGHT */}
                <div className="flex-shrink-0">
                  <Image
                    src="/image/official Logo.jpg"
                    alt="JDCOEM Logo"
                    width={90}
                    height={90}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Full-width gold divider */}
              <motion.div variants={item} className="w-full mb-8">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent" />
              </motion.div>

              {/* ── SECTION 2: Guest Invitation Panel (glassmorphism card) ── */}
              <motion.div
                variants={item}
                className="w-full mb-8 rounded-lg px-6 py-8 md:px-10 md:py-9"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(212,175,55,0.02) 100%)",
                  border: "1px solid rgba(212,175,55,0.1)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {/* "Cordially invites" italic */}
                <p
                  className="text-[#d4af37]/80 italic text-lg md:text-xl mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Cordially invites
                </p>

                {/* Guest name */}
                <h1
                  className="text-white font-medium text-2xl md:text-4xl mb-3 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {guest.name}
                </h1>

                {/* Guest designation — gold, small caps with flanking rules */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="h-[0.5px] w-8 bg-[#d4af37]/40" />
                  <p
                    className="text-[#d4af37] text-xs md:text-sm tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {guest.designation}
                  </p>
                  <div className="h-[0.5px] w-8 bg-[#d4af37]/40" />
                </div>

                {/* "to grace the occasion of" */}
                <p
                  className="text-gray-400 italic text-base md:text-lg mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  to grace the occasion of
                </p>

                {/* Event name second occurrence — gold */}
                <h3
                  className="text-[#d4af37] text-2xl md:text-3xl tracking-wider font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  HACK WITH INDIA
                </h3>

                {/* Diamond ornament below */}
                <div className="flex items-center justify-center mt-4">
                  <GoldDivider className="w-40" />
                </div>
              </motion.div>

              {/* ── SECTION 3: Event Details — 3-column grid ── */}
              <motion.div
                variants={item}
                className="w-full mb-8 rounded-lg overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(212,175,55,0.015) 100%)",
                  border: "1px solid rgba(212,175,55,0.1)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/10">
                  {/* Date */}
                  <div className="flex flex-col items-center py-6 px-4 gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                      style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.18)" }}
                    >
                      <CalendarIcon />
                    </div>
                    <span
                      className="text-[#d4af37] text-[10px] tracking-[0.22em] uppercase font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      DATE
                    </span>
                    <span
                      className="text-white text-base md:text-lg"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      7 September 2026
                    </span>
                  </div>

                  {/* Time */}
                  <div className="flex flex-col items-center py-6 px-4 gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                      style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.18)" }}
                    >
                      <ClockIcon />
                    </div>
                    <span
                      className="text-[#d4af37] text-[10px] tracking-[0.22em] uppercase font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      TIME
                    </span>
                    <span
                      className="text-white text-base md:text-lg"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      12:00 PM onwards
                    </span>
                  </div>

                  {/* Venue */}
                  <div className="flex flex-col items-center py-6 px-4 gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                      style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.18)" }}
                    >
                      <LocationIcon />
                    </div>
                    <span
                      className="text-[#d4af37] text-[10px] tracking-[0.22em] uppercase font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      VENUE
                    </span>
                    <span
                      className="text-white text-base md:text-lg"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Conference Hall
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ── SECTION 4: Invitation Message Panel ── */}
              <motion.div
                variants={item}
                className="w-full mb-8 rounded-lg px-6 py-7 md:px-10 md:py-8 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(212,175,55,0.015) 100%)",
                  border: "1px solid rgba(212,175,55,0.1)",
                }}
              >
                {/* Left brain icon decoration */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <BrainIcon />
                </div>
                {/* Right lock icon decoration */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <LockIcon />
                </div>

                <div className="md:px-14">
                  <p
                    className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-4 text-center"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    With great pleasure, Hack With India – JDCOEM cordially invites you to
                    grace the occasion and share your valuable presence with our student
                    community. Your presence would be an honour and an encouragement to our
                    students as we come together to celebrate innovation, technology and
                    collaboration.
                  </p>
                  <p
                    className="text-gray-500 text-sm md:text-base leading-relaxed italic text-center"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Join us for an engaging gathering focused on innovation, coding,
                    technology and student collaboration.
                  </p>
                </div>
              </motion.div>

              {/* ── SECTION 5: Action Buttons ── */}
              <motion.div
                variants={item}
                className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 w-full"
              >
                {/* Add to Calendar */}
                <a
                  href={googleCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 font-light text-xs tracking-[0.18em] uppercase transition-all duration-300 rounded-sm w-full md:w-auto justify-center"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#d4af37",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <CalendarIcon />
                  Add to Calendar
                </a>

                {/* Accept / Confirm */}
                <button
                  onClick={() => setRsvpState("confirmed")}
                  disabled={rsvpState === "confirmed"}
                  className="flex items-center gap-2 px-6 py-3 font-light text-xs tracking-[0.18em] uppercase transition-all duration-500 rounded-sm w-full md:w-auto min-w-[200px] justify-center"
                  style={{
                    border: rsvpState === "confirmed"
                      ? "1px solid #d4af37"
                      : "1px solid rgba(212,175,55,0.3)",
                    background: rsvpState === "confirmed"
                      ? "rgba(212,175,55,0.08)"
                      : "transparent",
                    color: rsvpState === "confirmed" ? "#d4af37" : "#ffffff",
                    fontFamily: "'Inter', sans-serif",
                    cursor: rsvpState === "confirmed" ? "default" : "pointer",
                  }}
                  onMouseEnter={e => {
                    if (rsvpState === "idle") {
                      (e.currentTarget as HTMLElement).style.borderColor = "#d4af37";
                      (e.currentTarget as HTMLElement).style.color = "#d4af37";
                    }
                  }}
                  onMouseLeave={e => {
                    if (rsvpState === "idle") {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    }
                  }}
                >
                  {rsvpState === "idle" ? (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Accept Invitation
                    </>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckIcon />
                      Confirmed
                    </motion.span>
                  )}
                </button>
              </motion.div>

              {/* ── SECTION 6: Footer closing ── */}
              <motion.div variants={item} className="flex flex-col items-center">
                {/* Ornamental gold rule */}
                <GoldDivider className="w-64 mb-6" />

                <p
                  className="text-[#d4af37]/80 italic text-lg md:text-xl mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  We look forward to your gracious presence.
                </p>

                <p
                  className="text-gray-500 text-[10px] tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  With regards,
                </p>
                <p
                  className="text-white text-base md:text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Hack With India, JDCOEM
                </p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}