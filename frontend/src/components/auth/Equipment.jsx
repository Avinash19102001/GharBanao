import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import equipmentSchema from "./schemas/equipment";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const EquipmentRegister = () => {
  const [showPassword,        setShowPassword]        = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submittedData,       setSubmittedData]       = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(equipmentSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    setSubmittedData(data);
  };
  const handleGoogleSignIn = () => {
    window.location.href = "https://accounts.google.com/signin";
  };
  const inputCls =
    `w-full border-2 border-blue-400 p-3 rounded-xl
     bg-blue-50 placeholder-blue-300 text-gray-800
     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600
     transition-all duration-150`;
  if (submittedData) {
    return (
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Registration Successful!
          </h2>
        </div>
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Your Submitted Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-blue-200 p-4">
              <p className="text-xs text-blue-400 font-medium uppercase tracking-wide mb-1">Full Name</p>
              <p className="text-gray-800 font-semibold">{submittedData.FullName}</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-200 p-4">
              <p className="text-xs text-blue-400 font-medium uppercase tracking-wide mb-1">Email</p>
              <p className="text-gray-800 font-semibold">{submittedData.email}</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-200 p-4">
              <p className="text-xs text-blue-400 font-medium uppercase tracking-wide mb-1">Password</p>
              <p className="text-gray-800 font-semibold tracking-widest">
                {"•".repeat(submittedData.password.length)}
              </p>
            </div>
            <div className="bg-white rounded-xl border border-blue-200 p-4">
              <p className="text-xs text-blue-400 font-medium uppercase tracking-wide mb-1">Equipment Type</p>
              <p className="text-gray-800 font-semibold">{submittedData.equipmentType}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setSubmittedData(null)}
          className="mt-6 text-sm text-blue-600 font-bold hover:underline"
        >
          ← Back to Register
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Equipment Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-5">
        <div>
          <input
            {...register("FullName")}
            placeholder="Full Name"
            className={inputCls}
          />
          <p className="text-red-500 text-sm mt-1">{errors.FullName?.message}</p>
        </div>
        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className={inputCls}
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>
        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className={`${inputCls} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>
        <div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className={`${inputCls} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
        </div>
        <div className="md:col-span-2">
          <select
            {...register("equipmentType")}
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>Select Equipment Type</option>
            <option value="Bricks">Bricks</option>
            <option value="Steel">Steel</option>
            <option value="Cement">Cement</option>
          </select>
          <p className="text-red-500 text-sm mt-1">{errors.equipmentType?.message}</p>
        </div>
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`md:col-span-2 py-3 rounded-xl text-white font-semibold transition-all duration-200
            ${!isValid || isSubmitting
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
        >
          {isSubmitting ? "Registering..." : "Register Equipment"}
        </button>
        <div className="md:col-span-2 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"/>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"/>
        </div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="md:col-span-2 border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

      </form>
    </div>
  );
};
export default EquipmentRegister;