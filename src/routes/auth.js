import { Router } from "express";
import Signup from "../controllers/authController.js";

const router = Router();

router.post("/signup", Signup);

export default router;