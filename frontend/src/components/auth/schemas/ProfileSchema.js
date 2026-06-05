import z from "zod";

const profileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, "First Name must be at least 3 characters")
    .regex(/^[A-Za-z ]+$/, "Only letters are allowed"),

  lastName: z
    .string()
    .trim()
    .min(1, "Last Name is required")
    .regex(/^[A-Za-z ]+$/, "Only letters are allowed"),

  // mobileNumber: z
  //   .string()
  //   .regex(
  //     /^[6-9]\d{9}$/,
  //     "Mobile Number must be 10 digits"
  //   ),

  email: z
    .string()
    .email("Enter a valid email address"),

  address: z
    .string()
    .trim()
    .min(10, "Address must be at least 10 characters"),

  pincode: z
    .string()
    .regex(/^[1-9][0-9]{5}$/, "Enter valid pincode"),

  state: z.string().min(1, "State is required"),

  city: z.string().min(1, "City is required"),

  gender: z.string().min(1, "Select gender"),

  dob: z.string().min(1, "Date of Birth is required"),

  propertyType: z.string().min(1, "Select property type"),

  projectType: z.string().min(1, "Select project type"),
});
export { profileSchema };