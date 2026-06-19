import { useState } from "react";
import { products as initialProducts } from "./SupplierData";


const DailyStockUpdates = () => {


    const [products, setProducts] = useState(initialProducts);

    const [search, setSearch] = useState("");

    const [updates, setUpdates] = useState({});



    const filteredProducts = products.filter(item =>

        item.productName
            .toLowerCase()
            .includes(search.toLowerCase())

    );




    const changeStock = (id, value) => {


        setUpdates({

            ...updates,

            [id]: value

        })


    }




    const updateStock = (id) => {


        const amount = Number(updates[id]);


        if (!amount) {
            alert("Enter stock quantity");
            return;
        }



        setProducts(prev =>

            prev.map(item =>

                item.id === id

                    ?

                    {
                        ...item,

                        stock: item.stock + amount,

                        status: item.stock + amount > 0

                    }

                    : item

            )

        )



        setUpdates({

            ...updates,

            [id]: ""

        });


    }




    return (

        <div className="p-6">


            <div className="bg-white rounded-xl shadow p-6">


                <h2 className="text-2xl font-bold mb-5">

                    Stock Update

                </h2>



                <input

                    className="border p-3 rounded w-full mb-6"

                    placeholder="Search Product..."

                    onChange={(e) => setSearch(e.target.value)}

                />



                <div className="space-y-5">



                    {
                        filteredProducts.map(item => (



                            <div

                                key={item.id}

                                className="border rounded-xl p-5 flex justify-between items-center"

                            >



                                <div>


                                    <h3 className="font-bold text-xl">

                                        {item.productName}

                                    </h3>


                                    <p>

                                        Company : {item.company}

                                    </p>



                                    <p>

                                        Current Stock :

                                        <span className="font-bold">

                                            {item.stock} {item.unit}

                                        </span>

                                    </p>



                                    {

                                        item.stock < 20 &&

                                        <p className="text-red-500">

                                            Low Stock Warning

                                        </p>

                                    }


                                </div>





                                <div className="flex gap-3">


                                    <input

                                        type="number"

                                        className="border p-2 rounded w-32"

                                        placeholder="Qty"

                                        value={updates[item.id] || ""}

                                        onChange={(e) =>

                                            changeStock(
                                                item.id,
                                                e.target.value
                                            )

                                        }

                                    />



                                    <button

                                        onClick={() => updateStock(item.id)}

                                        className="bg-green-500 text-white px-5 rounded"

                                    >

                                        Update

                                    </button>



                                </div>




                            </div>



                        ))

                    }




                </div>



            </div>


        </div>


    )


}


export default DailyStockUpdates;