import { useState } from "react";

const FindClients = () => {


    const [clients, setClients] = useState([

        {
            id: 1,
            name: "Dream Homes",
            type: "Home Owner",
            location: "Hyderabad",
            status: "Connect"
        },

        {
            id: 2,
            name: "Skyline Builders",
            type: "Contractor",
            location: "Bangalore",
            status: "Connect"
        },

        {
            id: 3,
            name: "ABC Constructions",
            type: "Contractor",
            location: "Chennai",
            status: "Pending"
        },

        {
            id: 4,
            name: "Sri Sai Projects",
            type: "Builder",
            location: "Delhi",
            status: "Connect"
        },

        {
            id: 5,
            name: "Elite Contractors",
            type: "Contractor",
            location: "Mumbai",
            status: "Accepted"
        }

    ]);




    const sendRequest = (id) => {


        setClients(prev =>

            prev.map(client =>

                client.id === id

                    ?

                    {
                        ...client,
                        status: "Pending"
                    }

                    :

                    client

            )

        )

    }




    return (


        <div className="bg-white rounded-3xl shadow-sm p-8">


            <div className="flex justify-between items-center mb-8">


                <div>

                    <h1 className="text-3xl font-bold">
                        Find Clients
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Connect with contractors and homeowners
                    </p>

                </div>


                <input

                    placeholder="Search clients..."

                    className="border rounded-xl px-5 py-3"

                />


            </div>





            <div className="grid md:grid-cols-3 gap-6">


                {
                    clients.map(client => (


                        <div

                            key={client.id}

                            className="border rounded-3xl p-6 shadow-sm hover:shadow-lg transition"


                        >


                            <div className="flex justify-between">


                                <div>


                                    <h2 className="font-bold text-xl">

                                        {client.name}

                                    </h2>


                                    <p className="text-gray-500">

                                        {client.type}

                                    </p>


                                </div>


                                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                                    Active

                                </div>
                            </div>




                            <p className="mt-5 text-gray-600">

                                📍 {client.location}

                            </p>






                            {

                                client.status === "Accepted"

                                    ?

                                    <div className="mt-5 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">


                                        <p className="text-green-700 font-semibold">

                                            Contact Available

                                        </p>


                                        <p className="text-sm">

                                            +91 XXXXX XXXXX

                                        </p>


                                    </div>


                                    :



                                    <button

                                        onClick={() => sendRequest(client.id)}

                                        className={`mt-5 w-full py-3 rounded-xl font-medium

                            ${client.status === "Pending"

                                                ?

                                                "bg-yellow-100 text-yellow-700"

                                                :

                                                "bg-blue-600 text-white"

                                            }

                            `}


                                    >


                                        {
                                            client.status === "Pending"

                                                ?

                                                "Request Sent"

                                                :

                                                "Send Request"

                                        }


                                    </button>


                            }



                        </div>


                    ))

                }


            </div>


        </div>


    );

};


export default FindClients;