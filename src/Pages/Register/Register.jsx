import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react';
import successLottie from '../../assets/sign.json';
import { motion } from 'framer-motion';

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessLottie, setShowSuccessLottie] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const validateName = (value) => {
    setName(value);
    if (value.length < 6) {
      setNameError("Name must be 6 characters or more");
    } else {
      setNameError("");
    }
  };

  const validatePassword = (value) => {
    setPassword(value);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
    if (!regex.test(value)) {
      setPasswordError("Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 special (@#$)");
    } else {
      setPasswordError("");
    }
  };

  const triggerSuccessLottie = () => {
    setShowSuccessLottie(true);
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 2000);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (nameError || passwordError) {
      Swal.fire("Validation Error", "Please fix form errors.", "error");
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      triggerSuccessLottie();
    } catch (err) {
      setError(err.message || "Registration failed. Try again.");
    }
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
    <div className="flex items-center justify-center min-h-screen py-10 bg-base-100">
      {showSuccessLottie && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-base-300">
          <Lottie animationData={successLottie} loop={false} />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hero-content flex-col lg:flex-row-reverse"
      >
        <div className="card w-full max-w-md bg-base-200 shadow-md p-6 space-y-4 hero-content lg:ml-10 rounded-xl border border-base-300">
          <h2 className="text-3xl font-bold text-center text-primary">Create Athletic Club Register</h2>

          <form onSubmit={handleRegister}>

            <label className="label text-base-content">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => validateName(e.target.value)}
              className="input input-bordered w-full mb-1 bg-base-100 text-base-content"
              placeholder="Full Name"
              required
            />
            {nameError && <p className="text-error text-sm">{nameError}</p>}

            <label className="label text-base-content">Photo URL</label>
            <input
              type="text"
              name='photo'
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full mb-2 bg-base-100 text-base-content"
              placeholder="Profile Picture URL"
              required
            />

            <label className="label text-base-content">Email</label>
            <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full mb-2 bg-base-100 text-base-content"
              placeholder="Enter your email"
              required
            />

            <label className="label text-base-content">Password</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                className="input input-bordered w-full mb-2 bg-base-100 text-base-content"
                placeholder="Password"
                required
              />
              {passwordError && <p className="text-error text-sm">{passwordError}</p>}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='btn btn-xs absolute top-3 right-4 text-primary'
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <p className="text-error">{error}</p>}

            <button type="submit" className="btn btn-primary w-full mt-2">Register</button>
          </form>

          <p className="text-center text-sm -mt-4">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">Login</Link>
          </p>

          <div className="flex w-full flex-col -mt-6">
            <div className="divider">OR</div>
          </div>

          <button onClick={handleGoogle} className="btn btn-outline w-full -mt-6">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
