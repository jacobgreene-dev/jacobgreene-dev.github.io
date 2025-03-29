// components/LearningCarousel.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const learningItems = [
  {
    title: 'Python',
    description: 'Expanding my knowledge of Python3 by building web scrappers and implementing advanced algorithms.',
  },
  {
    title: 'Machine Learning',
    description: 'Learning the fundamentals, frameworks, and build processes though group programming exercises.',
  },
  {
    title: 'GitHub Actions',
    description: 'Building CI/CD pipelines for smoother deployments.',
  },
  {
    title: 'Azure / Public Cloud',
    description: 'Undertaking Mircrosoft learn paths to understand the fundamentals of Azure.',
  },
  {
    title: 'UX Design',
    description: 'By creating & maintaining elegant web pages full of transitions and animations.',
  },
];

export default function LearningCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % learningItems.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + learningItems.length) % learningItems.length);
  };

  const getRelativeIndex = (i: number) => {
    const total = learningItems.length;
    return (i + total) % total;
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full flex justify-center items-center h-60 overflow-hidden">
        {learningItems.map((item, i) => {
          const relative = getRelativeIndex(i - index);
          const isCenter = relative === 0;
          const isLeft = relative === learningItems.length - 1;
          const isRight = relative === 1;

          if (!isCenter && !isLeft && !isRight) return null;

          return (
            <motion.div
              key={item.title}
              className="absolute w-72 md:w-80 h-48 p-6 rounded-xl shadow-lg bg-fawn/80 text-neutral-800 backdrop-blur-md text-center"
              animate={{
                scale: isCenter ? 1 : 0.8,
                opacity: isCenter ? 1 : 0.5,
                x: isCenter ? 0 : isLeft ? '-100%' : '100%',
                zIndex: isCenter ? 2 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-caput text-white rounded-lg hover:bg-caput/90 transition"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-caput text-white rounded-lg hover:bg-caput/90 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}