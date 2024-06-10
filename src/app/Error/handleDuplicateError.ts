
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleDuplicateError = (err): TGenericErrorResponse => {
    const match = err.message.match(/"([^"]*)"/)
    const extrectedMessage = match && match[1]

    const errorSources: TErrorSources = [{
        path: "",
        message: `${extrectedMessage} is already exist`

    }]

    const statusCode = 400
    return {
        statusCode,
        message: "validation Error",
        errorSources
    }
}