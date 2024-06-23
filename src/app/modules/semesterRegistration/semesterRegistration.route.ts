import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { semesterRegistrationValidationSchema } from './semesterRegistration.validation';
import { SemesterRegistrationController } from './semesterRegistration.controller';
const router = express.Router();
router.post(
    '/create-semester-registration',
    validateRequest(
        semesterRegistrationValidationSchema.createSemesterRegistrationValidationSchema,
    ),
    SemesterRegistrationController.createSemesterRegistration,
);