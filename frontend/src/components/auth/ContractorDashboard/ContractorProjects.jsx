const ContractorProjects = () => {
  const ongoingProjects = [
    {
      id: 1,
      projectName: "Luxury Villa",
      owner: "Amit Verma",
      location: "Hyderabad",
      budget: "₹80 Lakhs",
      progress: 65,
      status: "In Progress",
    },
    {
      id: 2,
      projectName: "Dream Home",
      owner: "Neha Singh",
      location: "Banjara Hills",
      budget: "₹45 Lakhs",
      progress: 35,
      status: "Foundation Stage",
    },
  ];

  const completedProjects = [
    {
      id: 1,
      projectName: "Green Residency",
      owner: "Rajesh Kumar",
      completedOn: "12 May 2025",
      budget: "₹55 Lakhs",
      rating: "⭐ 4.8",
    },
    {
      id: 2,
      projectName: "Royal Duplex",
      owner: "Suresh Reddy",
      completedOn: "18 Jan 2025",
      budget: "₹72 Lakhs",
      rating: "⭐ 4.9",
    },
  ];

  return (
    <div className="mx-6 mt-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          My Projects
        </h2>

        <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
          + Add Project
        </button>
      </div>

      {/* Ongoing Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Ongoing Projects
        </h3>

        <div className="grid lg:grid-cols-2 gap-6">
          {ongoingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow p-6"
            >
              <div className="flex justify-between">
                <h4 className="text-xl font-bold">
                  {project.projectName}
                </h4>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  {project.status}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <p>
                  <strong>Owner:</strong> {project.owner}
                </p>

                <p>
                  <strong>Location:</strong> {project.location}
                </p>

                <p>
                  <strong>Budget:</strong> {project.budget}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex justify-between mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>

              <button className="mt-5 border border-green-600 text-green-600 px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Completed Projects
        </h3>

        <div className="grid lg:grid-cols-2 gap-6">
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow p-6"
            >
              <h4 className="text-xl font-bold">
                {project.projectName}
              </h4>

              <div className="mt-4 space-y-2">
                <p>
                  <strong>Owner:</strong> {project.owner}
                </p>

                <p>
                  <strong>Completed:</strong>{" "}
                  {project.completedOn}
                </p>

                <p>
                  <strong>Budget:</strong> {project.budget}
                </p>

                <p className="text-yellow-500 font-semibold">
                  {project.rating}
                </p>
              </div>

              <button className="mt-5 border border-green-600 text-green-600 px-4 py-2 rounded-lg">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorProjects;