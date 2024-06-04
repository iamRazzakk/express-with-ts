// create model

import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
    Guardian,
    LocalGuardina,
    student,
    userName,
} from './Student.interface';
const userNameSchema = new Schema<userName>({
    firstName: {
        type: String,
        trim: true,
        required: [true, "First name required"],
        maxlength: 20,
        validate: {
            validator: function (value: string) {
                // console.log(value)charAt(0).toUpperCase() + string.slice(1);
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
                return firstNameStr === value
            },
            message: "{VALUE} is not capitalize formet"
        }
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
        validate: (value: string) => {
            validator: validator.isAlpha(value)
            // onmessage: "{VALUE} is not valid";
        }
    },
})
const gardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: true,
    },
    fatherOccuption: {
        type: String,
        required: true,
    },
    fatherContactNumber: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    montherNumber: {
        type: String,
        required: true,
    },
});
const localGuardianSchema = new Schema<LocalGuardina>({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const studentSchema = new Schema<student>({
    id: { type: String, required: true, unique: true },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, "User Id is requird"],
        unique: true,
        ref: "User"
    },
    name: {
        type: userNameSchema,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                validator.isEmail(value)
            },
            message: "{VALUE} is not email type"
        }
    },
    dateOfBirth: { type: Date },
    contactNumber: {
        type: String,
        required: true,
    },
    emergencyContactNumber: {
        type: String,
        required: true,
    },
    BloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    presentAdress: {
        type: String,
        required: true,
    },
    parmanentAdress: {
        type: String,
        required: true,
    },
    guardian: {
        type: gardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImage: { type: String },
    // isActive: {
    //     type: String,
    //     enum: ['active', 'blocked'],
    //     default: "active"
    // },
});
// export const studentModel = model<student>('studentModel', studentSchema);


// import { Schema, model } from 'mongoose';
// import {
//     StudentModel,
//     TGuardian,
//     TLocalGuardian,
//     TStudent,
//     TUserName,
// } from './student.interface';

// const userNameSchema = new Schema<TUserName>({
//     firstName: {
//         type: String,
//         required: [true, 'First Name is required'],
//         trim: true,
//         maxlength: [20, 'Name can not be more than 20 characters'],
//     },
//     middleName: {
//         type: String,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         trim: true,
//         required: [true, 'Last Name is required'],
//         maxlength: [20, 'Name can not be more than 20 characters'],
//     },
// });

// const guardianSchema = new Schema<TGuardian>({
//     fatherName: {
//         type: String,
//         trim: true,
//         required: [true, 'Father Name is required'],
//     },
//     fatherOccupation: {
//         type: String,
//         trim: true,
//         required: [true, 'Father occupation is required'],
//     },
//     fatherContactNo: {
//         type: String,
//         required: [true, 'Father Contact No is required'],
//     },
//     motherName: {
//         type: String,
//         required: [true, 'Mother Name is required'],
//     },
//     motherOccupation: {
//         type: String,
//         required: [true, 'Mother occupation is required'],
//     },
//     motherContactNo: {
//         type: String,
//         required: [true, 'Mother Contact No is required'],
//     },
// });

// const localGuradianSchema = new Schema<TLocalGuardian>({
//     name: {
//         type: String,
//         required: [true, 'Name is required'],
//     },
//     occupation: {
//         type: String,
//         required: [true, 'Occupation is required'],
//     },
//     contactNo: {
//         type: String,
//         required: [true, 'Contact number is required'],
//     },
//     address: {
//         type: String,
//         required: [true, 'Address is required'],
//     },
// });

// const studentSchema = new Schema<TStudent, StudentModel>(
//   {
//     id: {
//       type: String,
//       required: [true, 'ID is required'],
//       unique: true,
//     },
//     user: {
//       type: Schema.Types.ObjectId,
//       required: [true, 'User id is required'],
//       unique: true,
//       ref: 'User',
//     },
//     name: {
//       type: userNameSchema,
//       required: [true, 'Name is required'],
//     },
//     gender: {
//       type: String,
//       enum: {
//         values: ['male', 'female', 'other'],
//         message: '{VALUE} is not a valid gender',
//       },
//       required: [true, 'Gender is required'],
//     },
//     dateOfBirth: { type: Date },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//     },
//     contactNo: { type: String, required: [true, 'Contact number is required'] },
//     emergencyContactNo: {
//       type: String,
//       required: [true, 'Emergency contact number is required'],
//     },
//     bloogGroup: {
//       type: String,
//       enum: {
//         values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//         message: '{VALUE} is not a valid blood group',
//       },
//     },
//     presentAddress: {
//       type: String,
//       required: [true, 'Present address is required'],
//     },
//     permanentAddress: {
//       type: String,
//       required: [true, 'Permanent address is required'],
//     },
//     guardian: {
//       type: guardianSchema,
//       required: [true, 'Guardian information is required'],
//     },
//     localGuardian: {
//       type: localGuradianSchema,
//       required: [true, 'Local guardian information is required'],
//     },
//     profileImg: { type: String },
//     admissionSemester: {
//       type: Schema.Types.ObjectId,
//       ref: 'AcademicSemester',
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// // virtual
// studentSchema.virtual('fullName').get(function () {
//   return this.name.firstName + this.name.middleName + this.name.lastName;
// });

// // Query Middleware
// studentSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// studentSchema.pre('findOne', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// studentSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

// //creating a custom static method
// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent, StudentModel>('Student', studentSchema);