import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoBold } from "react-icons/pi";

const Footer = () => {
	return (
		<div className="px-4 bg-primary text-base-content divide-y ">
			<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/3">
					<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
						<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
								<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
							</svg>
						</div>
						<span className="text-3xl font-bold text-white">
							Athletic<span className="text-primary">Hub</span></span>
					</a>
				</div>
				<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
					<div className="space-y-3">
						<h3 className="tracking-wide uppercase">Product</h3>
						<ul className="space-y-1">
							<li>
								<a rel="noopener noreferrer" href="#">Home</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">Events</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">Book Event</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">My Bookings</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">Manage Events</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
						<ul className="space-y-1">
							<li>
								<a rel="noopener noreferrer" href="#">Privacy</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">Terms of Service</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="uppercase dark:text-gray-900">Developers</h3>
						<ul className="space-y-1">
							<li>
								<a rel="noopener noreferrer" href="#">Public API</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">Documentation</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">Guides</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<div className="uppercase dark:text-gray-900">Social media</div>
						<div className="flex justify-start space-x-3">
							<a href='https://www.facebook.com/skudbjuj' target='_blank' rel='noopener noreferrer'>
								<span className='text-2xl text-blue-700'><FaFacebook /></span>
							</a>
							<a href='https://www.linkedin.com/in/md-jamil-uddin-9886b4303/' target='_blank' rel='noopener noreferrer'>
								<span className='text-2xl text-blue-700'><FaLinkedin /></span>
							</a>
							<a href='www.youtube.com/@MDJAMILUDDINJISHAN' target='_blank' rel='noopener noreferrer'>
								<span className='text-2xl text-red-700'><IoLogoYoutube /></span>
							</a>
							<a href='https://www.instagram.com/jamiluddinjishan/' target='_blank' rel='noopener noreferrer'>
								<span className='text-2xl'><PiInstagramLogoBold /></span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="py-6 text-sm text-center dark:text-gray-600">© 2025 Company Co. All rights reserved.</div>
		</div>
	);
};

export default Footer;