import React from 'react';

const Contact = () => {
    return (
        <section className="py-12 bg-base-300 text-base-content">
            {/* Header - Consistent across all devices */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className='text-primary font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-8 lg:mb-12'>
                    Contact Us
                </h1>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:divide-x lg:divide-gray-200">

                    {/* Left Column - Contact Info */}
                    <div className="flex flex-col justify-center space-y-6 lg:pr-12">
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                                Get in Touch with Our Athletic Club
                            </h2>
                            <p className="text-base sm:text-lg text-base-content/70 mb-6">
                                Fill in the form to start a conversation with our team
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                            <div className="flex items-start space-x-3 p-3 rounded-lg bg-base-100/50">
                                <div className="flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-primary">Address</p>
                                    <p className="text-sm text-base-content/80">
                                        Firozshah Housing State, I Block<br />
                                        Firozshah, Khulshi, Chattogram
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-base-100/50">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-primary">Phone</p>
                                    <p className="text-sm text-base-content/80">+880 1878-142210</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-base-100/50">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-primary">Email</p>
                                    <p className="text-sm text-base-content/80">info@athleticclub.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:pl-12">
                        <form noValidate className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        required
                                        className="w-full h-12 px-4 border border-gray-300 bg-base-100 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        required
                                        className="w-full h-12 px-4 border border-gray-300 bg-base-100 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    placeholder="john.doe@email.com"
                                    required
                                    className="w-full h-12 px-4 border border-gray-300 bg-base-100 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+880 1XXX-XXXXXX"
                                    className="w-full h-12 px-4 border border-gray-300 bg-base-100 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <select className="w-full h-12 px-4 border border-gray-300 bg-base-100 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors">
                                    <option value="">Select a topic</option>
                                    <option value="membership">Membership Inquiry</option>
                                    <option value="training">Training Programs</option>
                                    <option value="events">Events & Competitions</option>
                                    <option value="facilities">Facilities</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell us how we can help you achieve your athletic goals..."
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 bg-base-100 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-content font-semibold py-4 px-6 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Send Message
                                </button>
                            </div>

                            <p className="text-xs text-base-content/60 text-center">
                                * Required fields. We'll get back to you within 24 hours.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;