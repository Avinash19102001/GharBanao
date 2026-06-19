import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { houseOwnerSchema } from "./schemas/houseOwnerSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerHouseOwner } from "../../services/authServices";
import { useEffect } from "react";

const HouseOwnerRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(houseOwnerSchema),
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  useEffect(() => {
    console.log("FORM ERRORS", errors);
  }, [errors]);

  const getPasswordStrength = (password) => {
    if (!password) return "";

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        // mobileNumber: data.mobileNumber.trim(),
        password: data.password,
        confirmPassword: data.confirmPassword,
        propertyType: data.propertyType,
        projectType: data.projectType,
      };

      const response = await registerHouseOwner(payload);

      console.log("API Response:", response.data);

      if (response.data.success) {
        alert(response.data.message);

        navigate("/houseownerprofile");
      }
    } catch (error) {
      console.error("Registration Error:", error);

      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Registration failed",
      );
    } finally {
      setLoading(false);
    }
  };
  const handlePasswordToggle = () => {
    setShowPassword(true);

    setTimeout(() => {
      setShowPassword(false);
    }, 5000);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(true);

    setTimeout(() => {
      setShowConfirmPassword(false);
    }, 5000); // 5 seconds
  };
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">House Owner Registration</h2>

      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.log("FORM ERRORS", errors);
        })}
        className="grid md:grid-cols-2 gap-5"
      >
        {/* Full Name */}
        <div>
          <input
            {...register("fullName")}
            placeholder="Full Name"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\s{2,}/g, " ");
            }}
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\s{2,}/g, " ");
            }}
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Phone Number */}
        {/* <div>
          <input
            {...register("mobileNumber")}
            placeholder="Phone Number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\s{2,}/g, " ");
            }}
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div> */}

        {/* Password */}
        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="w-full border p-3 rounded-xl pr-12"
            />

            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          {password && (
            <p
              className={`text-sm mt-1 font-medium ${
                getPasswordStrength(password) === "Strong"
                  ? "text-green-600"
                  : getPasswordStrength(password) === "Medium"
                    ? "text-yellow-600"
                    : "text-red-600"
              }`}
            >
              Password Strength: {getPasswordStrength(password)}
            </p>
          )}
        </div>

        {/* Confirm Password */}
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
              onClick={handleConfirmPasswordToggle}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>

          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <select
            {...register("propertyType")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Property Type</option>
            <option value="independent_house">Independent House</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
          </select>

          <p className="text-red-500 text-sm">{errors.propertyType?.message}</p>
        </div>

        {/* Project Type */}
        <div>
          <select
            {...register("projectType")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Project Type</option>
            <option value="color">Color</option>
            <option value="renovation">Renovation</option>
            <option value="interior_design">Interior Design</option>
          </select>

          <p className="text-red-500 text-sm">{errors.projectType?.message}</p>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className="
      col-span-full
      bg-blue-600
      text-white
      py-3
      rounded-xl
      hover:bg-blue-700
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="md:col-span-2 flex items-center gap-3">
          <hr className="flex-1" />
          <span>OR</span>
          <hr className="flex-1" />
        </div>
        {/* Continue with Google */}
        <button
          type="button"
          className="md:col-span-2 w-full border py-3 rounded-xl flex items-center justify-center gap-3"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default HouseOwnerRegister;
