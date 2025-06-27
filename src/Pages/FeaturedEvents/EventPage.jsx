import axios from 'axios';
import React, { useEffect, useState } from 'react';
import loadingLottie from '../../assets/loading.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventFetch = async () => {
      try {
        const dataFetch = await axios.get('http://localhost:3000/sports');
        setEvents(dataFetch.data);
      } catch (error) {
        console.log('Failed to fetch events', error);
      } finally {
        setLoading(false);
      }
    };
    eventFetch();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie animationData={loadingLottie} className="w-36 h-36" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event._id || index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-5 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <img
            src={event.posterUrl || 'https://via.placeholder.com/300x200'}
            alt={event.eventName}
            className="rounded-xl w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">{event.eventName}</h3>
          <p className="text-gray-500 mb-1">Type: {event.eventType}</p>
          <p className="text-gray-500 mb-1">Date: {event.eventDate}</p>
          <p className="text-gray-500 mb-1">Venue: {event.venue || 'N/A'}</p>
          <p className="text-sm text-gray-400">{event.description?.slice(0, 80)}...</p>
          <Link to={`/events/${event._id}`}><button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl">
            View Details
          </button></Link>
        </motion.div>
      ))}
    </div>
  );
};

export default EventPage;
