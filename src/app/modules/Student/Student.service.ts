import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../Error/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';
import { TStudent } from './student.interface';
import { string } from 'zod';

const getAllStudentsFromDB = async (
  query: Record<string, unknown>
) => {
  // {email: {}}
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }



  const result = await Student.find({
    $or: ['email', "name.firstName", "presentAddress"].map((field) => ({
      [field]: { $regex: searchTerm, $option: 'i' }
    }))
  }).populate("admissionSemester").populate({
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
  const { name, guardian, localGuardian, ...remainingStudentData } = payload

  const modifiedUpdateData: Record<string, unknown> = { ...remainingStudentData }
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdateData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdateData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id },
    modifiedUpdateData, { new: true, runValidators: true })
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
    throw new AppError(httpStatus.BAD_REQUEST, "Faieled to Delete student")
  }

};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  UpdateStudentFromDB,
  deleteStudentFromDB,
};