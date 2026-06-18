const HeroSection = () => {
    return (
        <div className="bg-white rounded-3xl shadow p-8 flex justify-between items-center">

            <div>

                <h1 className="text-4xl font-bold">
                    Hey, there Build Supplies! 👋
                </h1>

                <p className="text-gray-500 mt-3">
                    Manage your products and connect with contractors and house owners.
                </p>

                <div className="mt-6 flex gap-4">

                    <button className="bg-green-700 text-white px-6 py-3 rounded-xl">
                        Add Product
                    </button>

                    <button className="border border-green-700 px-6 py-3 rounded-xl">
                        Update Stock
                    </button>

                </div>

            </div>

            <img
                src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
                alt=""
                className="w-64"
            />

        </div>
    );
};

export default HeroSection;