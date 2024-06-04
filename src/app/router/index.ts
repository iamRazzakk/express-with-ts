import { Router } from "express";
import { studentRoutes } from "../modules/Student/Student.route";
import { userRouter } from "../modules/users/users.route";
const mainRouter = Router()
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

modiulRouter.forEach(router => mainRouter.use(router.path, router.router))
// (router.path, router.router)

export default mainRouter