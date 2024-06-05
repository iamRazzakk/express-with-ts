import { AcademicSemisterServices } from './academicSemistar.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';

const createAcademicSemistarControllar = catchAsync(async (req, res) => {
    const result = await academicSemistarController.AcademicSemisterServices.createAcademicSemistarIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Accademic semistar create successfully",
        data: result
    })
})
export const academicSemistarController = {
    createAcademicSemistarControllar

}