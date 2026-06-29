const products = [

    {
        name: "Bricks",
        price: "₹15 / piece",
        stock: "500 pieces"
    },

    {
        name: "Maha Cement",
        price: "₹230 / bag",
        stock: "24 bags"
    },

    {
        name: "Adani Cement",
        price: "₹300 / bag",
        stock: "34 bags"
    }


]


const ProductCatalog = () => {


    return (

        <div className="
bg-white
rounded-3xl
p-6
shadow
">


            <div className="
flex
justify-between
">

                <h1 className="text-2xl font-bold">

                    Manage Live Catalog

                </h1>


                <button
                    className="
bg-green-700
text-white
px-5
rounded-xl
">

                    Add Product

                </button>


            </div>



            <div className="
grid
md:grid-cols-3
gap-5
mt-6
">


                {
                    products.map(product => (


                        <div
                            className="
border
rounded-2xl
p-5
"
                        >


                            <div className="
h-32
bg-gray-200
rounded-xl
">


                            </div>


                            <h2 className="font-bold mt-3">

                                {product.name}

                            </h2>


                            <p>

                                {product.price}

                            </p>


                            <p className="text-green-700">

                                {product.stock}

                            </p>


                        </div>


                    ))

                }



            </div>



        </div>

    )


}


export default ProductCatalog;