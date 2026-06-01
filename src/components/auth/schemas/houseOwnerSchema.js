import { z } from "zod";

export const houseOwnerSchema = z
  .object({
    fullName: z.string().min(3, "Full Name is required"),

    email: z.email("Invalid Email"),

    mobileNumber: z
      .string()
      .regex(/^[6-9]\d{9}$/, "Invalid Mobile Number"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),

    propertyType: z.string().min(1, "Property Type is required"),

    projectType: z.string().min(1, "Project Type is required"),

    state: z.string().min(1, "State is required"),

    city: z.string().min(1, "City is required"),

    pincode: z
      .string()
      .regex(/^\d{6}$/, "Invalid Pincode"),

    budget: z.string().min(1, "Budget is required"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );