import { Schema, model, connect } from 'mongoose';
import { student } from './Student.interface';
const studentSchema = new Schema<student>({
    id: { type: String },
    name: {
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
        }
    },
    gender: ["male", "female"],
    email: {
        type: String,
        required: true
    },
    dateOfBirth: { type: String },
    contactNumber: {
        type: String,
        required: true
    },
    emergencyContactNumber: {
        type: String,
        required: true
    },
    BloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    presentAdress: {
        type: String,
        required: true
    },
    parmanentAdress: {
        type: String,
        required: true
    },
    guardian: {
        fatherName: {
            type: String,
            required: true
        },
        fatherOccuption: {
            type: String,
            required: true
        },
        fatherContactNumber: {
            type: String,
            required: true
        },
        motherName: {
            type: String,
            required: true
        },
        motherOccupation: {
            type: String,
            required: true
        },
        montherNumber: {
            type: String,
            required: true
        },
    },
    localGuardian: {
        name: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
    },
    profileImage: { type: String },
    isActive: ["active", "blocked"]
})