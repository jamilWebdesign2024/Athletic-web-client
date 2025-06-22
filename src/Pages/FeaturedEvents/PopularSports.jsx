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

import React from 'react';
import { motion } from "framer-motion";


const sports = [
  "Sprinting",
  "Swimming",
  "Long Jump",
  "High Jump",
  "Hurdles",
  "Relay",
];

const PopularSports = () => {
    return (
        <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Most Popular Sports
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {sports.map((sport, i) => (
            <motion.div
              key={i}
              className="bg-white py-6 px-4 rounded-lg shadow-md hover:bg-primary hover:text-white cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {sport}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default PopularSports;
