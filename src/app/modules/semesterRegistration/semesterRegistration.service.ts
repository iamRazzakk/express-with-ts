import httpStatus from "http-status"
import AppError from "../../errors/AppError"
import { AcademicSemester } from "../academicSemester/academicSemester.model"
import { TSemesterRegistration } from "./semesterRegistration.interface"
import { SemesterRegistration } from "./semesterRegistration.model"

const createSemesterRegistrationIntoDB = async (payload: TSemesterRegistration) => {
    const academicSemester = payload?.academicSemester
    const isSemesterRegistrationExist = await SemesterRegistration.findOne({ academicSemester })

    if (isSemesterRegistrationExist) {
        throw new AppError(httpStatus.CONFLICT, "This Semester all ready registerd")
    }
    // check if the semester isExistid
    const isAcademicSemesterIsExistid = await AcademicSemester.findById(academicSemester)


    if (!isAcademicSemesterIsExistid) {
        throw new AppError(httpStatus.NOT_FOUND, "This AcademicSemester not found")
    }
    const result = await SemesterRegistration.create(payload)
    return result;
}
export const semesterRegistrationService = {
    createSemesterRegistrationIntoDB
} 