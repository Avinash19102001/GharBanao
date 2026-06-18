const ContractorClients = () => {
  const clients = [
    {
      id: 1,
      name: "Amit Verma",
      location: "Hyderabad",
      projectType: "Residential",
      budget: "₹25 Lakhs",
      plotSize: "150 Sq.Yards",
      posted: "2 days ago",
    },
    {
      id: 2,
      name: "Neha Singh",
      location: "Banjara Hills",
      projectType: "Villa",
      budget: "₹80 Lakhs",
      plotSize: "300 Sq.Yards",
      posted: "Today",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      location: "Gachibowli",
      projectType: "Commercial",
      budget: "₹1.2 Cr",
      plotSize: "500 Sq.Yards",
      posted: "1 day ago",
    },
  ];

  return (
    <div className="mx-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Find Clients
        </h2>

        <input
          type="text"
          placeholder="Search by location..."
          className="border p-3 rounded-xl w-72"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-3xl shadow p-6"
          >
            <h3 className="text-xl font-semibold">
              {client.name}
            </h3>

            <p className="text-gray-500 mt-1">
              📍 {client.location}
            </p>

            <div className="mt-4 space-y-2">
              <p>
                <span className="font-medium">
                  Project:
                </span>{" "}
                {client.projectType}
              </p>

              <p>
                <span className="font-medium">
                  Budget:
                </span>{" "}
                {client.budget}
              </p>

              <p>
                <span className="font-medium">
                  Plot Size:
                </span>{" "}
                {client.plotSize}
              </p>

              <p>
                <span className="font-medium">
                  Posted:
                </span>{" "}
                {client.posted}
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Contact
              </button>

              <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractorClients;