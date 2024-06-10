import { ZodError } from "zod"
import { TErrorSources, TGenericErrorResponse } from "../interface/error"

export const handleError = (err: ZodError): TGenericErrorResponse => {
    const errorSources: TErrorSources = err.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message
        }
        // const path = issue.path.length - 1;
        // return path
    })
    const statusCode = 400
    return {
        statusCode,
        message: "validation Error",
        errorSources
    }
}