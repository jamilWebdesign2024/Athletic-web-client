import React, { useEffect, useState } from 'react';
import { Link } from 'react';
import axios from '../../utils/axios';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import successAnimation from '../../assets/sucess.json';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  useEffect(() => {
    axios.get('/events')
      .then(res => {
        setEvents(res.data);
        setFetchSuccess(true);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie animationData={loadingAnimation} className="w-36 h-36" />
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-600">
        No events available.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 bg-gradient-to-br from-blue-50 to-green-100 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">All Upcoming Athletic Events</h1>

        {fetchSuccess && (
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <Lottie animationData={successAnimation} className="w-24 h-24 mx-auto" />
              <p className="text-green-600 font-medium mt-2">Events loaded successfully!</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <motion.div
              key={event._id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.picture}
                alt={event.eventName}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{event.eventName}</h2>
                <p className="text-sm text-gray-600 mt-1">{event.eventType}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Date: {new Date(event.eventDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">Organizer: {event.creator_name}</p>

                <Link to={`/events/${event._id}`}>
                  <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventPage;
