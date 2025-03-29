// components/LearningCarousel.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const learningItems = [
  {
    title: 'Python',
    description: 'Expanding my knowledge of Python3 by building web scrapers and implementing advanced algorithms.',
  },
  {
    title: 'Machine Learning',
    description: 'Learning the fundamentals, frameworks, and build processes through group programming exercises.',
  },
  {
    title: 'GitHub Actions',
    description: 'Building CI/CD pipelines for smoother deployments.',
  },
  {
    title: 'Azure / Public Cloud',
    description: 'Undertaking Microsoft Learn paths to understand the fundamentals of Azure.',
  },
  {
    title: 'UX Design',
    description: 'Creating and maintaining elegant web pages full of transitions and animations.',
  },
];

export default function LearningCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = (direction: number) => {
    setIndex((prev) => (prev + direction + learningItems.length) % learningItems.length);
  };

  const getRelativeIndex = (offset: number) => {
    return (index + offset + learningItems.length) % learningItems.length;
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        paginate(1);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, index]);

  return (
    <div
      className="relative w-full flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full flex justify-center items-center h-60 overflow-hidden">
        {[getRelativeIndex(-1), index, getRelativeIndex(1)].map((itemIndex, position) => {
          const isCenter = itemIndex === index;
          const positionClass = position === 0
            ? '-translate-x-full'
            : position === 2
            ? 'translate-x-full'
            : 'translate-x-0';

          return (
            <motion.div
              key={learningItems[itemIndex].title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isCenter ? 1 : 0.5, scale: isCenter ? 1 : 0.8 }}
              transition={{ duration: 1 }}
              className={`absolute w-72 md:w-80 h-48 p-6 rounded-xl shadow-lg bg-fawn/80 text-neutral-800 backdrop-blur-md text-center transform ${positionClass} z-${isCenter ? '10' : '0'}`}
            >
              <h3 className="text-xl font-semibold mb-2">{learningItems[itemIndex].title}</h3>
              <p className="text-sm leading-relaxed">{learningItems[itemIndex].description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-4">
      <button
          onClick={() => paginate(-1)}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-caput bg-caput px-6 py-2 text-white transition ease-out hover:bg-white hover:text-caput"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform ease-out"></span>
          <span className="relative z-10">Prev</span>
        </button>
        <button
          onClick={() => paginate(1)}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-caput bg-caput px-6 py-2 text-white transition ease-out hover:bg-white hover:text-caput"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform ease-out"></span>
          <span className="relative z-10">Next</span>
        </button>
      </div>
    </div>
  );
}
