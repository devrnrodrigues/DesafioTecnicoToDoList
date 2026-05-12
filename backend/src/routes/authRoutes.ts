import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router();
const authController = new AuthController();

router.post("/register", (req, res) => authController.register(req, res));
router.post("/login", (req, res) => authController.login(req, res));
router.get("/profile", authMiddleware, (req, res) => {
  return res.json({
    message: "Você está autenticado!",
    userId: (req as any).userId,
  });
});

export default router;