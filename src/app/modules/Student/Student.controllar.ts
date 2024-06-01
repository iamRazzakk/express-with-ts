import { NextFunction, Request, Response } from 'express';
import { StudentService } from './Student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getAllStudent();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "user create successfully",
      data: result,
    })
  } catch (error) {
    next()
  }
};
const getStudentOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getOneStudent(studentID);
    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error) {
    // res.status(400).json({
    //   success: false,
    //   message: 'Something is wrong',
    //   eroor: error,
    // });
    next(error)
  }
};
export const studentControllar = {
  // createStudent,
  getStudent,
  getStudentOne,
};
