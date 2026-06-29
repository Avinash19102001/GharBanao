import { useState } from "react";

import {
    FaSearch,
    FaUsers,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";


const Clients = () => {


    const [tab, setTab] = useState("find");



    const findClients = [

        {
            name: "Raj Builders",
            location: "Hyderabad",
            phone: "9876543210"
        },

        {
            name: "Sri Constructions",
            location: "Bangalore",
            phone: "9988776655"
        },

        {
            name: "Metro Projects",
            location: "Chennai",
            phone: "9123456789"
        }

    ];



    const existingClients = [

        {
            name: "ABC Developers",
            orders: "12 Orders"
        },


        {
            name: "Green Homes",
            orders: "8 Orders"
        },


        {
            name: "Urban Build",
            orders: "5 Orders"
        }

    ];





    return (


        <div className="
bg-white
rounded-xl
p-5
shadow-sm
">


            {/* TOP SWITCH */}


            <div className="
flex
gap-3
mb-4
">


                <button

                    onClick={() => setTab("find")}

                    className={`
px-5
py-2
rounded-lg
font-semibold

${tab === "find"
                            ?
                            "bg-blue-600 text-white"
                            :
                            "bg-gray-100 text-gray-600"
                        }

`}

                >

                    Find Clients

                </button>



                <button

                    onClick={() => setTab("existing")}

                    className={`
px-5
py-2
rounded-lg
font-semibold

${tab === "existing"
                            ?
                            "bg-blue-600 text-white"
                            :
                            "bg-gray-100 text-gray-600"
                        }

`}

                >

                    Existing Clients

                </button>


            </div>






            {
                tab === "find" ?



                    <div className="
grid
md:grid-cols-3
gap-4
">


                        {
                            findClients.map(client => (


                                <div

                                    key={client.name}

                                    className="
border
rounded-xl
p-4
hover:shadow-md
transition
"


                                >


                                    <div className="
flex
items-center
gap-3
">


                                        <div className="
w-10
h-10
rounded-lg
bg-green-50
flex
items-center
justify-center
text-green-700
">


                                            <FaUsers />


                                        </div>


                                        <h3 className="font-bold">

                                            {client.name}

                                        </h3>


                                    </div>




                                    <p className="
text-sm
text-gray-500
mt-3
flex
gap-2
items-center
">

                                        <FaMapMarkerAlt />

                                        {client.location}

                                    </p>



                                    <p className="
text-sm
text-gray-500
mt-2
flex
gap-2
items-center
">

                                        <FaPhone />

                                        {client.phone}

                                    </p>



                                    <button className="
mt-4
w-full
bg-green-700
text-white
py-2
rounded-lg
">


                                        Connect


                                    </button>



                                </div>


                            ))
                        }


                    </div>



                    :



                    <div className="
grid
md:grid-cols-3
gap-4
">


                        {
                            existingClients.map(client => (


                                <div

                                    key={client.name}

                                    className="
border
rounded-xl
p-4
"


                                >


                                    <div className="
flex
items-center
gap-3
">


                                        <div className="
w-10
h-10
rounded-lg
bg-blue-50
flex
items-center
justify-center
text-blue-600
">


                                            <FaUsers />


                                        </div>



                                        <h3 className="font-bold">

                                            {client.name}

                                        </h3>


                                    </div>



                                    <p className="
text-gray-500
mt-4
">

                                        {client.orders}

                                    </p>


                                </div>


                            ))
                        }


                    </div>


            }



        </div>


    )

}



export default Clients;