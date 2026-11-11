import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './HeroBackground.css';

const particles = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 53 + 7) % 100}%`,
  top: `${(index * 31 + 11) % 100}%`,
  size: 3 + (index % 4),
}));

export default function HeroBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return undefined;

    const context = gsap.context(() => {
      // Slow, yoyoing tweens keep the gradient orbs and particles drifting smoothly.
      gsap.to(background.querySelector('.hero-background__orb--cyan'), {
        x: 180,
        y: 110,
        scale: 1.2,
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(background.querySelector('.hero-background__orb--green'), {
        x: -170,
        y: -120,
        scale: 1.2,
        duration: 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      background.querySelectorAll('.hero-background__particle').forEach((particle, index) => {
        gsap.set(particle, { opacity: 0.2 });
        gsap.to(particle, {
          x: index % 2 === 0 ? 70 : -70,
          y: index % 3 === 0 ? -110 : 90,
          opacity: 0.8,
          duration: 3 + (index % 4),
          delay: (index % 6) * 0.25,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });
    }, background);

    return () => {
      // Revert looping tweens when unmounting, including StrictMode remounts.
      context.revert();
    };
  }, []);

  return (
    <div ref={backgroundRef} className="hero-background" aria-hidden="true">
      <div className="hero-background__orb hero-background__orb--cyan" />
      <div className="hero-background__orb hero-background__orb--green" />
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-background__particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}
