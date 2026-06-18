const TopProducts = () => {

    const products = [
        {
            product: "UltraTech Cement",
            sales: "₹3.2L"
        },
        {
            product: "Tata Steel",
            sales: "₹2.5L"
        },
        {
            product: "ACC Cement",
            sales: "₹1.8L"
        }
    ];

    return (

        <div className="bg-white p-6 rounded-3xl shadow">

            <h1 className="text-2xl font-bold mb-6">

                Top Selling Products

            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {products.map((item, index) => (

                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-2xl"
                    >

                        <h2 className="font-bold">

                            {item.product}

                        </h2>

                        <h1 className="text-3xl mt-4 text-green-700">

                            {item.sales}

                        </h1>

                    </div>

                ))}

            </div>

        </div>

    );
};

export default TopProducts;