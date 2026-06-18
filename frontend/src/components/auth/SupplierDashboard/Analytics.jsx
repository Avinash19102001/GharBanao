const Analytics = () => {

    return (

        <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-3xl shadow">

                <h3>Total Revenue</h3>

                <h1 className="text-4xl font-bold mt-3">
                    ₹12.5L
                </h1>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow">

                <h3>Total Orders</h3>

                <h1 className="text-4xl font-bold mt-3">
                    450
                </h1>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow">

                <h3>Customers</h3>

                <h1 className="text-4xl font-bold mt-3">
                    180
                </h1>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow">

                <h3>Growth</h3>

                <h1 className="text-4xl font-bold mt-3 text-green-700">
                    +18%
                </h1>

            </div>

        </div>

    );
};

export default Analytics;