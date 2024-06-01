import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";
import config from "../../config";
import bcrypt from 'bcrypt';

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
        require: true,
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
},)


userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

export const User = model<TUser>("User", userSchema)