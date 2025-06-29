import React from 'react';
import { Link, useNavigate } from 'react-router';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <figure className="w-full h-48 overflow-hidden">
        <img
          src={event.picture}
          alt={event.eventName}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-800">
          {event.eventName}
        </h3>
        <p className="text-gray-600 text-sm mb-1">📍 {event.venue}</p>
        {/* <p className="text-gray-500 text-sm mb-1">📅 {event.eventDate}</p> */}

        {/* ✅ createdAt date nicely formatted */}
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
    </div>
  );
};

export default EventCard;
