const Profile = () => {


    const supplier = {

        name: "Raj Kumar",

        company: "ABC Suppliers",

        email: "abc@gmail.com",

        phone: "9876543210",

        gst: "36ABCDE1234F",

        category: "Construction Materials",

        experience: "8 Years",

        address: "Hyderabad"

    };



    return (

        <div className="bg-white rounded-3xl shadow p-8">


            <div className="flex items-center gap-6">


                <img

                    src="https://i.pravatar.cc/150"

                    className="w-28 h-28 rounded-full"

                />


                <div>

                    <h1 className="text-3xl font-bold">

                        {supplier.name}

                    </h1>


                    <p className="text-gray-500">

                        {supplier.company}

                    </p>


                </div>


            </div>





            <div className="grid md:grid-cols-2 gap-5 mt-8">


                <div className="border p-4 rounded-xl">

                    <b>Email</b>

                    <p>{supplier.email}</p>

                </div>


                <div className="border p-4 rounded-xl">

                    <b>Phone</b>

                    <p>{supplier.phone}</p>

                </div>



                <div className="border p-4 rounded-xl">

                    <b>GST Number</b>

                    <p>{supplier.gst}</p>

                </div>



                <div className="border p-4 rounded-xl">

                    <b>Category</b>

                    <p>{supplier.category}</p>

                </div>



                <div className="border p-4 rounded-xl">

                    <b>Experience</b>

                    <p>{supplier.experience}</p>

                </div>



                <div className="border p-4 rounded-xl">

                    <b>Address</b>

                    <p>{supplier.address}</p>

                </div>


            </div>



            <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-xl">

                Edit Profile

            </button>



        </div>

    )

}


export default Profile;