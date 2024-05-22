"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// parser
app.use(express_1.default.json());
app.use(cors_1.default);
app.get('/', (req, res) => {
    res.send('hello world');
});
console.log(process.cwd());
exports.default = app;
