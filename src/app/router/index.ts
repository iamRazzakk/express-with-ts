import { Router } from "express";
import { studentRoutes } from "../modules/Student/Student.route";
import { userRouter } from "../modules/users/users.route";

const router = Router()
const modiulRouter = [
    {
        path: "/users",
        router: userRouter
    },
    {
        path: "/students",
        router: studentRoutes
    },
]

modiulRouter.forEach(router => (router.path, router.router))

export default router