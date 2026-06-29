import { z } from "zod";

export const ProfileSchema = z
  .object({
    // --- Step 1 Fields ---
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
    phone_number: z
      .string()
      .trim()
      .regex(
        /^[6-9]\d{9}$/,
        "Phone number must be 10 digits starting with 6-9",
      ),
    pincode: z
      .string()
      .trim()
      .length(6, "Pincode must be exactly 6 digits")
      .regex(/^\d+$/, "Pincode must contain only numbers"),
    address: z
      .string()
      .trim()
      .min(5, "Please enter a valid descriptive address"),

    // --- Step 2 Fields ---
    project_title: z
      .string()
      .trim()
      .min(3, "Project title must be at least 3 characters"),
    start_timeline: z
      .string()
      .min(1, "Please select an expected project timeline"),
    project_description: z
      .string()
      .trim()
      .min(10, "Project description must be at least 10 characters long"),
    building_type: z.string().min(1, "Please select a building type"),
    construction_type: z.string().min(1, "Please select a construction type"),
    project_budget: z.coerce
      .number({ invalid_type_error: "Budget must be a number" })
      .min(1, "Budget must be greater than 0"),
    land_area: z.coerce
      .number({ invalid_type_error: "Land area must be a number" })
      .min(1, "Land area must be greater than 0"),
    floors: z.coerce
      .number({ invalid_type_error: "Floor count must be a number" })
      .min(1, "Minimum 1 floor is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
