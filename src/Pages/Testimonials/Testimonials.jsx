import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dennis Perez",
    role: "CEO",
    image: "https://i.postimg.cc/y6Xtyk7Y/review-1-1.jpg",
    rating: 5,
    text: "AthleticHub has revolutionized how I discover and join sports events. The platform is intuitive and reliable.",
  },
  {
    name: "Ellen Smets",
    role: "Founder",
    image: "https://i.postimg.cc/PJhckkQj/review-1-1-1.jpg",
    rating: 5,
    text: "This is the best platform for aspiring athletes. It helped me find events and connect with like-minded people.",
  },
  {
    name: "Michael Chen",
    role: "Coach",
    image: "https://i.postimg.cc/y6Xtyk7Y/review-1-1.jpg",
    rating: 4,
    text: "As a coach, managing athlete participation has never been easier. Highly recommended for sports professionals.",
  },
  {
    name: "Sarah Lee",
    role: "Sprinter",
    image: "https://i.postimg.cc/PJhckkQj/review-1-1-1.jpg",
    rating: 5,
    text: "Thanks to AthleticHub, I participated in my first national sprinting competition. Truly a life-changing experience!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 text-gray-800 ">
      <div className="container mx-auto px-4 w-8/12">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear what our users say about their experience with AthleticHub.
        </p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 }, 
          }}
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-pink-50 shadow-md rounded-xl p-6 h-full flex flex-col justify-between items-center text-center">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-gray-600 mt-2">"{testimonial.text}"</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-red-600 font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
