import { useState } from "react";


const Orders = () => {


    const [orders, setOrders] = useState([

        {
            id: 1001,
            customer: "Dream Homes",
            products: "Cement - 50 bags, Steel - 100kg",
            amount: 25000,
            status: "Pending"
        },


        {
            id: 1002,
            customer: "ABC Builders",
            products: "Bricks - 500 pcs",
            amount: 40000,
            status: "Pending"
        },


        {
            id: 1003,
            customer: "Sri Constructions",
            products: "Cement - 100 bags",
            amount: 55000,
            status: "Delivered"
        }

    ]);





    const updateStatus = (id, status) => {


        setOrders(prev =>

            prev.map(order =>

                order.id === id

                    ?

                    {
                        ...order,
                        status
                    }

                    :

                    order

            )

        )

    }





    return (


        <div className="p-6">


            <div className="bg-white rounded-3xl shadow p-8">


                <h1 className="text-3xl font-bold mb-8">
                    Orders
                </h1>




                <div className="space-y-5">


                    {

                        orders.map(order => (


                            <div

                                key={order.id}

                                className="border rounded-2xl p-6 flex justify-between items-center"

                            >


                                <div>


                                    <h2 className="text-xl font-bold">

                                        Order #{order.id}

                                    </h2>



                                    <p className="text-gray-600">

                                        Customer: {order.customer}

                                    </p>



                                    <p className="mt-2">

                                        {order.products}

                                    </p>



                                    <p className="font-bold mt-2">

                                        ₹{order.amount}

                                    </p>



                                    <span
                                        className={`inline-block mt-3 px-4 py-1 rounded-full text-sm
${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : order.status === "Accepted" ? "bg-green-100 text-green-700"

                                                : order.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                                            }

`}

                                    >

                                        {order.status}

                                    </span>



                                </div>





                                <div className="flex gap-3">


                                    {
                                        order.status === "Pending" &&

                                        <>


                                            <button

                                                onClick={() => updateStatus(order.id, "Accepted")}

                                                className="bg-green-500 text-white px-5 py-2 rounded-xl"

                                            >

                                                Accept

                                            </button>




                                            <button

                                                onClick={() => updateStatus(order.id, "Rejected")}

                                                className="bg-red-500 text-white px-5 py-2 rounded-xl"

                                            >

                                                Reject

                                            </button>


                                        </>

                                    }




                                </div>




                            </div>


                        ))

                    }


                </div>


            </div>


        </div>



    )


}



export default Orders;