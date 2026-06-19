import { Wallet, ArrowUpCircle, Clock, CheckCircle } from "lucide-react";

export default function HouseOwnerEscrow() {
  const escrowData = {
    balance: "₹17,50,000",
    deposited: "₹50,00,000",
    released: "₹32,50,000",
    pending: "₹17,50,000",
  };

  const paymentSchedule = [
    {
      id: 1,
      milestone: "Foundation Completed",
      amount: "₹5,00,000",
      status: "Paid",
    },
    {
      id: 2,
      milestone: "Ground Floor Slab",
      amount: "₹8,00,000",
      status: "Paid",
    },
    {
      id: 3,
      milestone: "First Floor Slab",
      amount: "₹3,50,000",
      status: "Pending",
    },
    {
      id: 4,
      milestone: "Roof Casting",
      amount: "₹4,00,000",
      status: "Upcoming",
    },
  ];

  const transactions = [
    {
      id: 1,
      date: "15 Jun 2026",
      description: "Ground Floor Slab Payment",
      amount: "₹8,00,000",
      status: "Released",
    },
    {
      id: 2,
      date: "05 Jun 2026",
      description: "Foundation Payment",
      amount: "₹5,00,000",
      status: "Released",
    },
    {
      id: 3,
      date: "18 Jun 2026",
      description: "First Floor Slab",
      amount: "₹3,50,000",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white border rounded-3xl p-6">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <Wallet className="text-green-700" />
          </div>

          <p className="text-gray-500 mt-4">Escrow Balance</p>

          <h2 className="text-3xl font-bold mt-2">{escrowData.balance}</h2>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <ArrowUpCircle className="text-blue-700" />
          </div>

          <p className="text-gray-500 mt-4">Total Deposited</p>

          <h2 className="text-3xl font-bold mt-2">{escrowData.deposited}</h2>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <CheckCircle className="text-green-700" />
          </div>

          <p className="text-gray-500 mt-4">Total Released</p>

          <h2 className="text-3xl font-bold mt-2">{escrowData.released}</h2>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
            <Clock className="text-yellow-700" />
          </div>

          <p className="text-gray-500 mt-4">Pending Release</p>

          <h2 className="text-3xl font-bold mt-2">{escrowData.pending}</h2>
        </div>
      </div>

      {/* Upcoming Payment */}
      <div className="bg-white border rounded-3xl p-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Upcoming Release</h2>

            <p className="text-gray-500 mt-2">First Floor Slab Completion</p>

            <h3 className="text-4xl font-bold text-green-700 mt-3">
              ₹3,50,000
            </h3>
          </div>

          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl">
            Release Payment
          </button>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="bg-white border rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6">Payment Schedule</h2>

        <div className="space-y-4">
          {paymentSchedule.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between gap-4 border rounded-xl p-4"
            >
              <div>
                <h4 className="font-semibold">{item.milestone}</h4>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-bold">{item.amount}</span>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white border rounded-3xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6">Transaction History</h2>

        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Description</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b hover:bg-gray-50">
                <td className="py-4">{txn.date}</td>

                <td>{txn.description}</td>

                <td className="font-semibold">{txn.amount}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      txn.status === "Released"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
