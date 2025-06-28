import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import successAnimation from '../../../assets/sucess.json';
import loadingAnimation from '../../../assets/loading.json';
import { AuthContext } from '../../../Contexts/AuthContext/authContext';
import { motion } from 'framer-motion';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdatedEventPage = () => {
  const { _id, eventName, eventType, eventDate, time, venue, maxParticipants, deadline, category, description, picture, coordinatorEmail, fee, posterUrl, tags, rules } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Toast config
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const handleUpdateEvents = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedEvents = Object.fromEntries(formData.entries());

    setLoading(true);
    setSuccess(false);

    fetch(`http://localhost:3000/sports/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedEvents)
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data.modifiedCount) {
          setSuccess(true);
          Toast.fire({
            icon: 'success',
            title: 'Event updated successfully'
          });
          setTimeout(() => {
            navigate('/manageEvents');
          }, 2000);
        } else {
          Toast.fire({
            icon: 'info',
            title: 'No changes made'
          });
        }
      })
      .catch(() => {
        setLoading(false);
        Toast.fire({
          icon: 'error',
          title: 'Update failed'
        });
      });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">📌 Update Event</h2>

        {loading && (
          <div className="flex justify-center flex-col items-center">
            <Lottie animationData={loadingAnimation} className="w-36 h-36" />
            <p className="text-blue-500 mt-2">Updating event, please wait...</p>
          </div>
        )}

        {success ? (
          <div className="flex justify-center flex-col items-center">
            <Lottie animationData={successAnimation} className="w-44 h-44" />
            <p className="text-green-600 font-semibold mt-2 text-lg">Event updated!</p>
          </div>
        ) : !loading && (
          <form onSubmit={handleUpdateEvents} className="space-y-4">
            <input type="text" name="eventName" defaultValue={eventName} placeholder="Event Name" className="input input-bordered w-full" />

            <select name="eventType" defaultValue={eventType} className="select select-bordered w-full">
              <option value="">Select Event Type</option>
              <option value="Swimming">Swimming</option>
              <option value="Sprinting">Sprinting</option>
              <option value="Long Jump">Long Jump</option>
              <option value="High Jump">High Jump</option>
              <option value="Hurdle Race">Hurdle Race</option>
            </select>

            <input type="date" name="eventDate" defaultValue={eventDate} className="input input-bordered w-full" />
            <input type="time" name="time" defaultValue={time} placeholder="Event Time" className="input input-bordered w-full" />
            <input type="text" name="venue" placeholder="Venue or Stadium Name" defaultValue={venue} className="input input-bordered w-full" />
            <input type="number" name="maxParticipants" defaultValue={maxParticipants} placeholder="Max Participants" className="input input-bordered w-full" />
            <input type="date" name="deadline" placeholder="Registration Deadline" defaultValue={deadline} className="input input-bordered w-full" />

            <select name="category" defaultValue={category} className="select select-bordered w-full">
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Open">Open</option>
            </select>

            <textarea name="description" defaultValue={description} rows="3" placeholder="Event Description" className="textarea textarea-bordered w-full"></textarea>
            <textarea name="rules" defaultValue={rules} rows="3" placeholder="Rules and Guidelines" className="textarea textarea-bordered w-full"></textarea>
            <input type="text" name="picture" defaultValue={picture} placeholder="Picture URL" className="input input-bordered w-full" />
            <input type="email" defaultValue={coordinatorEmail} name="coordinatorEmail" placeholder="Coordinator Email" className="input input-bordered w-full" />
            <input type="number" name="fee" defaultValue={fee} placeholder="Participation Fee (if any)" className="input input-bordered w-full" />
            <input type="url" name="posterUrl" defaultValue={posterUrl} placeholder="Poster/Brochure URL" className="input input-bordered w-full" />
            <input type="text" name="tags" defaultValue={tags} placeholder="Event Tags (comma separated)" className="input input-bordered w-full" />

            <div className="grid grid-cols-2 gap-4">
              <input type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full bg-gray-100" />
              <input type="email" defaultValue={user?.email} disabled className="input input-bordered w-full bg-gray-100" />
            </div>

            <button type="submit" className="btn btn-primary w-full">Update Event</button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default UpdatedEventPage;
