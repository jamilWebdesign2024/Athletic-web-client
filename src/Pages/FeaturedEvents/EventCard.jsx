// import { useNavigate } from "react";

// const EventCard = ({ event }) => {
//   const navigate = useNavigate();

//   return (
    // <div className="card bg-white shadow-md rounded-xl overflow-hidden">
    //   <figure>
    //     <img
    //       src={event.image}
    //       alt={event.name}
    //       className="h-48 w-full object-cover"
    //     />
    //   </figure>
    //   <div className="card-body p-5">
    //     <h3 className="text-xl font-bold mb-2">{event.name}</h3>
    //     <p className="text-gray-600 mb-1">📍 {event.location}</p>
    //     <p className="text-gray-500 mb-4">📅 {event.date}</p>
    //     <button
    //       onClick={() => navigate(`/events/${event._id}`)}
    //       className="btn btn-sm btn-primary"
    //     >
    //       View Details
    //     </button>
    //   </div>
    // </div>
//   );
// };

// export default EventCard;


import React from 'react';
import { useNavigate } from 'react-router';

const EventCard = ({event}) => {
  const navigate = useNavigate();
  return (
     <div className="card bg-white shadow-md rounded-xl overflow-hidden">
      <figure>
        <img
          src={event.image}
          alt={event.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body p-5">
        <h3 className="text-xl font-bold mb-2">{event.name}</h3>
        <p className="text-gray-600 mb-1">📍 {event.location}</p>
        <p className="text-gray-500 mb-4">📅 {event.date}</p>
        <button
          onClick={() => navigate(`/events/${event._id}`)}
          className="btn btn-sm btn-primary"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;