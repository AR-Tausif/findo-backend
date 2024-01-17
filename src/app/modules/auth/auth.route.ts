import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/create-user", AuthController.createUser);
router.post("/user-login", AuthController.loginUser);
export const AuthRoute = router;
