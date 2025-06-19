// import React, { use, useState } from 'react';
// import { AuthContext } from '../../Contexts/AuthContext/authContext';
// import { useLocation, useNavigate } from 'react-router';
// import Swal from 'sweetalert2';

// const Login = () => {

//   const { signIn, googleLogin } =use(AuthContext);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
    
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       await signIn(email, password);
//       Swal.fire("Welcome!", "Logged in successfully", "success");
//       navigate(from, { replace: true });
//     } catch (err) {
//       setError("Login failed. Check credentials.");
//       console.log(err);
      
//     }
//   };

//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Login;









// import { use, useState } from "react";
// import { Link, useLocation, useNavigate } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Contexts/AuthContext/authContext";

// const Login = () => {
//   const { signIn, googleLogin } =use(AuthContext);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   try {
  //     await signIn(email, password);
  //     Swal.fire("Welcome!", "Logged in successfully", "success");
  //     navigate(from, { replace: true });
  //   } catch (err) {
  //     setError("Login failed. Check credentials.");
  //     console.log(err);
      
  //   }
  // };

//   const handleGoogle = async () => {
//     try {
//       await googleLogin();
//       Swal.fire("Welcome!", "Logged in with Google", "success");
//       navigate(from, { replace: true });
//     } catch (err) {
//       setError("Google login failed.");
//       console.log(err);
      
//     }
//   };

//   return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="card w-full max-w-md bg-white shadow-md p-6 space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>

        <div className="divider">or</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full">Continue with Google</button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">Register</Link>
        </p>
      </div>
    </div>
//   );
// };

// export default Login;
