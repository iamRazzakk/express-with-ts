import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../AppError/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';
import { TStudent } from './student.interface';

const getAllStudentsFromDB = async () => {
  const result = await Student.find().populate("admissionSemester").populate({
    path: "academicDepartment",
    populate: {
      path: "academicFaculty"
    }
  });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id }).populate("admissionSemester").populate({
    path: "academicDepartment",
    populate: {
      path: "academicFaculty"
    }
  });
  return result;
};
const UpdateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const result = await Student.findOneAndUpdate({ id }, payload)
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession()
  try {
    const deletedStudent = await Student.findOneAndUpdate({ id },
      { isDeleted: true },
      { new: true, session });
    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Field to delete student")
    }
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }
    await session.commitTransaction()
    await session.endSession()

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
  }

};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  UpdateStudentFromDB,
  deleteStudentFromDB,
};
