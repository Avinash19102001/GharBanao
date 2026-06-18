import { useState } from "react";
import ProductCard from "./ProductCard";
import { products as initialProducts } from "./SupplierData";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../../validations/productSchema";


const AddProducts = () => {

    const [products, setProducts] = useState(initialProducts);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(productSchema)
    });



    const onSubmit = (data) => {

        const newProduct = {
            id: Date.now(),
            ...data,
            status: Number(data.stock) > 0
        }


        setProducts(prev => [
            ...prev,
            newProduct
        ])


        reset();

    }



    return (

        <div className="p-6">


            {/* ADD PRODUCT FORM */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">


                <h2 className="text-2xl font-bold mb-6">
                    Add Product
                </h2>



                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-2 gap-5"
                >


                    <div>

                        <input
                            className="border p-3 w-full rounded"
                            placeholder="Product Name"
                            {...register("productName")}
                        />

                        <p className="text-red-500">
                            {errors.productName?.message}
                        </p>

                    </div>



                    <div>

                        <input
                            className="border p-3 w-full rounded"
                            placeholder="Company"
                            {...register("company")}
                        />

                        <p className="text-red-500">
                            {errors.company?.message}
                        </p>

                    </div>




                    <div>

                        <input
                            className="border p-3 w-full rounded"
                            placeholder="Price"
                            type="number"
                            {...register("price")}
                        />

                        <p className="text-red-500">
                            {errors.price?.message}
                        </p>

                    </div>




                    <div>

                        <input
                            className="border p-3 w-full rounded"
                            placeholder="Stock"
                            type="number"
                            {...register("stock")}
                        />

                        <p className="text-red-500">
                            {errors.stock?.message}
                        </p>

                    </div>




                    <select
                        className="border p-3 rounded"
                        {...register("unit")}
                    >

                        <option value="">
                            Select Unit
                        </option>

                        <option value="bag">
                            Bag
                        </option>

                        <option value="kg">
                            Kg
                        </option>

                        <option value="pcs">
                            Pieces
                        </option>


                    </select>



                    <button
                        className="bg-orange-500 text-white rounded p-3"
                    >

                        Add Product

                    </button>


                </form>


            </div>





            {/* PRODUCT LIST */}


            <div className="bg-white rounded-xl shadow p-6">


                <h2 className="text-2xl font-bold mb-5">
                    Your Products
                </h2>



                <div className="grid grid-cols-3 gap-5">


                    {
                        products.map(item => (

                            <ProductCard
                                key={item.id}
                                product={item}
                            />

                        ))
                    }


                </div>


            </div>



        </div>

    )
}


export default AddProducts;