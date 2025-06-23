// // components/PopularSports.jsx
// import { motion } from "framer-motion";

// const sports = [
//   "Sprinting",
//   "Swimming",
//   "Long Jump",
//   "High Jump",
//   "Hurdles",
//   "Relay",
// ];

// const PopularSports = () => {
//   return (
// <section className="py-12 bg-base-200">
//   <div className="container mx-auto px-4">
//     <motion.h2
//       className="text-3xl font-bold text-center mb-8"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       Most Popular Sports
//     </motion.h2>
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
//       {sports.map((sport, i) => (
//         <motion.div
//           key={i}
//           className="bg-white py-6 px-4 rounded-lg shadow-md hover:bg-primary hover:text-white cursor-pointer"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: i * 0.1, duration: 0.4 }}
//         >
//           {sport}
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>
//   );
// };

// export default PopularSports;

// import React from "react";
// import { motion } from "framer-motion";

// const sports = [
//   "Sprinting",
//   "Swimming",
//   "Long Jump",
//   "High Jump",
//   "Hurdles",
//   "Relay",
// ];

// const PopularSports = () => {
//   return (
//     <section className="py-16 bg-base-200">
//       <div className="w-10/12 mx-auto">
//         {/* Heading with animation */}
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 text-neutral"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           ⚡ Most Popular Sports Events
//         </motion.h2>

//         {/* Description under heading */}
//         <motion.p
//           className="text-center max-w-2xl mx-auto text-gray-500 mb-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Explore the most thrilling and competitive sports events that ignite passion, test limits, and bring athletes together on a global stage.
//         </motion.p>

//         {/* Sports Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
//           {sports.map((sport, i) => (
//             <motion.div
//               key={i}
//               className="bg-white text-center py-6 px-4 rounded-xl shadow-lg border border-gray-100 hover:bg-primary hover:text-white transition duration-300 cursor-pointer"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.1, duration: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <span className="text-lg font-semibold">{sport}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularSports;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightDots } from "react-icons/fa6";

const sports = [
  {
    title: "Online Personal Training Class",
    image: "https://i.postimg.cc/vZ1dnMF0/serious-young-sportsman-standing-isolated.jpg",
  },
  {
    title: "Functional Fitness Training",
    image: "https://i.postimg.cc/PxshDvL3/handsome-athlete-in-good-shape-preparing-the-barbe.jpg",
  },
  {
    title: "Weight Loss Coaching Class",
    image: "https://i.postimg.cc/rs9QJ3f0/medium-shot-nutritionist-measuring-patient.jpg",
  },
  {
    title: "Strength Building Program",
    image: "https://i.postimg.cc/sDVnXf2p/data-stats-around-person-doing-physical-activity.jpg",
  },
  {
    title: "Athletic Conditioning",
    image: "https://i.postimg.cc/V68qV4rj/people-working-out-indoors-together-with-dumbbells.jpg",
  },
  {
    title: "Relay Race Training",
    image: "https://i.postimg.cc/FznJNxRC/athletes-starting-line-stadium.jpg",
  },
];

// Hook for animated number typing/deleting
const useTypingNumber = (numberStr) => {
  const [displayed, setDisplayed] = useState(numberStr);
  const [index, setIndex] = useState(numberStr.length);
  const [phase, setPhase] = useState("deleting");

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === "deleting") {
        if (index > 0) {
          setDisplayed((prev) => prev.slice(0, index - 1));
          setIndex((prev) => prev - 1);
        } else {
          setPhase("typing");
        }
      } else {
        if (index < numberStr.length) {
          setDisplayed(numberStr.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        } else {
          setPhase("deleting");
        }
      }
    }, 500); // faster, smoother
    return () => clearInterval(interval);
  }, [index, phase, numberStr]);

  return displayed;
};

const PopularSports = () => {
  return (
    <section className="py-16 bg-pink-20 min-h-screen">
      <div className="w-10/12 mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">
          💪 Popular Sports Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sports.map((sport, i) => {
            const number = (i + 1).toString().padStart(2, "0");
            const animatedNumber = useTypingNumber(number);

            return (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-xl group border border-gray-800 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-between p-6 text-white">
                  {/* Top Arrow */}
                  <div className="flex justify-end">
                    <div className="bg-white text-black p-2 rounded-full shadow-md">
                      <FaArrowUpRightDots />
                    </div>
                  </div>

                  {/* Centered Title */}
                  <div className="flex-1 flex items-center justify-center text-center px-2">
                    <h3 className="text-3xl font-extrabold leading-tight">
                      {sport.title}
                    </h3>
                  </div>

                  {/* Bottom Number (No Hyphen/Line) */}
                  <div className="text-primary text-6xl font-extrabold tracking-wider text-left">
                    {animatedNumber}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularSports;


