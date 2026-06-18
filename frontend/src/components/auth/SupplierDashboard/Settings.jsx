const Settings = () => {

    return (

        <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-3xl font-bold mb-8">

                Settings

            </h1>

            <div className="space-y-6">

                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border p-3 rounded-xl"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-xl"
                />

                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border p-3 rounded-xl"
                />

                <button className="bg-green-700 text-white px-6 py-3 rounded-xl">

                    Save Changes

                </button>

            </div>

        </div>

    );
};

export default Settings;