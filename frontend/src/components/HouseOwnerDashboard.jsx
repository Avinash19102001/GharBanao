// const HouseOwnerDashboard = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <h1 className="text-4xl font-bold text-gray-800">
//             Welcome to the House Owner Dashboard
//         </h1>
//     </div>
//   );
// }
// export default HouseOwnerDashboard;

import {
  Bell,
  Home,
  Wallet,
  Shield,
  Clock,
  HeartHandshake,
  MapPin,
  Calendar,
  Play,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function HouseOwnerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="min-h-screen bg-[#F7F8F4]">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-green-900">GharBanao</h1>
            <p className="text-xs tracking-widest text-gray-500">
              PLAN. BUILD. LIVE. FOREVER.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Bell size={22} />

            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
              <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center">
                RF
              </div>

              <div>
                <h4 className="font-semibold">Raju Family</h4>
                <p className="text-xs text-gray-500">Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto p-4 lg:p-8">
        {/* Hero */}
        <section className="rounded-3xl overflow-hidden bg-[#EEF3E8] mb-8">
          <div className="grid lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-green-950">
                Welcome home, Raju Family! 🏡
              </h2>

              <p className="mt-4 text-gray-600 max-w-lg">
                Every dream home begins with trust and the right partner. We are
                with you in every step of your journey.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="bg-white px-5 py-2 rounded-full border">
                  Project Status: In Progress
                </button>

                <button
                  onClick={() => navigate("/contractor")}
                  className="bg-green-700 text-white px-5 py-2 rounded-full"
                >
                  Hire Contractor
                </button>

                <button className="bg-white px-5 py-2 rounded-full border">
                  Self Construction
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-6 py-4 ${
              activeTab === "dashboard"
                ? "border-b-2 border-green-700 text-green-700"
                : ""
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("project")}
            className={`px-6 py-4 ${
              activeTab === "project"
                ? "border-b-2 border-green-700 text-green-700"
                : ""
            }`}
          >
            My Project
          </button>

          <button
            onClick={() => setActiveTab("estimates")}
            className={`px-6 py-4 ${
              activeTab === "estimates"
                ? "border-b-2 border-green-700 text-green-700"
                : ""
            }`}
          >
            Estimates
          </button>

          <button
            onClick={() => setActiveTab("contractor")}
            className={`px-6 py-4 ${
              activeTab === "contractor"
                ? "border-b-2 border-green-700 text-green-700"
                : ""
            }`}
          >
            Contractor
          </button>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          <Card
            icon={<Home />}
            title="Completion"
            value="42%"
            subtitle="On Track"
          />

          <Card
            icon={<MapPin />}
            title="Budget Usage"
            value="₹18.75 L"
            subtitle="75%"
          />

          <Card
            icon={<Clock />}
            title="Delay Risk"
            value="Low Risk"
            subtitle="Schedule is looking good"
          />

          <Card
            icon={<Wallet />}
            title="Escrow Balance"
            value="₹6.25 L"
            subtitle="Available to release"
          />

          <Card
            icon={<HeartHandshake />}
            title="Project Health"
            value="8.6 / 10"
            subtitle="Excellent"
          />
        </section>

        {/* Bottom Cards */}
        <section className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Project Progress */}
          <div className="bg-white rounded-3xl p-6 border">
            <h3 className="text-2xl font-bold mb-4">Project Progress</h3>

            <h4 className="text-xl font-semibold">Raju Family Home</h4>

            <p className="text-gray-500 flex items-center gap-2 mt-2">
              <MapPin size={16} />
              Hyderabad, Telangana
            </p>

            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span>Completion</span>
                <span>42%</span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-green-700 w-[42%]" />
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield />
              </div>

              <div>
                <h5 className="font-semibold">Sri Sai Constructions</h5>
                <p className="text-sm text-gray-500">Assigned contractor</p>
              </div>
            </div>
          </div>

          {/* Escrow */}
          <div className="bg-white rounded-3xl p-6 border">
            <h3 className="text-2xl font-bold mb-6">Escrow & Payments</h3>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-500 text-sm">Total Deposited</p>
                <p className="font-bold">₹25,00,000</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Total Released</p>
                <p className="font-bold text-green-700">₹18,75,000</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <p className="font-bold text-yellow-600">₹6,25,000</p>
              </div>
            </div>

            <div className="border rounded-2xl p-5 mt-6">
              <h4 className="text-3xl font-bold text-green-800">₹3,50,000</h4>

              <p className="text-gray-500 mt-2">
                After First Floor Slab Completion
              </p>
            </div>

            <button
              onClick={() => navigate("/payments")}
              className="mt-6 w-full border rounded-xl py-3 font-semibold flex justify-center items-center gap-2"
            >
              View Payment Schedule
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Site Monitoring */}
          <div className="bg-white rounded-3xl p-6 border">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold">Site Monitoring</h3>

              <button onClick={() => navigate("/sitemonitoring")}>
                View All
              </button>
            </div>

            <div className="relative mt-6">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt=""
                className="rounded-2xl h-52 w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4">
                  <Play />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span>Overall Progress</span>
                <span>42%</span>
              </div>

              <div className="flex justify-between">
                <span>AI Risk Alerts</span>
                <span className="text-orange-500">1 Medium</span>
              </div>

              <div className="flex justify-between">
                <span>Quality Alerts</span>
                <span className="text-green-600">0 Good</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Card({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-3xl border p-6">
      <div className="flex justify-between">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
          {icon}
        </div>

        <span className="text-sm text-green-700 font-medium">{subtitle}</span>
      </div>

      <h4 className="text-gray-500 mt-5">{title}</h4>

      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}
