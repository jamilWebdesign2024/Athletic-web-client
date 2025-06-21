// components/FeaturedEvents.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";


const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json") // ✅ Now fetching from public folder
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sorted.slice(0, 6));
      });
  }, []);

  return (
    <section className="py-10 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
