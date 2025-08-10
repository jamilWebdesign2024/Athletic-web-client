import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/authContext";
import { FaSignInAlt, FaSignOutAlt, FaHome, FaCalendarAlt, FaCalendarCheck, FaTasks } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import "../App.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            toast.success("User Logout Successfully!");
            navigate("/");
            setMobileMenuOpen(false);
            setDropdownOpen(false);
          })
          .catch(() => {
            toast.error("Logout failed. Please try again.");
          });
      }
    });
  };

  // Public links (for all)
  const publicLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold flex items-center space-x-1" : "text-white flex items-center space-x-1"
          }
        >
          <FaHome /> <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold flex items-center space-x-1" : "text-white flex items-center space-x-1"
          }
        >
          <FaCalendarAlt /> <span>Events</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold flex items-center space-x-1" : "text-white flex items-center space-x-1"
          }
        >
          📖 <span>About</span>
        </NavLink>
      </li>
    </>
  );

  // Protected links (logged in only)
  const protectedLinks = (
    <>
      <li>
        <NavLink
          to="/create-event"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold flex items-center space-x-1" : "text-white flex items-center space-x-1"
          }
        >
          📌 <span>Book Event</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold flex items-center space-x-1" : "text-white flex items-center space-x-1"
          }
        >
          <FaCalendarCheck /> <span>My Bookings</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageEvents"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold flex items-center space-x-1" : "text-white flex items-center space-x-1"
          }
        >
          <FaTasks /> <span>Manage Events</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-dark text-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          Athletic<span className="text-primary">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 items-center">
            {publicLinks}
            {user && protectedLinks}
          </ul>
        </nav>

        {/* Right section: Login/Register or User Dropdown + ThemeToggle */}
        <div className="flex items-center space-x-4">

          {!user && (
            <div className="hidden lg:flex gap-2">
              <Link
                to="/login"
                className="btn btn-outline btn-sm bg-primary text-white flex items-center"
              >
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline btn-sm text-white border-white"
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="relative hidden lg:block">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={user.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
                alt="profile"
                title={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 z-50 w-64 bg-white text-black rounded-xl shadow-lg p-4 text-sm">
                  <div className="text-center">
                    <img
                      src={user.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
                      alt="profile"
                      className="w-16 h-16 rounded-full mx-auto"
                    />
                    <p className="font-semibold mt-2">{user.displayName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <Link
                      to="/profile"
                      className="btn btn-sm mt-2 btn-primary w-full"
                      onClick={() => setDropdownOpen(false)}
                    >
                      View Profile
                    </Link>
                  </div>
                  <hr className="my-3" />
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left text-red-600 hover:bg-red-100 px-2 py-1 rounded mt-2 flex items-center justify-start gap-1"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setDropdownOpen(false);
              }}
              className="btn btn-ghost"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Menu Content */}
            {mobileMenuOpen && (
              <div className="absolute right-4 top-16 z-50 w-72 bg-white text-black rounded-xl shadow-xl p-5 mobile-menu">
                {user ? (
                  <>
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={user.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
                        className="w-20 h-20 rounded-full border-2 border-primary"
                        alt="profile"
                      />
                      <p className="font-semibold mt-2">{user.displayName}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <Link
                        to="/profile"
                        className="btn btn-sm mt-2 btn-primary w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View Profile
                      </Link>
                    </div>
                    <ul
                      className="space-y-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {publicLinks}
                      {protectedLinks}
                    </ul>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="btn btn-outline btn-sm text-red-600 w-full mt-4 flex items-center justify-center gap-1"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <ul
                      className="space-y-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {publicLinks}
                    </ul>
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        to="/login"
                        className="btn btn-outline btn-sm bg-primary text-white flex items-center justify-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaSignInAlt className="mr-1" /> Login
                      </Link>
                      <Link
                        to="/register"
                        className="btn btn-outline btn-sm text-black border-gray-400 text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
