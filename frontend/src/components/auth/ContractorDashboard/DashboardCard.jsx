import { BriefcaseBusiness, FileText } from "lucide-react";

const DashboardCard = ({ dashboardStats, recentActivities }) => {
  return (
    <div className="grid lg:grid-cols-12 gap-6">

      {/* LEFT COLUMN */}

      <div className="lg:col-span-3">

        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Workforce Snapshot
              </h2>

              <p className="text-gray-500 text-sm">
                Live overview of local activity
              </p>
            </div>

            <BriefcaseBusiness className="text-indigo-500" />
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-gray-600 text-sm">Open Requests</p>

              <h2 className="text-4xl font-bold mt-2">
                {dashboardStats.openRequests}
              </h2>
            </div>

            <div className="rounded-xl bg-orange-50 p-5">
              <p className="text-gray-600 text-sm">Active Sites</p>

              <h2 className="text-4xl font-bold mt-2">
                {dashboardStats.activeSites}
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-gray-600 text-sm">Nearby Leads</p>

              <h2 className="text-4xl font-bold mt-2 text-indigo-600">
                {dashboardStats.nearbyLeads}
              </h2>
            </div>

            <div className="rounded-xl bg-pink-50 p-5">
              <p className="text-gray-600 text-sm">Unread Chats</p>

              <h2 className="text-4xl font-bold mt-2">
                {dashboardStats.unreadChats}
              </h2>
            </div>

          </div>

          {/* Quick Actions */}

          <div className="mt-8">

            <p className="font-semibold mb-4">
              Quick Actions
            </p>

            <button className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 font-semibold transition">

              Discover Local Leads

            </button>

            <button className="w-full mt-3 rounded-xl bg-black hover:bg-gray-900 text-white py-4 font-semibold transition">

              Manage Execution Works

            </button>

          </div>

        </div>

      </div>

      {/* CENTER */}

      <div className="lg:col-span-6 space-y-6">

        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold">
                Contractor Request Desk
              </h1>

              <p className="mt-3 text-gray-500">
                Manage Active Structural Tenders
              </p>

              <p className="text-gray-500">
                Review homeowner requirements,
                formulate estimates and dispatch
                verified secure bids.
              </p>

            </div>

            <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">

              <BriefcaseBusiness
                size={34}
                className="text-indigo-600"
              />

            </div>

          </div>

        </div>

        {/* Requests */}

        <div className="bg-white rounded-2xl shadow-sm border p-10 text-center">

          <h2 className="text-3xl font-semibold">

            No active requests yet.

          </h2>

          <p className="text-gray-500 mt-3">

            Incoming homeowner requests and
            sent proposals will appear here.

          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="lg:col-span-3 space-y-6">

        {/* Quotes */}

        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">

              Active Quotes

            </h2>

            <FileText className="text-indigo-500" />

          </div>

          <div className="space-y-4">

            <div className="border rounded-xl p-5">

              <p className="text-gray-500">

                Pending Responses

              </p>

              <h2 className="text-4xl font-bold">

                {dashboardStats.pendingQuotes}

              </h2>

            </div>

            <div className="border rounded-xl p-5">

              <p className="text-gray-500">

                Accepted Quotations

              </p>

              <h2 className="text-4xl font-bold">

                {dashboardStats.acceptedQuotes}

              </h2>

            </div>

            <div className="border rounded-xl p-5">

              <p className="text-gray-500">

                Total Sent

              </p>

              <h2 className="text-4xl font-bold">

                {dashboardStats.totalSent}

              </h2>

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <h2 className="text-2xl font-bold mb-5">

            Recent Activity

          </h2>

          <div className="space-y-5">

            {recentActivities.map((activity) => (

              <div key={activity.id}>

                <p className="text-gray-600 leading-7">

                  {activity.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardCard;