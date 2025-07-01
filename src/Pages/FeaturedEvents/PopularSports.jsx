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
    }, 500); 
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
                
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                />

                
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-between p-6 text-white">
                 
                  <div className="flex justify-end">
                    <div className="bg-white text-black p-2 rounded-full shadow-md">
                      <FaArrowUpRightDots />
                    </div>
                  </div>

                  
                  <div className="flex-1 flex items-center justify-center text-center px-2">
                    <h3 className="text-3xl font-extrabold leading-tight">
                      {sport.title}
                    </h3>
                  </div>

                  
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


