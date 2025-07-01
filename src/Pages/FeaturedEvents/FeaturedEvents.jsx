import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import EventCard from "./EventCard";
import { useNavigate } from "react-router";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://athletic-club-server.vercel.app/featured-events')
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
       setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-pink-50">
      <motion.div
        className="container mx-auto px-6 md:px-10 rounded-xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Events
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <>
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {events.map((event, index) => (
                <SwiperSlide key={event._id}>
                  <motion.div
                    className={`transition-all duration-400 ease-in-out p-10 mb-5 ${
                      index === activeIndex
                        ? 'scale-105 z-20'
                        : 'scale-95 opacity-70 blur-xs'
                    }`}
                  >
                    <EventCard event={event} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-10">
              <motion.button
                onClick={() => navigate("/events")}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show All Events
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default FeaturedEvents;
