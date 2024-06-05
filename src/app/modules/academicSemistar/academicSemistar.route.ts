import express from "express";
import { academicSemistarController } from "./academicSemistar.controllar";
const router = express.Router()
router.post("/create-academic-semistar", academicSemistarController.createAcademicSemistarControllar)

export const AcademicSemistarRoute = router