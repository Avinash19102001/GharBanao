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

    productImages: z
        .any()
        .refine(
            (files) => files?.length >= 1,
            "Please upload at least one product image"
        )
        .refine(
            (files) => files?.length <= 5,
            "Maximum 5 product images allowed"
        )
        .refine(
            (files) =>
                Array.from(files).every(
                    (file) =>
                        file.type.startsWith("image/")
                ),
            "Only image files are allowed"
        )
        .refine(
            (files) =>
                Array.from(files).every(
                    (file) =>
                        file.size <= 5 * 1024 * 1024
                ),
            "Each image should be less than 5MB"
        ),

    gstCertificate: z.any(),

    registrationCertificate: z.any(),
});