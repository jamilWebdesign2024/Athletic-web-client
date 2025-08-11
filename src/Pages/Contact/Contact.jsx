import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // Simulate form submission
    toast.success('Message sent! We will get back to you within 24 hours.', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        // Reset form after success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    });
  };

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className='text-primary font-bold text-4xl md:text-5xl mb-4'>
            Contact Us
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Reach out to our team for any inquiries or to schedule a visit
          </p>
        </motion.div>

        {/* Main Content Grid with divider */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-6 lg:pr-12"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Get in Touch
                </h2>
                <p className="text-base-content/80">
                  Our team is ready to help you with any questions about memberships, training programs, or facilities.
                </p>
              </div>

              {/* Contact Details with hover effects */}
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-base-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Address</p>
                    <p className="text-base-content/80">
                      Firozshah Housing State, I Block<br />
                      Firozshah, Khulshi, Chattogram
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-base-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <p className="text-base-content/80">+880 1878-142210</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-base-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-base-content/80">info@athleticclub.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Vertical divider - visible only on lg screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-base-300 transform -translate-x-1/2"></div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-lg lg:pl-12"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-base-content/80 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full h-12 px-4 border border-base-300 bg-base-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-base-content/80 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full h-12 px-4 border border-base-300 bg-base-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@email.com"
                    required
                    className="w-full h-12 px-4 border border-base-300 bg-base-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full h-12 px-4 border border-base-300 bg-base-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-2">
                    Subject
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-base-300 bg-base-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Training Programs</option>
                    <option value="events">Events & Competitions</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you achieve your athletic goals..."
                    required
                    className="w-full px-4 py-3 border border-base-300 bg-base-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary mt-6 group"
                >
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-xs text-base-content/60 text-center">
                  * Required fields. We'll get back to you within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;