import { Router } from "express";
import { getBuses } from "../controllers/adminController.js";

const router = Router();

router.get("/getAllBuses", getBuses);

export default router;