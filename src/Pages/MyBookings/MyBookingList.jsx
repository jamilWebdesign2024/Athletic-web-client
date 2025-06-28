import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import toast from 'react-hot-toast';

const MyBookingList = ({ myApplicationsPromise }) => {

    const initialBookings = use(myApplicationsPromise);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'

    useEffect(() => {
        setBookings(initialBookings);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [initialBookings]);


    const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
    if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('after delete', data);
                if (data.deletedCount > 0) {
                    toast.success("Booking deleted successfully!", { position: "top-right" });
                    setBookings(bookings.filter(b => b._id !== id));
                } else {
                     toast.error("Booking could not be deleted!", { position: "top-right" });
                }
            })
            .catch(() => {
                 toast.error("Something went wrong!", { position: "top-right" });
            });
        }
    });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
                <Lottie animationData={loadingAnimation} loop className="w-60" />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">My Bookings</h2>
                <div className="space-x-2">
                    <button
                        onClick={() => setViewMode('table')}
                        className={`px-3 py-2 rounded ${viewMode === 'table' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
                    >
                        Table View
                    </button>
                    <button
                        onClick={() => setViewMode('card')}
                        className={`px-3 py-2 rounded ${viewMode === 'card' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
                    >
                        Card View
                    </button>
                </div>
            </div>

            {viewMode === 'table' ? (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="overflow-x-auto rounded shadow">
                        <table className="min-w-full bg-white">
                            <thead className="bg-pink-200 text-gray-700">
                                <tr>
                                    <th className="p-2 text-left">Event</th>
                                    <th className="p-2 text-left">Date</th>
                                    <th className="p-2 text-left">Venue</th>
                                    <th className="p-2 text-left">Fee</th>
                                    <th className="p-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map(booking => (
                                    <motion.tr
                                        key={booking._id}
                                        className="border-b hover:bg-pink-50"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <td className="p-2">{booking.eventName}</td>
                                        <td className="p-2">{booking.eventDate}</td>
                                        <td className="p-2">{booking.venue}</td>
                                        <td className="p-2">{booking.fee} BDT</td>
                                        <td className="p-2 text-center">
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded hover:from-red-600 hover:to-red-700 transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {bookings.map(booking => (
                        <motion.div
                            key={booking._id}
                            className="bg-gradient-to-br from-white via-pink-50 to-white rounded-xl shadow-xl p-4 flex flex-col border border-pink-100 hover:shadow-2xl transition"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={booking.picture}
                                alt={booking.eventName}
                                className="w-full h-44 object-cover rounded-lg mb-2"
                                initial={{ opacity: 0.7 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-xl font-bold text-pink-600">{booking.eventName}</h3>
                            <p className="text-sm"><span className="font-semibold">Date:</span> {booking.eventDate}</p>
                            <p className="text-sm"><span className="font-semibold">Venue:</span> {booking.venue}</p>
                            <p className="text-sm"><span className="font-semibold">Fee:</span> {booking.fee} BDT</p>
                            <motion.button
                                onClick={() => handleDelete(booking._id)}
                                className="mt-auto bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition"
                                whileTap={{ scale: 0.95 }}
                            >
                                Delete
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            )}

        </div>
    );
};

export default MyBookingList;
