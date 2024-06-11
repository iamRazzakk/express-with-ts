import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../Error/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';
import { TStudent } from './student.interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student.constance';

const getAllStudentsFromDB = async (
  query: Record<string, unknown>
) => {
  // const queryObj = { ...query };


  // let searchTerm = "";
  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }

  // const searchQuery = Student.find({
  //   $or: studentSearchableFields.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' }
  //   }))
  // });

  // filtering
  // const excludesFields = ["searchTerm", "sort", "limit", "page", "field"];
  // excludesFields.forEach(el => delete queryObj[el]);

  // const filterQuery = searchQuery.find(queryObj)
  //   .populate("admissionSemester")
  //   .populate({
  //     path: "academicDepartment",
  //     populate: {
  //       path: "academicFaculty"
  //     }
  //   });

  // let sort = '-createdAt';
  // if (query.sort) {
  //   sort = query.sort as string;
  // }

  // const sortQuery = filterQuery.sort(sort);
  // let page = 1;
  // let limit = 1;
  // let skip = 0;

  // if (query.limit) {
  //   limit = Number(query.limit);
  // }


  // if (query.page) {
  //   page = Number(query.page)
  //   skip = (page - 1) * limit
  // }
  // const paginamteQuery = sortQuery.skip(skip)

  // const limitQuery = paginamteQuery.limit(limit);

  // let field = "-__v"
  // if (query.field) {
  //   field = (query.field as string).split(",").join(" ")
  // }

  // const fieldQuery = await limitQuery.select(field)

  // return await fieldQuery;

  const studentQuery = new QueryBuilder(Student.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty"
      }
    }), query)
    .search(studentSearchableFields)
    .fielter()
    .sort()
    .paginate()
    .fields()
  const result = await studentQuery.modelQuery
  return result
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty"
      }
    });
  return result;
};

const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdateData: Record<string, unknown> = { ...remainingStudentData };
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

  const result = await Student.findOneAndUpdate(
    { id },
    modifiedUpdateData,
    { new: true, runValidators: true }
  );
  return result;
}

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student");
    }
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }
    await session.commitTransaction();
    session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student");
  }
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteStudentFromDB,
};
