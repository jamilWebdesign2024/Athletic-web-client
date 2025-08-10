import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import signInSuccess from '../../assets/sign.json';

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

  // const backgroundStyle = {
  //   background: 'bg-base-300', // bg-base-100 (from theme)
  //   minHeight: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   overflow: 'hidden',
  // };

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
    }, 2000);
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
    <div className='bg-base-300 min-h-screen space-y-10 flex items-center justify-center'>
      {showSuccessLottie && (
        <div className="fixed inset-0 bg-base-300 flex justify-center items-center z-50">
          <Lottie animationData={signInSuccess} loop={false} />
        </div>
      )}

      <div className={`relative py-10 lg:py-16  z-10 w-full max-w-sm mx-auto ${showSuccessLottie ? 'pointer-events-none opacity-30' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="card bg-base-100 backdrop-blur-md shadow-2xl border border-base-300 rounded-xl"
        >
          <div className="card-body text-base-content">
            <h1 className="text-3xl font-bold text-center text-primary">Login Your Athletic Club</h1>
            <p className='text-center text-base-content/70'><small>One account for all Athletic Club services</small></p>

            <form onSubmit={handleLogin}>
              <label className="label text-base-content">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full mb-2 bg-base-200"
                value={emailInputValue}
                onChange={(e) => setEmailInputValue(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <label className="label text-base-content">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="input input-bordered w-full mb-2 bg-base-200"
                  required
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute top-3 right-4 text-primary"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {passwordErrors.length > 0 && (
                <div className="text-xs text-error space-y-1 mt-1">
                  {passwordErrors.map((err, idx) => <p key={idx}>{err}</p>)}
                </div>
              )}

              <div className="text-right">
                <Link to="/forgot-password" state={{ email: emailInputValue }} className="link link-primary">Forgot password?</Link>
              </div>

              {error && <p className="text-error text-xs">{error}</p>}

              <button className="btn btn-primary mt-4 w-full border-none text-base-100 font-bold">
                Login
              </button>

              <p className="pt-4 font-semibold text-center text-base-content">
                Don't have an account? <Link to="/register" className="link link-primary">Register</Link>
              </p>

              <div className="divider">OR</div>

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
