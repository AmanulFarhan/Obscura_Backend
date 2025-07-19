import { Router } from "express";
import { addBus } from "../controllers/staffController.js";

const router = Router();

router.post("/bus", addBus);

export default router;