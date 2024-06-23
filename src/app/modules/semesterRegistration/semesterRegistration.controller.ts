import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { semesterRegistrationService } from "./semesterRegistration.service";

const createSemesterRegistration = catchAsync(
    async (req: Request, res: Response) => {
        const result = await semesterRegistrationService.createSemesterRegistrationIntoDB(req.body)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Faculty is deleted succesfully',
            data: result,
        });
    }
)
export const SemesterRegistrationController = {
    createSemesterRegistration
}