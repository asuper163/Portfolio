import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const email = "ahmedabdelfattah0098@gmail.com";

  useGSAP(() => {
    gsap.from('.contact-anim', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 md:py-32 max-w-5xl mx-auto px-6 text-center border-t border-borderDark">
      <span className="contact-anim font-mono text-xs uppercase tracking-widest text-accentCyan mb-3 block">03 // Contact</span>
      <h2 className="contact-anim text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
        Let's build something interactive together.
      </h2>
      <p className="contact-anim text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10">
        Open to junior frontend roles, contract opportunities, and creative engineering collaborations.
      </p>

      <div className="contact-anim flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16">
        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-xl bg-white text-obsidian font-semibold hover:bg-zinc-200 transition-all duration-200 font-mono text-sm flex items-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5 text-accentEmerald" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              Copied to Clipboard!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
              Copy Email Address
            </>
          )}
        </button>
      </div>

     
      <div className="mt-16 md:mt-24 pt-8 border-t border-borderDark/50 font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Ahmed Abdelfattah Ibrahim. Built with React, Vite.
      </div>
    </section>
  );
}
