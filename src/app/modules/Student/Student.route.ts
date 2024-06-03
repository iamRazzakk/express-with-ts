import express from 'express';
import { studentControllar } from './Student.controllar';

const router = express.Router();

// we call controlar function
// router.post('/create-student', studentControllar.createStudent);
router.get('/', studentControllar.getStudent);
router.get('/:studentID', studentControllar.getStudentOne);

export const studentRoutes = router;