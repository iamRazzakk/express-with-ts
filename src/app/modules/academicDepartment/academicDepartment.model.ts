import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepeartment.interface";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";




const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: { type: String, required: true },
    academicFaculty: { type: Schema.ObjectId, ref: "AcademicFaculty" }

})
academicDepartmentSchema.pre("save", async function (next) {
    const isDepartmentExist = await AcademicDepartment.findOne({
        name: this.name,
    })
    if (isDepartmentExist) {
        throw new AppError(httpStatus.NOT_FOUND, "This Department allready Exist")
    }
    next()
})
export const AcademicDepartment = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema)