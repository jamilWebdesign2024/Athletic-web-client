import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
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

  // Helper function to determine if slide is active/center
  const isActiveSlide = (slideIndex) => {
    if (!events.length) return false;

    // For loop mode, we need to account for cloned slides
    const totalSlides = events.length;
    const normalizedActiveIndex = activeIndex % totalSlides;
    const normalizedSlideIndex = slideIndex % totalSlides;

    return normalizedActiveIndex === normalizedSlideIndex;
  };

  return (
    <section className="py-16 bg-base-300">
      <motion.div
        className="container mx-auto px-6 md:px-10 rounded-xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center">
          <motion.h2
            className="text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Events
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our most exciting upcoming competitions, training camps, and community events
          </motion.p>
        </div>


        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <>
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Autoplay]}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1.2}
              loop={true}
              speed={800}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {events.map((event, index) => (
                <SwiperSlide key={event._id}>
                  {({ isActive }) => (
                    <motion.div
                      className={`transition-all duration-500 ease-in-out p-10 mb-5 ${isActive
                        ? 'scale-105 z-20 opacity-100 blur-none'
                        : 'scale-95 opacity-60 blur-sm'
                        }`}
                      animate={{
                        scale: isActive ? 1.05 : 0.95,
                        opacity: isActive ? 1 : 0.6,
                        filter: isActive ? 'blur(0px)' : 'blur(2px)',
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <EventCard event={event} />
                    </motion.div>
                  )}
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