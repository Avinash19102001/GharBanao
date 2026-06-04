import { z } from "zod";

export const supplierSchema = z
  .object({
    FullName: z
      .string()
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .email("Enter a valid email"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),

    companyName: z
      .string()
      .min(2, "Company Name is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });