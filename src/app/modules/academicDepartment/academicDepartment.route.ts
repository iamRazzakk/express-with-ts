import express from "express"
import { academicDepartmentValidation } from "./academicDepartment.Validation"
import { AcademicDepartmentControllers } from "./academicDepartment.controller"
import validateRequest from "../../middlewares/validateRequest"
const router = express.Router()
// for create academic Department
router.post('/create-academic-departments', validateRequest(academicDepartmentValidation.createAcademicDepartmentValidationSchema), AcademicDepartmentControllers.createAcademicDepartment)

// for get single one
router.get('/:departmentId', AcademicDepartmentControllers.getSingleAcademicDepartment)

// get all department
router.get("/", AcademicDepartmentControllers.getAllAcademicDepartment)

// update academic department
router.patch("/:departmentId", validateRequest(academicDepartmentValidation.updateAcademicDepartmentValidationSchema), AcademicDepartmentControllers.updateAcademicDepartment)

export const AcademicDepartmentRoutes = router