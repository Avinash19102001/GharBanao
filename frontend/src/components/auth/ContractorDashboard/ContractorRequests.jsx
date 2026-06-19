const ContractorRequests = () => {
  return (
    <div className="mx-6 mt-6">
      <h2 className="text-3xl font-bold mb-6">
        Requests
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* House Owner Requests */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <h3 className="text-xl font-semibold mb-4">
            House Owner Requests
          </h3>

          <div className="space-y-4">
            <div className="border rounded-xl p-4">
              <h4 className="font-semibold">
                Amit Verma
              </h4>

              <p className="text-sm text-gray-500">
                Hyderabad
              </p>

              <p className="mt-2">
                Budget: ₹25 Lakhs
              </p>

              <div className="mt-3 flex gap-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                  Accept
                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Reject
                </button>
              </div>
            </div>

            <div className="border rounded-xl p-4">
              <h4 className="font-semibold">
                Neha Singh
              </h4>

              <p className="text-sm text-gray-500">
                Banjara Hills
              </p>

              <p className="mt-2">
                Budget: ₹40 Lakhs
              </p>
            </div>
          </div>
        </div>

        {/* Supplier Requests */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <h3 className="text-xl font-semibold mb-4">
            Supplier Requests
          </h3>

          <div className="space-y-4">
            <div className="border rounded-xl p-4">
              <h4 className="font-semibold">
                UltraTech Cement
              </h4>

              <p className="text-sm text-gray-500">
                Cement Supplier
              </p>

              <p className="mt-2">
                New quotation available
              </p>

              <div className="mt-3 flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  View Quote
                </button>
              </div>
            </div>

            <div className="border rounded-xl p-4">
              <h4 className="font-semibold">
                Tata Steel
              </h4>

              <p className="text-sm text-gray-500">
                Steel Supplier
              </p>

              <p className="mt-2">
                Material delivery update
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorRequests;