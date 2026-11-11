import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillClusters = [
  {
    category: "Frontend Core",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vite"]
  },
  {
    category: "Layout & Styling",
    skills: ["CSS Grid", "Flexbox", "Responsive Design", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Motion & UI",
    skills: ["GSAP", "ScrollTrigger", "CSS Animations", "Figma-to-Code"]
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "REST APIs"]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const groups = gsap.utils.toArray('.skill-group');

    ScrollTrigger.batch(groups, {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 md:py-32 max-w-7xl mx-auto px-6 border-t border-borderDark">
      <div className="mb-10 sm:mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-accentCyan mb-2 block">02 // Capabilities</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Engineering Matrix</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillClusters.map((cluster, index) => (
          <div
            key={index}
            className="skill-group opacity-0 translate-y-10 bg-elevated border border-borderDark rounded-2xl p-6"
          >
            <h3 className="font-mono text-xs text-accentCyan uppercase tracking-widest mb-6 pb-3 border-b border-borderDark">
              {cluster.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {cluster.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs bg-zinc-900 border border-borderDark px-3 py-1.5 rounded-lg text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
