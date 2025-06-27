import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  useEffect(() => {
    if (event.deadline) {
      const deadlineDate = new Date(event.deadline);
      const today = new Date();
      setIsDeadlinePassed(today > deadlineDate);
    }
  }, [event.deadline]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = async () => {
    if (!user?.email) {
      Swal.fire('Login Required', 'Please log in to book this event.', 'warning');
      return;
    }
    if (isDeadlinePassed) {
      Swal.fire('Booking Closed', 'Booking deadline has passed.', 'error');
      return;
    }
    const currentEvent = { ...event, user_email: user.email };
    try {
      await axios.post('http://localhost:3000/bookings', currentEvent);
      Swal.fire('Success', 'Your booking has been confirmed!', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <Lottie animationData={loadingAnimation} loop className="w-48" />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-10 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left content */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8 space-y-8">
          <motion.h1
            className="text-5xl font-extrabold text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {event.eventName}
          </motion.h1>

          <motion.img
            src={event.picture}
            alt={event.eventName}
            className="rounded-lg w-full object-cover shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div>
              <p><span className="font-semibold">Type:</span> {event.eventType}</p>
              <p><span className="font-semibold">Date:</span> {event.eventDate}</p>
              <p><span className="font-semibold">Time:</span> {event.time}</p>
              <p><span className="font-semibold">Venue:</span> {event.venue}</p>
            </div>
            <div>
              <p><span className="font-semibold">Category:</span> {event.category}</p>
              <p><span className="font-semibold">Fee:</span> {event.fee} BDT</p>
              <p><span className="font-semibold">Max Participants:</span> {event.maxParticipants}</p>
              <p><span className="font-semibold">Deadline:</span> {event.deadline}</p>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-3 text-blue-900">Description</h2>
            <p className="leading-relaxed text-gray-700">{event.description}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-3 text-blue-900">Rules</h2>
            <p className="leading-relaxed text-gray-700">{event.rules}</p>
          </motion.section>
        </div>

        {/* Right booking card */}
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Book Now Section
          </h3>

          <div className="flex-grow" />

          <motion.button
            onClick={handleBookNow}
            disabled={isDeadlinePassed}
            className={`w-full py-3 rounded-lg text-white font-semibold shadow-md
              ${isDeadlinePassed ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
              focus:outline-none focus:ring-4 focus:ring-blue-400 transition mb-4`}
            whileHover={!isDeadlinePassed ? { scale: 1.05 } : {}}
            whileTap={!isDeadlinePassed ? { scale: 0.95 } : {}}
          >
            Book Now
          </motion.button>

          <p className={`text-center text-lg font-semibold
            ${isDeadlinePassed ? 'text-red-600' : 'text-green-600'}`}>
            Deadline: {event.deadline}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
