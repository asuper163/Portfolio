import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "e-commerce",
    summary: "A responsive online storefront built with JavaScript featuring product browsing, cart state management, and modern UI flows.",
    tags: ["JavaScript", "HTML5/CSS3", "State Management", "Responsive UI"],
    repoUrl: "https://github.com/asuper163",
    liveUrl: "#",
  },
  {
    title: "medical-insurance-map",
    summary: "An interactive map-based web application built with JavaScript to locate and filter medical insurance providers seamlessly.",
    tags: ["JavaScript", "Interactive Maps", "Geolocation", "DOM Manipulation"],
    repoUrl: "https://github.com/asuper163",
    liveUrl: "#",
  },
  {
    title: "Taply",
    summary: "An interactive web application built with JavaScript focused on clean user interactions and responsive frontend architecture.",
    tags: ["JavaScript", "UI/UX", "Component Architecture", "Event Handling"],
    repoUrl: "https://github.com/asuper163",
    liveUrl: "#",
  },
];

export default function Work() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card', sectionRef.current);

    const revealCards = (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        overwrite: true,
      });
    };

    const hideCards = (batch) => {
      gsap.set(batch, { y: 48, opacity: 0 });
    };

    ScrollTrigger.batch(cards, {
      start: 'top 85%',
      onEnter: revealCards,
      onEnterBack: revealCards,
      onLeave: hideCards,
      onLeaveBack: hideCards,
    });
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="py-16 sm:py-20 md:py-32 max-w-7xl mx-auto px-6">
      <div className="mb-10 sm:mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-accentCyan mb-2 block">01 // Selected Work</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Production Repositories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card opacity-0 translate-y-12 bg-elevated border border-borderDark rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-500 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
                <span className="font-mono text-xs text-accentCyan bg-accentCyan/10 px-2.5 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accentCyan transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-mono text-[11px] bg-zinc-900 border border-borderDark px-2.5 py-1 rounded-md text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-borderDark">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider text-white hover:text-accentCyan transition-colors flex items-center gap-1.5"
              >
                GitHub Repo →
              </a>
              <span className="text-zinc-600">|</span>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 cursor-not-allowed">
                Live Demo (Soon)
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
