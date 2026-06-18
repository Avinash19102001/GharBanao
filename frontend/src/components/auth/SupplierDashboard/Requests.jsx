import { useState } from "react";


const Requests = () => {


    const [requests, setRequests] = useState([


        {
            id: 1,
            client: "ABC Constructions",
            material: "UltraTech Cement",
            quantity: "150 Bags",

            status: "Pending",

            phone: "9876543210",
            email: "abc@gmail.com",
            address: "Hyderabad"

        },



        {
            id: 2,
            client: "Dream Homes",
            material: "TMT Steel",
            quantity: "2 Tons",

            status: "Accepted",

            phone: "9123456780",
            email: "dream@gmail.com",
            address: "Bangalore"

        }


    ]);




    const changeStatus = (id, status) => {


        setRequests(prev =>

            prev.map(item =>

                item.id === id

                    ?

                    {
                        ...item,
                        status
                    }

                    :

                    item

            )

        )

    }





    return (

        <div className="bg-white rounded-3xl shadow p-8">


            <h1 className="text-3xl font-bold mb-8">

                Requests

            </h1>




            <div className="space-y-5">



                {
                    requests.map(item => (



                        <div

                            key={item.id}

                            className="border rounded-2xl p-6"

                        >


                            <div className="flex justify-between">


                                <div>


                                    <h2 className="text-xl font-bold">

                                        {item.client}

                                    </h2>



                                    <p>
                                        Material:
                                        {item.material}
                                    </p>


                                    <p>
                                        Quantity:
                                        {item.quantity}
                                    </p>



                                    <span

                                        className={`px-4 py-1 rounded-full

${item.status === "Accepted"

                                                ?
                                                "bg-green-100 text-green-700"

                                                :

                                                "bg-yellow-100 text-yellow-700"

                                            }

`}

                                    >

                                        {item.status}

                                    </span>



                                </div>





                                <div>


                                    {
                                        item.status === "Pending"

                                        &&

                                        <>


                                            <button

                                                onClick={() => changeStatus(item.id, "Accepted")}

                                                className="bg-green-500 text-white px-5 py-2 rounded-xl mr-3"

                                            >

                                                Accept

                                            </button>




                                            <button

                                                onClick={() => changeStatus(item.id, "Rejected")}

                                                className="bg-red-500 text-white px-5 py-2 rounded-xl"

                                            >

                                                Reject

                                            </button>


                                        </>


                                    }


                                </div>



                            </div>




                            <hr className="my-5" />



                            {/* CONTACT SECURITY */}



                            {
                                item.status === "Accepted" &&

                                <div className="bg-green-50 p-4 rounded-xl">


                                    <h3 className="font-bold mb-2">

                                        Contact Details

                                    </h3>


                                    <p>

                                        Phone:
                                        {item.phone}

                                    </p>


                                    <p>

                                        Email:
                                        {item.email}

                                    </p>


                                    <p>

                                        Address:
                                        {item.address}

                                    </p>


                                </div>

                            }



                        </div>



                    ))


                }



            </div>


        </div>


    )

}



export default Requests;