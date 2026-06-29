import { z } from "zod";


export const productSchema = z.object({

    name:
        z.string()
            .min(3, "Product name required"),


    category:
        z.string()
            .min(1, "Category required"),


    price:
        z.number()
            .min(1, "Enter valid price"),


    stock:
        z.number()
            .min(1, "Stock required")


});