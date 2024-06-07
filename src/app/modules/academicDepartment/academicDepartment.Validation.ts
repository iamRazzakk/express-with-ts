import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic Department must be string",
            required_error: "Name is required"
        }),
        academicFecalty: z.string({
            invalid_type_error: "Academic Faculty mys be string",
            required_error: "Academic Faculty is requerd"
        })
    })
})
const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic Department must be string",
            required_error: "Academic Department must be required"
        }).optional(),
        academicFecalty: z.string({
            invalid_type_error: "Academic faculty must be string",
            required_error: "Academic Faculty is requerd"
        })

    })
})

export const academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
}