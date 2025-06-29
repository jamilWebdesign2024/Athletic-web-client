import React, { useState, useEffect, use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = use(AuthContext);

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-6 py-10 mt-8 bg-pink-100 shadow-3xl rounded-3xl space-y-8"
    >
      {/* User Info + Book Now */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <p className="font-semibold text-gray-700">Creator: <span className='font-normal'>{event.creator_name}</span></p>
            <p className="text-sm text-gray-500">{event.creator_email}</p>
            <p className="text-xs text-gray-400">
              🕒 Created: {new Date(event.createdAt).toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>

        <div className='flex flex-col items-end justify-end gap-4'>
          <motion.button
          onClick={handleBookNow}
          disabled={isDeadlinePassed}
          className={`px-5 py-3 rounded-lg text-white font-semibold shadow-md
            ${isDeadlinePassed ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          whileHover={!isDeadlinePassed ? { scale: 1.05 } : {}}
          whileTap={!isDeadlinePassed ? { scale: 0.95 } : {}}
        >
          Book Now
        </motion.button>
        <h3 className={`font-semibold
            ${isDeadlinePassed ? 'text-red-600' : 'text-primary'}`}>DeadLine: {event.deadline}</h3>
        </div>
      </div>

      {/* Event Image */}
      <img
        src={event.picture}
        alt={event.eventName}
        className="w-full h-[400px] object-cover rounded-xl shadow-md"
      />

      {/* Title & Description */}
      <div className="space-y-3">
        <h2 className="text-4xl font-bold text-gray-800">{event.eventName}</h2>
        <p className="text-gray-600 text-lg">{event.description}</p>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-6 items-center text-gray-700">
        <div className="flex items-center gap-2 text-lg">
          <FaCalendarAlt className="text-indigo-600" /> <span>{event.eventDate}</span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <FaMapMarkerAlt className="text-red-500" /> <span>{event.venue}</span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <FaClock className="text-blue-500" /> <span>{event.time}</span>
        </div>
      </div>

      {/* Rules */}
      <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Rules</h3>
        <p className="text-gray-800">{event.rules}</p>
      </div>

      {/* Benefits if available */}
      {event.benefits && (
        <div className="bg-green-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <FaCheckCircle /> Benefits
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {event.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default EventDetails;
