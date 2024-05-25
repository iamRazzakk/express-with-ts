// create model

import { Schema, model } from 'mongoose';
import {
    Guardian,
    LocalGuardina,
    student,
    userName,
} from './Student.interface';
const userNameSchema = new Schema<userName>({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
});
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
    name: {
        type: userNameSchema,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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
    isActive: {
        type: String,
        enum: ['active', 'blocked'],
        default: "active"
    },
});
// create model
export const studentModel = model<student>('studentModel', studentSchema);
