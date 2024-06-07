import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.createAcademicFacultyIntoDB(
        req.body
    )
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty is created successfully",
        data: result
    })
})
const getAllAcademicFaculties = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.getAllAcademicFacultiesFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty get all",
        data: result
    })
})
const getSingleAcademicFacultie = catchAsync(async (req, res) => {
    const { facultyID } = req.body;
    const result = await AcademicFacultyService.getSingleAcademicFacultyFromDB(facultyID)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single Academic Faculty find Successfully",
        data: result
    })
})
const updateAcademicFacultie = catchAsync(async (req, res) => {
    const { facultyID } = req.params;
    const result = await AcademicFacultyService.updateAcademicFacultyFromDB(facultyID, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty Update successfully",
        data: result
    })
})
export const AcademicFacultyController = {
    createAcademicFaculty, getAllAcademicFaculties,
    getSingleAcademicFacultie, updateAcademicFacultie
}