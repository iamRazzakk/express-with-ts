import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';
const router = express.Router();
// create academic faculty
router.post('/create-academic-faculty', validateRequest(AcademicFacultyValidation.createAcademicFacultyValidationSchema), AcademicFacultyController.createAcademicFaculty)
// get single one faclty id

router.get('/:facultyID', AcademicFacultyController.getSingleAcademicFacultie)


// get all faclty i mean strund
router.get("/", AcademicFacultyController.getAllAcademicFaculties)


router.patch('/:facultyID', validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema), AcademicFacultyController.updateAcademicFacultie)
export const AcademicFacultyRoutes = router;