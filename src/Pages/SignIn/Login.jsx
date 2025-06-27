import { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { motion } from "framer-motion";
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [password, setPassword] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");

  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ background gradient style
  const backgroundStyle = {
    background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const buttonStyle = {
    background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)'
  };

  // ✅ Handle live password validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const errors = [];
    if (value.length < 8) {
      errors.push("➤ At least 8 characters");
    }
    if (!/[A-Z]/.test(value)) {
      errors.push("➤ At least one uppercase letter");
    }
    if (!/[a-z]/.test(value)) {
      errors.push("➤ At least one lowercase letter");
    }
    if (!/[0-9]/.test(value)) {
      errors.push("➤ At least one number");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    errors.push("➤ At least one special character (@, #, $, %, etc.)");
  }

    setPasswordErrors(errors);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    if (passwordErrors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please meet all password requirements first.",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Athletic Club Profile has been created",
            showConfirmButton: false,
            timer: 1500
          });
        }
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          Swal.fire({
            icon: "error",
            title: "Something Wrong",
            text: "Password not valid, enter a valid password",
          });
        }
      });
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      Swal.fire("Welcome!", "Logged in with Google", "success");
      navigate(location.state ? location.state : "/");
    } catch (err) {
      setError("Google login failed.");
      console.log(err);
    }
  };

  return (
    <div style={backgroundStyle}>
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <motion.div
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        className="card backdrop-blur-md bg-white/50 shadow-2xl border border-white/30 rounded-xl">
          <div className="card-body text-gray-800">
            <div className='p-0 m-0'>
              <h1 className="text-3xl font-bold text-center text-primary">Login Your Athletic Club</h1>
              <p className='text-center text-gray-600'><small>One account for all Athletic Club services</small></p>
            </div>

            <form onSubmit={handleLogin}>
              <label className="label text-gray-700">Email</label>
              <input
                type="email"
                name='email'
                className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={emailInputValue}
                onChange={(e) => setEmailInputValue(e.target.value)}
                placeholder="Enter your email"
              />

              <label className="label text-gray-700">Password</label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={password}
                  onChange={handlePasswordChange}
                  className="input w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => { setShowPassword(!showPassword) }}
                  className='btn btn-xs absolute top-3 right-4 text-pink-600'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* ✅ Password error list */}
              {passwordErrors.length > 0 && (
                <div className="text-xs text-red-500 space-y-1 mt-1">
                  {passwordErrors.map((err, idx) => (
                    <p key={idx}>{err}</p>
                  ))}
                </div>
              )}

              <div className="text-right">
                <Link to="/forgot-password" state={{ email: emailInputValue }}>Forgot password?</Link>
              </div>

              {error && <p className='text-red-400 text-xs'>{error}</p>}

              <button className="btn font-bold bg-primary hover:bg-pink-600 mt-4 w-full border-none text-black">
                Login
              </button>

              <p className='pt-4 font-semibold text-center text-gray-700'>
                Don't have an account? <Link to="/register" className='text-primary underline'>Register</Link>
              </p>

              <div className="flex w-full flex-col">
                <div className="divider">OR</div>
              </div>

              <button style={buttonStyle} onClick={handleGoogle} className="btn btn-outline w-full">
               <span><FaGoogle /></span> Continue with Google
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;








// // import { use, useState } from "react";
// // import { Link, useLocation, useNavigate } from "react";
// // import Swal from "sweetalert2";
// // import { AuthContext } from "../../Contexts/AuthContext/authContext";

// // const Login = () => {
// //   const { signIn, googleLogin } =use(AuthContext);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const from = location.state?.from?.pathname || "/";

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setError("");
//   //   const form = e.target;
//   //   const email = form.email.value;
//   //   const password = form.password.value;

//   //   try {
//   //     await signIn(email, password);
//   //     Swal.fire("Welcome!", "Logged in successfully", "success");
//   //     navigate(from, { replace: true });
//   //   } catch (err) {
//   //     setError("Login failed. Check credentials.");
//   //     console.log(err);
      
//   //   }
//   // };

// //   const handleGoogle = async () => {
// //     try {
// //       await googleLogin();
// //       Swal.fire("Welcome!", "Logged in with Google", "success");
// //       navigate(from, { replace: true });
// //     } catch (err) {
// //       setError("Google login failed.");
// //       console.log(err);
      
// //     }
// //   };

// //   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-base-200">
//       <div className="card w-full max-w-md bg-white shadow-md p-6 space-y-4">
//         <h2 className="text-xl font-bold text-center">Login</h2>

//         <form onSubmit={handleLogin} className="space-y-3">
//           <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
//           <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
//           {error && <p className="text-red-500">{error}</p>}
//           <button type="submit" className="btn btn-primary w-full">Login</button>
//         </form>

//         <div className="divider">or</div>
//         <button onClick={handleGoogle} className="btn btn-outline w-full">Continue with Google</button>

//         <p className="text-center text-sm">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-blue-600 underline">Register</Link>
//         </p>
//       </div>
//     </div>
// //   );
// // };

// // export default Login;
