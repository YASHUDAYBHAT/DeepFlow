import express from "express";
import { getalltasks,createalltasks,updatealltasks,deletealltasks,gettasksbyid } from "../controllers/task.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()


router.get("/", protectRoute, getalltasks);
router.post("/", protectRoute, createalltasks);
router.put("/:id", protectRoute, updatealltasks);
router.delete("/:id", protectRoute, deletealltasks);
router.get("/:id", protectRoute, gettasksbyid);

export default router;