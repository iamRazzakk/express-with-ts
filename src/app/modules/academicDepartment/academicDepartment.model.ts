import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepeartment.interface";


const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: { type: String, required: true },
    academicFaculty: { type: Schema.ObjectId, ref: "AcademicFaculty" }

})
export const AcademicDepartment = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema)