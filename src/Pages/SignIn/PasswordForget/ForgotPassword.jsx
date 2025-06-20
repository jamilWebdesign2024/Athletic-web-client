import { useLocation } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const location = useLocation();
  const preFilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(preFilledEmail);

  const handleSendResetLink = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Error", "Please enter your email", "error");
      return;
    }

    // এখানে তুমি Firebase বা Node.js API দিয়ে reset link পাঠাবে
    // Example: sendResetEmail(email)

    Swal.fire("Sent!", "Reset link sent to your email.", "success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Set a new Password</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          A code will be sent to your email/phone to set a new password
        </p>
        <form onSubmit={handleSendResetLink}>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-secondary cursor-pointer"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account? <a className="text-primary underline" href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
