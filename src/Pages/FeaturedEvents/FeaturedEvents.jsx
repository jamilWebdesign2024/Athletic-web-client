import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { useNavigate } from "react-router";


const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sorted.slice(0, 6));
      });
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <motion.button
            onClick={() => navigate("/events")}
            className="btn btn-primary px-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Events
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
