import express, { Request, Response, } from 'express';
const globalErrorHandelar = (error: any, req: Request, res: Response) => {
    const statusCode = 500
    const message = error.message || "Something is wrong"
    return res.status(statusCode).json({
        success: false,
        message,
        error: error
    })
}
export default globalErrorHandelar