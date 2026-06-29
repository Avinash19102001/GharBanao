// const dashboardData = {
//   ownerName: "Bhargava Family",
//   projectName: "Royal Residency",
//   completion: 65,
//   budgetUsed: "32.50 L",
//   budgetPercentage: 65,
//   escrowBalance: "17.50 L",
//   healthScore: 9.2,
//   delayRisk: "Minimal Risk",
//   contractor: "Balaji Infra projects",
//   location: "Hyderabad, Telangana",

//   workersToday: 18,
//   completedTasks: 34,
//   pendingTasks: 8,
//   materialsDelivered: 12,

//   totalDeposited: "50,00,000",
//   totalReleased: "32,50,000",
//   pendingAmount: "17,50,000",
// };

// const contractorRequests = [
//   {
//     id: 1,
//     contractor: "Balaji Infra Projects",
//     project: "Villa Construction",
//     amount: "₹48,00,000",
//     duration: "10 Months",
//   },
//   {
//     id: 2,
//     contractor: "Sai Constructions",
//     project: "Duplex House",
//     amount: "₹52,00,000",
//     duration: "12 Months",
//   },
// ];

// const supplierRequests = [
//   {
//     id: 1,
//     supplier: "Sri Lakshmi Cement",
//     project: "Material Supply",
//     amount: "₹8,50,000",
//     duration: "3 Months",
//   },
//   {
//     id: 2,
//     supplier: "Ganesh Steel Traders",
//     project: "Steel Supply",
//     amount: "₹12,00,000",
//     duration: "4 Months",
//   },
// ];

// import {
//   Bell,
//   Home,
//   Wallet,
//   Shield,
//   Clock,
//   HeartHandshake,
//   MapPin,
// } from "lucide-react";
// import { useState } from "react";
// import HouseOwnerProjects from "./HouseOwnerProjects";
// import HouseEstimate from "./HouseEstimate";
// import FindContractors from "./FindContractor";
// import FindSuppliers from "./FindSuppliers";
// import HouseOwnerSiteMonitoring from "./HouseOwnerSiteMonitoring";
// import HouseOwnerMessages from "./HouseOwnerMessages";
// import HouseOwnerRequests from "./HouseOwnerRequests";
// import HouseOwnerEscrow from "./HouseOwnerEscrow";

// export default function HouseOwnerDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [constructionMode, setConstructionMode] = useState("contractor");

//   const requests =
//     constructionMode === "contractor" ? contractorRequests : supplierRequests;

//   const handleConstructionModeChange = (mode) => {
//     setConstructionMode(mode);

//     setActiveTab(mode === "contractor" ? "contractor" : "supplier");
//   };

//   // Helper helper to dynamically generate user initials (e.g., "Sharma Family" -> "SF")
//   const getInitials = (name) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();
//   };

//   return (
//     <div className="min-h-screen bg-[#F7F8F4]">
//       {/* Header */}
//       <header className="bg-white border-b">
//         <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold text-green-900">GharBanao</h1>
//             <p className="text-xs tracking-widest text-gray-500">
//               PLAN. BUILD. LIVE. FOREVER.
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <Bell size={22} />

//             <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
//               <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center">
//                 {getInitials(dashboardData.ownerName)}
//               </div>

//               <div>
//                 <h4 className="font-semibold">{dashboardData.ownerName}</h4>
//                 <p className="text-xs text-gray-500">Homeowner</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-[1440px] mx-auto p-4 lg:p-8">
//         {/* Hero */}
//         <section className="rounded-3xl overflow-hidden bg-[#EEF3E8] mb-8">
//           <div className="grid lg:grid-cols-2">
//             <div className="p-8">
//               <h2 className="text-4xl font-bold text-green-950">
//                 Welcome home, {dashboardData.ownerName}! 🏡
//               </h2>

//               <p className="mt-4 text-gray-600 max-w-lg">
//                 Every dream home begins with trust and the right partner. We are
//                 with you in every step of your journey.
//               </p>

//               <div className="flex flex-wrap gap-3 mt-6">
//                 <button className="bg-white px-5 py-2 rounded-full border">
//                   Project Status: In Progress
//                 </button>

//                 <button
//                   onClick={() => handleConstructionModeChange("contractor")}
//                   className={`px-5 py-2 rounded-full transition-all ${
//                     constructionMode === "contractor"
//                       ? "bg-green-700 text-white shadow-md"
//                       : "bg-white border text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Hire Contractor
//                 </button>

//                 <button
//                   onClick={() => handleConstructionModeChange("self")}
//                   className={`px-5 py-2 rounded-full transition-all ${
//                     constructionMode === "self"
//                       ? "bg-green-700 text-white shadow-md"
//                       : "bg-white border text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Self Construction
//                 </button>
//               </div>
//             </div>

//             <div className="hidden lg:block">
//               <img
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Tabs */}
//         <div className="bg-white rounded-3xl border border-[#D7E4D9] px-2 py-1 mb-6 overflow-x-auto">
//           <div className="flex min-w-max">
//             <button
//               onClick={() => setActiveTab("requests")}
//               className={`px-8 py-4 font-medium transition-all relative ${
//                 activeTab === "requests"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               Requests
//               <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center">
//                 {requests.length}
//               </span>
//             </button>
//             <button
//               onClick={() => setActiveTab("dashboard")}
//               className={`px-8 py-4 font-medium transition-all ${
//                 activeTab === "dashboard"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               Dashboard
//             </button>

//             <button
//               onClick={() => setActiveTab("project")}
//               className={`px-8 py-4 font-medium transition-all ${
//                 activeTab === "project"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               My Project
//             </button>

//             <button
//               onClick={() => setActiveTab("estimates")}
//               className="px-8 py-4 font-medium text-gray-500 hover:text-green-700"
//             >
//               Estimates
//             </button>

//             <button
//               onClick={() =>
//                 setActiveTab(
//                   constructionMode === "contractor" ? "contractor" : "supplier",
//                 )
//               }
//               className={`px-8 py-4 font-medium transition-all ${
//                 activeTab === "contractor" || activeTab === "supplier"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               {constructionMode === "contractor" ? "Contractor" : "Supplier"}
//             </button>
//             <button
//               onClick={() => setActiveTab("escrow")}
//               className={`px-8 py-4 font-medium transition-all ${
//                 activeTab === "escrow"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               Escrow
//             </button>

//             <button
//               onClick={() => setActiveTab("sitemonitoring")}
//               className={`px-8 py-4 font-medium transition-all ${
//                 activeTab === "sitemonitoring"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               Site Monitoring
//             </button>

//             <button
//               onClick={() => setActiveTab("messages")}
//               className={`px-8 py-4 font-medium transition-all ${
//                 activeTab === "messages"
//                   ? "text-green-800 border-b-2 border-green-700"
//                   : "text-gray-500 hover:text-green-700"
//               }`}
//             >
//               Messages
//             </button>
//           </div>
//         </div>

//         {/* REQUESTS */}
//         {activeTab === "requests" && (
//           <HouseOwnerRequests
//             requests={requests}
//             constructionMode={constructionMode}
//           />
//         )}

//         {/* DASHBOARD */}
//         {activeTab === "dashboard" && (
//           <>
//             <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
//               <Card
//                 icon={<Home />}
//                 title="Completion"
//                 value={`${dashboardData.completion}%`}
//                 subtitle="On Track"
//               />

//               <Card
//                 icon={<MapPin />}
//                 title="Budget Usage"
//                 value={`₹${dashboardData.budgetUsed}`}
//                 subtitle={`${dashboardData.budgetPercentage}%`}
//               />

//               <Card
//                 icon={<Clock />}
//                 title="Delay Risk"
//                 value={dashboardData.delayRisk}
//                 subtitle="Schedule is looking good"
//               />

//               <Card
//                 icon={<Wallet />}
//                 title="Escrow Balance"
//                 value={`₹${dashboardData.escrowBalance}`}
//                 subtitle="Available to release"
//               />

//               <Card
//                 icon={<HeartHandshake />}
//                 title="Project Health"
//                 value={`${dashboardData.healthScore} / 10`}
//                 subtitle="Excellent"
//               />
//             </section>

//             <section className="grid lg:grid-cols-3 gap-6 mt-8">
//               {/* Project Progress */}
//               <div className="bg-white rounded-3xl p-6 border">
//                 <h3 className="text-2xl font-bold mb-4">Project Progress</h3>

//                 <h4 className="text-xl font-semibold">
//                   {dashboardData.projectName}
//                 </h4>

//                 <p className="text-gray-500 flex items-center gap-2 mt-2">
//                   <MapPin size={16} />
//                   {dashboardData.location}
//                 </p>

//                 <div className="mt-8">
//                   <div className="flex justify-between mb-2">
//                     <span>Completion</span>
//                     <span>{dashboardData.completion}%</span>
//                   </div>

//                   <div className="h-3 rounded-full bg-gray-200">
//                     <div
//                       className="h-3 rounded-full bg-green-700"
//                       style={{
//                         width: `${dashboardData.completion}%`,
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-12 flex items-center gap-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                     <Shield />
//                   </div>

//                   <div>
//                     <h5 className="font-semibold">
//                       {dashboardData.contractor}
//                     </h5>

//                     <p className="text-sm text-gray-500">Assigned contractor</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Escrow */}
//               <div className="bg-white rounded-3xl p-6 border">
//                 <h3 className="text-2xl font-bold mb-6">Escrow & Payments</h3>

//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Deposited</p>

//                     <p className="font-bold">₹{dashboardData.totalDeposited}</p>
//                   </div>

//                   <div>
//                     <p className="text-gray-500 text-sm">Total Released</p>

//                     <p className="font-bold text-green-700">
//                       ₹{dashboardData.totalReleased}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-gray-500 text-sm">Pending</p>

//                     <p className="font-bold text-yellow-600">
//                       ₹{dashboardData.pendingAmount}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="border rounded-2xl p-5 mt-6">
//                   <h4 className="text-3xl font-bold text-green-800">
//                     ₹3,50,000
//                   </h4>

//                   <p className="text-gray-500 mt-2">
//                     After First Floor Slab Completion
//                   </p>
//                 </div>
//               </div>

//               {/* Site Monitoring */}
//               <div className="bg-white rounded-3xl p-6 border">
//                 <h3 className="text-2xl font-bold mb-4">Site Monitoring</h3>

//                 <img
//                   src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
//                   alt=""
//                   className="rounded-2xl h-52 w-full object-cover"
//                 />
//               </div>
//             </section>
//           </>
//         )}

//         {/* PROJECT */}
//         {activeTab === "project" && <HouseOwnerProjects />}

//         {/* ESTIMATES */}
//         {activeTab === "estimates" && <HouseEstimate />}

//         {/* CONTRACTOR */}
//         {activeTab === "contractor" && <FindContractors />}

//         {/* SUPPLIER */}
//         {activeTab === "supplier" && <FindSuppliers />}

//         {/* ESCROW */}
//         {activeTab === "escrow" && <HouseOwnerEscrow />}

//         {/* SITE MONITORING */}
//         {activeTab === "sitemonitoring" && <HouseOwnerSiteMonitoring />}

//         {/* MESSAGES */}
//         {activeTab === "messages" && <HouseOwnerMessages />}
//       </div>
//     </div>
//   );
// }

// function Card({ icon, title, value, subtitle }) {
//   return (
//     <div className="bg-white rounded-3xl border p-6">
//       <div className="flex justify-between">
//         <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
//           {icon}
//         </div>

//         <span className="text-sm text-green-700 font-medium">{subtitle}</span>
//       </div>

//       <h4 className="text-gray-500 mt-5">{title}</h4>

//       <p className="text-4xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }

import {
  Bell,
  Home,
  Wallet,
  Shield,
  Clock,
  HeartHandshake,
  MapPin,
  ChevronRight,
  User,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import HouseOwnerProjects from "./HouseOwnerProjects";
import HouseEstimate from "./HouseEstimate";
import FindContractors from "./FindContractor";
import FindSuppliers from "./FindSuppliers";
import HouseOwnerSiteMonitoring from "./HouseOwnerSiteMonitoring";
import HouseOwnerMessages from "./HouseOwnerMessages";
import HouseOwnerRequests from "./HouseOwnerRequests";
import HouseOwnerEscrow from "./HouseOwnerEscrow";

const dashboardData = {
  ownerName: "Bhargava Family",
  projectName: "Royal Residency",
  completion: 65,
  budgetUsed: "32.50 L",
  budgetPercentage: 65,
  escrowBalance: "17.50 L",
  healthScore: 9.2,
  delayRisk: "Minimal Risk",
  contractor: "Balaji Infra projects",
  location: "Hyderabad, Telangana",

  workersToday: 18,
  completedTasks: 34,
  pendingTasks: 8,
  materialsDelivered: 12,

  totalDeposited: "50,00,000",
  totalReleased: "32,50,000",
  pendingAmount: "17,50,000",
};

const contractorRequests = [
  {
    id: 1,
    contractor: "Balaji Infra Projects",
    project: "Villa Construction",
    amount: "₹48,00,000",
    duration: "10 Months",
  },
  {
    id: 2,
    contractor: "Sai Constructions",
    project: "Duplex House",
    amount: "₹52,00,000",
    duration: "12 Months",
  },
];

const supplierRequests = [
  {
    id: 1,
    supplier: "Sri Lakshmi Cement",
    project: "Material Supply",
    amount: "₹8,50,000",
    duration: "3 Months",
  },
  {
    id: 2,
    supplier: "Ganesh Steel Traders",
    project: "Steel Supply",
    amount: "₹12,00,000",
    duration: "4 Months",
  },
];

export default function HouseOwnerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [constructionMode, setConstructionMode] = useState("contractor");

  const requests =
    constructionMode === "contractor" ? contractorRequests : supplierRequests;

  const handleConstructionModeChange = (mode) => {
    setConstructionMode(mode);
    setActiveTab(mode === "contractor" ? "contractor" : "supplier");
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-md shadow-emerald-600/20">
              <Home size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                GharBanao
              </h1>
              <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                Plan • Build • Live
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-all">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-600 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 border border-slate-200 rounded-2xl pl-3 pr-4 py-1.5 bg-slate-50/50">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-semibold text-sm shadow-sm">
                {getInitials(dashboardData.ownerName)}
              </div>
              <div className="hidden sm:block text-left">
                <h4 className="text-sm font-semibold text-slate-800 leading-tight">
                  {dashboardData.ownerName}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Premium Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
        {/* Dynamic Hero Banner */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white shadow-xl shadow-slate-950/10 mb-8">
          <div className="grid lg:grid-cols-5 items-center">
            <div className="p-8 lg:p-12 lg:col-span-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Project Live Status
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Welcome back,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  {dashboardData.ownerName}
                </span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm lg:text-base max-w-md font-medium leading-relaxed">
                Your construction build profile at{" "}
                <span className="text-white underline decoration-emerald-500 underline-offset-4">
                  {dashboardData.projectName}
                </span>{" "}
                is running smoothly.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={() => handleConstructionModeChange("contractor")}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    constructionMode === "contractor"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400/20"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  Hire General Contractor
                </button>
                <button
                  onClick={() => handleConstructionModeChange("self")}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    constructionMode === "self"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400/20"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  Self-Sourced Material
                </button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2 h-full min-h-[260px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Modern House Architecture"
                className="w-full h-full object-cover grayscale-[15%] brightness-90"
              />
            </div>
          </div>
        </section>

        {/* Clean Segmented Control / Tab Bar */}
        <div className="bg-slate-200/60 p-1 rounded-2xl mb-8 overflow-x-auto shadow-inner">
          <div className="flex min-w-max gap-1">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "dashboard"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === "requests"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Action Requests
              <span className="bg-rose-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-md shadow-sm">
                {requests.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("project")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "project"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              My Blueprints
            </button>
            <button
              onClick={() => setActiveTab("estimates")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm text-slate-600 hover:text-slate-900 transition-all`}
            >
              Smart Estimates
            </button>
            <button
              onClick={() =>
                setActiveTab(
                  constructionMode === "contractor" ? "contractor" : "supplier",
                )
              }
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "contractor" || activeTab === "supplier"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {constructionMode === "contractor"
                ? "Find Contractors"
                : "Find Suppliers"}
            </button>
            <button
              onClick={() => setActiveTab("escrow")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "escrow"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Escrow Protection
            </button>
            <button
              onClick={() => setActiveTab("sitemonitoring")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "sitemonitoring"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Live Feeds
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "messages"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Secure Messages
            </button>
          </div>
        </div>

        {/* Dynamic Route Rendering Container */}
        <div className="transition-all duration-300">
          {/* REQUESTS */}
          {activeTab === "requests" && (
            <HouseOwnerRequests
              requests={requests}
              constructionMode={constructionMode}
            />
          )}

          {/* DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <>
              {/* Premium Performance KPI Matrix */}
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
                <Card
                  icon={<Layers size={20} />}
                  title="Project Completion"
                  value={`${dashboardData.completion}%`}
                  subtitle="Ahead of schedule"
                  statusColor="text-emerald-600 bg-emerald-50"
                />
                <Card
                  icon={<MapPin size={20} />}
                  title="Capital Allocated"
                  value={`₹${dashboardData.budgetUsed}`}
                  subtitle={`${dashboardData.budgetPercentage}% used till phase 2`}
                  statusColor="text-blue-600 bg-blue-50"
                />
                <Card
                  icon={<Clock size={20} />}
                  title="System Delay Risk"
                  value={dashboardData.delayRisk}
                  subtitle="No active blockers"
                  statusColor="text-teal-600 bg-teal-50"
                />
                <Card
                  icon={<Wallet size={20} />}
                  title="Protected Escrow"
                  value={`₹${dashboardData.escrowBalance}`}
                  subtitle="Milestone locked"
                  statusColor="text-indigo-600 bg-indigo-50"
                />
                <Card
                  icon={<HeartHandshake size={20} />}
                  title="Structural Quality"
                  value={`${dashboardData.healthScore} / 10`}
                  subtitle="Excellent audit record"
                  statusColor="text-purple-600 bg-purple-50"
                />
              </section>

              {/* Bento Box Sub-Sections */}
              <section className="grid lg:grid-cols-3 gap-8 mt-8">
                {/* Micro Blueprint & Status Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Project Spec Sheet
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md font-semibold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                        Active Build <ArrowUpRight size={12} />
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      {dashboardData.projectName}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1.5 mt-1.5">
                      <MapPin size={15} className="text-slate-400" />
                      {dashboardData.location}
                    </p>

                    <div className="mt-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                        <span>Milestone Progress</span>
                        <span className="text-slate-900">
                          {dashboardData.completion}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
                          style={{ width: `${dashboardData.completion}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl flex items-center justify-center shadow-sm">
                        <Shield size={18} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 leading-tight">
                          {dashboardData.contractor}
                        </h5>
                        <p className="text-xs text-slate-400 font-medium">
                          Verified Partner
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-400" />
                  </div>
                </div>

                {/* Secure Financial Ledger Summary Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Escrow Audits
                      </span>
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                        Smart Locked
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-left bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                          Deposited
                        </p>
                        <p className="text-sm font-bold text-slate-800 mt-0.5">
                          ₹{dashboardData.totalDeposited}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                          Released
                        </p>
                        <p className="text-sm font-bold text-emerald-600 mt-0.5">
                          ₹{dashboardData.totalReleased}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                          Pending
                        </p>
                        <p className="text-sm font-bold text-amber-600 mt-0.5">
                          ₹{dashboardData.pendingAmount}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 mt-6 text-white shadow-md">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Next Release Cycle
                      </span>
                      <h4 className="text-2xl font-bold tracking-tight mt-1">
                        ₹3,50,000
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        Trigger: First Floor Slab Completion
                      </p>
                    </div>
                  </div>
                </div>

                {/* Smart Site Feed & Worker Telemetry Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        On-Site Smart Telemetry
                      </span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 flex items-center gap-1">
                        <User size={12} /> {dashboardData.workersToday} Checked
                        In
                      </span>
                    </div>

                    <div className="relative group rounded-2xl overflow-hidden shadow-sm aspect-video border border-slate-200">
                      <div className="absolute top-3 left-3 bg-black/60 text-white backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping"></span>
                        CAM-01 LIVE
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                        alt="Active Construction Site Work"
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* PROJECT */}
          {activeTab === "project" && <HouseOwnerProjects />}

          {/* ESTIMATES */}
          {activeTab === "estimates" && <HouseEstimate />}

          {/* CONTRACTOR */}
          {activeTab === "contractor" && <FindContractors />}

          {/* SUPPLIER */}
          {activeTab === "supplier" && <FindSuppliers />}

          {/* ESCROW */}
          {activeTab === "escrow" && <HouseOwnerEscrow />}

          {/* SITE MONITORING */}
          {activeTab === "sitemonitoring" && <HouseOwnerSiteMonitoring />}

          {/* MESSAGES */}
          {activeTab === "messages" && <HouseOwnerMessages />}
        </div>
      </main>
    </div>
  );
}

function Card({ icon, title, value, subtitle, statusColor }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-center">
          <div
            className={`w-10 h-10 ${statusColor} border border-black/5 rounded-xl flex items-center justify-center text-slate-800 shadow-sm`}
          >
            {icon}
          </div>
        </div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-5">
          {title}
        </h4>
        <p className="text-3xl font-bold text-slate-900 tracking-tight mt-1 group-hover:text-emerald-700 transition-colors">
          {value}
        </p>
      </div>
      <p className="text-xs text-slate-500 font-medium mt-4 pt-3 border-t border-slate-50">
        {subtitle}
      </p>
    </div>
  );
}
