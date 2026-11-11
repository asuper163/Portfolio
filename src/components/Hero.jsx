import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-anim', {
      y: 40,
      opacity: 0,
      duration: 1.1,
      stagger: 0.15,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="hero-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-elevated border border-borderDark mb-6">
          <span className="font-mono text-xs text-accentCyan">Cairo, Egypt (UTC+2)</span>
        </div>

        <h1 className="hero-anim text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Ahmed Abdelfattah Ibrahim
        </h1>

        <p className="hero-anim font-mono text-accentCyan text-lg sm:text-xl tracking-wide mb-8">
          Junior Frontend Developer & Creative Coder
        </p>

        <p className="hero-anim max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
          Crafting high-performance, accessible, and fluid user interfaces with React, modern JavaScript, and precise animation choreography.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-obsidian font-semibold hover:bg-zinc-200 transition-all duration-200"
          >
            View Selected Work
          </a>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/asuper163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-4 rounded-xl bg-elevated border border-borderDark text-white font-medium hover:border-zinc-500 transition-all duration-200 text-center"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-abdelfattah-583482377/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-4 rounded-xl bg-elevated border border-borderDark text-white font-medium hover:border-zinc-500 transition-all duration-200 text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
