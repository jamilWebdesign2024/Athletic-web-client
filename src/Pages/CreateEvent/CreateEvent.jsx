import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from '../../utils/axios';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import successAnimation from '../../assets/sucess.json';
import loadingAnimation from '../../assets/loading.json';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const eventInfo = {
      ...data,
      creator_email: user.email,
      creator_photo: user.photoURL,
      creator_name: user.displayName,
      createdAt: new Date().toISOString(),
    };

    try {
      const { data: dataPost } = await axios.post('/events', eventInfo);

      if (dataPost.insertedId || dataPost.success) {
        setSuccess(true);
        Swal.fire('Success!', 'Event created successfully!', 'success');
        setTimeout(() => {
          navigate('/manageEvents');
        }, 2000);
      } else {
        throw new Error('Event creation failed!');
      }
    } catch (err) {
      Swal.fire('Error!', err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-base-200 py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto bg-base-100 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          📌 Create New Event
        </h2>

        {loading && (
          <div className="flex justify-center">
            <Lottie animationData={loadingAnimation} className="w-36 h-36" />
          </div>
        )}

        {success ? (
          <div className="flex justify-center flex-col items-center">
            <Lottie animationData={successAnimation} className="w-44 h-44" />
            <p className="text-success font-semibold mt-2 text-lg">
              Event Created!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="eventName"
              placeholder="Event Name"
              className="input input-bordered w-full"
            />

            <select name="eventType" className="select select-bordered w-full">
              <option value="">Select Event Type</option>
              <option value="Swimming">Swimming</option>
              <option value="Sprinting">Sprinting</option>
              <option value="Long Jump">Long Jump</option>
              <option value="High Jump">High Jump</option>
              <option value="Hurdle Race">Hurdle Race</option>
            </select>

            <input
              type="date"
              name="eventDate"
              className="input input-bordered w-full"
            />
            <input
              type="time"
              name="time"
              placeholder="Event Time"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="venue"
              placeholder="Venue or Stadium Name"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="maxParticipants"
              placeholder="Max Participants"
              className="input input-bordered w-full"
            />
            <input
              type="date"
              name="deadline"
              placeholder="Registration Deadline"
              className="input input-bordered w-full"
            />

            <select name="category" className="select select-bordered w-full">
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Open">Open</option>
            </select>

            <textarea
              name="description"
              rows="3"
              placeholder="Event Description"
              className="textarea textarea-bordered w-full"
            ></textarea>
            <textarea
              name="rules"
              rows="3"
              placeholder="Rules and Guidelines"
              className="textarea textarea-bordered w-full"
            ></textarea>
            <input
              type="text"
              name="picture"
              placeholder="Picture URL"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="fee"
              placeholder="Participation Fee (if any)"
              className="input input-bordered w-full"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full bg-base-200"
              />
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full bg-base-200"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Create Event
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default CreateEvent;
