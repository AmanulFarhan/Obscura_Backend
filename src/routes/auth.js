import { Router } from "express";
import authController from "../controllers/authController.js";

const { Signup, Login } = authController;

const router = Router();

router.post("/signup", Signup);

router.post("/login", Login);

export default router;