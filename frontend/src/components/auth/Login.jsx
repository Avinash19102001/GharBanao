import { useState } from "react";
import gharbanao from "../../assets/gharbanavo.jpeg";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login } from "../../services/authServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Sending:", formData);
      const response = await login(formData);

      console.log("Response:", response.data);

      const { access_token, role } = response.data;

      console.log("Role Received:", role);
      console.log("Token Received:", access_token);

      // store token in cookie
      Cookies.set("token", access_token, {
        expires: 7,
        secure: false,
        sameSite: "strict",
      });

      // store role
      Cookies.set("role", role, {
        expires: 7,
        secure: false,
        sameSite: "strict",
      });

      console.log("Token Cookie:", Cookies.get("token"));
      console.log("Role Cookie:", Cookies.get("role"));
      console.log("All Cookies:", Cookies.get());
      if (role === "house_owner") {
        navigate("/house-owner");
      } else if (role === "contractor") {
        navigate("/contractor");
      } else if (role === "supplier") {
        navigate("/supplier");
      } else if (role === "equipment") {
        navigate("/equipment");
      }
    } catch (error) {
      console.error("Login Failed:", error);
      console.log(error.response?.data);
      console.log(error.response?.status);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${gharbanao})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f8f3eb]/50" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-12 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FaHome className="text-green-900 text-3xl" />
            <h1 className="text-3xl font-bold text-green-900">GharBanao</h1>
          </div>

          <p className="text-xs tracking-[4px] text-gray-700 mt-1">
            PLAN. BUILD. LIVE. FOREVER.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-12">
        {/* Left Side */}
        <div className="max-w-3xl">
          <h1 className="text-[50px] leading-[0.95] font-bold text-[#0f2f23]">
            Build with trust.
            <br />
            Serve for
            <br />
            generations.
          </h1>

          <div className="w-12 h-1 bg-green-900 mt-4 mb-4" />

          <p className="text-sm text-gray-700 max-w-sm font-semibold">
            The connected platform for homeowners, contractors and suppliers.
            Build smarter with one ecosystem.
          </p>
        </div>

        {/* Right Login Card */}
        <div className="w-full max-w-sm rounded-xl border border-white/30 bg-white/20 backdrop-blur-xl p-8 shadow-2xl">
          {/* Email */}
          <div className="mb-2">
            <label className="block mb-2 font-medium">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full h-11 rounded-xl border border-gray-200 bg-white/80 px-4 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block mb-2 font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full h-11 rounded-xl border border-gray-200 bg-white/80 px-4 pr-14 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <Link
              to="/forgotpassword"
              className="text-green-800 font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login */}
          <button
            onClick={handleLogin}
            className="w-full h-11 rounded-xl bg-[#184D3B] text-white font-semibold text-lg hover:bg-[#123a2c] transition"
          >
            Sign In →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-gray-300" />

            <span className="text-sm text-gray-600">or continue with</span>

            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Only */}
          <button className="w-full h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center gap-3 hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />

            <span className="font-medium">Continue with Google</span>
          </button>

          {/* Security Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-green-800 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
