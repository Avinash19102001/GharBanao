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

import {
  Bell,
  Home,
  Wallet,
  Shield,
  Clock,
  HeartHandshake,
  MapPin,
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

export default function HouseOwnerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [constructionMode, setConstructionMode] = useState("contractor");

  const requests =
    constructionMode === "contractor" ? contractorRequests : supplierRequests;

  const handleConstructionModeChange = (mode) => {
    setConstructionMode(mode);

    setActiveTab(mode === "contractor" ? "contractor" : "supplier");
  };

  // Helper helper to dynamically generate user initials (e.g., "Sharma Family" -> "SF")
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

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
                {getInitials(dashboardData.ownerName)}
              </div>

              <div>
                <h4 className="font-semibold">{dashboardData.ownerName}</h4>
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
                Welcome home, {dashboardData.ownerName}! 🏡
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
                  onClick={() => handleConstructionModeChange("contractor")}
                  className={`px-5 py-2 rounded-full transition-all ${
                    constructionMode === "contractor"
                      ? "bg-green-700 text-white shadow-md"
                      : "bg-white border text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Hire Contractor
                </button>

                <button
                  onClick={() => handleConstructionModeChange("self")}
                  className={`px-5 py-2 rounded-full transition-all ${
                    constructionMode === "self"
                      ? "bg-green-700 text-white shadow-md"
                      : "bg-white border text-gray-700 hover:bg-gray-50"
                  }`}
                >
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
        <div className="bg-white rounded-3xl border border-[#D7E4D9] px-2 py-1 mb-6 overflow-x-auto">
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveTab("requests")}
              className={`px-8 py-4 font-medium transition-all relative ${
                activeTab === "requests"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              Requests
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {requests.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-8 py-4 font-medium transition-all ${
                activeTab === "dashboard"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("project")}
              className={`px-8 py-4 font-medium transition-all ${
                activeTab === "project"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              My Project
            </button>

            <button
              onClick={() => setActiveTab("estimates")}
              className="px-8 py-4 font-medium text-gray-500 hover:text-green-700"
            >
              Estimates
            </button>

            <button
              onClick={() =>
                setActiveTab(
                  constructionMode === "contractor" ? "contractor" : "supplier",
                )
              }
              className={`px-8 py-4 font-medium transition-all ${
                activeTab === "contractor" || activeTab === "supplier"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              {constructionMode === "contractor" ? "Contractor" : "Supplier"}
            </button>
            <button
              onClick={() => setActiveTab("escrow")}
              className={`px-8 py-4 font-medium transition-all ${
                activeTab === "escrow"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              Escrow
            </button>

            <button
              onClick={() => setActiveTab("sitemonitoring")}
              className={`px-8 py-4 font-medium transition-all ${
                activeTab === "sitemonitoring"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              Site Monitoring
            </button>

            <button
              onClick={() => setActiveTab("messages")}
              className={`px-8 py-4 font-medium transition-all ${
                activeTab === "messages"
                  ? "text-green-800 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-700"
              }`}
            >
              Messages
            </button>
          </div>
        </div>

        {/* REQUESTS */}
        {activeTab === "requests" && (
          <HouseOwnerRequests
            requests={requests}
            constructionMode={constructionMode}
          />
        )}

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
              <Card
                icon={<Home />}
                title="Completion"
                value={`${dashboardData.completion}%`}
                subtitle="On Track"
              />

              <Card
                icon={<MapPin />}
                title="Budget Usage"
                value={`₹${dashboardData.budgetUsed}`}
                subtitle={`${dashboardData.budgetPercentage}%`}
              />

              <Card
                icon={<Clock />}
                title="Delay Risk"
                value={dashboardData.delayRisk}
                subtitle="Schedule is looking good"
              />

              <Card
                icon={<Wallet />}
                title="Escrow Balance"
                value={`₹${dashboardData.escrowBalance}`}
                subtitle="Available to release"
              />

              <Card
                icon={<HeartHandshake />}
                title="Project Health"
                value={`${dashboardData.healthScore} / 10`}
                subtitle="Excellent"
              />
            </section>

            <section className="grid lg:grid-cols-3 gap-6 mt-8">
              {/* Project Progress */}
              <div className="bg-white rounded-3xl p-6 border">
                <h3 className="text-2xl font-bold mb-4">Project Progress</h3>

                <h4 className="text-xl font-semibold">
                  {dashboardData.projectName}
                </h4>

                <p className="text-gray-500 flex items-center gap-2 mt-2">
                  <MapPin size={16} />
                  {dashboardData.location}
                </p>

                <div className="mt-8">
                  <div className="flex justify-between mb-2">
                    <span>Completion</span>
                    <span>{dashboardData.completion}%</span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-green-700"
                      style={{
                        width: `${dashboardData.completion}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield />
                  </div>

                  <div>
                    <h5 className="font-semibold">
                      {dashboardData.contractor}
                    </h5>

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

                    <p className="font-bold">₹{dashboardData.totalDeposited}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Total Released</p>

                    <p className="font-bold text-green-700">
                      ₹{dashboardData.totalReleased}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Pending</p>

                    <p className="font-bold text-yellow-600">
                      ₹{dashboardData.pendingAmount}
                    </p>
                  </div>
                </div>

                <div className="border rounded-2xl p-5 mt-6">
                  <h4 className="text-3xl font-bold text-green-800">
                    ₹3,50,000
                  </h4>

                  <p className="text-gray-500 mt-2">
                    After First Floor Slab Completion
                  </p>
                </div>
              </div>

              {/* Site Monitoring */}
              <div className="bg-white rounded-3xl p-6 border">
                <h3 className="text-2xl font-bold mb-4">Site Monitoring</h3>

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                  alt=""
                  className="rounded-2xl h-52 w-full object-cover"
                />
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
