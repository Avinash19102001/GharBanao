export default function FindContractors() {
  const contractors = [
    {
      id: 1,
      name: "Balaji Infra Projects",
      rating: 4.8,
      experience: 12,
      completedProjects: 65,
      location: "Hyderabad",
      specialization: "Residential Construction",
      ongoingProjects: 8,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
    {
      id: 2,
      name: "Sai Constructions",
      rating: 4.6,
      experience: 10,
      completedProjects: 48,
      location: "Bangalore",
      specialization: "Villa Construction",
      ongoingProjects: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 3,
      name: "Royal Builders",
      rating: 4.9,
      experience: 15,
      completedProjects: 102,
      location: "Chennai",
      specialization: "Luxury Homes",
      ongoingProjects: 12,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Contractors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {contractors.map((contractor) => (
          <div
            key={contractor.id}
            className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={contractor.image}
              alt={contractor.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{contractor.name}</h2>

              <p className="text-gray-500 mt-1">📍 {contractor.location}</p>

              <p className="text-gray-600 mt-3">{contractor.specialization}</p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-gray-400 text-sm">Experience</p>
                  <p className="font-semibold">{contractor.experience} Years</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Rating</p>
                  <p className="font-semibold">⭐ {contractor.rating}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <p className="font-semibold">
                    {contractor.completedProjects}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Ongoing</p>
                  <p className="font-semibold">{contractor.ongoingProjects}</p>
                </div>
              </div>

              <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
