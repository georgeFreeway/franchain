import * as z from 'zod';

export const registerSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    businessName: z.string().min(1, { message: "Business name is required" }),
    email: z.string().email({ message: "A valid email address is required " }),
    password: z.string().min(1, { message: "Password must be atleast 12 characters" }),
});

export const loginSchema = z.object({
    email: z.string().email({ message: "Your email address is required " }),
    password: z.string().min(1, { message: "Password is required" }),
});