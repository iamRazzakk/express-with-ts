import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    needPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ["admin", "student", "faculty"],
        require: true
    },
    status: {
        type: String,
        enum: ["in-progress", "blocked"],
        require: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
},)
export const User = model<TUser>("User", userSchema)