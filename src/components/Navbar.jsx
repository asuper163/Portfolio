import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-obsidian/80 border-b border-borderDark">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold tracking-wider text-white hover:text-accentCyan transition-colors">
          AAI<span className="text-accentCyan">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">01 // Work</a>
          <a href="#skills" className="hover:text-white transition-colors">02 // Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">03 // Contact</a>
        </nav>

        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-elevated border border-borderDark">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentEmerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accentEmerald"></span>
          </span>
          <span className="font-mono text-[11px] text-zinc-300 tracking-wide">Open to Work</span>
        </div>
      </div>
    </header>
  );
}
