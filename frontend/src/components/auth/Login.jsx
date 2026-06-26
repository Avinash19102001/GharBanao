import { useState } from "react";
import gharbanao from "../../assets/gharbanavo.jpeg";
import { Link } from "react-router-dom";
import { login } from "../../services/authServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const EyeOpenIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeClosedIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 21 21">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

const OctopusLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" fill="white" />
    <line x1="4" y1="12" x2="7" y2="12" stroke="white" strokeWidth="2" />
    <line x1="17" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
    <line x1="12" y1="4" x2="12" y2="7" stroke="white" strokeWidth="2" />
    <line x1="12" y1="17" x2="12" y2="20" stroke="white" strokeWidth="2" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SendIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   try {
  //     const response = await login(formData);
  //     const { access_token, role } = response.data;
  //     Cookies.set("token", access_token, {
  //       expires: 7,
  //       secure: false,
  //       sameSite: "strict",
  //     });
  //     Cookies.set("role", role, {
  //       expires: 7,
  //       secure: false,
  //       sameSite: "strict",
  //     });
  //     if (role === "houseowner") navigate("/houseownerdashboard");
  //     else if (role === "contractor") navigate("/contractordashboard");
  //     else if (role === "supplier") navigate("/supplierdashboard");
  //     else if (role === "equipment") navigate("/equipment");
  //   } catch (error) {
  //     console.error("Login Failed:", error);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await login(formData);

      console.log("Login Response:", response.data);

      const { access_token, role, message } = response.data;

      Cookies.set("token", access_token, {
        expires: 7,
        secure: false,
        sameSite: "strict",
      });

      Cookies.set("role", role, {
        expires: 7,
        secure: false,
        sameSite: "strict",
      });

      alert(message);

      switch (role) {
        case "houseowner":
          navigate("/houseownerdashboard");
          break;

        case "contractor":
          navigate("/contractordashboard");
          break;

        case "supplier":
          navigate("/supplierdashboard");
          break;

        case "equipment":
          navigate("/equipment");
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      console.error("Login Failed:", error);

      alert(
        error?.response?.data?.detail ||
          error?.response?.data?.message ||
          "Invalid email or password",
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${gharbanao})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f0ede6]/60" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-14 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a4a2e] rounded-xl flex items-center justify-center flex-shrink-0">
            <OctopusLogo />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[#1a4a2e] leading-none tracking-tight">
              OCTOPUS
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-[3px] text-[#4a7a5e] font-medium mt-0.5">
              PLAN. BUILD. LIVE. FOREVER.
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <GlobeIcon />
            English
          </button>
          <a
            href="/"
            className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 sm:px-10 lg:px-14 py-8 lg:py-6 gap-10 lg:gap-8 min-h-[calc(100vh-76px)]">
        {/* Left Side */}
        <div className="w-full lg:max-w-lg xl:max-w-xl order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0f2f23] leading-[1.0] tracking-tight mb-4">
            Build with trust.
            <br />
            Serve for
            <br />
            generations.
          </h2>

          <div className="w-12 h-1 bg-[#1a5c38] rounded-full mb-4" />

          <p className="text-sm sm:text-[15px] text-[#4a5e55] max-w-sm font-medium leading-relaxed mb-8">
            The connected platform for Homeowners, Builders and Suppliers. One
            ecosystem. Shared intelligence. Stronger homes. Better India.
          </p>

          {/* Role Chips */}
          <div className="flex flex-wrap gap-3">
            {/* Homeowner */}
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/90 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/90 transition-colors">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                🏠
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a3d28] leading-none">
                  Homeowner
                </p>
                <p className="text-[10px] text-[#5a7a6a] mt-0.5">
                  Plan your dream home
                </p>
              </div>
            </div>

            {/* Builder */}
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/90 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/90 transition-colors">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                🔨
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a3d28] leading-none">
                  Builder
                </p>
                <p className="text-[10px] text-[#5a7a6a] mt-0.5">
                  Grow your business
                </p>
              </div>
            </div>

            {/* Supplier */}
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/90 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/90 transition-colors">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                📦
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a3d28] leading-none">
                  Supplier
                </p>
                <p className="text-[10px] text-[#5a7a6a] mt-0.5">
                  Deliver quality materials
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Login Card */}
        <div className="w-full max-w-[440px] order-1 lg:order-2 flex-shrink-0">
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-2xl p-7 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b2f23] mb-1">
              Welcome back 🍃
            </h1>
            <p className="text-sm text-gray-500 mb-7">
              Sign in to continue building a better future.
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#2a3d33] mb-2">
                Email or Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  placeholder="username or you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-12 rounded-2xl bg-white/90 border border-gray-200 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/10 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#2a3d33] mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockIcon />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full h-12 rounded-2xl bg-white/90 border border-gray-200 pl-11 pr-12 text-sm text-gray-800 outline-none focus:border-[#1a5c38] focus:ring-2 focus:ring-[#1a5c38]/10 transition-all placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 accent-[#1a5c38]"
                />
                <span className="text-xs text-[#3a5040]">Remember me</span>
              </label>
              <Link
                to="/forgotpassword"
                className="text-xs font-semibold text-[#1a6e44] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleLogin}
              className="w-full h-12 rounded-2xl bg-[#184D3B] text-white font-bold text-sm tracking-wide hover:bg-[#123a2c] active:scale-[0.99] transition-all"
            >
              Sign In →
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-2.5">
              <button className="h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <GoogleIcon /> Google
              </button>
              <button className="h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <MicrosoftIcon /> Microsoft
              </button>
            </div>

            {/* Security Badge */}
            <div className="mt-4 bg-white/60 rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 text-xs text-[#4a7a5e]">
              <LockIcon />
              Your data is protected with enterprise-grade security.
            </div>

            {/* Register Link */}
            <div className="mt-5 text-center text-xs text-gray-500">
              New to OCTOPUS?{" "}
              <Link
                to="/register"
                className="font-bold text-[#1a6e44] hover:underline ml-1"
              >
                Choose your journey →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ask AI Bar */}
      <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-10 sm:max-w-xs z-30">
        <div className="bg-white/85 backdrop-blur-lg border border-white/90 rounded-full px-4 py-2.5 flex items-center gap-3 shadow-lg">
          <div className="w-7 h-7 bg-[#1a4a2e] rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </div>
          <span className="flex-1 text-xs text-gray-400 truncate">
            Estimate my 1200 sqft house in Hyderabad...
          </span>
          <button className="w-7 h-7 bg-[#1a4a2e] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#123a2c] transition-colors">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
