import { Request, Response } from 'express';
import { StudentService } from './Student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    console.log('Received data:', req.body);
    const { student: studentData } = req.body;
    // we call service function to send this data
    const result = await StudentService.createStudentIntoDB(studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create student',
    });
  }
};
const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudent();
    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getStudentOne = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getOneStudent(studentID);
    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentControllar = {
  createStudent,
  getStudent,
  getStudentOne,
};
