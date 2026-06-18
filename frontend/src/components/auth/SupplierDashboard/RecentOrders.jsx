const RecentOrders = () => {

    const orders = [
        {
            id: "#1001",
            customer: "Dream Homes",
            product: "UltraTech Cement",
            amount: "₹25,000",
            status: "Delivered"
        },
        {
            id: "#1002",
            customer: "ABC Builders",
            product: "Tata Steel",
            amount: "₹42,000",
            status: "Pending"
        }
    ];

    return (

        <div className="bg-white p-6 rounded-3xl shadow">

            <h1 className="text-2xl font-bold mb-5">
                Recent Orders
            </h1>

            <table className="w-full">

                <thead>

                    <tr className="border-b h-12">

                        <th>Order ID</th>

                        <th>Customer</th>

                        <th>Product</th>

                        <th>Amount</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {orders.map((item) => (

                        <tr key={item.id} className="border-b h-14">

                            <td>{item.id}</td>

                            <td>{item.customer}</td>

                            <td>{item.product}</td>

                            <td>{item.amount}</td>

                            <td>

                                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full">
                                    {item.status}
                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
};

export default RecentOrders;