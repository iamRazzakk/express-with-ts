import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("hello concole")
        const { password, student: studentData } = req.body;
        const result = await userServices.createStudentIntoDB(password, studentData)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "user create successfully",
            data: result,
        })
    } catch (error) {
        next()
    }
}
export const userController = {
    createUser
}