'use client';
  
import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDelay = 1500,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText((prev) =>
          currentWord.substring(0, prev.length + 1)
        );
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        setDisplayText((prev) =>
          currentWord.substring(0, prev.length - 1)
        );
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) =>
            prev === words.length - 1 ? 0 : prev + 1
          );
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className="whitespace-nowrap">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;
