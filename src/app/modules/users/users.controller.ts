import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const { password, student: studentData } = req.body;
        const result = await userService.createStudentIntoDB(password, studentData)
    } catch (error) {

    }
}