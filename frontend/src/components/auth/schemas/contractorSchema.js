import { z } from "zod";

export const contractorSchema = z
  .object({
    fullName: z.string().min(3),

    email: z.email(),

    mobileNumber: z
      .string()
      .regex(/^[6-9]\d{9}$/),

    companyName: z.string().min(2),

    experience: z.coerce.number().min(1),

    contractorType: z.string(),

    gstNumber: z.string().optional(),

    licenseNumber: z.string().optional(),

    password: z.string().min(8),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );