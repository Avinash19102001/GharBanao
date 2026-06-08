import { z } from "zod";
const equipmentSchema = z
  .object({
    FullName: z
      .string()
      .min(3, "Name must be at least 3 characters"),
    email: z
      .string()
      .email("Enter a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    equipmentType: z
      .string()
      .min(1, "Please select an equipment type"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export default equipmentSchema;