// import { useParams } from "react";
// import { useEffect, useState } from "react";

// const EventDetailsPage = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     fetch("/events.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((e) => e._id === id);
//         setEvent(found);
//       });
//   }, [id]);

//   if (!event) return <p className="text-center mt-10">Loading...</p>;

//   return (
    // <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow rounded">
    //   <img
    //     src={event.image}
    //     alt={event.name}
    //     className="w-full h-64 object-cover rounded mb-6"
    //   />
    //   <h2 className="text-3xl font-bold mb-3">{event.name}</h2>
    //   <p className="text-gray-600 mb-2">📍 {event.location}</p>
    //   <p className="text-gray-500 mb-4">📅 {event.date}</p>
    // </div>
//   );
// };

// export default EventDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EventDetailsPage = () => {

    const { id }= useParams();
    const [event, setEvent] = useState(null)
    
    useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e._id === id);
        setEvent(found);
      });
  }, [id]);
  if (!event) return <p className="text-center mt-10">Loading...</p>;

    return (
         <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow rounded">
            <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover rounded mb-6"
            />
            <h2 className="text-3xl font-bold mb-3">{event.name}</h2>
            <p className="text-gray-600 mb-2">📍 {event.location}</p>
            <p className="text-gray-500 mb-4">📅 {event.date}</p>
            </div>
    );
};

export default EventDetailsPage;