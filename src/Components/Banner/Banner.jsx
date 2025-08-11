import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://i.postimg.cc/kX0Q2pVC/clouds-anxious-portrait-smart-safety.jpg',
    title: 'Train Like a Champion',
    desc: 'Unlock your potential with world-class athletic training programs, designed to take you to the next level.',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/528wLSvC/black-man-doing-sports-playing-basketball-sunrise-silhouette.jpg',
    title: 'Power Meets Passion',
    desc: 'Join our athletic community where motivation, discipline, and results come together.',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/yYghYH8n/long-shot-young-female-running-nature.jpg',
    title: 'Redefine Your Limits',
    desc: 'Our programs challenge you to push past physical and mental barriers — one rep at a time.',
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTextVisible(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-screen relative overflow-hidden -mb-5" ref={carouselRef}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >

          <img
            src={slide.image}
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            alt={`Slide ${slide.id}`}
          />


          <div className="absolute inset-0 bg-black/50 z-10"></div>


          {index === currentSlide && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="text-5xl sm:text-6xl font-extrabold text-white mb-4"
              >
                {slide.title}
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="text-white mb-6 text-lg max-w-2xl mx-auto"
              >
                {slide.desc}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white mb-4 text-[12px]"
              >
                {slide.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-primary text-base-content px-6 py-3 rounded-full font-semibold cursor-not-allowed transition"
              >
                Explore More
              </motion.button>
            </div>
          )}
        </div>

      ))}
    </div>
  );
};

export default Header;


