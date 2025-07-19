import { Router } from "express";
import userController from "../controllers/userController.js";

const { Profile } = userController;

const router = Router();

router.get("/profile", Profile);

export default router;