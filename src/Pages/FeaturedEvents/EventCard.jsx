// components/EventCard.jsx
// import { Link } from "react";

// const EventCard = ({ event }) => {
//   return (
    // <div className="card bg-white shadow-md">
    //   <figure>
    //     <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
    //   </figure>
    //   <div className="card-body">
    //     <h3 className="text-xl font-bold">{event.name}</h3>
    //     <p>{event.location}</p>
    //     <p>Date: {event.date}</p>
    //     <Link to={`/events/${event._id}`} className="btn btn-sm btn-primary mt-2">
    //       View Details
    //     </Link>
    //   </div>
    // </div>
//   );
// };

// export default EventCard;


import React from 'react';
import { Link } from 'react-router';

const EventCard = ({event}) => {
    return (
        <div className="card bg-white shadow-md">
      <figure>
        <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-bold">{event.name}</h3>
        <p>{event.location}</p>
        <p>Date: {event.date}</p>
        <Link to={`/events/${event._id}`} className="btn btn-sm btn-primary mt-2">
          View Details
        </Link>
      </div>
    </div>
    );
};

export default EventCard;
