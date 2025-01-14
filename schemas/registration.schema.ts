import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(3, "Name should be atleast 3 characters long")
    .max(50, "Name should be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  branch: z.enum([
    "Computer",
    "AIDS",
    "IT",
    "CSD",
    "Mechanical",
    "Chemical",
    "Electrical",
    "Civil",
    "E&TC",
    "Robotics & Automation",
  ]),
  division: z.enum(["A", "B"]),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be exactly 10 digits",
  }),
});

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;
