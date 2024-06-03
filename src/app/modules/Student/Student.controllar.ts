import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentService } from './Student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { promise } from 'zod';


const catchAsync = (fn: RequestHandler) => {
  console.log(fn)
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(error => next(error));
  }
}

const getStudent: RequestHandler = catchAsync(async (req, res, next) => {

  const result = await StudentService.getAllStudent();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user create successfully",
    data: result,
  })
});
const getStudentOne: RequestHandler = async (req, res, next) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getOneStudent(studentID);
    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};
export const studentControllar = {
  getStudent,
  getStudentOne,
};
