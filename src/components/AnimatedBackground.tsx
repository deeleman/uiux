import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  fadeSpeed: number;
  fadeDir: number;
  color: string;
}

interface Orb {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  driftX: number;
  driftY: number;
  speed: number;
  phase: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const particles: Particle[] = [];
    const orbs: Orb[] = [];
    const connections: [number, number][] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    function initParticles() {
      particles.length = 0;
      const count = Math.floor((width * height) / 25000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          fadeSpeed: Math.random() * 0.003 + 0.001,
          fadeDir: Math.random() > 0.5 ? 1 : -1,
          color: Math.random() > 0.7 ? "212,160,74" : "228,228,236",
        });
      }

      // Build connections between nearby particles
      connections.length = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && Math.random() > 0.92) {
            connections.push([i, j]);
          }
        }
      }
    }

    function initOrbs() {
      orbs.length = 0;
      orbs.push({
        x: width * 0.35,
        y: height * 0.3,
        baseX: width * 0.35,
        baseY: height * 0.3,
        radius: Math.min(width, height) * 0.25,
        color: "212,160,74",
        driftX: 80,
        driftY: 20,
        speed: 0.0003,
        phase: 0,
      });
      orbs.push({
        x: width * 0.7,
        y: height * 0.6,
        baseX: width * 0.7,
        baseY: height * 0.6,
        radius: Math.min(width, height) * 0.2,
        color: "26,107,90",
        driftX: -60,
        driftY: 30,
        speed: 0.00025,
        phase: Math.PI * 0.7,
      });
      orbs.push({
        x: width * 0.8,
        y: height * 0.2,
        baseX: width * 0.8,
        baseY: height * 0.2,
        radius: Math.min(width, height) * 0.18,
        color: "120,80,180",
        driftX: 40,
        driftY: -40,
        speed: 0.00035,
        phase: Math.PI * 1.4,
      });
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // Draw orbs
      for (const orb of orbs) {
        const t = time * orb.speed + orb.phase;
        orb.x = orb.baseX + Math.sin(t) * orb.driftX;
        orb.y = orb.baseY + Math.cos(t * 0.7) * orb.driftY;

        const gradient = ctx!.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, `rgba(${orb.color}, 0.12)`);
        gradient.addColorStop(0.4, `rgba(${orb.color}, 0.04)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Draw connection lines
      for (const [i, j] of connections) {
        const a = particles[i];
        const b = particles[j];
        const lineOpacity =
          Math.min(a.opacity, b.opacity) * 0.15 +
          Math.sin(time * 0.001) * 0.02;
        ctx!.strokeStyle = `rgba(212,160,74, ${Math.max(0, lineOpacity)})`;
        ctx!.lineWidth = 0.5;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }

      // Draw and animate particles
      for (const p of particles) {
        p.opacity += p.fadeSpeed * p.fadeDir;
        if (p.opacity >= 0.6) {
          p.fadeDir = -1;
        } else if (p.opacity <= 0.08) {
          p.fadeDir = 1;
        }

        ctx!.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initOrbs();
    initParticles();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      initOrbs();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
