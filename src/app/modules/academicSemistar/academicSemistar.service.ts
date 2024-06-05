import { academicSemisterModel } from "./academicSemistar.model";
import { TAcademicSemester } from "./academicSemister.interface";

const createAcademicSemistarIntoDB = async (payload: TAcademicSemester) => {
    const result = await academicSemisterModel.create(payload)
    return result;
}
export const AcademicSemisterServices = {
    createAcademicSemistarIntoDB
}