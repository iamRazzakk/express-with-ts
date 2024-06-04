import express, { NextFunction, Request, RequestHandler, Response } from "express"
import { userController } from "./users.controller";

const router = express.Router()



router.post('/create-student', userController.createUser)
export const userRouter = router;