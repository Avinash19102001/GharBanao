// import React, {useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";
// import { ProfileSchema } from "./schemas/ProfileSchema";
// // import { createProfile } from "../../services/authServices";
// import {
//   createProfile,
//   getUserById,
// } from "../../services/authServices";

// const HouseOwnerProfile = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [profileImage, setProfileImage] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     getValues,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(ProfileSchema),
//     mode: "onTouched",
//     defaultValues: {
//       name: "",
//       email: "",
//       phone_number: "",
//       pincode: "",
//       address: "",
//       project_title: "",
//       start_timeline: "",
//       project_description: "",
//       building_type: "Residential",
//       construction_type: "Contractor Based",
//       project_budget: 0,
//       land_area: 0,
//       floors: 1,
//     },
//   });

//   // Target specific keys from the single schema before allowing progression
//   const handleNextStep = async () => {
//     const isStepOneValid = await trigger([
//       "name",
//       "email",
//       "phone_number",
//       "pincode",
//       "address",
//     ]);
//     if (isStepOneValid) {
//       setStep(2);
//     }
//   };

//   const handleImageUpload = (e) => {
//     const targetFile = e.target.files[0];
//     if (targetFile) {
//       setProfileImage({
//         file: targetFile,
//         url: URL.createObjectURL(targetFile),
//       });
//     }
//   };

//   const onFinalSubmit = async () => {
//     const masterFormData = getValues();
//     try {
//       const payload = {
//         first_name: masterFormData.name,
//         last_name: "",
//         mobile: masterFormData.phone_number,
//         email: masterFormData.email,
//         address: masterFormData.address,
//         pincode: masterFormData.pincode,
//         project_title: masterFormData.project_title,
//         start_timeline: masterFormData.start_timeline,
//         project_description: masterFormData.project_description,
//         building_type: masterFormData.building_type,
//         construction_type: masterFormData.construction_type,
//         project_budget: String(masterFormData.project_budget),
//         land_area: String(masterFormData.land_area),
//         floors: String(masterFormData.floors),
//         media_file: profileImage?.file?.name || "",
//       };

//       await createProfile(payload);
//       alert("Profile completed successfully!");
//       navigate("/houseownerdashboard");
//     } catch (error) {
//       alert(error?.response?.data?.message || "Profile submission failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FFFDF6] font-sans text-gray-800 pb-12">
//       {/* Top Header Bar */}
//       <header className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-xs">
//         <div className="bg-[#1E5631] text-white p-1.5 rounded-lg font-bold text-sm">
//           🐙 <span className="ml-1 tracking-tight">OCTOPUS</span>
//         </div>
//         <button
//           onClick={() => navigate("/")}
//           className="text-xs font-medium text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-1.5 rounded-md transition"
//         >
//           ← Back to Home
//         </button>
//       </header>

//       <main className="max-w-4xl mx-auto mt-8 px-4">
//         {/* Banner Display segment */}
//         <div className="bg-[#052E16] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between shadow-xs">
//           <div>
//             <span className="bg-[#15803D] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full text-emerald-200">
//               Owner Setup
//             </span>
//             <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">
//               Complete your profile
//             </h1>
//             <p className="text-gray-300 text-xs md:text-sm mt-1">
//               Add details to activate your dashboard.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0 flex items-center space-x-3">
//             <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-emerald-800">
//               <div
//                 className={`absolute inset-0 rounded-full border-4 border-amber-500 transition-all duration-300 ${step === 2 ? "rotate-180" : ""}`}
//               ></div>
//               <span className="text-xs font-bold">
//                 {step === 1 ? "50%" : "100%"}
//               </span>
//             </div>
//             <div>
//               <div className="text-[10px] uppercase text-gray-400 font-medium">
//                 Status
//               </div>
//               <div className="text-xs font-bold text-amber-400">
//                 Step {step} of 2
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tab Links Tracker */}
//         <div className="grid grid-cols-2 gap-4 my-6 border-b border-gray-200 pb-2">
//           <div
//             className={`pb-2 border-b-2 ${step === 1 ? "border-amber-500 font-semibold text-gray-900" : "border-transparent text-gray-400"}`}
//           >
//             <span className="block text-[10px] uppercase text-amber-600 font-bold">
//               Step 1
//             </span>
//             <span className="text-sm">Personal Details</span>
//           </div>
//           <div
//             className={`pb-2 border-b-2 ${step === 2 ? "border-amber-500 font-semibold text-gray-900" : "border-transparent text-gray-400"}`}
//           >
//             <span className="block text-[10px] uppercase text-amber-600 font-bold">
//               Step 2
//             </span>
//             <span className="text-sm">House Owner Profile</span>
//           </div>
//         </div>

//         {/* Unified Layout Form Body Component */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             if (step === 1) {
//               handleNextStep();
//             } else {
//               handleSubmit(onFinalSubmit)();
//             }
//           }}
//           className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 md:p-8"
//         >
//           {/* STEP 1 CONTROLS */}
//           {step === 1 && (
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
//                 <div className="text-[#1E5631] text-xl">👤</div>
//                 <div>
//                   <h2 className="text-base font-bold text-gray-900">
//                     Profile Details
//                   </h2>
//                   <p className="text-xs text-gray-400">
//                     Required basic setup details
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs uppercase font-bold text-gray-400 mb-3">
//                   Profile Photo
//                 </label>

//                 <div className="border border-dashed border-emerald-200 rounded-2xl p-6 bg-gradient-to-r from-emerald-50 to-white">
//                   <div className="flex flex-col md:flex-row items-center gap-6">
//                     {/* Avatar Preview */}
//                     <div className="relative">
//                       <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
//                         {profileImage ? (
//                           <img
//                             src={profileImage.url}
//                             alt="Profile"
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <div className="w-full h-full flex items-center justify-center text-4xl">
//                             👤
//                           </div>
//                         )}
//                       </div>

//                       <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-2 shadow-md">
//                         📷
//                       </div>
//                     </div>

//                     {/* Upload Actions */}
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-900">
//                         Upload Profile Photo
//                       </h3>

//                       <p className="text-sm text-gray-500 mt-1">
//                         JPG, PNG up to 5MB
//                       </p>

//                       <div className="flex flex-wrap gap-3 mt-4">
//                         <label
//                           htmlFor="avatar-file"
//                           className="cursor-pointer px-4 py-2 bg-[#052E16] text-white rounded-lg text-sm font-medium hover:bg-emerald-900 transition"
//                         >
//                           📁 Upload Photo
//                         </label>

//                         <label
//                           htmlFor="camera-file"
//                           className="cursor-pointer px-4 py-2 border border-emerald-600 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-50 transition"
//                         >
//                           📷 Open Camera
//                         </label>

//                         {profileImage && (
//                           <button
//                             type="button"
//                             onClick={() => setProfileImage(null)}
//                             className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50"
//                           >
//                             Remove
//                           </button>
//                         )}
//                       </div>

//                       <input
//                         id="avatar-file"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />

//                       <input
//                         id="camera-file"
//                         type="file"
//                         accept="image/*"
//                         capture="user"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     {...register("name")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     {...register("email")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Phone Number
//                   </label>
//                   <input
//                     {...register("phone_number")}
//                     maxLength={10}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   />
//                   {errors.phone_number && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.phone_number.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Pincode
//                   </label>
//                   <input
//                     {...register("pincode")}
//                     maxLength={6}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   />
//                   {errors.pincode && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.pincode.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Address
//                   </label>
//                   <textarea
//                     {...register("address")}
//                     rows={2}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white resize-none"
//                   />
//                   {errors.address && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.address.message}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* STEP 2 CONTROLS */}
//           {step === 2 && (
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
//                 <div className="text-[#1E5631] text-xl">🏠</div>
//                 <div>
//                   <h2 className="text-base font-bold text-gray-900">
//                     House Property Specifics
//                   </h2>
//                   <p className="text-xs text-gray-400">
//                     Describe your property construction needs
//                   </p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Project Title
//                   </label>
//                   <input
//                     {...register("project_title")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
//                   />
//                   {errors.project_title && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.project_title.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Start Timeline
//                   </label>
//                   <select
//                     {...register("start_timeline")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 cursor-pointer outline-none focus:bg-white"
//                   >
//                     <option value="">Select Timeline</option>
//                     <option value="Immediate">Immediate</option>
//                     <option value="1 Month">Within 1 Month</option>
//                     <option value="3 Months">Within 3 Months</option>
//                     <option value="6 Months">Within 6 Months</option>
//                     <option value="1 Year">Within 1 Year</option>
//                     <option value="Planning">Just Planning</option>
//                   </select>
//                   {errors.start_timeline && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.start_timeline.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Project Description
//                   </label>
//                   <textarea
//                     {...register("project_description")}
//                     rows={3}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white resize-none"
//                   />
//                   {errors.project_description && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.project_description.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Building Type
//                   </label>
//                   <select
//                     {...register("building_type")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 cursor-pointer outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   >
//                     <option value="">Select Building Type</option>
//                     <option value="Residential">Residential House</option>
//                     <option value="Villa">Villa</option>
//                     <option value="Apartment">Apartment</option>
//                     <option value="Commercial">Commercial Building</option>
//                     <option value="Office">Office Space</option>
//                     <option value="Retail">Retail Shop</option>
//                     <option value="Warehouse">Warehouse</option>
//                     <option value="Mixed Use">Mixed Use</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Construction Type
//                   </label>
//                   <select
//                     {...register("construction_type")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 cursor-pointer outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   >
//                     <option value="">Select Construction Type</option>
//                     <option value="Contractor Based">Contractor Based</option>
//                     <option value="Labour Contract">Labour Contract</option>
//                     <option value="Self Managed">Self Managed</option>
//                     <option value="Design & Build">Design & Build</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Project Budget (INR)
//                   </label>
//                   <select
//                     {...register("project_budget")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50"
//                   >
//                     <option value="">Select Budget</option>
//                     <option value="500000">Below ₹5 Lakhs</option>
//                     <option value="1000000">₹5 - ₹10 Lakhs</option>
//                     <option value="2500000">₹10 - ₹25 Lakhs</option>
//                     <option value="5000000">₹25 - ₹50 Lakhs</option>
//                     <option value="10000000">₹50 Lakhs - ₹1 Crore</option>
//                     <option value="20000000">Above ₹1 Crore</option>
//                   </select>
//                   {errors.project_budget && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.project_budget.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Land Area (SQ FT)
//                   </label>
//                   <select
//                     {...register("land_area")}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50"
//                   >
//                     <option value="">Select Area</option>
//                     <option value="600">600 Sq Ft</option>
//                     <option value="1000">1000 Sq Ft</option>
//                     <option value="1500">1500 Sq Ft</option>
//                     <option value="2000">2000 Sq Ft</option>
//                     <option value="3000">3000 Sq Ft</option>
//                     <option value="5000">5000+ Sq Ft</option>
//                   </select>
//                   {errors.land_area && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.land_area.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
//                     Total Floors Planned
//                   </label>
//                   <select
//                     {...register("floors", { valueAsNumber: true })}
//                     className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 cursor-pointer outline-none focus:bg-white focus:ring-1 focus:ring-emerald-600"
//                   >
//                     <option value="">Select Floors</option>
//                     <option value={1}>Ground Floor</option>
//                     <option value={2}>G + 1</option>
//                     <option value={3}>G + 2</option>
//                     <option value={4}>G + 3</option>
//                     <option value={5}>G + 4</option>
//                     <option value={6}>G + 5</option>
//                     <option value={7}>7 Floors</option>
//                     <option value={8}>8 Floors</option>
//                     <option value={9}>9 Floors</option>
//                     <option value={10}>10+ Floors</option>
//                   </select>
//                   {errors.floors && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.floors.message}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Action Step controls */}
//           <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
//             <div>
//               {step === 2 && (
//                 <button
//                   type="button"
//                   onClick={() => setStep(1)}
//                   className="text-xs font-bold text-gray-500 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
//                 >
//                   ← Back
//                 </button>
//               )}
//             </div>

//             <div className="flex items-center space-x-3">
//               {step === 1 ? (
//                 <button
//                   type="submit"
//                   className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-xs transition"
//                 >
//                   Next Step →
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="bg-[#052E16] hover:bg-emerald-950 text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-xs transition"
//                 >
//                   Complete Profile ✓
//                 </button>
//               )}
//             </div>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default HouseOwnerProfile;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ProfileSchema } from "./schemas/ProfileSchema";
import { getUserById, createProfile } from "../../services/authServices";

const HouseOwnerProfile = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  // const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProfileSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      pincode: "",
      address: "",
      project_title: "",
      start_timeline: "",
      project_description: "",
      building_type: "Residential",
      construction_type: "Contractor Based",
      project_budget: 0,
      land_area: 0,
      floors: 1,
    },
  });

  // Step 1: Pre-populate using the user service abstraction layer
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("houseOwnerId");
        console.log("HouseOwner ID:", userId);
        if (!userId) return;
        const response = await getUserById(userId);
        console.log("API Response:", response.data);

        const userData = response.data;

        reset({
          name: userData.name || "",
          email: userData.email || "",
          phone_number: userData.phone || "",
          address: userData.address || "",
          pincode: userData.pincode || "",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [reset, navigate]);

  const handleNextStep = async () => {
    const isStepOneValid = await trigger([
      "name",
      "email",
      "phone_number",
      "pincode",
      "address",
    ]);
    if (isStepOneValid) {
      setStep(2);
    }
  };

  const handleImageUpload = (e) => {
    const targetFile = e.target.files[0];
    if (targetFile) {
      setProfileImage({
        file: targetFile,
        url: URL.createObjectURL(targetFile),
      });
    }
  };

  // Step 2: Final Profile Submission via the service layer
  const onFinalSubmit = async () => {
    const masterFormData = getValues();
    try {
      const payload = {
        user_id: localStorage.getItem("houseOwnerId"),
        building_type: masterFormData.building_type,
        construction_type: masterFormData.construction_type,
        budget: Number(masterFormData.project_budget),
        land_area: Number(masterFormData.land_area),
        floors: Number(masterFormData.floors),
        project_title: masterFormData.project_title,
        project_description: masterFormData.project_description,
        profile_image_url: profileImage?.file?.name || "default.img",
        start_timeline: masterFormData.start_timeline || null,
      };

      await createProfile(payload);
      alert("Profile completed successfully!");
      navigate("/houseownerdashboard");
    } catch (error) {
      alert(error?.response?.data?.message || "Profile submission failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFDF6]">
        <p className="text-sm font-medium text-gray-500">
          Loading user profile...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF6] font-sans text-gray-800 pb-12">
      {/* Header element */}
      <header className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-xs">
        <div className="bg-[#1E5631] text-white p-1.5 rounded-lg font-bold text-sm">
          🐙 <span className="ml-1 tracking-tight">OCTOPUS</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-xs font-medium text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-1.5 rounded-md transition"
        >
          ← Back to Home
        </button>
      </header>

      <main className="max-w-4xl mx-auto mt-8 px-4">
        {/* Tracker Header */}
        <div className="bg-[#052E16] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between shadow-xs">
          <div>
            <span className="bg-[#15803D] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full text-emerald-200">
              Owner Setup
            </span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">
              Complete your profile
            </h1>
            <p className="text-gray-300 text-xs md:text-sm mt-1">
              Add details to activate your dashboard.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-emerald-800">
              <div
                className={`absolute inset-0 rounded-full border-4 border-amber-500 transition-all duration-300 ${step === 2 ? "rotate-180" : ""}`}
              ></div>
              <span className="text-xs font-bold">
                {step === 1 ? "50%" : "100%"}
              </span>
            </div>
            <div>
              <div className="text-[10px] uppercase text-gray-400 font-medium">
                Status
              </div>
              <div className="text-xs font-bold text-amber-400">
                Step {step} of 2
              </div>
            </div>
          </div>
        </div>

        {/* Form Breadcrumb tabs */}
        <div className="grid grid-cols-2 gap-4 my-6 border-b border-gray-200 pb-2">
          <div
            className={`pb-2 border-b-2 ${step === 1 ? "border-amber-500 font-semibold text-gray-900" : "border-transparent text-gray-400"}`}
          >
            <span className="block text-[10px] uppercase text-amber-600 font-bold">
              Step 1
            </span>
            <span className="text-sm">Personal Details</span>
          </div>
          <div
            className={`pb-2 border-b-2 ${step === 2 ? "border-amber-500 font-semibold text-gray-900" : "border-transparent text-gray-400"}`}
          >
            <span className="block text-[10px] uppercase text-amber-600 font-bold">
              Step 2
            </span>
            <span className="text-sm">House Owner Profile</span>
          </div>
        </div>

        {/* Master multi-step form element wrapper */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (step === 1) {
              handleNextStep();
            } else {
              handleSubmit(onFinalSubmit)();
            }
          }}
          className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 md:p-8"
        >
          {/* STEP 1: Personal Details UI */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                <div className="text-[#1E5631] text-xl">👤</div>
                <div>
                  <h2 className="text-base font-bold text-gray-900">
                    Profile Details
                  </h2>
                  <p className="text-xs text-gray-400">
                    Required basic setup details
                  </p>
                </div>
              </div>

              {/* Photo Upload Box Section */}
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-3">
                  Profile Photo
                </label>
                <div className="border border-dashed border-emerald-200 rounded-2xl p-6 bg-gradient-to-r from-emerald-50 to-white">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
                        {profileImage ? (
                          <img
                            src={profileImage.url}
                            alt="Profile Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-4xl">
                            👤
                          </div>
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-2 shadow-md">
                        📷
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Upload Profile Photo
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        JPG, PNG up to 5MB
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <label
                          htmlFor="avatar-file"
                          className="cursor-pointer px-4 py-2 bg-[#052E16] text-white rounded-lg text-sm font-medium hover:bg-emerald-900 transition"
                        >
                          📁 Upload Photo
                        </label>
                        <label
                          htmlFor="camera-file"
                          className="cursor-pointer px-4 py-2 border border-emerald-600 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-50 transition"
                        >
                          📷 Open Camera
                        </label>
                        {profileImage && (
                          <button
                            type="button"
                            onClick={() => setProfileImage(null)}
                            className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <input
                        id="avatar-file"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <input
                        id="camera-file"
                        type="file"
                        accept="image/*"
                        capture="user"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Identity Form Field Context Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Phone Number
                  </label>
                  <input
                    {...register("phone_number")}
                    maxLength={10}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Pincode
                  </label>
                  <input
                    {...register("pincode")}
                    maxLength={6}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.pincode.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Address
                  </label>
                  <textarea
                    {...register("address")}
                    rows={2}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white resize-none"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: House Property Specifics UI */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                <div className="text-[#1E5631] text-xl">🏠</div>
                <div>
                  <h2 className="text-base font-bold text-gray-900">
                    House Property Specifics
                  </h2>
                  <p className="text-xs text-gray-400">
                    Describe your property construction needs
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Project Title
                  </label>
                  <input
                    {...register("project_title")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
                  />
                  {errors.project_title && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.project_title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Start Timeline
                  </label>
                  <select
                    {...register("start_timeline")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1 Month">Within 1 Month</option>
                    <option value="3 Months">Within 3 Months</option>
                    <option value="6 Months">Within 6 Months</option>
                    <option value="1 Year">Within 1 Year</option>
                    <option value="Planning">Just Planning</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Project Description
                  </label>
                  <textarea
                    {...register("project_description")}
                    rows={3}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 outline-none focus:bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Building Type
                  </label>
                  <select
                    {...register("building_type")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus:outline-none"
                  >
                    <option value="Residential">Residential House</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Commercial">Commercial Building</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Construction Type
                  </label>
                  <select
                    {...register("construction_type")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus:outline-none"
                  >
                    <option value="Contractor Based">Contractor Based</option>
                    <option value="Labour Contract">Labour Contract</option>
                    <option value="Self Managed">Self Managed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Project Budget (INR)
                  </label>
                  <select
                    {...register("project_budget")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50"
                  >
                    <option value="">Select Budget</option>
                    <option value="500000">Below ₹5 Lakhs</option>
                    <option value="1000000">₹5 - ₹10 Lakhs</option>
                    <option value="2500000">₹10 - ₹25 Lakhs</option>
                    <option value="5000000">₹25 - ₹50 Lakhs</option>
                    <option value="10000000">₹50 Lakhs - ₹1 Crore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Land Area (SQ FT)
                  </label>
                  <select
                    {...register("land_area")}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50"
                  >
                    <option value="">Select Area</option>
                    <option value="600">600 Sq Ft</option>
                    <option value="1000">1000 Sq Ft</option>
                    <option value="1500">1500 Sq Ft</option>
                    <option value="2000">2000 Sq Ft</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Total Floors Planned
                  </label>
                  <select
                    {...register("floors", { valueAsNumber: true })}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus:outline-none"
                  >
                    <option value={1}>Ground Floor</option>
                    <option value={2}>G + 1</option>
                    <option value={3}>G + 2</option>
                    <option value={4}>G + 3</option>
                    <option value={5}>G + 4</option>
                    <option value={6}>G + 5</option>
                    <option value={7}>7+ Floors</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Action Step controls block */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-gray-500 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  ← Back
                </button>
              )}
            </div>
            <div className="flex items-center space-x-3">
              {step === 1 ? (
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition"
                >
                  Next Step →
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#052E16] hover:bg-emerald-950 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition"
                >
                  Complete Profile ✓
                </button>
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default HouseOwnerProfile;
