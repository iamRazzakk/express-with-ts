
import config from "../../config";
import { student } from "../Student/Student.interface";
import { studentModel } from "../Student/Student.model";
import { TUser } from "./users.interface";
import { User } from "./users.model";

const createStudentIntoDB = async (password: string, studentData: student) => {
    // create a user object
    const userData: Partial<TUser> = {}


    userData.password = password || (config.default_password as string)

    // set student role
    userData.role = "student"

    // set genareted id

    userData.id = "2024100001"
    // create a userData model

    // set student role
    const newUser = await User.create(userData);
    // create a student
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id

        const newStudent = await studentModel.create(studentData)
        return newStudent
    }
    return newUser;
};
export const userServices = {
    createStudentIntoDB
}