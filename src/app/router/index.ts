import { Router } from "express";
import { studentRoutes } from "../modules/Student/Student.route";
import { userRouter } from "../modules/users/users.route";
import { AcademicSemistarRoute } from "../modules/academicSemistar/academicSemistar.route";
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
    {
        path: "/academic-semesters",
        router: AcademicSemistarRoute
    },
]

modiulRouter.forEach(router => mainRouter.use(router.path, router.router))
// (router.path, router.router)

export default mainRouter