import { Router } from "express";

import { AuthController } from "../controllers/AuthController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { validate } from "../middlewares/validate";

import {
  registerSchema,
  loginSchema,
} from "../schemas/authSchema";

const router = Router();

const authController = new AuthController();

router.post(
  "/register",
  validate(registerSchema),
  (req, res) => authController.register(req, res)
);

router.post(
  "/login",
  validate(loginSchema),
  (req, res) => authController.login(req, res)
);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    return res.json({
      mensagem: "Você está autenticado!",
      userId: (req as any).userId,
    });
  }
);

export default router;