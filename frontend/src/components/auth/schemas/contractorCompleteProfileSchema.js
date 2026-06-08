import { z } from "zod";

export const contractorCompleteProfileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),

  lastName: z.string().min(2, "Last name is required"),

  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid phone number"),

  gstNumber: z
    .string()
    .min(15, "GST Number must be 15 characters")
    .max(15, "GST Number must be 15 characters"),

  companyName: z.string().min(2, "Company name is required"),

  panNumber: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number"),

  aadhaarNumber: z
    .string()
    .regex(/^\d{12}$/, "Aadhaar must contain exactly 12 digits"),

  typicalProjectBudget: z.string().min(1, "Please select project budget"),

  projectsCompleted: z.coerce.number().min(1, "Projects count is required"),

  yearsOfExperience: z.coerce
    .number()
    .min(0, "Experience cannot be negative")
    .max(60, "Invalid experience"),

  location: z.string().min(2, "Location is required"),

  availability: z.string().min(1, "Please select availability"),

  about: z
    .string()
    .min(50, "Please write at least 50 characters")
    .max(1000, "Maximum 1000 characters allowed"),

  // Previous Work Images
  workImages: z
    .any()
    .refine((files) => files?.length > 0, "Upload at least 1 project image")
    .refine((files) => files?.length <= 4, "Maximum 4 images allowed"),

  // Certificate Upload
  certificate: z
    .any()
    .refine((file) => file?.length === 1, "Contractor certificate is required"),

  // License Upload
  license: z
    .any()
    .refine((file) => file?.length === 1, "Contractor license is required"),
});
