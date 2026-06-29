import { useState } from "react";

export default function HouseEstimate() {
  const [landSize, setLandSize] = useState(0);
  const [floors, setFloors] = useState(1);
  const [constructionType, setConstructionType] = useState("Standard");
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = () => {
    const size = Number(landSize);
    
    if (landSize === "" || isNaN(size) || size <= 0) {
      alert("Land size must be greater than 0");
      return;
    }

    const costPerSqFt = {
      Basic: 1800,
      Standard: 2200,
      Premium: 2800,
      Luxury: 3500,
    };

    const totalBuiltUpArea = Number(landSize) * Number(floors);

    const constructionCost = totalBuiltUpArea * costPerSqFt[constructionType];

    const laborCost = constructionCost * 0.25;
    const materialCost = constructionCost * 0.55;
    const interiorCost = constructionCost * 0.15;
    const contingencyCost = constructionCost * 0.05;

    setEstimate({
      totalBuiltUpArea,
      constructionCost,
      laborCost,
      materialCost,
      interiorCost,
      contingencyCost,
      costPerSqFt: costPerSqFt[constructionType],
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F8F4] p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border p-6">
          <h1 className="text-3xl font-bold mb-6">
            Construction Budget Estimator
          </h1>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 font-medium">
                Land Size (Sq Ft)
              </label>

              <input
                type="number"
                min="1"
                value={landSize}
                onChange={(e) => {
                  const value = e.target.value;
                  setLandSize(value);
                }}
                placeholder="Enter land size"
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Number of Floors</label>

              <input
                type="number"
                min="1"
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Construction Type
              </label>

              <select
                value={constructionType}
                onChange={(e) => setConstructionType(e.target.value)}
                className="w-full border rounded-xl p-3"
              >
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculateEstimate}
            className="mt-6 bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Calculate Estimate
          </button>

          {estimate && (
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Built-up Area</p>
                <h3 className="text-2xl font-bold">
                  {estimate.totalBuiltUpArea} Sq Ft
                </h3>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Rate Per Sq Ft</p>
                <h3 className="text-2xl font-bold">₹{estimate.costPerSqFt}</h3>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Total Budget</p>
                <h3 className="text-2xl font-bold text-green-700">
                  ₹{estimate.constructionCost.toLocaleString()}
                </h3>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Material Cost</p>
                <h3 className="font-bold">
                  ₹{estimate.materialCost.toLocaleString()}
                </h3>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Labor Cost</p>
                <h3 className="font-bold">
                  ₹{estimate.laborCost.toLocaleString()}
                </h3>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Interior Cost</p>
                <h3 className="font-bold">
                  ₹{estimate.interiorCost.toLocaleString()}
                </h3>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-gray-500">Contingency Cost</p>
                <h3 className="font-bold">
                  ₹{estimate.contingencyCost.toLocaleString()}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
