import { academicSemisterModel } from "./academicSemistar.model";
import { TAcademicSemester, TacademicSemistarCodeNameMapper } from "./academicSemister.interface";

const createAcademicSemistarIntoDB = async (payload: TAcademicSemester) => {

    const academicSemistarCodeNameMapper: TacademicSemistarCodeNameMapper = {
        Autumn: "01",
        Summer: "02",
        Fall: "03"
    }
    if (academicSemistarCodeNameMapper[payload.name] !== payload.code) {
        throw new Error("invalide semister code")
    }

    const result = await academicSemisterModel.create(payload)
    return result;
}
export const AcademicSemisterServices = {
    createAcademicSemistarIntoDB
}