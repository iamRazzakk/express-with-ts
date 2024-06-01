import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        console.log("hello concole")
        const { password, student: studentData } = req.body;
        const result = await userServices.createStudentIntoDB(password, studentData)
        res.status(200).json({
            success: true,
            message: "user create successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Faild to create user"
        })
    }
}
export const userController = {
    createUser
}