import express from "express";
import { getalltasks,createalltasks,updatealltasks,deletealltasks,gettasksbyid } from "../controllers/task.controllers.js";

const router = express.Router()


router.get("/", getalltasks);
router.post("/",createalltasks);
router.put("/:id",updatealltasks);
router.delete("/:id",deletealltasks);
router.get("/:id",gettasksbyid);

export default router;