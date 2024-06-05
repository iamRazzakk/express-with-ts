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
    year: { type: String, required: true },
    code: { type: String, required: true },
    startMonth: { type: String, enum: months },
    endMonth: { type: String, enum: months }
})
academicSemistarSchema.pre("save", async function (next) {
    const isSemistarExist = await academicSemisterModel.findOne({
        year: this.year,
        name: this.name
    })
    if (isSemistarExist) {
        throw new Error("Semistar already exist")
    }
    next()
})


export const academicSemisterModel = model<TAcademicSemester>('accademicSemisters', academicSemistarSchema);