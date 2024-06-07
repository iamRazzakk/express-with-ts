import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentService } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.createAcademicDepartmentIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department create successfully",
        data: result
    })
})

const getAllAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.getAllAcademicDepartmentIntoDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all Academic Department",
        data: result
    })
})
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.body;
    const result = await AcademicDepartmentService.getSingleAcademicDepatmentIntoDB(departmentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get single Academic Department",
        data: result
    })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDB(departmentId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department update successfully",
        data: result
    })
})

export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment
}