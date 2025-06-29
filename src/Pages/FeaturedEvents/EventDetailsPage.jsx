// import React, { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import { useParams } from 'react-router';
// import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaEnvelope, FaPhone, FaCheckCircle, FaBolt, FaListUl } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const EventDetailsPage = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     fetch("/events.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((e) => e._id === id);
//         if (found) {
//           setEvent(found);
//           toast.success("✅ Event details loaded successfully!");
//         } else {
//           toast.error("❌ Event not found!");
//         }
//       });
//   }, [id]);


//   if (!event) {
//     return (
//       <div className="flex justify-center mt-20">
//         <p className="text-lg font-semibold text-gray-600">Loading event details...</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-5xl mx-auto px-6 py-10 mt-8 bg-white shadow-2xl rounded-2xl space-y-8"
//     >
//       {/* Event Banner */}
//       <img
//         src={event.image}
//         alt={event.title}
//         className="w-full h-[400px] object-cover rounded-xl shadow-md"
//       />

//       {/* Title & Description */}
//       <div className="space-y-3">
//         <h2 className="text-4xl font-bold text-gray-800">{event.title}</h2>
//         <p className="text-gray-600 text-lg">{event.description}</p>
//       </div>

//       {/* Date & Location */}
//       <div className="flex flex-wrap gap-6 items-center text-gray-700">
//         <div className="flex items-center gap-2 text-lg">
//           <FaCalendarAlt className="text-indigo-600" />
//           <span>{event.date}</span>
//         </div>
//         <div className="flex items-center gap-2 text-lg">
//           <FaMapMarkerAlt className="text-red-500" />
//           <span>{event.location}</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
//         {/* Time Schedule */}
//         {event.time_schedule && (
//           <div className="bg-indigo-50 p-5 rounded-lg shadow-sm">
//             <h3 className="text-2xl font-semibold text-indigo-700 flex items-center gap-2 mb-3">
//               <FaClock /> Time Schedule
//             </h3>
//             <ul className="space-y-2">
//               {Object.entries(event.time_schedule).map(([day, time]) => (
//                 <li
//                   key={day}
//                   className="flex justify-between border-b pb-1 capitalize font-medium text-gray-800"
//                 >
//                   <span>{day}:</span>
//                   <span>{time}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Contact Info */}
//         {event.contact && (
//           <div className="bg-rose-50 p-5 rounded-lg shadow-sm">
//             <h3 className="text-2xl font-semibold text-rose-600 flex items-center gap-2 mb-3">
//               <FaPhone /> Contact Info
//             </h3>
//             <div className="text-gray-800 space-y-1">
//               <p><FaEnvelope className="inline mr-2 text-sm" /> <strong>Email:</strong> {event.contact.email}</p>
//               <p><FaPhone className="inline mr-2 text-sm" /> <strong>Phone:</strong> {event.contact.phone}</p>
//               <p><FaMapMarkerAlt className="inline mr-2 text-sm" /> <strong>Locations:</strong> {event.contact.locations?.join(', ')}</p>
//               <p><FaClock className="inline mr-2 text-sm" /> <strong>Hours:</strong> {event.contact.hours}</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Challenges */}
//       {event.challenges && (
//         <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
//           <h3 className="text-2xl font-semibold text-yellow-700 mb-3 flex items-center gap-2">
//             <FaBolt /> Event Challenges
//           </h3>
//           <ul className="list-disc list-inside space-y-1 text-gray-800">
//             {event.challenges.map((challenge, index) => (
//               <li key={index}>{challenge}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Benefits */}
//       {event.benefits && (
//         <div className="bg-green-50 p-6 rounded-xl shadow-md">
//           <h3 className="text-2xl font-semibold text-green-700 mb-3 flex items-center gap-2">
//             <FaCheckCircle /> Event Benefits
//           </h3>
//           <ul className="list-disc list-inside space-y-1 text-gray-800">
//             {event.benefits.map((benefit, index) => (
//               <li key={index}>{benefit}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default EventDetailsPage;

