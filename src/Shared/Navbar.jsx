import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/authContext';
import { FaSignInAlt } from 'react-icons/fa';
import { div } from 'motion/react-client';

const Navbar = () => {

    const {user, signOutUser}=use(AuthContext);
    const [dropdownOpen, setDropdownOpen]= useState(false);


    const links =(
        <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/events"><li>Events</li></NavLink>
        </>
    )


    return (
        <div className='navbar bg-base-100 shadow-sm px-4 flex items-center justify-between'>

            {/* Website Name */}
            <div>
                <Link to="/" className='text-3xl font-bold text-primary'>Athletic<span className='text-secondary'>Hub</span></Link>
            </div>

            {/* navber list item */}
            <div className='flex-none gap-4 items-center'>
                <div>{links}</div>


                {/* conditional rendering */}
                { !user ? (
                    <Link to="/login" className='btn btn-outline btn-sm'>
                        <FaSignInAlt className='mr-1'/>Login
                    </Link>)
                    :(
          <div className="relative">
            <img
              onClick={() => setDropdownOpen(!dropdownOpen)}
              src={user?.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
              alt="profile"
              title={user?.displayName}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
            />

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 z-10 w-48 bg-white shadow-md rounded-lg p-2 space-y-2 text-sm border">
                <p className="px-2 text-gray-600">👤 {user?.displayName || "User"}</p>
                <hr />
                <NavLink to="/create-event" className="block hover:bg-gray-100 px-2 py-1 rounded">📌 Book Event</NavLink>
                <NavLink to="/myBookings" className="block hover:bg-gray-100 px-2 py-1 rounded">📄 My Bookings</NavLink>
                <NavLink to="/manageEvents" className="block hover:bg-gray-100 px-2 py-1 rounded">⚙️ Manage Events</NavLink>
                <button onClick={logout} className="block w-full text-left hover:bg-red-100 text-red-600 px-2 py-1 rounded">
                  <FaSignOutAlt className="inline mr-1" /> Logout
                </button>
              </div>
            )}
          </div>
        )
                



                }
            </div>
        </div>
    );
};

export default Navbar;