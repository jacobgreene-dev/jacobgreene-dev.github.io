'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#c2baad] to-white antialiased scroll-smooth text-neutral-800">
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-semibold text-caput">Jacob Greene</span>
          <ul className="flex gap-6 text-sm text-caput">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="/resume02-1.pdf" download className="hover:underline">Resume</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero / Intro */}
      <section className="min-h-screen flex relative px-6 pt-20 bg-[url('/bg.jpg')] bg-cover bg-center text-neutral-800 transition-colors duration-1000">
        <div className="flex flex-col md:flex-row justify-between w-full my-16 max-w-7xl mx-auto p-6">
          <div className="text-left absolute top-60 left-15">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl">
              <h1 className="md:text-6xl font-bold">Full Stack Engineer</h1>
            </div>
          </div>
        </div>

        <div className="text-left max-w-md absolute bottom-30 right-15 mx-auto p-6">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl">

            <h3 className="text-3xl font-semibold">
              I am a developer based in North Carolina. I have many years of experience in full stack development. Learning the art of silicon chips and fishing are my passions.
            </h3>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-caput">About Me</h2>
          <p className="text-base leading-7">
            I'm a full-stack software developer with a strong interest in backend systems, database management, and cloud infrastructure. 
            I enjoy solving complex problems, optimizing performance, and exploring the internals of how code runs. 
            My experience spans academic projects, IT consulting outreach, and professional hands-on hardware work across diverse mobile platforms.
            <br /><br />
            I'm comfortable with many languages like C++ and Python. Although I am always learning new languages and technologies. 
            I'm always exploring new tech and approaches to stay adaptable and efficient. 
            I collaborate well in teams and value clear communication and thoughtful problem-solving.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-caput text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://github.com/jacobgreene-dev/jacobgreene-dev.github.io")}
          >
            <h3 className="text-xl font-semibold mb-2">MY-PORTFOLIO</h3>
            <p className="text-sm mb-4">
              Next.js portfolio site with TypeScript, Tailwind CSS, and Framer Motion animations. Hosted on Github Pages. 
            </p>
            <div className="flex gap-3 text-sm flex-wrap">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
              <span>GitHub</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://github.com/jacobgreene-dev/ideal-bet")}
          >
            <h3 className="text-xl font-semibold mb-2">IDEAL-BET</h3>
            <p className="text-sm mb-4">
              NBA analytics web app for sports betting insights — built with Next.js, TypeScript, and API integration.
            </p>
            <div className="flex gap-3 text-sm flex-wrap">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>Tailwind</span>
              <span>Machine Learning</span>
              <span>REST API</span>
              <span>GitHub</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://github.com/jacobgreene-dev/CSC471-JetWebApp")}
          >
            <h3 className="text-xl font-semibold mb-2">CSC471-JET-WEB-APP</h3>
            <p className="text-sm mb-4">
            Full-stack airline booking system built as part of an academic capstone project for CSC471. 
            The application simulates a private aircraft dealership platform, 
            supporting role-based access and real-time management of transactions.
            </p>
            <div className="flex gap-3 text-sm flex-wrap">
              <span>Laravel</span>
              <span>Blade</span>
              <span>PHP</span>
              <span>PostgreSQL</span>
              <span>Tailwind</span>
              <span>GitHub</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://github.com/jacobgreene-dev/Cardinal")}
          >
            <h3 className="text-xl font-semibold mb-2">CARDINAL</h3>
            <p className="text-sm mb-4">
              Spring application for individuals interested in hiking to find like-minded individuals for adventures on local trails.
              Including a map of local trails to the Piedmont area, 
              a chatroom based on interest in a particular trail/park, 
              and wildlife information.

            </p>
            <div className="flex gap-3 text-sm flex-wrap">
              <span>Spring Boot</span>
              <span>Thymeleaf</span>
              <span>Java</span>
              <span>Javascript</span>
              <span>H2 Database</span>
              <span>GitHub</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-caput text-center mb-12"
        >
          Tools & Technologies
        </motion.h2>

        <div className="grid grid-cols-4 gap-4 justify-center">
          {['C', 'C++', 'Python3', 'Java', 'Typescript', 'React', 'GitHub', 'Next.js', 'Spring', 'SQL', 'PostgreSQL', 'Docker', 'Azure', 'Mircosoft Suite', 'Windows', 'Linux'].map(tool => (
            <span
              key={tool}
              className="bg-fawn/60 text-caput text-center px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
