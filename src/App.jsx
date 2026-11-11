import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import HeroBackground from './components/HeroBackground';

export default function App() {
  return (
    <div className="relative isolate bg-obsidian min-h-screen text-white selection:bg-accentCyan selection:text-obsidian">
      <HeroBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
