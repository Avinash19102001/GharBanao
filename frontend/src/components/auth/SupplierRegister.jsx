import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supplierSchema } from "./schemas/supplierSchema";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";



const SupplierRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(supplierSchema),
  });

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (
      password.length >= 6 &&
      /[A-Za-z]/.test(password) &&
      /\d/.test(password)
    ) {
      setPasswordStrength("Average");
    }

    if (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      setPasswordStrength("Strong");
    }
  };

  const onSubmit = (data) => {
    console.log(data);

    navigate("/complete-profile");
  };

  const handleGoogleSignIn = () => {
    window.open("https://accounts.google.com/signin", "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Supplier Registration
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-5"
      >
        <div>
          <input
            {...register("FullName")}
            placeholder="Full Name"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.FullName?.message}
          </p>
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="w-full border p-3 rounded-xl pr-12"
              onChange={(e) =>
                checkPasswordStrength(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <p className="text-red-500 text-sm">
            {errors.password?.message}
          </p>

          {passwordStrength === "Weak" && (
            <p className="text-red-500 text-sm mt-1">
              🔴 Weak Password
            </p>
          )}

          {passwordStrength === "Average" && (
            <p className="text-yellow-500 text-sm mt-1">
              🟡 Average Password
            </p>
          )}

          {passwordStrength === "Strong" && (
            <p className="text-green-500 text-sm mt-1">
              🟢 Strong Password
            </p>
          )}

          <div className="w-full bg-gray-200 h-2 rounded mt-2">
            <div
              className={`h-2 rounded transition-all duration-300 ${passwordStrength === "Weak"
                ? "w-1/3 bg-red-500"
                : passwordStrength === "Average"
                  ? "w-2/3 bg-yellow-500"
                  : passwordStrength === "Strong"
                    ? "w-full bg-green-500"
                    : "w-0"
                }`}
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-xl pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center"
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className="md:col-span-2">
          <input
            {...register("companyName")}
            placeholder="Company Name"
            className="w-full border p-3 rounded-xl"
          />

          <p className="text-red-500 text-sm">
            {errors.companyName?.message}
          </p>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
        >
          Register Supplier
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="md:col-span-2 border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </form>
    </div >
  );
};

export default SupplierRegister;