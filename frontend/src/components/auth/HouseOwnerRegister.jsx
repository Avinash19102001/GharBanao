// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { houseOwnerSchema } from "./schemas/houseOwnerSchema";

// const HouseOwnerRegister = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(houseOwnerSchema),
//   });

//   const onSubmit = async (data) => {
//     console.log(data);

//     // await registerHouseOwner(data);
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-xl p-8">
//       <h2 className="text-3xl font-bold mb-8">
//         House Owner Registration
//       </h2>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="grid md:grid-cols-2 gap-5"
//       >
//         <div>
//           <input
//             {...register("fullName")}
//             placeholder="Full Name"
//             className="w-full border p-3 rounded-xl"
//           />
//           <p className="text-red-500 text-sm">
//             {errors.fullName?.message}
//           </p>
//         </div>

//         <div>
//           <input
//             {...register("email")}
//             placeholder="Email"
//             className="w-full border p-3 rounded-xl"
//           />
//           <p className="text-red-500 text-sm">
//             {errors.email?.message}
//           </p>
//         </div>

//         <div>
//           <input
//             {...register("mobileNumber")}
//             placeholder="Mobile Number"
//             className="w-full border p-3 rounded-xl"
//           />
//           <p className="text-red-500 text-sm">
//             {errors.mobileNumber?.message}
//           </p>
//         </div>

//         <div>
//           <input
//             type="password"
//             {...register("password")}
//             placeholder="Password"
//             className="w-full border p-3 rounded-xl"
//           />
//         </div>

//         <div>
//           <input
//             type="password"
//             {...register("confirmPassword")}
//             placeholder="Confirm Password"
//             className="w-full border p-3 rounded-xl"
//           />
//           <p className="text-red-500 text-sm">
//             {errors.confirmPassword?.message}
//           </p>
//         </div>

//         <div>
//           <select
//             {...register("propertyType")}
//             className="w-full border p-3 rounded-xl"
//           >
//             <option value="">Property Type</option>
//             <option>Independent House</option>
//             <option>Villa</option>
//             <option>Apartment</option>
//           </select>
//         </div>

//         <div>
//           <select
//             {...register("projectType")}
//             className="w-full border p-3 rounded-xl"
//           >
//             <option value="">Project Type</option>
//             <option>New Construction</option>
//             <option>Renovation</option>
//             <option>Interior Design</option>
//           </select>
//         </div>

//         <button
//           className="
//           col-span-full
//           bg-blue-600
//           text-white
//           py-3
//           rounded-xl
//           hover:bg-blue-700
//         "
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HouseOwnerRegister;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { houseOwnerSchema } from "./schemas/houseOwnerSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const HouseOwnerRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const onSubmit = (data) => {
    console.log(data);

    // alert(`Demo OTP : ${generatedOtp}`);
  };

  const handlePasswordToggle = () => {
    setShowPassword(true);

    setTimeout(() => {
      setShowPassword(false);
    }, 5000); // 5 seconds
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
        onSubmit={handleSubmit(onSubmit)}
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

        {/* Mobile Number */}
        <div>
          <input
            {...register("mobileNumber")}
            placeholder="Mobile Number"
            maxLength={10}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\s{2,}/g, " ");
            }}
            className="w-full border p-3 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.mobileNumber?.message}</p>
        </div>

        {/* Password */}
        {/* <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\s{2,}/g, " ");
            }}
            className="w-full border p-3 rounded-xl"
          />

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
        </div> */}
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
        {/* <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\s{2,}/g, " ");
            }}
            className="w-full border p-3 rounded-xl"
          />

          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>

          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
        </div> */}

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
            <option>Independent House</option>
            <option>Villa</option>
            <option>Apartment</option>
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
            <option>New Construction</option>
            <option>Renovation</option>
            <option>Interior Design</option>
          </select>

          <p className="text-red-500 text-sm">{errors.projectType?.message}</p>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="
            col-span-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            hover:bg-blue-700
          "
        >
          Register
        </button>

        {/* OTP Section */}
        {/* {showOtpField && (
          <div className="col-span-full mt-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border p-3 rounded-xl"
            />

            {otpError && (
              <p className="text-red-500 text-sm mt-2">{otpError}</p>
            )}

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="
                mt-3
                w-full
                bg-green-600
                text-white
                py-3
                rounded-xl
                hover:bg-green-700
              "
            >
              Verify OTP
            </button>
          </div>
        )} */}
      </form>
    </div>
  );
};

export default HouseOwnerRegister;
