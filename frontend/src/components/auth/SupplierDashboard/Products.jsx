import { useState } from "react";

import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaCartPlus,
    FaBox
} from "react-icons/fa";


const AddProducts = () => {


    const [tab, setTab] = useState("inventory");


    const [products, setProducts] = useState([

        {
            id: 1,
            name: "Cement",
            category: "Construction Material",
            price: 450,
            stock: 120,
            unit: "Bag",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
        },


        {
            id: 2,
            name: "Steel Rod",
            category: "Steel",
            price: 850,
            stock: 80,
            unit: "Piece",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        },


        {
            id: 3,
            name: "Bricks",
            category: "Blocks",
            price: 12,
            stock: 500,
            unit: "Piece",
            image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9"
        }

    ]);



    const [cart, setCart] = useState([]);



    const addToCart = (product) => {


        setCart([
            ...cart,
            product
        ]);


        alert(`${product.name} added`);

    }





    const addProduct = () => {


        const newProduct = {

            id: Date.now(),

            name: "New Material",

            category: "Construction",

            price: 0,

            stock: 0,

            unit: "Piece",

            image:
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e"

        };


        setProducts([
            ...products,
            newProduct
        ]);


    }






    const deleteProduct = (id) => {


        setProducts(
            products.filter(
                item => item.id !== id
            )
        )

    }







    return (


        <div>


            {/* PRODUCT NAVBAR */}


            <div className="
flex
gap-3
mb-5
">


                <button

                    onClick={() => setTab("inventory")}

                    className={`
px-5
py-2
rounded-lg
font-semibold
transition

${tab === "inventory"

                            ?
                            "bg-blue-600 text-white"

                            :

                            "bg-gray-100 text-gray-600 hover:bg-blue-100"

                        }

`}

                >

                    Inventory

                </button>




                <button

                    onClick={() => setTab("update")}

                    className={`
px-5
py-2
rounded-lg
font-semibold
transition

${tab === "update"

                            ?
                            "bg-blue-600 text-white"

                            :

                            "bg-gray-100 text-gray-600 hover:bg-blue-100"

                        }

`}

                >

                    Update Products

                </button>


            </div>






            {
                tab === "inventory" ?



                    <>


                        <div className="
flex
justify-between
mb-5
">


                            <h1 className="
text-2xl
font-bold
">

                                Product Inventory

                            </h1>



                            <button

                                onClick={addProduct}

                                className="
bg-green-700
text-white
px-4
py-2
rounded-xl
flex
gap-2
items-center
"

                            >

                                <FaPlus />

                                Add Product

                            </button>


                        </div>






                        <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
">


                            {
                                products.map(product => (


                                    <div

                                        key={product.id}

                                        className="
bg-white
rounded-xl
shadow-sm
overflow-hidden
"

                                    >


                                        <img

                                            src={product.image}

                                            className="
h-32
w-full
object-cover
"

                                        />



                                        <div className="
p-4
">


                                            <div className="
flex
items-center
gap-2
">


                                                <FaBox className="text-green-700" />


                                                <h2 className="
font-bold
">

                                                    {product.name}

                                                </h2>


                                            </div>




                                            <p className="
text-gray-500
text-sm
">

                                                {product.category}

                                            </p>




                                            <div className="
flex
justify-between
mt-3
">


                                                <b>

                                                    ₹{product.price}

                                                </b>


                                                <span className="
text-green-700
text-sm
">

                                                    {product.stock} {product.unit}

                                                </span>


                                            </div>





                                            <button

                                                onClick={() => addToCart(product)}

                                                className="
mt-4
w-full
bg-green-700
text-white
py-2
rounded-lg
flex
justify-center
gap-2
"

                                            >

                                                <FaCartPlus />

                                                Add Cart

                                            </button>




                                        </div>



                                    </div>


                                ))
                            }


                        </div>





                        <div className="
mt-5
bg-white
rounded-xl
p-4
shadow-sm
">


                            Cart Items :

                            <b>
                                {cart.length}
                            </b>


                        </div>




                    </>




                    :





                    /* UPDATE TAB */


                    <div className="
space-y-3
">


                        {
                            products.map(product => (


                                <div

                                    key={product.id}

                                    className="
bg-white
rounded-xl
p-4
shadow-sm
flex
justify-between
items-center
"

                                >


                                    <div>

                                        <h2 className="font-bold">

                                            {product.name}

                                        </h2>


                                        <p className="text-gray-500">

                                            Stock : {product.stock}

                                        </p>


                                    </div>




                                    <div className="
flex
gap-3
">


                                        <button

                                            className="
bg-gray-100
p-3
rounded-lg
"

                                        >

                                            <FaEdit />

                                        </button>




                                        <button

                                            onClick={() => deleteProduct(product.id)}

                                            className="
bg-red-100
text-red-600
p-3
rounded-lg
"

                                        >

                                            <FaTrash />

                                        </button>


                                    </div>



                                </div>


                            ))
                        }


                    </div>



            }



        </div>


    )


}


export default AddProducts;