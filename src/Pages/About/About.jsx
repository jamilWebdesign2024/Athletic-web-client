import React, { useState, useEffect } from "react";
import { FaUsers, FaDumbbell, FaHandshake, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <motion.section
            className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-dark rounded-2xl shadow-xl text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Header */}
            <header className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-3 text-primary">About AthleticHub</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    AthleticHub is a premier athletic club designed to foster community, excellence, and personal growth for athletes of all levels.
                </p>
                <div className="mt-6 w-24 h-1 bg-primary rounded mx-auto"></div>
            </header>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <FeatureCard
                    icon={<FaUsers size={48} className="text-primary mb-4" />}
                    title="Community Driven"
                    description="Connect and collaborate with fellow athletes, coaches, and enthusiasts in a supportive environment."
                />
                <FeatureCard
                    icon={<FaDumbbell size={48} className="text-primary mb-4" />}
                    title="State-of-the-Art Facilities"
                    description="Access premium gym equipment and professional training spaces designed for peak performance."
                />
                <FeatureCard
                    icon={<FaHandshake size={48} className="text-primary mb-4" />}
                    title="Trusted Partnerships"
                    description="Partnered with top sports brands and nutrition experts for exclusive benefits."
                />
                <FeatureCard
                    icon={<FaAward size={48} className="text-primary mb-4" />}
                    title="Events & Competitions"
                    description="Regularly host competitions and events to challenge and celebrate your achievements."
                />
            </div>

            {/* About Details */}
            <article className="mt-16 max-w-4xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-medium">
                <p>
                    At AthleticHub, we believe fitness is a journey best shared. Since our founding, we have dedicated ourselves to building an inclusive, inspiring space where athletes can train, compete, and grow together.
                </p>
                <p>
                    Our team of experienced coaches tailor programs to your individual goals, whether you’re a beginner or a seasoned competitor. From strength training to endurance, we provide the tools and support you need to succeed.
                </p>
                <p>
                    Join our vibrant community and experience the motivation, expertise, and camaraderie that make AthleticHub the go-to destination for athletes seeking excellence.
                </p>
            </article>
        </motion.section>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-60 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {icon}
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{description}</p>
        </motion.div>
    );
};

export default About;
