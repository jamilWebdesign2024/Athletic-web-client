// // import { use, useState } from 'react';
// // import { Link, useLocation, useNavigate } from 'react-router';
// // import Swal from 'sweetalert2';
// // import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// // import { motion } from "framer-motion";
// // import { AuthContext } from '../../Contexts/AuthContext/authContext';

// // const Login = () => {
// //   const [error, setError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [passwordErrors, setPasswordErrors] = useState([]);
// //   const [password, setPassword] = useState("");
// //   const [emailInputValue, setEmailInputValue] = useState("");

// //   const { signInUser, signInWithGoogle } = use(AuthContext);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // ✅ background gradient style
// //   const backgroundStyle = {
// //     background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)',
// //     minHeight: '100vh',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     overflow: 'hidden',
// //   };

// //   const buttonStyle = {
// //     background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)'
// //   };

// //   // ✅ Handle live password validation
// //   const handlePasswordChange = (e) => {
// //     const value = e.target.value;
// //     setPassword(value);

// //     const errors = [];
// //     if (value.length < 8) {
// //       errors.push("➤ At least 8 characters");
// //     }
// //     if (!/[A-Z]/.test(value)) {
// //       errors.push("➤ At least one uppercase letter");
// //     }
// //     if (!/[a-z]/.test(value)) {
// //       errors.push("➤ At least one lowercase letter");
// //     }
// //     if (!/[0-9]/.test(value)) {
// //       errors.push("➤ At least one number");
// //     }
// //     if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
// //     errors.push("➤ At least one special character (@, #, $, %, etc.)");
// //   }

// //     setPasswordErrors(errors);
// //   };

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const email = form.email.value;

// //     if (passwordErrors.length > 0) {
// //       Swal.fire({
// //         icon: "error",
// //         title: "Invalid Password",
// //         text: "Please meet all password requirements first.",
// //       });
// //       return;
// //     }

// //     signInUser(email, password)
// //       .then((result) => {
// //         const user = result.user;
// //         if (user) {
// //           Swal.fire({
// //             position: "top-end",
// //             icon: "success",
// //             title: "Your Athletic Club Profile has been created",
// //             showConfirmButton: false,
// //             timer: 1500
// //           });
// //         }
// //         navigate(location.state ? location.state : "/");
// //       })
// //       .catch((error) => {
// //         const errorCode = error.code;
// //         if (errorCode) {
// //           Swal.fire({
// //             icon: "error",
// //             title: "Something Wrong",
// //             text: "Password not valid, enter a valid password",
// //           });
// //         }
// //       });
// //   };

// //   const handleGoogle = async () => {
// //     try {
// //       await signInWithGoogle();
// //       Swal.fire("Welcome!", "Logged in with Google", "success");
// //       navigate(location.state ? location.state : "/");
// //     } catch (err) {
// //       setError("Google login failed.");
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <div style={backgroundStyle}>
// //       <div className="relative z-10 w-full max-w-sm mx-auto">
// //         <motion.div
// //          initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //         className="card backdrop-blur-md bg-white/50 shadow-2xl border border-white/30 rounded-xl">
// //           <div className="card-body text-gray-800">
// //             <div className='p-0 m-0'>
// //               <h1 className="text-3xl font-bold text-center text-primary">Login Your Athletic Club</h1>
// //               <p className='text-center text-gray-600'><small>One account for all Athletic Club services</small></p>
// //             </div>

// //             <form onSubmit={handleLogin}>
// //               <label className="label text-gray-700">Email</label>
// //               <input
// //                 type="email"
// //                 name='email'
// //                 className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
// //                 value={emailInputValue}
// //                 onChange={(e) => setEmailInputValue(e.target.value)}
// //                 placeholder="Enter your email"
// //               />

// //               <label className="label text-gray-700">Password</label>
// //               <div className='relative'>
// //                 <input
// //                   type={showPassword ? 'text' : 'password'}
// //                   name='password'
// //                   value={password}
// //                   onChange={handlePasswordChange}
// //                   className="input w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
// //                   required
// //                   placeholder="Password"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => { setShowPassword(!showPassword) }}
// //                   className='btn btn-xs absolute top-3 right-4 text-pink-600'>
// //                   {showPassword ? <FaEyeSlash /> : <FaEye />}
// //                 </button>
// //               </div>

// //               {/* ✅ Password error list */}
// //               {passwordErrors.length > 0 && (
// //                 <div className="text-xs text-red-500 space-y-1 mt-1">
// //                   {passwordErrors.map((err, idx) => (
// //                     <p key={idx}>{err}</p>
// //                   ))}
// //                 </div>
// //               )}

// //               <div className="text-right">
// //                 <Link to="/forgot-password" state={{ email: emailInputValue }}>Forgot password?</Link>
// //               </div>

// //               {error && <p className='text-red-400 text-xs'>{error}</p>}

// //               <button className="btn font-bold bg-primary hover:bg-pink-600 mt-4 w-full border-none text-black">
// //                 Login
// //               </button>

// //               <p className='pt-4 font-semibold text-center text-gray-700'>
// //                 Don't have an account? <Link to="/register" className='text-primary underline'>Register</Link>
// //               </p>

// //               <div className="flex w-full flex-col">
// //                 <div className="divider">OR</div>
// //               </div>

// //               <button style={buttonStyle} onClick={handleGoogle} className="btn btn-outline w-full">
// //                <span><FaGoogle /></span> Continue with Google
// //               </button>
// //             </form>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;




// import React, { useState, useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router';
// import Swal from 'sweetalert2';
// import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// import { motion } from "framer-motion";
// import { AuthContext } from '../../Contexts/AuthContext/authContext';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordErrors, setPasswordErrors] = useState([]);
//   const [password, setPassword] = useState("");
//   const [emailInputValue, setEmailInputValue] = useState("");
//   const [error, setError] = useState("");

//   const { signInUser, signInWithGoogle } = useContext(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);

//     const errors = [];
//     if (value.length < 8) errors.push("➤ At least 8 characters");
//     if (!/[A-Z]/.test(value)) errors.push("➤ At least one uppercase letter");
//     if (!/[a-z]/.test(value)) errors.push("➤ At least one lowercase letter");
//     if (!/[0-9]/.test(value)) errors.push("➤ At least one number");
//     if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value)) errors.push("➤ At least one special character");

//     setPasswordErrors(errors);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (passwordErrors.length > 0) {
//       Swal.fire("Invalid Password", "Please meet all password requirements.", "error");
//       return;
//     }

//     signInUser(emailInputValue, password)
//       .then(() => {
//         Swal.fire("Welcome!", "Logged in successfully", "success");
//         navigate(location.state ? location.state : "/");
//       })
//       .catch(() => {
//         Swal.fire("Error", "Login failed. Check your credentials.", "error");
//       });
//   };

//   const handleGoogle = async () => {
//     try {
//       await signInWithGoogle();
//       Swal.fire("Welcome!", "Logged in with Google", "success");
//       navigate(location.state ? location.state : "/");
//     } catch {
//       setError("Google login failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="card bg-white shadow-lg rounded-xl w-full max-w-sm p-6 space-y-3"
//       >
//         <h2 className="text-2xl font-bold text-center text-primary">Login to Athletic Club</h2>
//         <form onSubmit={handleLogin}>
//           <label className="text-sm text-gray-600">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={emailInputValue}
//             onChange={(e) => setEmailInputValue(e.target.value)}
//             className="input input-bordered w-full mb-2"
//             placeholder="Enter email"
//             required
//           />

//           <label className="text-sm text-gray-600">Password</label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="input input-bordered w-full"
//               placeholder="Enter password"
//               required
//             />
//             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>

//           {passwordErrors.length > 0 && (
//             <div className="text-xs text-red-500 mt-1">
//               {passwordErrors.map((err, idx) => <p key={idx}>{err}</p>)}
//             </div>
//           )}

//           <div className="text-right text-xs mt-1">
//             <Link to="/forgot-password" state={{ email: emailInputValue }} className="text-primary underline">Forgot password?</Link>
//           </div>

//           <button className="btn btn-primary w-full mt-3">Login</button>
//         </form>

//         <div className="divider">OR</div>
//         <button onClick={handleGoogle} className="btn btn-outline w-full"><FaGoogle className="mr-2" /> Continue with Google</button>

//         <p className="text-center text-sm">Don't have an account? <Link to="/register" className="text-primary underline">Register</Link></p>

//         {error && <p className="text-red-500 text-xs">{error}</p>}
//       </motion.div>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import signInSuccess from '../../assets/sign.json'; // ✅ তোমার success Lottie

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [password, setPassword] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [showSuccessLottie, setShowSuccessLottie] = useState(false);

  const backgroundStyle = {
    background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const errors = [];
    if (value.length < 8) errors.push("➤ At least 8 characters");
    if (!/[A-Z]/.test(value)) errors.push("➤ At least one uppercase letter");
    if (!/[a-z]/.test(value)) errors.push("➤ At least one lowercase letter");
    if (!/[0-9]/.test(value)) errors.push("➤ At least one number");
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value)) errors.push("➤ At least one special character (@, #, $, %, etc.)");

    setPasswordErrors(errors);
  };

  const triggerSuccessLottie = () => {
    setShowSuccessLottie(true);
    setTimeout(() => {
      navigate(from);
    }, 2000); // 2 seconds
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordErrors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please meet all password requirements first.",
      });
      return;
    }

    signInUser(emailInputValue, password)
      .then(() => {
        triggerSuccessLottie();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Check your email or password.",
        });
      });
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      triggerSuccessLottie();
    } catch {
      setError("Google login failed.");
    }
  };

  return (
    <div style={backgroundStyle}>
      {showSuccessLottie && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
          <Lottie animationData={signInSuccess} loop={false} />
        </div>
      )}

      <div className={`relative z-10 w-full max-w-sm mx-auto ${showSuccessLottie ? 'pointer-events-none opacity-30' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="card backdrop-blur-md bg-white/50 shadow-2xl border border-white/30 rounded-xl"
        >
          <div className="card-body text-gray-800">
            <h1 className="text-3xl font-bold text-center text-primary">Login Your Athletic Club</h1>
            <p className='text-center text-gray-600'><small>One account for all Athletic Club services</small></p>

            <form onSubmit={handleLogin}>
              <label className="label text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={emailInputValue}
                onChange={(e) => setEmailInputValue(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <label className="label text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="input w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute top-3 right-4 text-pink-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {passwordErrors.length > 0 && (
                <div className="text-xs text-red-500 space-y-1 mt-1">
                  {passwordErrors.map((err, idx) => <p key={idx}>{err}</p>)}
                </div>
              )}

              <div className="text-right">
                <Link to="/forgot-password" state={{ email: emailInputValue }}>Forgot password?</Link>
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button className="btn font-bold bg-primary hover:bg-pink-600 mt-4 w-full border-none text-black">
                Login
              </button>

              <p className="pt-4 font-semibold text-center text-gray-700">
                Don't have an account? <Link to="/register" className="text-primary underline">Register</Link>
              </p>

              <div className="flex w-full flex-col">
                <div className="divider">OR</div>
              </div>

              <button onClick={handleGoogle} type="button" className="btn btn-outline w-full">
                <FaGoogle className="mr-2" /> Continue with Google
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
