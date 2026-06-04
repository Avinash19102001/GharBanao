// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [selectedRole, setSelectedRole] = useState("houseowner");

//   const roles = [
//     {
//       id: "houseowner",
//       title: "House Owner",
//       icon: "🏠",
//       description: "Manage your dream home-project",
//     },
//     {
//       id: "contractor",
//       title: "Contractor",
//       icon: "👷",
//       description: "Handle construction projects",
//     },
//     {
//       id: "supplier",
//       title: "Supplier",
//       icon: "🚚",
//       description: "Supply materials efficiently",
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log({
//       role: selectedRole,
//     });

//     // Login API
//   };

//   return (
//     <div className="min-h-screen flex bg-slate-100">
//       {/* LEFT SIDE */}

//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
//           alt="Construction"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative z-10 flex flex-col justify-center px-16 text-white">
//           <h1 className="text-6xl font-bold leading-tight">
//             Build Your
//             <br />
//             Dream Home
//           </h1>

//           <p className="mt-6 text-lg text-slate-200 max-w-lg">
//             Connect homeowners, contractors, and suppliers
//             on one powerful platform.
//           </p>

//           <div className="mt-10 flex gap-8">
//             <div>
//               <h3 className="text-3xl font-bold">500+</h3>
//               <p>Projects</p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold">300+</h3>
//               <p>Contractors</p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold">150+</h3>
//               <p>Suppliers</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}

//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6">

//         <div
//           className="
//             w-full
//             max-w-xl
//             backdrop-blur-xl
//             bg-white/70
//             border
//             border-white/30
//             shadow-2xl
//             rounded-3xl
//             p-8
//           "
//         >
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-slate-800">
//               GharBanao
//             </h2>

//             <p className="text-slate-500 mt-2">
//               Login to continue
//             </p>
//           </div>

//           {/* ROLE SELECTION */}

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//             {roles.map((role) => (
//               <button
//                 key={role.id}
//                 type="button"
//                 onClick={() => setSelectedRole(role.id)}
//                 className={`p-4 rounded-2xl border transition-all duration-300 text-left
//                   ${
//                     selectedRole === role.id
//                       ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
//                       : "bg-white hover:border-blue-400"
//                   }
//                 `}
//               >
//                 <div className="text-3xl">{role.icon}</div>

//                 <h3 className="font-semibold mt-3">
//                   {role.title}
//                 </h3>

//                 <p
//                   className={`text-xs mt-1 ${
//                     selectedRole === role.id
//                       ? "text-white/90"
//                       : "text-slate-500"
//                   }`}
//                 >
//                   {role.description}
//                 </p>
//               </button>
//             ))}
//           </div>

//           {/* LOGIN FORM */}

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-5 mt-8"
//           >
//             <div>
//               <label className="text-sm font-medium text-slate-700">
//                 Email Address
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="
//                   mt-2
//                   w-full
//                   px-4
//                   py-3
//                   rounded-xl
//                   border
//                   border-slate-300
//                   bg-white/80
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-blue-500
//                 "
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-slate-700">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 className="
//                   mt-2
//                   w-full
//                   px-4
//                   py-3
//                   rounded-xl
//                   border
//                   border-slate-300
//                   bg-white/80
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-blue-500
//                 "
//               />
//             </div>

//             <div className="flex justify-between items-center">
//               <label className="flex items-center gap-2 text-sm">
//                 <input type="checkbox" />
//                 Remember me
//               </label>

//               <button
//                 type="button"
//                 className="text-blue-600 text-sm"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               className="
//                 w-full
//                 py-3
//                 rounded-xl
//                 bg-blue-600
//                 hover:bg-blue-700
//                 text-white
//                 font-semibold
//                 transition-all
//               "
//             >
//               Sign In as{" "}
//               {selectedRole.charAt(0).toUpperCase() +
//                 selectedRole.slice(1)}
//             </button>
//           </form>

//           <p className="text-center text-sm text-slate-500 mt-6">
//             Don't have an account?
//             <Link to="/register" className="text-blue-600 ml-1 font-medium">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import gharbanavo from "../../assets/gharbanavo.jpeg"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${gharbanavo})`,
      }}
    >
      {/* Overlay */}
  <div className="absolute inset-0 bg-[#f8f3eb]/50" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-12 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-green-900">
            GharBanao
          </h1>

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
            The connected platform for homeowners,
            contractors and suppliers.
            Build smarter with one ecosystem.
          </p>
        </div>

        {/* Right Login Card */}
        <div className="w-full max-w-sm rounded-xl border border-white/30 bg-white/20 backdrop-blur-xl p-8 shadow-2xl">
          {/* <h2 className="text-5xl font-bold text-gray-900 mb-2">
            Welcome back 🍃
          </h2>

          <p className="text-gray-600 mb-8">
            Sign in to continue building a better future.
          </p> */}

          {/* Email */}
          <div className="mb-2">
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-11 rounded-xl border border-gray-200 bg-white/80 px-4 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-11 rounded-xl border border-gray-200 bg-white/80 px-4 pr-14 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
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

            <button className="text-green-800 font-medium">
              Forgot password?
            </button>
          </div>

          {/* Login */}
          <button className="w-full h-11 rounded-xl bg-[#184D3B] text-white font-semibold text-lg hover:bg-[#123a2c] transition">
            Sign In →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-gray-300" />

            <span className="text-sm text-gray-600">
              or continue with
            </span>

            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Only */}
          <button className="w-full h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center gap-3 hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />

            <span className="font-medium">
              Continue with Google
            </span>
          </button>

          {/* Security Note */}
          {/* <div className="mt-6 bg-white/40 rounded-xl border border-white/30 p-4">
            <p className="text-sm text-gray-700">
              🔒 Your data is protected with enterprise-grade security.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;