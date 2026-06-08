import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 `bg-gradient-to-br` from-green-100 via-gray-100 to-orange-100">
      <div className="w-full max-w-lg backdrop-blur-md bg-white/40 border border-white/30 rounded-3xl shadow-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-3xl font-bold text-center text-slate-900">
          Reset Your Password
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-8 text-sm ">
          Enter your new password below to reset your password.
        </p>

        {/* New Password */}
        <div className="mb-5">
          <label className="block font-medium text-gray-800 mb-2">
            New Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full h-12 rounded-xl bg-white/80 px-4 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-8">
          <label className="block font-medium text-gray-800 mb-2">
            Confirm New Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm new password"
              className="w-full h-12 rounded-xl bg-white/80 px-4 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        <button className="w-full h-12 rounded-xl bg-[#15803d] text-white font-semibold text-lg hover:bg-[#166534] transition">
          Reset Password 
        </button>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-green-700 font-medium hover:underline"
          >
            Back to Login 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;