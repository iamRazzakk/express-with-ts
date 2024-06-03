import { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createUser: RequestHandler = async (req, res, next) => {
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