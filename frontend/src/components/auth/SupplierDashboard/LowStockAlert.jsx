const LowStockAlert = () => {

    const items = [
        {
            product: "UltraTech Cement",
            stock: "10 Bags"
        },
        {
            product: "Tata Steel",
            stock: "4 Tons"
        },
        {
            product: "Red Bricks",
            stock: "50 Pieces"
        }
    ];

    return (

        <div className="bg-red-50 p-6 rounded-3xl shadow">

            <h1 className="text-2xl font-bold mb-5 text-red-600">

                Low Stock Alerts

            </h1>

            <div className="space-y-4">

                {items.map((item, index) => (

                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl"
                    >

                        <h2 className="font-bold">

                            {item.product}

                        </h2>

                        <p className="text-red-500">

                            Stock : {item.stock}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );
};

export default LowStockAlert;