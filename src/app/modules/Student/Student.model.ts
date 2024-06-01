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
    dateOfBirth: { type: String },
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
// create model
export const studentModel = model<student>('studentModel', studentSchema);
