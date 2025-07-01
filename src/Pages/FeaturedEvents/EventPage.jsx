import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import loadingLottie from '../../assets/loading.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import SearchBar from './SearchBar/SearchBar';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const {user}=use(AuthContext)

  useEffect(() => {
    axios.get('https://athletic-club-server.vercel.app/sports')
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

      <h1 className='text-primary text-6xl font-bold text-center mb-5'>All Athletic Events</h1>
    <h3 className='font-bold mb-2 text-2xl'>Total Events: {filteredEvents.length}</h3>

      <div className='mb-12'><SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /></div>
      
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
                <p className='my-4 text-sm text-gray-600 h-16 overflow-hidden text-ellipsis line-clamp-3'><small>{event.description}</small></p>
                
                <Link to={`/events/${event._id}`}>
                <button className="btn btn-primary w-full rounded-lg transition-transform duration-200 hover:scale-105 my-4">
                  View Details
                </button>
              </Link>
              {event.createdAt && (
                <div className="flex items-center justify-between gap-4 mt-4">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-12 h-12 rounded-full border"
                  />
                  <div className='flex items-end justify-end flex-col'>
                    <p className="text-sm text-gray-500"><small>{event.creator_email}</small></p>
                    <p className="text-xs text-gray-400">
                      <small>🕒 Created: {new Date(event.createdAt).toLocaleDateString('en-GB')}</small>
                    </p>
                  </div>
                </div>
              )}
            </div>
            </motion.div>
      ))
      ) : (
      <p className="text-center text-gray-500 col-span-full">No events found</p>
        )}
    </div>
    </div >
  );
};

export default EventPage;
