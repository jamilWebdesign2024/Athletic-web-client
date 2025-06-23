import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e._id === id);
        if (found) {
          setEvent(found);
          toast.success("✅ Event details loaded successfully!");
        } else {
          toast.error("❌ Event not found!");
        }
      });
  }, [id]);

  if (!event) return <p className="text-center mt-10 text-xl">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl space-y-6">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-72 object-cover rounded-lg shadow"
      />

      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{event.title}</h2>
        <p className="text-gray-600">{event.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Time Schedule */}
        {event.time_schedule && (
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🕒 Time Schedule</h3>
            <ul className="space-y-1 text-gray-700">
              {Object.entries(event.time_schedule).map(([day, time]) => (
                <li key={day} className="flex justify-between border-b py-1">
                  <span className="capitalize">{day}:</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Info */}
        {event.contact && (
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">📞 Contact</h3>
            <p><strong>Email:</strong> {event.contact.email}</p>
            <p><strong>Phone:</strong> {event.contact.phone}</p>
            <p><strong>Locations:</strong> {event.locations?.join(", ")}</p>
            <p><strong>Hours:</strong> {event.hours}</p>
          </div>
        )}
      </div>

      {/* Challenges */}
      {event.challenges && (
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🔥 Challenges</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {event.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefits */}
      {event.benefits && (
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">✅ Benefits</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {event.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;





// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { toast } from "react-hot-toast";

// const EventDetailsPage = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);

// useEffect(() => {
//   fetch("/events.json")
//     .then((res) => res.json())
//     .then((data) => {
//       const found = data.find((e) => e._id === id);
//       if (found) {
//         setEvent(found);
//         toast.success("Event details loaded successfully!");
//       } else {
//         toast.error("Event not found!");
//       }
//     });
// }, [id]);

// if (!event) return <p className="text-center mt-10 text-xl">Loading...</p>;

//   return (
// <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl space-y-6">
//   <img
//     src={event.image}
//     alt={event.title}
//     className="w-full h-72 object-cover rounded-lg shadow"
//   />

//   <div>
//     <h2 className="text-4xl font-bold text-gray-800 mb-2">{event.title}</h2>
//     <p className="text-gray-600">{event.description}</p>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {/* Time Schedule */}
//     <div>
//       <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🕒 Time Schedule</h3>
//       <ul className="space-y-1 text-gray-700">
//         {Object.entries(event.time_schedule).map(([day, time]) => (
//           <li key={day} className="flex justify-between border-b py-1">
//             <span className="capitalize">{day}:</span>
//             <span>{time}</span>
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Contact Info */}
//     <div>
//       <h3 className="text-2xl font-semibold text-indigo-600 mb-2">📞 Contact</h3>
//       <p><strong>Email:</strong> {event.contact.email}</p>
//       <p><strong>Phone:</strong> {event.contact.phone}</p>
//       <p><strong>Locations:</strong> {event.locations.join(", ")}</p>
//       <p><strong>Hours:</strong> {event.hours}</p>
//     </div>
//   </div>

//   {/* Challenges */}
//   <div>
//     <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🔥 Challenges</h3>
//     <ul className="list-disc list-inside space-y-1 text-gray-700">
//       {event.challenges.map((challenge, index) => (
//         <li key={index}>{challenge}</li>
//       ))}
//     </ul>
//   </div>

//   {/* Benefits */}
//   <div>
//     <h3 className="text-2xl font-semibold text-indigo-600 mb-2">✅ Benefits</h3>
//     <ul className="list-disc list-inside space-y-1 text-gray-700">
//       {event.benefits.map((benefit, index) => (
//         <li key={index}>{benefit}</li>
//       ))}
//     </ul>
//   </div>
// </div>
//   );
// };

// export default EventDetailsPage;
