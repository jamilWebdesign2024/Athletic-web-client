import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const recentItems = [
  {
    id: 1,
    title: "Annual Sports Meet 2025",
    date: "Aug 05, 2025",
    description: "Experience the thrill as top athletes compete for glory in various track and field events.",
    category: "Competition"
  },
  {
    id: 2,
    title: "Fitness Bootcamp",
    date: "Aug 10, 2025",
    description: "A high-energy bootcamp designed to challenge and push your limits to the next level.",
    category: "Training"
  },
  {
    id: 3,
    title: "Athletic Hub Marathon",
    date: "Aug 20, 2025",
    description: "Join the city's biggest marathon and test your endurance alongside hundreds of runners.",
    category: "Event"
  }
];

export default function Recent() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-3"
          >
            Recent Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-base-content/70 max-w-2xl mx-auto"
          >
            Stay updated with the latest events and activities from Athletic Hub
          </motion.p>
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-8">
          {recentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-base-200 border border-base-300/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-secondary">
                    <Calendar size={18} className="flex-shrink-0" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-base-content/80 mb-5 flex-grow">{item.description}</p>
                
                <button className="flex items-center gap-2 text-primary font-medium group-hover:text-secondary transition-colors w-fit">
                  <span className="group-hover:underline underline-offset-4">Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn btn-primary btn-outline px-8">
            View All Highlights
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}