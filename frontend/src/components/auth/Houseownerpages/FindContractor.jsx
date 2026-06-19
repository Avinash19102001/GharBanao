// import { useState } from "react";

// export default function FindContractors() {
//   const contractors = [
//     {
//       id: 1,
//       name: "Balaji Infra Projects",
//       rating: 4.8,
//       experience: 12,
//       completedProjects: 65,
//       location: "Hyderabad",
//       specialization: "Residential Construction",
//       ongoingProjects: 8,
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
//     },
//     {
//       id: 2,
//       name: "Sai Constructions",
//       rating: 4.6,
//       experience: 10,
//       completedProjects: 48,
//       location: "Bangalore",
//       specialization: "Villa Construction",
//       ongoingProjects: 5,
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
//     },
//     {
//       id: 3,
//       name: "Royal Builders",
//       rating: 4.9,
//       experience: 15,
//       completedProjects: 102,
//       location: "Chennai",
//       specialization: "Luxury Homes",
//       ongoingProjects: 12,
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
//     },
//   ];
//   const [search, setSearch] = useState("");
//   const [city, setCity] = useState("All");

//   const filteredContractors = contractors.filter((c) => {
//     const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());

//     const matchesCity = city === "All" || c.location === city;

//     return matchesSearch && matchesCity;
//   });
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Contractors</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search Contractor..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-80 p-3 border rounded-xl mb-5"
//         />
//         <select
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="p-3 border rounded-xl"
//         >
//           <option>All</option>
//           <option>Hyderabad</option>
//           <option>Bangalore</option>
//           <option>Chennai</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {filteredContractors.map((contractor) => (
//           <div
//             key={contractor.id}
//             className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={contractor.image}
//               alt={contractor.name}
//               className="w-full h-52 object-cover"
//             />

//             <div className="p-5">
//               <h2 className="text-xl font-bold">{contractor.name}</h2>

//               <p className="text-gray-500 mt-1">📍 {contractor.location}</p>

//               <p className="text-gray-600 mt-3">{contractor.specialization}</p>

//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div>
//                   <p className="text-gray-400 text-sm">Experience</p>
//                   <p className="font-semibold">{contractor.experience} Years</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-400 text-sm">Rating</p>
//                   <p className="font-semibold">⭐ {contractor.rating}</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-400 text-sm">Completed</p>
//                   <p className="font-semibold">
//                     {contractor.completedProjects}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-gray-400 text-sm">Ongoing</p>
//                   <p className="font-semibold">{contractor.ongoingProjects}</p>
//                 </div>
//               </div>

//               <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
//                 View Profile
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  Heart,
  CheckCircle,
  Briefcase,
  Building2,
} from "lucide-react";
import RequestQuote from "./RequestQuote";

export default function FindContractors() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [saved, setSaved] = useState([]);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const [selectedContractor, setSelectedContractor] = useState(null);

  const contractors = [
    {
      id: 1,
      name: "Balaji Infra Projects",
      rating: 4.8,
      experience: 12,
      completedProjects: 65,
      ongoingProjects: 8,
      location: "Hyderabad",
      specialization: "Residential Construction",
      verified: true,
      availability: "Available",
      costPerSqft: "₹1800/sqft",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
    {
      id: 2,
      name: "Sai Constructions",
      rating: 4.6,
      experience: 10,
      completedProjects: 48,
      ongoingProjects: 5,
      location: "Bangalore",
      specialization: "Villa Construction",
      verified: true,
      availability: "Busy",
      costPerSqft: "₹1700/sqft",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 3,
      name: "Royal Builders",
      rating: 4.9,
      experience: 15,
      completedProjects: 102,
      ongoingProjects: 12,
      location: "Chennai",
      specialization: "Luxury Homes",
      verified: true,
      availability: "Available",
      costPerSqft: "₹2200/sqft",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
  ];

  const filteredContractors = contractors
    .filter((contractor) => {
      const matchesSearch = contractor.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCity = city === "All" || contractor.location === city;

      return matchesSearch && matchesCity;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "experience") return b.experience - a.experience;
      if (sortBy === "projects")
        return b.completedProjects - a.completedProjects;

      return 0;
    });

  const toggleSave = (id) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleViewProfile = (contractor) => {
    console.log("View Profile", contractor);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Find Contractors</h1>
        <p className="text-gray-500 mt-2">
          Hire verified construction professionals
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-3.5 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search contractors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl"
            />
          </div>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-3 border rounded-xl"
          >
            <option value="All">All Cities</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border rounded-xl"
          >
            <option value="rating">Top Rated</option>
            <option value="experience">Most Experienced</option>
            <option value="projects">Completed Projects</option>
          </select>
        </div>
      </div>

      {/* Contractor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {" "}
        {filteredContractors.map((contractor) => (
          <div
            key={contractor.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 max-w-sm"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={contractor.image}
                alt={contractor.name}
                className="w-full h-40 object-cover"
              />

              <button
                onClick={() => toggleSave(contractor.id)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
              >
                <Heart
                  size={20}
                  fill={saved.includes(contractor.id) ? "red" : "none"}
                  color={saved.includes(contractor.id) ? "red" : "gray"}
                />
              </button>

              <div className="absolute left-4 top-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    contractor.availability === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {contractor.availability}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{contractor.name}</h2>

                {contractor.verified && (
                  <CheckCircle className="text-green-600" size={18} />
                )}
              </div>

              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <MapPin size={16} />
                {contractor.location}
              </div>

              <p className="text-gray-600 mt-3">{contractor.specialization}</p>

              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <div>
                  <p className="text-gray-400 text-sm">Experience</p>
                  <p className="font-semibold">{contractor.experience} Years</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star size={16} fill="#facc15" color="#facc15" />
                    <span className="font-semibold">{contractor.rating}</span>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <span className="font-semibold">
                      {contractor.completedProjects}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Ongoing</p>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    <span className="font-semibold">
                      {contractor.ongoingProjects}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cost */}
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-500">Construction Cost</p>

                <p className="font-bold text-green-700 text-base">
                  {contractor.costPerSqft}
                </p>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={() => handleViewProfile(contractor)}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-medium"
                >
                  View Profile
                </button>

                <button
                  onClick={() => {
                    setSelectedContractor(contractor);
                    setShowQuoteModal(true);
                  }}
                  className="border border-green-600 text-green-600 py-2 rounded-xl"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RequestQuote
        isOpen={showQuoteModal}
        contractor={selectedContractor}
        onClose={() => {
          setShowQuoteModal(false);
          setSelectedContractor(null);
        }}
      />
    </div>
  );
}
