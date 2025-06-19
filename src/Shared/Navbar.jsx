import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/authContext';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import '../App.css'


const Navbar = () => {
  const { user, signOutUser } = use(AuthContext); // ✅ useContext instead of use()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink className="text-white" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="text-white" to="/events">Events</NavLink>
      </li>
    </>
  );



  return (
    <div className="bg-dark text-white shadow-md">
      <div className="navbar w-11/12 mx-auto py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-3xl font-bold text-white">
          Athletic<span className="text-primary">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6 items-center">
            {links}
          </ul>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {/* Conditional Login / Profile */}
          {!user ? (
            <Link to="/login" className="btn btn-outline btn-sm bg-primary text-white flex items-center">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
          )
           : (
            <div className="relative">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={user.photoURL || 'https://i.ibb.co/2YjZgZ8/default-user.png'}
                alt="profile"
                title={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
              />

              {/* Profile Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 z-50 w-52 bg-white text-black rounded shadow-lg p-4 text-sm">
                  <p className="text-gray-700 mb-2">👤 {user.displayName || "User"}</p>
                  <hr className="mb-2" />
                  <NavLink to="/create-event" className="block hover:bg-gray-100 px-2 py-1 rounded">📌 Book Event</NavLink>
                  <NavLink to="/myBookings" className="block hover:bg-gray-100 px-2 py-1 rounded">📄 My Bookings</NavLink>
                  <NavLink to="/manageEvents" className="block hover:bg-gray-100 px-2 py-1 rounded">⚙️ Manage Events</NavLink>
                  <button onClick={signOutUser} className="w-full text-left text-red-600 hover:bg-red-100 px-2 py-1 rounded">
                    <FaSignOutAlt className="inline mr-1" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Icon */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



