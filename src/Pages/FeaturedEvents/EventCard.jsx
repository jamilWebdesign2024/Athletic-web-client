import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const {user}=use(AuthContext)

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
        <p className='my-4'><small>{event.description}</small></p>
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
    </div>
  );
};

export default EventCard;
