import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async (paylod: TAcademicFaculty) => {
    const result = AcademicFaculty.create(paylod)
    // console.log(result)
    return result
}
const getAllAcademicFacultiesFromDB = async () => {
    const result = await AcademicFaculty.find()
    return result;
}
const getSingleAcademicFacultyFromDB = async (id: string) => {
    const result = await AcademicFaculty.findById(id)
    return result
}
const updateAcademicFacultyFromDB = async (id: string, payload: Partial<TAcademicFaculty>) => {
    const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    })
    return result
}
export const AcademicFacultyService = {
    createAcademicFacultyIntoDB, getAllAcademicFacultiesFromDB, getSingleAcademicFacultyFromDB, updateAcademicFacultyFromDB
}