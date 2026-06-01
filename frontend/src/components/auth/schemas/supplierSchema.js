import { z } from "zod";

export const supplierSchema = z
  .object({
    ownerName: z.string().min(3),

    businessName: z.string().min(3),

    email: z.email(),

    mobileNumber: z
      .string()
      .regex(/^[6-9]\d{9}$/),

    gstNumber: z.string(),

    deliveryRadius: z.coerce.number(),

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