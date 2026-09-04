"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Circuit board line nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 18; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Static circuit traces (left side — like the image)
    const leftTraces = [
      // Top-left circuit board pattern
      { points: [[60, 80], [60, 160], [120, 160], [120, 220], [80, 220], [80, 300]] },
      { points: [[40, 120], [100, 120], [100, 180], [160, 180]] },
      { points: [[30, 200], [70, 200], [70, 260], [130, 260], [130, 320]] },
      // Bottom-left dots grid
    ];

    // Dot grid pattern (bottom left)
    const dots: { x: number; y: number }[] = [];
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        dots.push({ x: 20 + col * 18, y: canvas.height - 130 + row * 18 });
      }
    }

    // Right side — circular radar rings (top right, middle right)
    const rings = [
      { x: canvas.width - 80, y: 200, maxR: 90 },
      { x: canvas.width - 60, y: canvas.height * 0.55, maxR: 80 },
    ];

    let frame = 0;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static circuit traces (left side)
      leftTraces.forEach((trace) => {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(212, 175, 55, 0.12)";
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        for (let i = 0; i < trace.points.length; i++) {
          const [px, py] = trace.points[i];
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Small circle nodes at corners
        trace.points.forEach(([px, py], idx) => {
          if (idx > 0 && idx < trace.points.length - 1) {
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(212, 175, 55, 0.25)";
            ctx.fill();
          }
        });
      });

      // Draw dot grid bottom-left
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212, 175, 55, 0.15)";
        ctx.fill();
      });

      // Draw radar rings right side
      rings.forEach((ring) => {
        for (let r = 25; r <= ring.maxR; r += 22) {
          ctx.beginPath();
          ctx.arc(ring.x, ring.y, r, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(212, 175, 55, 0.08)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        // Crosshairs
        ctx.beginPath();
        ctx.moveTo(ring.x - ring.maxR, ring.y);
        ctx.lineTo(ring.x + ring.maxR, ring.y);
        ctx.moveTo(ring.x, ring.y - ring.maxR);
        ctx.lineTo(ring.x, ring.y + ring.maxR);
        ctx.strokeStyle = "rgba(212, 175, 55, 0.06)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Right side decorative lock icon outline (top right corner)
      const lockX = canvas.width - 70;
      const lockY = 340;
      ctx.beginPath();
      ctx.roundRect(lockX - 20, lockY - 10, 40, 35, 4);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(lockX, lockY - 14, 13, Math.PI, 0);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Floating connection nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Connect nearby nodes with very faint lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.04 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frame++;
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}