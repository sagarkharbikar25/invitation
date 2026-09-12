"use client";

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-[#0c0c0e]" />
      {/* Background Atmosphere Glow - Faint purple on the left */}
      <div className="absolute top-[10%] left-[-15%] w-[40%] h-[70%] rounded-full bg-[#522d5b]/15 blur-[120px]" />
    </div>
  );
}