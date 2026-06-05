import { z } from "zod";


export const supplierCompleteProfile = z
    .object({
        fullName: z
            .string()
            .min(3, "Full Name must be at least 3 characters"),

        email: z
            .string()
            .email("Enter a valid email address"),

        phone: z
            .string()
            .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                "Password must contain uppercase, lowercase, number and special character"
            ),

        confirmPassword: z.string(),

        companyName: z
            .string()
            .min(2, "Company Name is required"),

        companyRegistrationNumber: z
            .string()
            .min(5, "Company Registration Number is required"),

        gstNumber: z
            .string()
            .regex(
                /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/,
                "Enter a valid GST Number"
            ),

        address: z
            .string()
            .min(10, "Address must be at least 10 characters"),

        city: z
            .string()
            .min(2, "City is required"),

        state: z
            .string()
            .min(2, "State is required"),

        pincode: z
            .string()
            .regex(/^[1-9][0-9]{5}$/, "Enter a valid 6-digit pincode"),

        businessType: z
            .string()
            .min(1, "Please select a business type"),

        website: z
            .string()
            .optional()
            .or(z.literal(""))
            .refine(
                (value) =>
                    value === "" ||
                    /^https?:\/\/([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(value),
                {
                    message: "Enter a valid website URL",
                }
            ),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });