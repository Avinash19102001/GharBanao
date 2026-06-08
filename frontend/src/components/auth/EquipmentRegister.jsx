import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import equipmentSchema from "./schemas/equipment";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const EquipmentRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
  const inputCls = "w-full border p-3 rounded-xl";
  if (submittedData) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Equipment Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-5">
        <div>
          <input
            {...register("FullName")}
            placeholder="Full Name"
            className={inputCls}
          />
          <p className="text-red-500 text-sm">{errors.FullName?.message}</p>
        </div>
        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className={inputCls}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 text-sm mt-1 px-1">{errors.password?.message}</p>
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 text-sm mt-1 px-1">{errors.confirmPassword?.message}</p>
        </div>
        <div className="md:col-span-2">
          <select
            {...register("equipmentType")}
            className={`${inputCls} text-gray-700`} 
            defaultValue=""
          >
            <option value="" disabled>Select Equipment Type</option>
            <option value="Bricks">Bricks</option>
            <option value="Steel">Steel</option>
            <option value="Cement">Cement</option>
          </select>
          <p className="text-red-500 text-sm mt-1 px-1">{errors.equipmentType?.message}</p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`md:col-span-2 py-3 rounded-xl text-white font-semibold text-base transition-all duration-200
            ${isSubmitting
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
        <div className="md:col-span-2 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"/>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"/>
        </div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="md:col-span-2 border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition text-gray-700 font-medium"
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