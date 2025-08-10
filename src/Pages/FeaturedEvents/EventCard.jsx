import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleViewDetails = () => {
    Swal.fire({
      title: 'Redirecting...',
      text: `You're viewing details for "${event.eventName}"`,
      icon: 'info',
      timer: 1500,
      showConfirmButton: false
    })
  };

  return (
    <div
      className="bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <figure className="w-full h-48 overflow-hidden">
        <img
          src={event.picture}
          alt={event.eventName}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold mb-1 text-primary">
          {event.eventName}
        </h3>
        <p className="text-sm mb-1">📍 {event.venue}</p>
        {/* <p className='my-4'><small>{event.description}</small></p> */}

        {event.createdAt && (
          <div className="flex items-center justify-between gap-4 mt-4">
            <img
              src={event.creator_photo}
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

        <Link to={`/events/${event._id}`}>
          <button onClick={handleViewDetails} className="btn btn-primary w-full rounded-lg transition-transform duration-200 hover:scale-105 my-4">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default EventCard;
