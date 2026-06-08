import { useForm } from "react-hook-form";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contractorSchema } from "./schemas/contractorSchema";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { getPasswordStrength } from "../../utils/passwordStrength";
import { registerContractor} from "../../services/authServices";

const colors = {
  Weak: {
    text: "text-red-500",
    bar: "bg-red-500",
  },
  Medium: {
    text: "text-yellow-500",
    bar: "bg-yellow-500",
  },
  Strong: {
    text: "text-green-500",
    bar: "bg-green-500",
  },
};

const PasswordInput = ({
  register,
  name,
  placeholder,
  inputRef,
  toggleVisibility,
}) => (
  <div className="relative">
    <input
      type="password"
      {...register(name)}
      ref={(element) => {
        register(name).ref(element);
        inputRef.current = element;
      }}
      placeholder={placeholder}
      className="w-full border p-3 rounded-xl pr-12"
    />

    <button
      type="button"
      onClick={() => toggleVisibility(inputRef)}
      className="absolute right-3 top-1/2 -translate-y-1/2"
    >
      <FaEye />
    </button>
  </div>
);

const FormInput = ({ register, name, placeholder, errors, type = "text" }) => (
  <div>
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className="w-full border p-3 rounded-xl"
    />

    <p className="text-red-500 text-sm">{errors[name]?.message}</p>
  </div>
);

const ContractorRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contractorSchema),
  });

  const password = watch("password", "");
  const { strength, percentage } = getPasswordStrength(password);

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const toggleVisibility = (inputRef) => {
    if (!inputRef.current) return;

    const isPassword = inputRef.current.type === "password";

    inputRef.current.type = isPassword ? "text" : "password";

    if (isPassword) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.type = "password";
        }
      }, 5000);
    }
  };
  console.log(errors);
  // const onSubmit = (data) => {
  //   console.log(data);

  //   navigate("/contractorprofile");
  // };

  const onSubmit = async (data) => {
  try {
    const payload = {
      full_name: data.fullName,
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword,
      project_type: data.preferredProjectType,
    };

    const response = await registerContractor(payload);

    console.log("Registration Success:", response.data);

    navigate("/contractorprofile");
  } catch (error) {
    console.error(
      "Registration Failed:",
      error.response?.data || error.message
    );
  }
};

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Contractor Registration
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <FormInput
          register={register}
          name="fullName"
          placeholder="Full Name"
          errors={errors}
        />

        <FormInput
          register={register}
          name="email"
          type="email"
          placeholder="Email Address"
          errors={errors}
        />

        {/* password */}
        <div>
          <PasswordInput
            register={register}
            name="password"
            placeholder="Password"
            inputRef={passwordRef}
            toggleVisibility={toggleVisibility}
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* confirm password */}
        <div>
          <PasswordInput
            register={register}
            name="confirmPassword"
            placeholder="Confirm Password"
            inputRef={confirmPasswordRef}
            toggleVisibility={toggleVisibility}
          />

          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>

        {password && (
          <div className="md:col-span-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${colors[strength].bar}`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            <p className={`text-sm mt-1 font-medium ${colors[strength].text}`}>
              Password Strength: {strength}
            </p>
          </div>
        )}

        {/* Preferred Project Type */}
        <div className="md:col-span-2">
          <select
            {...register("preferredProjectType")}
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Select Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Both">Both</option>
          </select>

          <p className="text-red-500 text-sm">
            {errors.preferredProjectType?.message}
          </p>
        </div>
        {/* signup */}
        <button
          type="submit"
          className="md:col-span-2 w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Sign Up
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

export default ContractorRegister;
