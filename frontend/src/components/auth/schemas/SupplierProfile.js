import { z } from "zod";


export const SupplierProfile = z.object({

    name: z.string()
        .min(2, "Name required"),

    email: z.string()
        .email("Invalid email"),

    phone: z.string()
        .min(10, "Phone required"),

    pincode: z.string()
        .regex(/^[1-9][0-9]{5}$/, "Invalid pincode"),

    address: z.string()
        .min(5, "Address required"),


    store_name: z.string()
        .min(2, "Store name required"),


    gstin: z.string()
        .min(5, "GST required"),


    pan: z.string()
        .min(5, "PAN required"),


    website: z.string()
        .optional(),


    business_type: z.string()
        .min(1, "Select business type"),


    registration_year: z.coerce.number()
        .optional(),


    about: z.string()
        .optional(),


    delivery_location1: z.string().optional(),

    delivery_location2: z.string().optional(),

    delivery_location3: z.string().optional(),

});