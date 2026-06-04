import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [selectedRole, setSelectedRole] = useState("houseowner");
  const [email,        setEmail]        = useState("");
  const [password,     setPassword]     = useState("");
  const [showPwd,      setShowPwd]      = useState(false);
  const roles = [
    {
      id: "houseowner",
      title: "House Owner",
      icon: "🏠",
      description: "Manage your dream home-project",
    },
    {
      id: "contractor",
      title: "Contractor",
      icon: "👷",
      description: "Handle construction projects",
    },
    {
      id: "supplier",
      title: "Supplier",
      icon: "🚚",
      description: "Supply materials efficiently",
    },
    {
      id: "equipment",
      title: "Equipment",
      icon: "🔧",
      description: "Manage equipment and machinery",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role: selectedRole, email, password });
  };
  return (
    <div className="min-h-screen flex bg-slate-100">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Build Your
            <br />
            Dream Home
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-lg">
            Connect homeowners, contractors, and suppliers on one powerful platform.
          </p>
          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">300+</h3>
              <p>Contractors</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">150+</h3>
              <p>Suppliers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-xl backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl rounded-3xl p-8">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">GharBanao</h2>
            <p className="text-slate-500 mt-2">Login to continue</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left
                  ${selectedRole === role.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                    : "bg-white hover:border-blue-400"
                  }`}
              >
                <div className="text-3xl">{role.icon}</div>
                <h3 className="font-semibold mt-3">{role.title}</h3>
                <p className={`text-xs mt-1 ${
                  selectedRole === role.id ? "text-white/90" : "text-slate-500"
                }`}>
                  {role.description}
                </p>
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300
                           bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-300
                             bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  aria-label="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPwd ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
              <button type="button" className="text-blue-600 text-sm hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700
                         text-white font-semibold transition-all active:scale-[.98]"
            >
              Sign In as{" "}
              {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
            </button>

          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 ml-1 font-medium hover:underline">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};
export default Login;