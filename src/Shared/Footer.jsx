import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoBold } from "react-icons/pi";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo Section */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
				<Link to="/" className="text-3xl font-bold">
						Athletic<span className="text-accent">Hub</span>
				</Link>
            
          </div>

          {/* Links Section */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-white/80 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white/80 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href='https://www.facebook.com/skudbjuj' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className="text-2xl hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href='https://www.linkedin.com/in/md-jamil-uddin-9886b4303/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className="text-2xl hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href='https://www.youtube.com/@MDJAMILUDDINJISHAN' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className="text-2xl hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <IoLogoYoutube />
                </a>
                <a 
                  href='https://www.instagram.com/jamiluddinjishan/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className="text-2xl hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <PiInstagramLogoBold />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p>© {new Date().getFullYear()} AthleticHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;