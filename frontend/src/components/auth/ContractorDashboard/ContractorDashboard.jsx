import { Bell, LogOut } from "lucide-react";
import { useState } from "react";
import ContractorRequests from "./ContractorRequests";
import ContractorClients from "./ContractorClients";
import ContractorProjects from "./ContractorProjects";
import ContractorSiteMonitoring from "./ContractorSiteMonitoring";
import ContractorMessages from "./ContractorMessages";

const ContractorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="min-h-screen bg-[#f6f7f2]">
      {/* HEADER */}
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-10" />
          <h1 className="font-bold text-2xl text-green-800">GharBanao</h1>
        </div>

        <div className="flex items-center gap-6">
          <Bell className="w-6 h-6 cursor-pointer" />

          <div className="relative group">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-green-700 text-white flex items-center justify-center">
                RB
              </div>

              <div>
                <h4 className="font-semibold">Rohit Builders</h4>
                <p className="text-xs text-gray-500">Contractor</p>
              </div>
            </div>

            <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-xl p-2 w-40">
              <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
                Profile
              </button>

              <button className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center gap-2">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* HERO */}
      <section className="mx-6 mt-6 rounded-3xl overflow-hidden bg-white shadow">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-green-900">
            Welcome Back, Rohit Builders 👋
          </h2>

          <p className="text-gray-600 mt-2">
            Manage your projects, clients and site updates.
          </p>
        </div>
      </section>
      {/* NAVIGATION */}
      <div className="flex gap-10 px-8 py-5">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "dashboard"
              ? "bg-green-600 text-white"
              : "text-gray-600"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveTab("requests")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "requests"
              ? "bg-green-600 text-white"
              : "text-gray-600"
          }`}
        >
          Requests
        </button>

        <button
          onClick={() => setActiveTab("clients")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "clients"
              ? "bg-green-600 text-white"
              : "text-gray-600"
          }`}
        >
          Find Clients
        </button>

        <button
          onClick={() => setActiveTab("projects")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "projects"
              ? "bg-green-600 text-white"
              : "text-gray-600"
          }`}
        >
          My Projects
        </button>

        <button
          onClick={() => setActiveTab("monitoring")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "monitoring"
              ? "bg-green-600 text-white"
              : "text-gray-600"
          }`}
        >
          Site Monitoring
        </button>

        <button
          onClick={() => setActiveTab("messages")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "messages"
              ? "bg-green-600 text-white"
              : "text-gray-600"
          }`}
        >
          Messages
        </button>
      </div>
      {activeTab === "dashboard" && (
        <div className="px-6 pb-10">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-6">
            <Card title="Owner Requests" value="18" />
            <Card title="Supplier Requests" value="12" />
            <Card title="Active Projects" value="7" />
            <Card title="Completed Projects" value="25" />
            <Card title="Profile Views" value="156" />
          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Recent Requests */}
            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Recent Requests</h3>

              <div className="space-y-4">
                <RequestCard
                  name="Amit Verma"
                  location="Hyderabad"
                  budget="₹25 Lakhs"
                />

                <RequestCard
                  name="Neha Singh"
                  location="Banjara Hills"
                  budget="₹40 Lakhs"
                />

                <RequestCard
                  name="UltraTech Cement"
                  location="Supplier"
                  budget="500 Bags"
                />
              </div>
            </div>

            {/* Active Projects */}
            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Active Projects</h3>

              <div className="space-y-5">
                <ProjectProgress name="Luxury Villa" progress={82} />

                <ProjectProgress name="Dream Home" progress={65} />

                <ProjectProgress name="Independent House" progress={40} />
              </div>
            </div>

            {/* Earnings */}
            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4">This Month Earnings</h3>

              <h2 className="text-4xl font-bold text-green-700">₹3,45,000</h2>

              <p className="text-green-600 mt-2">+18% from last month</p>

              <div className="mt-6 border-t pt-4">
                <p className="text-gray-500">Pending Payments</p>

                <h3 className="text-2xl font-bold text-orange-500">₹6.85L</h3>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            {/* Site Updates */}
            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Latest Site Updates</h3>

              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  Luxury Villa - Slab Casting Completed
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  Dream Home - Foundation Work Completed
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  Independent House - Pillar Work Started
                </div>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-xl font-bold mb-4">Recent Messages</h3>

              <div className="space-y-4">
                <MessageCard
                  name="Amit Verma"
                  message="Can you share today's update?"
                />

                <MessageCard
                  name="UltraTech Cement"
                  message="Material delivery scheduled."
                />

                <MessageCard
                  name="Neha Singh"
                  message="Need estimate revision."
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "requests" && <ContractorRequests />}
      {activeTab === "clients" && <ContractorClients />}
      {activeTab === "projects" && <ContractorProjects />}
      {activeTab === "monitoring" && <ContractorSiteMonitoring />}
      {activeTab === "messages" && <ContractorMessages />}
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white rounded-3xl p-5 shadow">
    <p className="text-gray-500">{title}</p>
    <h3 className="text-3xl font-bold mt-2">{value}</h3>
  </div>
);

const RequestCard = ({ name, location, budget }) => (
  <div className="border rounded-xl p-4">
    <h4 className="font-semibold">{name}</h4>
    <p className="text-sm text-gray-500">{location}</p>
    <p className="font-medium mt-2">{budget}</p>
  </div>
);

const ProjectProgress = ({ name, progress }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span>{name}</span>
      <span>{progress}%</span>
    </div>

    <div className="bg-gray-200 rounded-full h-3">
      <div
        className="bg-green-600 h-3 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const MessageCard = ({ name, message }) => (
  <div className="border rounded-xl p-4">
    <h4 className="font-semibold">{name}</h4>
    <p className="text-sm text-gray-500">{message}</p>
  </div>
);

export default ContractorDashboard;
