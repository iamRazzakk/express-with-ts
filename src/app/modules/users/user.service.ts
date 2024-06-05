import { academicSemisterModel } from './../academicSemistar/academicSemistar.model';

import config from "../../config";
import { student } from "../Student/Student.interface";
import { studentModel } from "../Student/Student.model";
import { academicSemisterModel } from "../academicSemistar/academicSemistar.model";
import { TAcademicSemester } from "../academicSemistar/academicSemister.interface";
import { TUser } from "./users.interface";
import { User } from "./users.model";

const createStudentIntoDB = async (password: string, payload: student) => {
    // create a user object
    const userData: Partial<TUser> = {}


    userData.password = password || (config.default_password as string)

    // set student role
    userData.role = "student"


    // se t genareted id
    const genaratedStudentId = (payload: TAcademicSemester) => {
    }
    const admittionSemister = await academicSemisterModel.findById(payload.admittionSemister)


    userData.id = genaratedStudentId(admittionSemister)
    // create a userData model

    // set student role
    const newUser = await User.create(userData);
    // create a student
    if (Object.keys(newUser).length) {
        payload.id = newUser.id;
        payload.user = newUser._id

        const newStudent = await studentModel.create(payload)
        return newStudent
    }
    return newUser;
};
export const userServices = {
    createStudentIntoDB
}