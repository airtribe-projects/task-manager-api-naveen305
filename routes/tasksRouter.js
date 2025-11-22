import express from "express";
import { getTasks, getTask } from "../controllers/taskController.js"


const router = express.Router();


router.get("/", getTasks);
router.get("/:id", getTask);


export default router;