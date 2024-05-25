import { Request, Response } from "express";
import { StudentService } from "./Student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body;
        // we call service function to send this data
        const result = await StudentService.createStudentIntoDB(student)
        // send response
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}
export const studentControllar = {
    createStudent
}