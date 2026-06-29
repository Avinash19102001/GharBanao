import { z } from "zod";

export const contractorCompleteProfileSchema = z.object({
  // STEP 1
  fullName: z.string().min(3, "Full Name is required"),

  email: z.string().email("Enter a valid email address"),

  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid phone number"),

  pincode: z.string().regex(/^[1-9][0-9]{5}$/, "Enter valid pincode"),

  address: z.string().min(10, "Address must be at least 10 characters"),

  profileImage: z.any().optional(),

  // STEP 2
  companyLogo: z.any().optional(),

  companyName: z.string().min(2, "Company name is required"),

  yearsOfExperience: z.coerce
    .number()
    .min(0, "Experience cannot be negative")
    .max(60, "Invalid experience"),

  licenseNumber: z.string().min(1, "License Number is required"),

  gstNumber: z.string().length(15, "GST Number must be 15 characters"),

  panNumber: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number"),

  website: z.string().optional(),

  businessType: z.string().min(1, "Business Type is required"),

  registrationYear: z.string().min(4, "Registration Year is required"),

  teamSize: z.string().min(1, "Team Size is required"),

  about: z.string().min(50, "Please write at least 50 characters"),

  // STEP 3
  services: z.array(z.string()).min(1, "Select at least one service"),

  equipment: z.array(z.string()).optional(),

  serviceLocations: z
    .array(z.string())
    .min(1, "Add at least one service location")
    .max(3, "Maximum 3 locations allowed"),

  // STEP 4
  commercialInsurance: z.boolean().optional(),
  certificate: z.any().optional(),
  license: z.any().optional(),
  workImages: z.any().optional(),
  aadhaarNumber: z.string().optional(),
});
