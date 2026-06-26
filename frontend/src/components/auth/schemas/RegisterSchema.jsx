import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Full Name must be at least 3 characters")
    .refine((value) => !/\s{2,}/.test(value), {
      message: "Multiple consecutive spaces are not allowed",
    }),
  email: z
    .string()
    .trim()
    .regex(
      /^[^\s@]+@[^\s@]+\.(com|org|edu|net|in|co\.in|edu\.in)$/,
      "Enter a valid email address (e.g. .com, .in)",
    ),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Phone number must be 10 digits starting with 6-9"),
  pincode: z
    .string()
    .trim()
    .length(6, "Pincode must be exactly 6 digits")
    .regex(/^\d+$/, "Pincode must contain only numbers"),
  address: z.string().trim().min(5, "Please enter a valid descriptive address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^[A-Z]/, "Password must start with a capital letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});
