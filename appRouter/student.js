import express from "express";
const router = express.Router();
import {
  allStudent,
  createStuent,
  updateStudent,
  deleteStudent,
} from "../controller/student-controller.js";
router.get("/roll/:id", allStudent);
router.post("/createStudent", createStuent);
router.put("/put", updateStudent);
router.delete("/delete", deleteStudent);
export default router;
