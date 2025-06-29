import axios from 'axios';
import React, { useEffect, useState } from 'react';
import loadingLottie from '../../assets/loading.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import SearchBar from './SearchBar/SearchBar';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  axios.get('http://localhost:3000/sports')
    .then(res => {
      setEvents(res.data);
    })
    .catch(err => {
      console.log('Failed to fetch events', err);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  const filteredEvents = events.filter(event =>
    event.eventName?.toLowerCase().includes(searchTerm) ||
    event.venue?.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie animationData={loadingLottie} className="w-36 h-36" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div
              key={event._id || index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <figure className="w-full h-48 overflow-hidden">
                <img
                  src={event.picture || 'https://via.placeholder.com/300x200'}
                  alt={event.eventName}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-800">
                  {event.eventName}
                </h3>
                <p className="text-gray-600 text-sm mb-1">📍 {event.venue || 'N/A'}</p>
                {event.createdAt && (
                  <p className="text-gray-400 text-xs mb-4">
                  🕒 Created: {new Date(event.createdAt).toLocaleDateString('en-GB')}
                  </p>
                )}

                <Link to={`/events/${event._id}`}>
                  <button className="btn btn-primary w-full rounded-lg transition-transform duration-200 hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventPage;
