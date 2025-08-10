import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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
  Clock
} from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      cardControls.start('visible');
    }
  }, [isInView, mainControls, cardControls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] 
      } 
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: 'backOut' 
      } 
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20 bg-gray-100 bg-dark text-text"
      ref={containerRef}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            About <span className="text-primary dark:text-primary">Elite Athletic Club</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Empowering athletes to achieve greatness through dedication, community, and excellence. 
            Our club has been shaping champions since 1995.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6 rounded-lg text-center border border-border bg-card" 
            variants={statItemVariants}
          >
            <div className="text-primary mx-auto mb-3 flex justify-center">
              <Users size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-1">1500+</h3>
            <p className="text-muted">Active Members</p>
          </motion.div>
          
          <motion.div 
            className="p-6 rounded-lg text-center border border-border bg-card"
            variants={statItemVariants}
          >
            <div className="text-primary mx-auto mb-3 flex justify-center">
              <Award size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-1">87</h3>
            <p className="text-muted">Championships Won</p>
          </motion.div>
          
          <motion.div 
            className="p-6 rounded-lg text-center border border-border bg-card"
            variants={statItemVariants}
          >
            <div className="text-primary mx-auto mb-3 flex justify-center">
              <Activity size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-1">12</h3>
            <p className="text-muted">Sports Disciplines</p>
          </motion.div>
          
          <motion.div 
            className="p-6 rounded-lg text-center border border-border bg-card"
            variants={statItemVariants}
          >
            <div className="text-primary mx-auto mb-3 flex justify-center">
              <Clock size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-1">28</h3>
            <p className="text-muted">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20">
          {/* Mission Card */}
          <motion.div
            className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            variants={featureCardVariants}
            initial="hidden"
            animate={cardControls}
          >
            <div className="text-primary mb-4 flex justify-center">
              <Target size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
            <p className="text-muted leading-relaxed">
              To cultivate athletic excellence through world-class training, mentorship, and facilities. 
              We're committed to developing both physical prowess and mental resilience in our athletes.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            variants={featureCardVariants}
            initial="hidden"
            animate={cardControls}
            transition={{ delay: 0.1 }}
          >
            <div className="text-primary mb-4 flex justify-center">
              <Sparkles size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              To be the global benchmark for athletic development, producing Olympians and 
              community leaders who embody sportsmanship, discipline, and excellence.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            variants={featureCardVariants}
            initial="hidden"
            animate={cardControls}
            transition={{ delay: 0.2 }}
          >
            <div className="text-primary mb-4 flex justify-center">
              <Handshake size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start">
                <Dumbbell className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Discipline & Dedication</span>
              </li>
              <li className="flex items-start">
                <Shield className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Integrity & Respect</span>
              </li>
              <li className="flex items-start">
                <Users className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Teamwork & Community</span>
              </li>
              <li className="flex items-start">
                <Zap className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Excellence in All We Do</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* History and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* History */}
          <motion.div
            className="p-8 rounded-xl border border-border bg-card shadow-lg"
            variants={featureCardVariants}
            initial="hidden"
            animate={cardControls}
            transition={{ delay: 0.3 }}
          >
            <div className="text-primary mb-4 flex justify-center">
              <History size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Our Legacy</h3>
            <p className="text-muted mb-4 leading-relaxed">
              Founded in 1995 by Olympic medalist John Dawson, Elite Athletic Club began as a 
              single-track training facility. Through visionary leadership and community support, 
              we've grown into a 15-acre multisport complex serving athletes of all ages and skill levels.
            </p>
            <p className="text-muted leading-relaxed">
              Our evolution mirrors the growth of sports in our region, from adding our first 
              swimming pool in 2002 to opening the state-of-the-art performance center in 2020.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="p-8 rounded-xl border border-border bg-card shadow-lg"
            variants={featureCardVariants}
            initial="hidden"
            animate={cardControls}
            transition={{ delay: 0.4 }}
          >
            <div className="text-primary mb-4 flex justify-center">
              <Trophy size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Notable Achievements</h3>
            <ul className="space-y-4 text-muted">
              <li className="flex">
                <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded mr-3">2023</span>
                <span>Named "National Club of the Year" by Athletic Association</span>
              </li>
              <li className="flex">
                <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded mr-3">2021</span>
                <span>3 members competed in Tokyo Olympics</span>
              </li>
              <li className="flex">
                <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded mr-3">2018</span>
                <span>Junior basketball team national champions</span>
              </li>
              <li className="flex">
                <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded mr-3">2015</span>
                <span>Opened adaptive sports program</span>
              </li>
              <li className="flex">
                <span className="bg-primary/10 text-primary font-medium px-2 py-1 rounded mr-3">2010</span>
                <span>Hosted NCAA regional championships</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Training Philosophy */}
        <motion.div
          className="mb-16 p-8 rounded-xl bg-card/5 border border-primary/20"
          variants={itemVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Training Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-primary mb-3 mx-auto">
                <Activity size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold mb-2">Holistic Development</h4>
              <p className="text-muted text-sm">
                We train the complete athlete - physical conditioning, mental toughness, and nutritional wellness.
              </p>
            </div>
            <div className="text-center">
              <div className="text-primary mb-3 mx-auto">
                <Zap size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold mb-2">Progressive Training</h4>
              <p className="text-muted text-sm">
                Science-backed methods that adapt to each athlete's growth curve and competitive cycle.
              </p>
            </div>
            <div className="text-center">
              <div className="text-primary mb-3 mx-auto">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold mb-2">Community Focus</h4>
              <p className="text-muted text-sm">
                Building relationships that extend beyond the field to create lifelong bonds and support networks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-8 p-8 rounded-xl bg-primary text-white text-center"
          variants={itemVariants}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Join Our Winning Team</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Whether you're aiming for the podium or just starting your fitness journey, 
            we have the perfect program for you.
          </p>
          <motion.button
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Memberships
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;