// import { Schema, model, connect } from 'mongoose';

// create interface or type
export type student = {
    id: string;
    name: userName;
    gender: "male" | "female";
    email: string;
    dateOfBirth: string;
    contactNumber: string;
    emergencyContactNumber: string;
    BloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAdress: string;
    parmanentAdress: string;
    guardian: Guardian;
    localGuardian: LocalGuardina;
    profileImage?: string;
    isActive: "active" | "blocked";
}
export type Guardian = {
    fatherName: string;
    fatherOccuption: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    montherNumber: string
}
export type userName = {
    firstName: string;
    middleName: string;
    lastName: string;
}
export type LocalGuardina = {
    name: string;
    occupation: string;
    contactNumber: string;
    address: string
}
