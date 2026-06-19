import { Calendar, MapPin, Building2, IndianRupee } from "lucide-react";

export default function HouseOwnerProjects() {
  const project = {
    name: "Royal Residency",
    location: "Hyderabad, Telangana",
    startDate: "01 Jan 2026",
    endDate: "30 Dec 2026",
    progress: 65,
    budget: "₹50,00,000",
    contractor: "Balaji Infra Projects",
  };

  const milestones = [
    {
      id: 1,
      title: "Foundation Work",
      status: "Completed",
    },
    {
      id: 2,
      title: "Ground Floor Slab",
      status: "Completed",
    },
    {
      id: 3,
      title: "First Floor Slab",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Roof Casting",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 border">
        <h2 className="text-2xl font-bold mb-6">Project Details</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border rounded-xl p-4">
            <Building2 />
            <p className="text-gray-500 mt-2">Project</p>
            <h3 className="font-bold">{project.name}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <MapPin />
            <p className="text-gray-500 mt-2">Location</p>
            <h3>{project.location}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <Calendar />
            <p className="text-gray-500 mt-2">Start Date</p>
            <h3>{project.startDate}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <IndianRupee />
            <p className="text-gray-500 mt-2">Budget</p>
            <h3>{project.budget}</h3>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full mt-2">
            <div
              className="h-3 bg-green-600 rounded-full"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border">
        <h2 className="text-xl font-bold mb-4">Milestones</h2>

        <div className="space-y-4">
          {milestones.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border p-4 rounded-xl"
            >
              <span>{item.title}</span>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  item.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : item.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
