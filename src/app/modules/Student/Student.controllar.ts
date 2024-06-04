import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentService } from './Student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { promise } from 'zod';
import catchAsync from '../../utils/catchAsync';


const getStudent = catchAsync(async (req, res) => {

  const result = await StudentService.getAllStudent();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user create successfully",
    data: result,
  })
});
const getStudentOne: RequestHandler = catchAsync(async (req, res, next) => {
  const { studentID } = req.params;
  const result = await StudentService.getOneStudent(studentID);
  res.status(200).json({
    success: true,
    message: 'Student is retrived successfully',
    data: result,
  });
});
export const studentControllar = {
  getStudent,
  getStudentOne,
};
