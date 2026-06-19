import { z } from "zod";

const houseOwnerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Full Name must be at least 3 characters")
      .refine((value) => !/\s{2,}/.test(value), {
        message: "Multiple spaces are not allowed",
      }),
    email: z
      .string()
      .trim()
      .regex(
        /^[^\s@]+@[^\s@]+\.(com|org|edu|net|in|co\.in|edu\.in)$/,
        "Enter a valid email address",
      ),
    // mobileNumber: z
    //   .string()
    //   .trim()
    //   .regex(
    //     /^[6-9]\d{9}$/,
    //     "Phone number must be 10 digits starting with 6-9",
    //   ),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/^[A-Z]/, "Password must start with a capital letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Confirm Password is required"),

    propertyType: z.string().min(1, "Please select property type"),

    projectType: z.string().min(1, "Please select project type"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export { houseOwnerSchema };
