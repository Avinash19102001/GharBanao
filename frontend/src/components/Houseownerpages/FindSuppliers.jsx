export default function FindSuppliers() {
  const suppliers = [
    {
      id: 1,
      name: "Sri Lakshmi Cement Suppliers",
      category: "Cement & Concrete",
      rating: 4.8,
      location: "Hyderabad",
      experience: 15,
      products: 120,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500",
    },
    {
      id: 2,
      name: "Balaji Steel Traders",
      category: "Steel & Iron",
      rating: 4.7,
      location: "Bangalore",
      experience: 12,
      products: 85,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500",
    },
    {
      id: 3,
      name: "Royal Bricks & Blocks",
      category: "Bricks & Blocks",
      rating: 4.9,
      location: "Chennai",
      experience: 18,
      products: 150,
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=500",
    },
    {
      id: 4,
      name: "Modern Electricals",
      category: "Electrical Materials",
      rating: 4.6,
      location: "Hyderabad",
      experience: 10,
      products: 95,
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500",
    },
    {
      id: 5,
      name: "Aqua Plumbing Solutions",
      category: "Plumbing Materials",
      rating: 4.8,
      location: "Vijayawada",
      experience: 14,
      products: 110,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500",
    },
    {
      id: 6,
      name: "Premium Tiles World",
      category: "Tiles & Flooring",
      rating: 4.7,
      location: "Hyderabad",
      experience: 9,
      products: 200,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Material Suppliers
        </h1>

        <p className="text-gray-500 mb-8">
          Find trusted suppliers for your construction needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={supplier.image}
                alt={supplier.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-bold">
                    {supplier.name}
                  </h2>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    ⭐ {supplier.rating}
                  </span>
                </div>

                <p className="text-gray-500 mt-2">
                  📍 {supplier.location}
                </p>

                <p className="text-green-600 font-medium mt-2">
                  {supplier.category}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-gray-500">
                      Experience
                    </p>

                    <p className="font-semibold">
                      {supplier.experience} Years
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-gray-500">
                      Products
                    </p>

                    <p className="font-semibold">
                      {supplier.products}+
                    </p>
                  </div>
                </div>

                <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium">
                  View Supplier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}