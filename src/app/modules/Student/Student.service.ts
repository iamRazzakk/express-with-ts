import { student } from "./Student.interface";
import { studentModel } from "./Student.model";

const createStudentIntoDB = async (Student: student) => {
    const result = await studentModel.create(Student)
    return result;
}
const getAllStudent = async () => {
    const result = await studentModel.find()
    return result;
}
const getOneStudent = async (id: string) => {
    const result = await studentModel.findOne({ id })
    return result;
}
export const StudentService = {
    createStudentIntoDB, getAllStudent, getOneStudent
}