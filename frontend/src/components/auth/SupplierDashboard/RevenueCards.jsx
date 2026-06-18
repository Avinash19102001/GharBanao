const RevenueCards = () => {
    const cards = [
        {
            title: "Revenue",
            value: "₹12.5L",
            color: "bg-green-100"
        },
        {
            title: "Orders",
            value: "450",
            color: "bg-blue-100"
        },
        {
            title: "Customers",
            value: "180",
            color: "bg-orange-100"
        },
        {
            title: "Growth",
            value: "+18%",
            color: "bg-purple-100"
        }
    ];

    return (
        <div className="grid md:grid-cols-4 gap-6">

            {cards.map((item, index) => (

                <div
                    key={index}
                    className={`${item.color} p-6 rounded-3xl shadow`}
                >
                    <h2 className="text-gray-500">
                        {item.title}
                    </h2>

                    <h1 className="text-4xl font-bold mt-3">
                        {item.value}
                    </h1>

                </div>

            ))}

        </div>
    );
};

export default RevenueCards;