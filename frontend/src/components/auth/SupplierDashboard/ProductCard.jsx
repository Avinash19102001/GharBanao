const ProductCard = ({ product }) => {


    return (

        <div className="border rounded-xl p-5 shadow-sm">


            <h3 className="text-xl font-bold">

                {product.productName}

            </h3>


            <p className="text-gray-500">

                {product.company}

            </p>



            <div className="mt-4 space-y-2">


                <p>
                    Price:
                    ₹{product.price}
                </p>


                <p>
                    Stock:
                    {product.stock} {product.unit}
                </p>



                <span
                    className={`px-4 py-1 rounded-full text-sm
${product.status
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"}
`}
                >


                    {
                        product.status
                            ?
                            "In Stock"
                            :
                            "Out of Stock"
                    }


                </span>



            </div>


        </div>


    )

}


export default ProductCard;