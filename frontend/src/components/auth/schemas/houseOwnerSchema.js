import { z } from "zod";

// export const houseOwnerSchema = z
//   .object({
//     fullName: z.string().min(3, "Full Name is required"),

//     email: z.email("Invalid Email"),

//     mobileNumber: z
//       .string()
//       .regex(/^[6-9]\d{9}$/, "Invalid Mobile Number"),

//     password: z
//       .string()
//       .min(8, "Password must be at least 8 characters"),

//     confirmPassword: z.string(),

//     propertyType: z.string().min(1, "Property Type is required"),

//     projectType: z.string().min(1, "Project Type is required"),

//     state: z.string().min(1, "State is required"),

//     city: z.string().min(1, "City is required"),

//     pincode: z
//       .string()
//       .regex(/^\d{6}$/, "Invalid Pincode"),

//     budget: z.string().min(1, "Budget is required"),
//   })
//   .refine(
//     (data) => data.password === data.confirmPassword,
//     {
//       path: ["confirmPassword"],
//       message: "Passwords do not match",
//     }
//   );

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
    //   .regex(
    //     /^[6-9]\d{9}$/,
    //     "Mobile number must start with 6-9 and contain exactly 10 digits",
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
