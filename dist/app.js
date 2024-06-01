"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const Student_route_1 = require("./app/modules/Student/Student.route");
const users_route_1 = require("./app/modules/users/users.route");
const globalErrorHandelar_1 = __importDefault(require("./app/modules/middlewares/globalErrorHandelar"));
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application route
app.use('/api/v1/students', Student_route_1.studentRoutes);
// user route
app.use("/api/v1/users", users_route_1.userRouter);
const getAControlar = (req, res) => {
    res.send('hello world');
};
app.get('/', getAControlar);
// console.log(process.cwd());
app.use(globalErrorHandelar_1.default);
exports.default = app;
