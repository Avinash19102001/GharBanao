import { z } from "zod";

export const contractorSchema = z
  .object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),

    email: z.string().email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain one uppercase letter")
      .regex(/[a-z]/, "Must contain one lowercase letter")
      .regex(/[0-9]/, "Must contain one number")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Must contain one special character"),

    confirmPassword: z.string().min(8, "Confirm password is required"),

    preferredProjectType: z.string().min(1, "Please select a project type"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
