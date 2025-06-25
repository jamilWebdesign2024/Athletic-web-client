import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from '../../utils/axios'; // ✅ Custom axios instance
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import successAnimation from '../../assets/sucess.json';
import loadingAnimation from '../../assets/loading.json';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    eventDate: '',
    description: '',
    picture: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Form validation
    const { eventName, eventType, eventDate, description, picture } = formData;
    if (!eventName || !eventType || !eventDate || !description || !picture) {
      return Swal.fire('Warning', 'Please fill all fields.', 'warning');
    }

    const eventInfo = {
      ...formData,
      creator_email: user.email,
      creator_name: user.displayName,
    };

    try {
      setLoading(true);

      const { data } = await axios.post('/events', eventInfo);

      if (data.insertedId || data.success) {
        setSuccess(true);
        Swal.fire('Success!', 'Event created successfully!', 'success');
        setTimeout(() => navigate('/manageEvents'), 2000);
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
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">📌 Create New Event</h2>

        {loading && (
          <div className="flex justify-center">
            <Lottie animationData={loadingAnimation} className="w-36 h-36" />
          </div>
        )}

        {success ? (
          <div className="flex justify-center flex-col items-center">
            <Lottie animationData={successAnimation} className="w-44 h-44" />
            <p className="text-green-600 font-semibold mt-2 text-lg">Event Created!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} className="input input-bordered w-full" />
            <select name="eventType" value={formData.eventType} onChange={handleChange} className="select select-bordered w-full">
              <option value="">Select Event Type</option>
              <option value="Swimming">Swimming</option>
              <option value="Sprinting">Sprinting</option>
              <option value="Long Jump">Long Jump</option>
              <option value="High Jump">High Jump</option>
              <option value="Hurdle Race">Hurdle Race</option>
            </select>
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="input input-bordered w-full" />
            <textarea name="description" rows="3" placeholder="Event Description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
            <input type="text" name="picture" placeholder="Picture URL" value={formData.picture} onChange={handleChange} className="input input-bordered w-full" />

            <div className="grid grid-cols-2 gap-4">
              <input type="text" value={user?.displayName} disabled className="input input-bordered w-full bg-gray-100" />
              <input type="email" value={user?.email} disabled className="input input-bordered w-full bg-gray-100" />
            </div>

            <button type="submit" className="btn btn-primary w-full">Create Event</button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default CreateEvent;
