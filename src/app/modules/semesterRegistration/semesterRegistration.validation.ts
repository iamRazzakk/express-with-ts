import { z } from "zod";
import { SemesterRegistrationStatus } from "./semesterRegistration.constance";

// semesterRegistrationSchema
const createSemesterRegistrationValidationSchema = z.object({
    body: z.object({
        academicSemester: z.string(),
        status: z.enum([...SemesterRegistrationStatus as [string, ...string[]]]),
        startDate: z.string().datetime(),
        endDate: z.string().datetime(),
        minCredit: z.number(),
        maxCredit: z.number()
    })
})
export const semesterRegistrationValidationSchema = { createSemesterRegistrationValidationSchema }