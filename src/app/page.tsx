'use client';

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import About from "./components/About";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import LearningCarousel from "./components/LearningCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#c2baad] to-white antialiased scroll-smooth text-neutral-800" style={{ backgroundColor: 'var(--color-main)' }}>
      <Navbar />
      <Hero />
      <CTA />
      <About />
      <Projects />
      <Tools />

      {/* Learning */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-caput text-center mb-12">What I’m Learning Now</h2>
        <LearningCarousel />
      </section>

    </main>
  );
}