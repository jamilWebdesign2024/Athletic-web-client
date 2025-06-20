import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/authContext';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import '../App.css'


const Navbar = () => {
  const { user, signOutUser } = use(AuthContext); // ✅ useContext instead of use()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {/* Logo */}
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
          {!user ? (
            <div className="hidden lg:flex gap-2">
              <Link to="/login" className="btn btn-outline btn-sm bg-primary text-white flex items-center">
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link to="/register" className="btn btn-outline btn-sm text-white border-white">
                Register
              </Link>
            </div>
          ) : (
            <div className="relative hidden lg:block">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={user.photoURL || 'https://i.ibb.co/2YjZgZ8/default-user.png'}
                alt="profile"
                title={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 z-50 w-64 bg-white text-black rounded-xl shadow-lg p-4 text-sm">
                  <div className="text-center">
                    <img src={user.photoURL} alt="profile" className="w-16 h-16 rounded-full mx-auto" />
                    <p className="font-semibold mt-2">{user.displayName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <Link to="/profile" className="btn btn-sm mt-2 btn-primary w-full">View Profile</Link>
                  </div>
                  <hr className="my-3" />
                  <NavLink to="/create-event" className="block hover:bg-gray-100 px-2 py-1 rounded">📌 Book Event</NavLink>
                  <NavLink to="/myBookings" className="block hover:bg-gray-100 px-2 py-1 rounded">📄 My Bookings</NavLink>
                  <NavLink to="/manageEvents" className="block hover:bg-gray-100 px-2 py-1 rounded">⚙️ Manage Events</NavLink>
                  <button onClick={signOutUser} className="w-full text-left text-red-600 hover:bg-red-100 px-2 py-1 rounded mt-2">
                    <FaSignOutAlt className="inline mr-1" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
              <div className="absolute right-4 top-16 z-50 w-72 bg-white text-black rounded-xl shadow-xl p-5">
                {user ? (
                  <>
                    <div className="flex flex-col items-center mb-4">
                      <img src={user.photoURL} className="w-20 h-20 rounded-full border-2 border-primary" />
                      <p className="font-semibold mt-2">{user.displayName}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <Link to="/profile" className="btn btn-sm mt-2 btn-primary w-full">View Profile</Link>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li><NavLink to="/" className="block hover:bg-gray-100 px-3 py-2 rounded">🏠 Home</NavLink></li>
                      <li><NavLink to="/events" className="block hover:bg-gray-100 px-3 py-2 rounded">📅 Events</NavLink></li>
                      <li><NavLink to="/create-event" className="block hover:bg-gray-100 px-3 py-2 rounded">📌 Book Event</NavLink></li>
                      <li><NavLink to="/myBookings" className="block hover:bg-gray-100 px-3 py-2 rounded">📄 My Bookings</NavLink></li>
                      <li><NavLink to="/manageEvents" className="block hover:bg-gray-100 px-3 py-2 rounded">⚙️ Manage Events</NavLink></li>
                    </ul>
                    <button onClick={() => {
                      signOutUser();
                      setMobileMenuOpen(false);
                    }} className="btn btn-outline btn-sm text-red-600 w-full mt-4">
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <ul className="space-y-2 text-sm">
                      <li><NavLink to="/" className="block hover:bg-gray-100 px-3 py-2 rounded">🏠 Home</NavLink></li>
                      <li><NavLink to="/events" className="block hover:bg-gray-100 px-3 py-2 rounded">📅 Events</NavLink></li>
                      <li><NavLink to="/login" className="block hover:bg-gray-100 px-3 py-2 rounded">🔐 Login</NavLink></li>
                      <li><NavLink to="/register" className="block hover:bg-gray-100 px-3 py-2 rounded">📝 Register</NavLink></li>
                    </ul>
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




// import React, { useContext, useState } from 'react';
// import { Link, NavLink } from 'react';
// import { AuthContext } from '../Contexts/AuthContext/authContext';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import '../App.css';

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const links = (
//     <>
//       <li><NavLink className="text-white" to="/">Home</NavLink></li>
//       <li><NavLink className="text-white" to="/events">Events</NavLink></li>
//     </>
//   );

//   return (
//     <div className="bg-dark text-white shadow-md">
//       <div className="navbar w-11/12 mx-auto py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-3xl font-bold text-white">
//           Athletic<span className="text-primary">Hub</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex">
//           <ul className="flex space-x-6 items-center">
//             {links}
//           </ul>
//         </div>

//         {/* User Section */}
//         <div className="flex items-center space-x-4">
//           {!user ? (
//             <div className="hidden lg:flex gap-2">
//               <Link to="/login" className="btn btn-outline btn-sm bg-primary text-white flex items-center">
//                 <FaSignInAlt className="mr-1" /> Login
//               </Link>
//               <Link to="/register" className="btn btn-outline btn-sm text-white border-white">
//                 Register
//               </Link>
//             </div>
//           ) : (
//             <div className="relative hidden lg:block">
//               <img
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 src={user.photoURL || 'https://i.ibb.co/2YjZgZ8/default-user.png'}
//                 alt="profile"
//                 title={user.displayName}
//                 className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
//               />
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 z-50 w-64 bg-white text-black rounded-xl shadow-lg p-4 text-sm">
//                   <div className="text-center">
//                     <img src={user.photoURL} alt="profile" className="w-16 h-16 rounded-full mx-auto" />
//                     <p className="font-semibold mt-2">{user.displayName}</p>
//                     <p className="text-xs text-gray-500">{user.email}</p>
//                     <Link to="/profile" className="btn btn-sm mt-2 btn-primary w-full">View Profile</Link>
//                   </div>
//                   <hr className="my-3" />
//                   <NavLink to="/create-event" className="block hover:bg-gray-100 px-2 py-1 rounded">📌 Book Event</NavLink>
//                   <NavLink to="/myBookings" className="block hover:bg-gray-100 px-2 py-1 rounded">📄 My Bookings</NavLink>
//                   <NavLink to="/manageEvents" className="block hover:bg-gray-100 px-2 py-1 rounded">⚙️ Manage Events</NavLink>
//                   <button onClick={signOutUser} className="w-full text-left text-red-600 hover:bg-red-100 px-2 py-1 rounded mt-2">
//                     <FaSignOutAlt className="inline mr-1" /> Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Mobile Menu Icon */}
//           <div className="lg:hidden">
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn btn-ghost">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round"
//                   strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>

//             {/* Mobile Menu Drawer */}
//             {mobileMenuOpen && (
//               <div className="absolute right-4 top-16 z-50 w-72 bg-white text-black rounded-xl shadow-xl p-5">
//                 {user ? (
//                   <>
//                     <div className="flex flex-col items-center mb-4">
//                       <img src={user.photoURL} className="w-20 h-20 rounded-full border-2 border-primary" />
//                       <p className="font-semibold mt-2">{user.displayName}</p>
//                       <p className="text-sm text-gray-500">{user.email}</p>
//                     </div>
//                     <ul className="space-y-2 text-sm">
//                       <li><NavLink to="/" className="block hover:bg-gray-100 px-3 py-2 rounded">🏠 Home</NavLink></li>
//                       <li><NavLink to="/events" className="block hover:bg-gray-100 px-3 py-2 rounded">📅 Events</NavLink></li>
//                       <li><NavLink to="/create-event" className="block hover:bg-gray-100 px-3 py-2 rounded">📌 Book Event</NavLink></li>
//                       <li><NavLink to="/myBookings" className="block hover:bg-gray-100 px-3 py-2 rounded">📄 My Bookings</NavLink></li>
//                       <li><NavLink to="/manageEvents" className="block hover:bg-gray-100 px-3 py-2 rounded">⚙️ Manage Events</NavLink></li>
//                     </ul>
//                     <button onClick={() => {
//                       signOutUser();
//                       setMobileMenuOpen(false);
//                     }} className="btn btn-outline btn-sm text-red-600 w-full mt-4">
//                       <FaSignOutAlt className="mr-2" /> Logout
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <ul className="space-y-2 text-sm">
//                       <li><NavLink to="/" className="block hover:bg-gray-100 px-3 py-2 rounded">🏠 Home</NavLink></li>
//                       <li><NavLink to="/events" className="block hover:bg-gray-100 px-3 py-2 rounded">📅 Events</NavLink></li>
//                       <li><NavLink to="/login" className="block hover:bg-gray-100 px-3 py-2 rounded">🔐 Login</NavLink></li>
//                       <li><NavLink to="/register" className="block hover:bg-gray-100 px-3 py-2 rounded">📝 Register</NavLink></li>
//                     </ul>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
