import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string({ invalid_type_error: "Password my be string" }).max(12, { message: "Password can't more than 20 carecter" }).optional(),
    // status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    // isDeleted: z.boolean().optional().default(false)
})
export const userValidation = {
    userValidationSchema
}