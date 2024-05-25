import { Schema, model, connect } from 'mongoose';
export type Guardian = {
    fatherName: string;
    fatherOccuption: string;
    fatherContactNumber: number;
    motherName: string;
    motherOccupation: string;
    montherNumber: number
}
export type userName = {
    firstName: string;
    moddleName: string;
    lastName: string;
}
export type LocalGuardina = {
    name: string;
    occupation: string;
    contactNumber: string;
    address: string
}
export type student = {
    id: string;
    name: userName;
    gender: "male" | "female";
    email: string;
    dateOfBirth: string;
    contactNumber: string;
    emergencyContactNumber: number;
    BloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAdress: string;
    parmanentAdress: string;
    guardian: Guardian;
    localGuardian: LocalGuardina;
    profileImage?: string;
    isActive: "active" | "inActive";
}