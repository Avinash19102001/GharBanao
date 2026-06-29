import { z } from "zod";


export const stockSchema = z.object({

    product_name: z
        .string()
        .min(2, "Product name required"),


    product_id: z
        .string()
        .optional(),


    quantity: z
        .number({
            required_error: "Quantity required"
        })
        .min(0, "Stock cannot be negative"),


    unit: z
        .string()
        .min(1, "Select unit"),


    price: z
        .number()
        .min(1, "Price required"),


    last_updated: z
        .string()
        .optional(),


    status: z
        .enum([
            "Available",
            "Low Stock",
            "Out Of Stock"
        ])
        .default("Available")

});