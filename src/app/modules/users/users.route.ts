import express from "express"
import { userController } from "./users.controller";

const router = express.Router()
router.post('/create-student', userController.createUser)
export const userRouter = router;