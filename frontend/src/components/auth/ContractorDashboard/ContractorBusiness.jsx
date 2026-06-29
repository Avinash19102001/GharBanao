const ContractorBusiness = () => {
  const siteUpdates = [
    {
      id: 1,
      week: "Week 1",
      stage: "Site Measurement",
      date: "05 June 2026",
      status: "Completed",
      notes: "Site dimensions verified and marking completed.",
    },
    {
      id: 2,
      week: "Week 2",
      stage: "Foundation Work",
      date: "12 June 2026",
      status: "Completed",
      notes: "Excavation and footing work finished.",
    },
    {
      id: 3,
      week: "Week 3",
      stage: "Pillar Construction",
      date: "19 June 2026",
      status: "In Progress",
      notes: "Pillar reinforcement work ongoing.",
    },
    {
      id: 4,
      week: "Week 4",
      stage: "Slab Casting",
      date: "26 June 2026",
      status: "Pending",
      notes: "Waiting for pillar completion.",
    },
  ];

  return (
    <div className="mx-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Site Monitoring
        </h2>

        <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
          + Add Update
        </button>
      </div>

      {/* Project Summary */}
      <div className="bg-white rounded-3xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold">
          Luxury Villa Project
        </h3>

        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <div>
            <p className="text-gray-500">Owner</p>
            <h4 className="font-semibold">
              Amit Verma
            </h4>
          </div>

          <div>
            <p className="text-gray-500">Location</p>
            <h4 className="font-semibold">
              Hyderabad
            </h4>
          </div>

          <div>
            <p className="text-gray-500">Budget</p>
            <h4 className="font-semibold">
              ₹80 Lakhs
            </h4>
          </div>

          <div>
            <p className="text-gray-500">Progress</p>
            <h4 className="font-semibold text-green-600">
              65%
            </h4>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {siteUpdates.map((update) => (
          <div
            key={update.id}
            className="bg-white rounded-3xl shadow p-6 border-l-4 border-green-600"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {update.week}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  update.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : update.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {update.status}
              </span>
            </div>

            <h4 className="mt-3 font-semibold">
              {update.stage}
            </h4>

            <p className="text-gray-500 text-sm mt-1">
              {update.date}
            </p>

            <p className="mt-3 text-gray-700">
              {update.notes}
            </p>

            {/* Site Images */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                Image
              </div>

              <div className="h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                Image
              </div>

              <div className="h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                Image
              </div>
            </div>

            <button className="mt-5 border border-green-600 text-green-600 px-4 py-2 rounded-lg">
              View Full Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractorBusiness;