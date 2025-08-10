import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  History,
  Trophy,
  Handshake,
  Dumbbell,
  Shield,
  Zap,
  Award,
  Users,
  Activity,
  Clock,
} from "lucide-react";

const features = [
  { icon: <Sparkles size={36} />, title: "Inspiring Vision", desc: "We aim to create a brighter, stronger, and more connected community." },
  { icon: <Target size={36} />, title: "Clear Goals", desc: "Every step we take is focused on a well-defined mission." },
  { icon: <History size={36} />, title: "Rich History", desc: "Our journey is built on years of trust and dedication." },
  { icon: <Trophy size={36} />, title: "Achievements", desc: "Recognized for excellence and continuous innovation." },
  { icon: <Handshake size={36} />, title: "Strong Bonds", desc: "We value partnerships and mutual growth." },
  { icon: <Dumbbell size={36} />, title: "Strength", desc: "Empowering individuals with skills and confidence." },
  { icon: <Shield size={36} />, title: "Protection", desc: "Ensuring safety and trust for all our members." },
  { icon: <Zap size={36} />, title: "Energy", desc: "Driven by passion and enthusiasm for what we do." },
  { icon: <Award size={36} />, title: "Excellence", desc: "Always striving to exceed expectations." },
  { icon: <Users size={36} />, title: "Community", desc: "A family of members who inspire and support each other." },
  { icon: <Activity size={36} />, title: "Active Lifestyle", desc: "Encouraging a healthy and balanced way of life." },
  { icon: <Clock size={36} />, title: "Timely Actions", desc: "Delivering results when they matter the most." },
];

const About = () => {
  return (
    <div className="bg-base-300">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">About Us</h2>
          <p className="mt-3 text-base-content/80 max-w-2xl mx-auto">
            Discover what makes us unique and how we bring value to our community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-base-content">{item.title}</h3>
              <p className="mt-2 text-base-content/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
