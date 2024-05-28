import { z } from "zod";

const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().max(12, { message: "Password can't more than 20 carecter" }),
    needPasswordChange: z.boolean().optional(),
    role: z.enum(["admin", "student", "faculty"]),
    status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    isDeleted: z.boolean().optional().default(false)
})
export const userZodSchema = {
    userValidationSchema
}