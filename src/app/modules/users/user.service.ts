
import config from "../../config";
import { student } from "../Student/Student.interface";
import { NewUser } from "./users.interface";
import { User } from "./users.model";

const createStudentIntoDB = async (password: string, studentData: student) => {
    // create a user object
    const user: NewUser = {}


    user.password = password || (config.default_password as string)

    // set student role
    user.role = "student"

    // set genareted id

    user.id = "2024100001"
    // create a user model

    // set student role
    const result = await User.create(user);
    if (Object.keys(result).length) {
        studentData.id = result.id;
        studentData.user = result._id
    }
    return result;
};
export const userService = {
    createStudentIntoDB
}