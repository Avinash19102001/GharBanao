import {
  Bell,
  Search,
  LogOut,
  ClipboardList,
  FolderKanban,
  Users,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

import DashboardCards from "./DashboardCard";
import ContractorRequests from "./ContractorRequests";
import ContractorProjects from "./ContractorProjects/ContractorProjects";
import ContractorClients from "./ContractorClients";
import ContractorMessages from "./ContractorMessages";
import ContractorBusiness from "./ContractorBusiness";

const ContractorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const dashboardStats = {
    openRequests: 0,
    activeSites: 0,
    nearbyLeads: 3,
    unreadChats: 0,

    pendingQuotes: 0,
    acceptedQuotes: 0,
    totalSent: 0,

    contractorName: "Bhargava",
    company: "Contractor",
  };

  const recentActivities = [
    {
      id: 1,
      text: "New lead found in Badnapalli, Karim Nagar, Telangana",
    },
    {
      id: 2,
      text: "Quotation submitted successfully",
    },
    {
      id: 3,
      text: "Site visit scheduled tomorrow",
    },
  ];

  const navItems = [
    {
      id: "dashboard",
      label: "Requests",
      icon: ClipboardList,
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderKanban,
    },
    {
      id: "clients",
      label: "Find Clients",
      icon: Users,
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquare,
    },
    {
      id: "business",
      label: "Business",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F4]">
      {/* ================= HEADER ================= */}

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-[1500px] mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="h-14" />

            <div>
              <h2 className="text-3xl font-bold text-green-800">OCTOPUS</h2>

              <p className="text-xs text-gray-500 tracking-widest">
                PLAN • BUILD • LIVE
              </p>
            </div>
          </div>

          {/* Search */}

          <div className="w-[45%] relative">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={18}
            />

            <input
              placeholder="Search requests, projects or clients"
              className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Right Side */}

          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="text-gray-700" />

              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>

            {/* Profile */}

            <div className="group relative">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="h-12 w-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center">
                  BH
                </div>

                <div>
                  <h3 className="font-semibold">
                    {dashboardStats.contractorName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {dashboardStats.company}
                  </p>
                </div>
              </div>

              {/* Dropdown */}

              <div className="hidden group-hover:block absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border z-20">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                  My Profile
                </button>

                <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2">
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= NAVIGATION ================= */}

      <div className="max-w-[1500px] mx-auto mt-6">
        <div className="bg-white rounded-2xl shadow-sm border p-4">
          <div className="flex items-center gap-8 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-300
                  ${
                    activeTab === item.id
                      ? "bg-green-800 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={19} />

                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= PAGE CONTENT ================= */}

      <div className="max-w-[1500px] mx-auto mt-6 px-2">
        {activeTab === "dashboard" && (
          <DashboardCards
            dashboardStats={dashboardStats}
            recentActivities={recentActivities}
          />
        )}

        {activeTab === "projects" && <ContractorProjects />}

        {activeTab === "clients" && <ContractorClients />}

        {activeTab === "messages" && <ContractorMessages />}

        {activeTab === "business" && <ContractorBusiness />}
      </div>
    </div>
  );
};

export default ContractorDashboard;
