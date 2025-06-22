// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';


// // const background1 = {
// //   backgroundImage: `url(${bg1})`,
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// //   };

// // const background2 = {
// //   backgroundImage: `url(${bg2})`,
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// // };

// // const background3 = {
// //   backgroundImage: `url(${bg3})`,
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// // };

// const slides = [
//   {
//     id: 1,
//     image: 'https://i.postimg.cc/kX0Q2pVC/clouds-anxious-portrait-smart-safety.jpg',
//     title: 'Train Like a Champion',
//     desc: 'Unlock your potential with world-class athletic training programs, designed to take you to the next level.',
//   },
//   {
//     id: 2,
//     image: 'https://i.postimg.cc/528wLSvC/black-man-doing-sports-playing-basketball-sunrise-silhouette.jpg',
//     title: 'Power Meets Passion',
//     desc: 'Join our athletic community where motivation, discipline, and results come together.',
//   },
//   {
//     id: 3,
//     image: 'https://i.postimg.cc/yYghYH8n/long-shot-young-female-running-nature.jpg',
//     title: 'Redefine Your Limits',
//     desc: 'Our programs challenge you to push past physical and mental barriers — one rep at a time.',
//   },
// ];

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [textVisible, setTextVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextVisible(false);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setTextVisible(true);
//       }, 500); // hide text during transition
//     }, 6000); // slide interval

//     return () => clearInterval(interval);
//   }, []);


//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           style={slide.bg}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           } bg-black bg-opacity-40 bg-blend-overlay flex items-center justify-center px-4 text-center`}
//         >
//             <img src={slide.image} className="w-full h-full object-cover absolute top-0 left-0 z-0" alt={`Slide ${slide.id}`} />
//             {/* ✅ Black Overlay */}
          


//           {index === currentSlide && (
//             <div>
//               <motion.h1
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: textVisible ? 1 : 0 }}
//                 transition={{ duration: 1 }}
//                 className="text-5xl sm:text-6xl font-extrabold text-white mb-4"
//               >
//                 {slide.title}
//               </motion.h1>
//               <motion.h4
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: textVisible ? 1 : 0 }}
//                 transition={{ duration: 1.2 }}
//                 className="text-white mb-6 text-lg max-w-2xl"
//               >
//                 {slide.desc}
//               </motion.h4>
//               <motion.button
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: textVisible ? 1 : 0 }}
//                 transition={{ duration: 1.4 }}
//                 className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
//               >
//                 Explore More
//               </motion.button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Banner;


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
    <div className="carousel w-full h-screen relative overflow-hidden" ref={carouselRef}>
      {slides.map((slide, index) => (
        <div
  key={slide.id}
  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
  }`}
>
  {/* Background Image */}
  <img
    src={slide.image}
    className="w-full h-full object-cover absolute top-0 left-0 z-0"
    alt={`Slide ${slide.id}`}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Text Content */}
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
        className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
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


