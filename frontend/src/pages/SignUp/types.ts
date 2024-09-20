import { z } from "zod"; 

export type FormData = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    role: string;
  };

export const UserSchema = z
  .object({
    name: z.string().min(1, {message: "Please enter your name"}),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
    role: z.enum(["USER", "VENDOR"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});