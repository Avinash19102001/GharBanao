// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff, User, Phone, Mail, MapPin, Landmark } from "lucide-react";
// import { registerUser } from "../../services/authServices";

// const Register = () => {
//   const [selectedRole, setSelectedRole] = useState("houseowner");
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     pincode: "",
//     address: "",
//   });

//   const [loadingAddress, setLoadingAddress] = useState(false);
//   const [addressError, setAddressError] = useState("");

//   const roles = [
//     { id: "houseowner", title: "Homeowner", icon: "🏠" },
//     { id: "contractor", title: "Builder", icon: "👷" },
//     { id: "supplier", title: "Supplier", icon: "🚚" },
//     { id: "equipment", title: "Equipment", icon: "🛠️" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "pincode" && value.length === 6) {
//       fetchAddressFromPincode(value);
//     }
//   };

//   const fetchAddressFromPincode = async (pin) => {
//     setLoadingAddress(true);
//     setAddressError("");
//     try {
//       const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
//       const data = await res.json();

//       if (data[0].Status === "Success") {
//         const postOffice = data[0].PostOffice[0];
//         const autoAddress = `${postOffice.Name}, ${postOffice.Block}, ${postOffice.District}, ${postOffice.State}`;
//         setFormData((prev) => ({ ...prev, address: autoAddress }));
//       } else {
//         setAddressError("Invalid Pincode.");
//       }
//     } catch (err) {
//       setAddressError("Failed to fetch address.");
//     } finally {
//       setLoadingAddress(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         ...formData,
//         role: selectedRole,
//       };

//       const response = await registerUser(payload);

//       console.log("Success:", response.data);

//       alert("Registration Successful");
//     } catch (error) {
//       console.error(error);
//       alert(error?.response?.data?.detail || "Registration Failed");
//     }
//   };

//   return (
//     <div className="h-screen w-full flex bg-slate-50 overflow-hidden font-sans antialiased">
//       {/* LEFT SIDE BANNER */}
//       <div className="hidden lg:flex lg:w-[55%] relative p-16 flex-col justify-between h-full">
//         <img
//           src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
//           alt="Construction background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-950/40"></div>

//         {/* Logo */}
//         <div className="relative z-10 flex items-center gap-3">
//           <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
//             O
//           </div>
//           <div>
//             <span className="text-white font-black tracking-wider text-xl block leading-none">
//               OCTOPUS
//             </span>
//             <span className="text-slate-300 text-[10px] tracking-widest font-medium uppercase">
//               Plan. Build. Live. Forever.
//             </span>
//           </div>
//         </div>

//         {/* Heading */}
//         <div className="relative z-10 max-w-xl my-auto">
//           <h1 className="text-white font-extrabold text-6xl tracking-tight leading-[1.1] mb-6">
//             Build with trust.
//             <br />
//             <span className="border-b-4 border-emerald-500 pb-1">
//               Serve for
//             </span>
//             <br />
//             generations.
//           </h1>
//           <p className="text-slate-200 text-sm leading-relaxed opacity-90 max-w-md">
//             Join the connected platform for Homeowners, Builders and Suppliers.
//             One ecosystem. Shared intelligence. Stronger homes. Better India.
//           </p>
//         </div>

//         {/* Badges */}
//         <div className="relative z-10 flex items-center gap-4 border-t border-white/10 pt-6">
//           <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2">
//             <span className="block text-xs font-bold text-emerald-400 tracking-wider">
//               RERA
//             </span>
//             <span className="text-[10px] text-white opacity-80 uppercase">
//               Compliant
//             </span>
//           </div>
//           <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2">
//             <span className="block text-xs font-bold text-emerald-400 tracking-wider">
//               BUILDING PERMIT
//             </span>
//             <span className="text-[10px] text-white opacity-80 uppercase">
//               Verified Platform
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE FORM CONTAINER */}
//       <div className="w-full lg:w-[45%] h-full flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-slate-50 relative">
//         {/* Top Header Actions */}
//         <div className="w-full max-w-xl flex justify-end gap-3 mb-4 shrink-0">
//           <button className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5 transition">
//             🌐 English
//           </button>
//           <Link
//             to="/"
//             className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition"
//           >
//             ← Back to Home
//           </Link>
//         </div>

//         {/* Form Card */}
//         <div className="w-full max-w-xl bg-white border border-slate-200/60 shadow-xl rounded-[2rem] p-6 md:p-8 mb-4">
//           <div className="mb-6">
//             <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
//               Start your journey{" "}
//               <span className="text-emerald-600 text-xl">🌿</span>
//             </h2>
//             <p className="text-slate-500 text-xs mt-0.5 font-medium">
//               Create your account and build with confidence.
//             </p>
//           </div>

//           {/* Role Tabs Selector */}
//           <div className="grid grid-cols-4 gap-2 mb-6">
//             {roles.map((role) => (
//               <button
//                 key={role.id}
//                 type="button"
//                 onClick={() => setSelectedRole(role.id)}
//                 className={`py-2.5 px-1 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 gap-1
//                   ${
//                     selectedRole === role.id
//                       ? "bg-emerald-50 text-emerald-800 border-emerald-600 ring-2 ring-emerald-600/10 font-semibold"
//                       : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
//                   }`}
//               >
//                 <span className="text-lg">{role.icon}</span>
//                 <span className="text-[11px] tracking-tight">{role.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Form Fields */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-700 mb-1">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 outline-none transition"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-slate-700 mb-1">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="9876543210"
//                     className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 outline-none transition"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 outline-none transition"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="sm:col-span-1">
//                 <label className="block text-xs font-semibold text-slate-700 mb-1">
//                   Pincode
//                 </label>
//                 <div className="relative">
//                   <Landmark className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     name="pincode"
//                     required
//                     maxLength={6}
//                     value={formData.pincode}
//                     onChange={handleChange}
//                     placeholder="500001"
//                     className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 outline-none transition font-medium"
//                   />
//                   {loadingAddress && (
//                     <span className="absolute right-2.5 top-3 flex h-3 w-3 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-600"></span>
//                   )}
//                 </div>
//                 {addressError && (
//                   <p className="text-[10px] text-rose-500 mt-0.5">
//                     {addressError}
//                   </p>
//                 )}
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="block text-xs font-semibold text-slate-700 mb-1">
//                   Address
//                 </label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     name="address"
//                     required
//                     value={formData.address}
//                     onChange={handleChange}
//                     placeholder="Street address or Location autofilled"
//                     className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 outline-none transition"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">
//                 Create Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Create a strong password"
//                   className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 outline-none transition"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-4 h-4" />
//                   ) : (
//                     <Eye className="w-4 h-4" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-start gap-2 pt-1">
//               <input
//                 id="terms"
//                 type="checkbox"
//                 required
//                 className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-3.5 w-3.5 accent-emerald-600"
//               />
//               <label
//                 htmlFor="terms"
//                 className="text-[11px] text-slate-500 font-medium leading-normal select-none"
//               >
//                 I agree to the{" "}
//                 <span className="text-slate-700 underline cursor-pointer">
//                   Terms of Service
//                 </span>{" "}
//                 and{" "}
//                 <span className="text-slate-700 underline cursor-pointer">
//                   Privacy Policy
//                 </span>
//                 .
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-2.5 px-4 rounded-xl transition shadow-md shadow-emerald-950/10 flex items-center justify-center gap-2 mt-2 text-xs uppercase tracking-wider"
//             >
//               Create account &rarr;
//             </button>
//           </form>

//           {/* Social Sign-In */}
//           <div className="relative flex py-3 items-center">
//             <div className="flex-grow border-t border-slate-200"></div>
//             <span className="flex-shrink mx-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
//               or continue with
//             </span>
//             <div className="flex-grow border-t border-slate-200"></div>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <button className="flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition shadow-sm">
//               <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 className="w-3.5 h-3.5"
//                 alt="Google"
//               />{" "}
//               Google
//             </button>
//             <button className="flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition shadow-sm">
//               <img
//                 src="https://www.svgrepo.com/show/512423/microsoft.svg"
//                 className="w-3.5 h-3.5"
//                 alt="Microsoft"
//               />{" "}
//               Microsoft
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, User, Phone, Mail, MapPin, Landmark } from "lucide-react";

import { RegisterSchema } from "../auth/schemas/RegisterSchema";
import { registerUser } from "../../services/authServices";

const Register = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("houseowner");
  const [showPassword, setShowPassword] = useState(false);
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [addressFetchError, setAddressFetchError] = useState("");

  const roles = [
    { id: "houseowner", title: "Homeowner", icon: "🏠" },
    { id: "contractor", title: "Builder", icon: "👷" },
    { id: "supplier", title: "Supplier", icon: "🚚" },
    { id: "equipment", title: "Equipment", icon: "🛠️" },
  ];

  // React Hook Form Configuration linked with Zod Validation
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pincode: "",
      address: "",
      password: "",
    },
  });

  // Watch pincode to auto-trigger external address service
  const watchedPincode = watch("pincode");

  const handlePincodeChange = async (e) => {
    const pin = e.target.value;
    setValue("pincode", pin);

    if (pin.length === 6) {
      setLoadingAddress(true);
      setAddressFetchError("");
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await res.json();

        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          const autoAddress = `${postOffice.Name}, ${postOffice.Block}, ${postOffice.District}, ${postOffice.State}`;
          setValue("address", autoAddress, { shouldValidate: true });
        } else {
          setAddressFetchError("Invalid Pincode.");
        }
      } catch (err) {
        setAddressFetchError("Failed to fetch address details.");
      } finally {
        setLoadingAddress(false);
      }
    }
  };

  const onSubmitForm = async (data) => {
    try {
      const payload = {
        ...data,
        role: selectedRole,
      };

      const response = await registerUser(payload);
      console.log(response.data);
      localStorage.setItem("houseOwnerId", response.data.id);

      console.log("Stored HouseOwner ID:", response.data.id);
      
      alert("Registration Successful!");

      // Dynamic navigation targeting specific workspace profiles based on selected role
      if (selectedRole === "houseowner") {
        navigate("/houseownerprofile");
      } else if (selectedRole === "contractor") {
        navigate("/contractorprofile");
      } else if (selectedRole === "supplier") {
        navigate("/supplier-completeprofile");
      } else if (selectedRole === "equipment") {
        navigate("/equipmentregister");
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.detail || "Registration Failed");
    }
  };

  return (
    <div className="h-screen w-full flex bg-slate-50 overflow-hidden font-sans antialiased">
      {/* LEFT SIDE BANNER */}
      <div className="hidden lg:flex lg:w-[55%] relative p-16 flex-col justify-between h-full">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-950/40"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
            O
          </div>
          <div>
            <span className="text-white font-black tracking-wider text-xl block leading-none">
              OCTOPUS
            </span>
            <span className="text-slate-300 text-[10px] tracking-widest font-medium uppercase">
              Plan. Build. Live. Forever.
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-xl my-auto">
          <h1 className="text-white font-extrabold text-6xl tracking-tight leading-[1.1] mb-6">
            Build with trust.
            <br />
            <span className="border-b-4 border-emerald-500 pb-1">
              Serve for
            </span>
            <br />
            generations.
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed opacity-90 max-w-md">
            Join the connected platform for Homeowners, Builders and Suppliers.
            One ecosystem. Shared intelligence. Stronger homes. Better India.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 border-t border-white/10 pt-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2">
            <span className="block text-xs font-bold text-emerald-400 tracking-wider">
              RERA
            </span>
            <span className="text-[10px] text-white opacity-80 uppercase">
              Compliant
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2">
            <span className="block text-xs font-bold text-emerald-400 tracking-wider">
              BUILDING PERMIT
            </span>
            <span className="text-[10px] text-white opacity-80 uppercase">
              Verified Platform
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM CONTAINER */}
      <div className="w-full lg:w-[45%] h-full flex flex-col justify-start items-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-slate-50 relative">
        <div className="w-full max-w-xl flex justify-end gap-3 mb-4 shrink-0">
          <button
            type="button"
            className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5 transition"
          >
            🌐 English
          </button>
          <Link
            to="/"
            className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="w-full max-w-xl bg-white border border-slate-200/60 shadow-xl rounded-[2rem] p-6 md:p-8 mb-4">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
              Start your journey{" "}
              <span className="text-emerald-600 text-xl">🌿</span>
            </h2>
            <p className="text-slate-500 text-xs mt-0.5 font-medium">
              Create your account and build with confidence.
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`py-2.5 px-1 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 gap-1
                  ${
                    selectedRole === role.id
                      ? "bg-emerald-50 text-emerald-800 border-emerald-600 ring-2 ring-emerald-600/10 font-semibold"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
              >
                <span className="text-lg">{role.icon}</span>
                <span className="text-[11px] tracking-tight">{role.title}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
            {/* Full Name & Phone inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your name"
                    className={`w-full pl-9 pr-4 py-2 bg-white border rounded-xl text-xs outline-none transition focus:ring-4 ${
                      errors.name
                        ? "border-rose-400 focus:ring-rose-50"
                        : "border-slate-200 focus:border-emerald-600 focus:ring-emerald-50"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[10px] text-rose-500 mt-1 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="9876543210"
                    max={10}
                    className={`w-full pl-9 pr-4 py-2 bg-white border rounded-xl text-xs outline-none transition focus:ring-4 ${
                      errors.phone
                        ? "border-rose-400 focus:ring-rose-50"
                        : "border-slate-200 focus:border-emerald-600 focus:ring-emerald-50"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[10px] text-rose-500 mt-1 font-medium">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className={`w-full pl-9 pr-4 py-2 bg-white border rounded-xl text-xs outline-none transition focus:ring-4 ${
                    errors.email
                      ? "border-rose-400 focus:ring-rose-50"
                      : "border-slate-200 focus:border-emerald-600 focus:ring-emerald-50"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[10px] text-rose-500 mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Pincode & Address Input Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pincode
                </label>
                <div className="relative">
                  <Landmark className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    maxLength={6}
                    {...register("pincode")}
                    onChange={handlePincodeChange}
                    placeholder="500001"
                    className={`w-full pl-9 pr-4 py-2 bg-white border rounded-xl text-xs font-medium outline-none transition focus:ring-4 ${
                      errors.pincode
                        ? "border-rose-400 focus:ring-rose-50"
                        : "border-slate-200 focus:border-emerald-600 focus:ring-emerald-50"
                    }`}
                  />
                  {loadingAddress && (
                    <span className="absolute right-2.5 top-3 flex h-3 w-3 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-600"></span>
                  )}
                </div>
                {(errors.pincode || addressFetchError) && (
                  <p className="text-[10px] text-rose-500 mt-1 font-medium">
                    {errors.pincode?.message || addressFetchError}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="Street address or Location autofilled"
                    className={`w-full pl-9 pr-4 py-2 bg-white border rounded-xl text-xs outline-none transition focus:ring-4 ${
                      errors.address
                        ? "border-rose-400 focus:ring-rose-50"
                        : "border-slate-200 focus:border-emerald-600 focus:ring-emerald-50"
                    }`}
                  />
                </div>
                {errors.address && (
                  <p className="text-[10px] text-rose-500 mt-1 font-medium">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password input segments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                    className={`w-full px-4 py-2 bg-white border rounded-xl text-xs outline-none transition focus:ring-4 ${
                      errors.password
                        ? "border-rose-400 focus:ring-rose-50"
                        : "border-slate-200 focus:border-emerald-600 focus:ring-emerald-50"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[10px] text-rose-500 mt-1 font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-400 text-white font-semibold py-2.5 px-4 rounded-xl transition shadow-md shadow-emerald-950/10 flex items-center justify-center gap-2 mt-2 text-xs uppercase tracking-wider"
            >
              {isSubmitting ? "Creating Account..." : "Create account →"}
            </button>
          </form>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition shadow-sm"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-3.5 h-3.5"
                alt="Google"
              />{" "}
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 transition shadow-sm"
            >
              <img
                src="https://www.svgrepo.com/show/512423/microsoft.svg"
                className="w-3.5 h-3.5"
                alt="Microsoft"
              />{" "}
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
