import { Schema, model } from "mongoose";
import { TAcademicSemester, TMonth } from "./academicSemister.interface";

const months: TMonth[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const academicSemistarSchema = new Schema<TAcademicSemester>({
    name: { type: String, required: true },
    year: { type: Date, required: true },
    code: { type: String, required: true },
    startMonth: { type: String, enum: months },
    endMonth: { type: String, enum: months }
})

export const academicSemisterModel = model<TAcademicSemester>('accademicSemisters', academicSemistarSchema);