import { z } from "zod";

export const SupplierProfile = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    phoneNumber: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

    companyName: z.string().min(2, "Company name is required"),

    gstNumber: z
        .string()
        .regex(
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/,
            "Enter a valid GST Number"
        ),

    supplierCategory: z
        .string()
        .min(1, "Please select a supplier category"),

    businessAddress: z
        .string()
        .min(10, "Business address must be at least 10 characters"),

    city: z.string().min(2, "City is required"),

    state: z.string().min(2, "State is required"),

    pincode: z
        .string()
        .regex(/^[1-9][0-9]{5}$/, "Enter a valid 6-digit pincode"),

    experience: z.coerce
        .number()
        .min(0, "Experience cannot be negative"),

    productImages: z.any(),

    gstCertificate: z.any(),

    registrationCertificate: z.any(),
});