// import React, { use, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router';
// import axios from '../../utils/axios'; // Using your custom axios instance
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../Contexts/AuthContext/authContext';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import successAnimation from '../../assets/sucess.json';
// import loadingAnimation from '../../assets/loading.json';

// const EventDetails = () => {
//   const { id } = useParams();
//   const { user } = use(AuthContext);
//   const navigate = useNavigate();
  
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [bookingLoading, setBookingLoading] = useState(false);
//   const [bookingSuccess, setBookingSuccess] = useState(false);

//   // Fetch event details using your axios instance
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const { data } = await axios.get(`/events/${id}`);
//         setEvent(data);
//       } catch (err) {
//         Swal.fire('Error!', err.response?.data?.message || 'Failed to load event details', 'error');
//         navigate('/events');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [id, navigate]);

//   const handleBookNow = async () => {
//     if (!user) {
//       Swal.fire('Warning', 'Please login to book this event', 'warning');
//       return navigate('/login');
//     }

//     try {
//       setBookingLoading(true);
      
//       const bookingData = {
//         ...event,
//         user_email: user.email,
//         user_name: user.displayName,
//         user_photo: user.photoURL,
//         booking_date: new Date().toISOString(),
//         event_id: id,
//         status: 'pending' // Adding booking status
//       };

//       // Using your axios instance for the booking request
//       const { data } = await axios.post('/bookings', bookingData);

//       if (data.insertedId || data.success) {
//         setBookingSuccess(true);
//         Swal.fire('Success!', 'Event booked successfully!', 'success');
//       } else {
//         throw new Error('Booking failed!');
//       }
//     } catch (err) {
//       Swal.fire('Error!', err.response?.data?.message || err.message, 'error');
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Lottie animationData={loadingAnimation} className="w-36 h-36" />
//       </div>
//     );
//   }

//   if (!event) {
//     return <div className="text-center py-12">Event not found</div>;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-4"
//     >
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-1/2">
//             <img 
//               className="w-full h-full object-cover" 
//               src={event.picture} 
//               alt={event.eventName} 
//             />
//           </div>
          
//           <div className="p-8 md:w-1/2">
//             <div className="uppercase tracking-wide text-sm text-primary font-semibold">
//               {event.eventType}
//             </div>
//             <h1 className="block mt-2 text-2xl font-bold text-gray-800">
//               {event.eventName}
//             </h1>
//             <p className="mt-2 text-gray-600">{event.description}</p>
            
//             <div className="mt-6 space-y-2">
//               <div className="flex items-center">
//                 <span className="font-semibold">Date:</span>
//                 <span className="ml-2">
//                   {new Date(event.eventDate).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </span>
//               </div>
              
//               <div className="flex items-center">
//                 <span className="font-semibold">Organizer:</span>
//                 <span className="ml-2">{event.creator_name}</span>
//               </div>
              
//               <div className="flex items-center">
//                 <span className="font-semibold">Contact:</span>
//                 <a href={`mailto:${event.creator_email}`} className="ml-2 text-blue-600">
//                   {event.creator_email}
//                 </a>
//               </div>
//             </div>
            
//             {user && (
//               <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                 <h3 className="font-semibold mb-2">Your Information:</h3>
//                 <p>Name: {user.displayName}</p>
//                 <p>Email: {user.email}</p>
//               </div>
//             )}
            
//             {bookingSuccess ? (
//               <div className="mt-6 text-center">
//                 <Lottie animationData={successAnimation} className="w-44 h-44 mx-auto" />
//                 <p className="text-green-600 font-semibold mt-2 text-lg">
//                   Booking Confirmed!
//                 </p>
//                 <button
//                   onClick={() => navigate('/myBookings')}
//                   className="mt-4 bg-primary text-white px-4 py-2 rounded"
//                 >
//                   View My Bookings
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={handleBookNow}
//                 disabled={bookingLoading}
//                 className={`mt-6 w-full py-3 px-4 rounded-lg transition ${
//                   bookingLoading 
//                     ? 'bg-gray-400 cursor-not-allowed' 
//                     : 'bg-primary hover:bg-primary-dark text-white font-bold'
//                 }`}
//               >
//                 {bookingLoading ? (
//                   <span className="flex items-center justify-center">
//                     <Lottie animationData={loadingAnimation} className="w-8 h-8" />
//                   </span>
//                 ) : (
//                   'Book Now'
//                 )}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default EventDetails;


import React from 'react';
import { useLoaderData } from 'react-router';

const EventDetails = () => {
  const event = useLoaderData();
  console.log(event);
  
  return (
    <div>
      <h1>{event.eventName}</h1>
    </div>
  );
};

export default EventDetails;