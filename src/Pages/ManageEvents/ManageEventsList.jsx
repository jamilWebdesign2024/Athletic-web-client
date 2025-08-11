import React, { use, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from '../../utils/axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';

const ManageEventsList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(null);
  const { user } = use(AuthContext);
  const userEmail = user.email;

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/events?creator_email=${userEmail}`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, [userEmail, axiosSecure]);

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
        toast.success('Event deleted successfully!', { position: 'top-right' });
        setEvents(events.filter((e) => e._id !== id));
      } catch (err) {
        toast.error('Event could not be deleted!', { position: 'top-right' });
      }
    }
  };

  if (events === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-100">

        <div className="flex justify-center items-center min-h-screen">
          <Lottie animationData={loadingAnimation} loop className="w-60" />
        </div>


      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-base-100 p-3 sm:p-6 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto bg-base-200 rounded-lg shadow-xl p-4 sm:p-6 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary text-center">
          Manage My Events
        </h2>

        {events.length === 0 ? (
          <div className="text-center space-y-3">
            <p className="text-base-content text-base sm:text-lg">No events created yet.</p>
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
              <thead className="bg-primary/20">
                <tr>
                  <th className="p-2 sm:p-3 text-primary">Event</th>
                  <th className="p-2 sm:p-3 text-primary">Date</th>
                  <th className="p-2 sm:p-3 text-primary">Venue</th>
                  <th className="p-2 sm:p-3 text-primary">Fee</th>
                  <th className="p-2 sm:p-3 text-primary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr
                    key={event._id}
                    className="hover:bg-primary/10 transition duration-200 cursor-pointer"
                  >
                    <td className="font-semibold text-base-content">{event.eventName}</td>
                    <td className="text-base-content">{event.eventDate}</td>
                    <td className="text-base-content">{event.venue}</td>
                    <td className="text-base-content">{event.fee} BDT</td>
                    <td className="flex flex-col sm:flex-row justify-center items-center gap-1">
                      <Link to={`/updateEvent/${event._id}`}>
                        <button className="btn btn-outline btn-sm btn-secondary w-full sm:w-auto">
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
