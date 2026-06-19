export default function HouseOwnerRequests({ requests, constructionMode }) {
  return (
    <div className="bg-white rounded-3xl border p-6">
      <h2 className="text-2xl font-bold mb-6">
        {constructionMode === "contractor"
          ? "Contractor Requests"
          : "Supplier Requests"}
      </h2>

      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="border rounded-2xl p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">
                  {request.contractor || request.supplier}
                </h3>

                <p className="text-gray-500">{request.project}</p>

                <p className="mt-2">Budget: {request.amount}</p>

                <p>Duration: {request.duration}</p>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-green-700 text-white">
                  Accept
                </button>

                <button className="px-4 py-2 rounded-lg border">Reject</button>

                <button className="px-4 py-2 rounded-lg border">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
