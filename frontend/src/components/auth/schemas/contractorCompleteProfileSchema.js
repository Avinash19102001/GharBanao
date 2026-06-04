import { z } from "zod";

export const contractorCompleteProfileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),

  lastName: z.string().min(2, "Last name is required"),

  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid phone number"),

  companyName: z.string().min(2, "Company name is required"),

  gstNumber: z
    .string()
    .min(15, "GST Number must be 15 characters")
    .max(15, "GST Number must be 15 characters"),

  projectsCompleted: z.coerce.number().min(1, "Projects count is required"),

  location: z.string().min(2, "Location is required"),

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
