import React, { use, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from '../../utils/axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ManageEventsList = ({ manageEventsPromise }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    manageEventsPromise
      .then(data => {
        if (isMounted) setEvents(data);
      })
      .catch(err => {
        if (isMounted) setError('Failed to load events.');
        console.error(err);
      });

    return () => {
      isMounted = false;
    };
  }, [manageEventsPromise]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This event will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`/events/${id}`);
        toast.success("Booking deleted successfully!", { position: "top-right" });
        setEvents(events.filter(e => e._id !== id));
      } catch (err) {
        console.error(err);
         toast.error("Booking could not be deleted!", { position: "top-right" });
      }
    }
  };

//   const handleUpdate = (id) => {
//     navigate(`/update-event/${id}`);
//   };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-300 via-pink-300 to-rose-300">
        <p className="text-white text-base sm:text-lg font-semibold">{error}</p>
      </div>
    );
  }

  if (events === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-300 via-pink-300 to-rose-300">
        <div className="animate-spin rounded-full h-12 w-12 sm:h-14 sm:w-14 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-violet-300 via-pink-300 to-rose-300 p-3 sm:p-6 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-rose-500">
          Manage My Events
        </h2>

        {events.length === 0 ? (
          <div className="text-center space-y-3">
            <p className="text-gray-600 text-base sm:text-lg">No events created yet.</p>
            <button
              onClick={() => navigate('/create-event')}
              className="btn btn-primary px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium"
            >
              Create Event
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-md shadow-sm">
            <table className="table w-full text-center text-sm sm:text-base">
              <thead className="bg-rose-100">
                <tr>
                  <th className="p-2 sm:p-3">Event</th>
                  <th className="p-2 sm:p-3">Date</th>
                  <th className="p-2 sm:p-3">Venue</th>
                  <th className="p-2 sm:p-3">Fee</th>
                  <th className="p-2 sm:p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr
                    key={event._id}
                    className="hover:bg-rose-50 transition duration-200"
                  >
                    <td className="font-semibold">{event.eventName}</td>
                    <td>{event.eventDate}</td>
                    <td>{event.venue}</td>
                    <td>{event.fee} BDT</td>
                    <td className="flex flex-col sm:flex-row justify-center items-center gap-1">
                     <Link to={`/updateEvent/${event._id}`}>
                      <button
                        // onClick={() => handleUpdate(event._id)}
                        className="btn btn-outline btn-sm btn-secondary w-full sm:w-auto"
                      >
                        Update
                      </button>
                     </Link>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="btn btn-outline btn-sm btn-error w-full sm:w-auto"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ManageEventsList;
