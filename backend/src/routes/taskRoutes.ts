import { Router } from "express";

import { TaskController } from "../controllers/TaskController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { validate } from "../middlewares/validate";

import {
  createTaskSchema,
  updateTaskSchema,
} from "../schemas/taskSchema";

const router = Router();

const taskController = new TaskController();

router.post(
  "/",
  authMiddleware,
  validate(createTaskSchema),
  (req, res) => taskController.create(req, res)
);

router.get(
  "/",
  authMiddleware,
  (req, res) => taskController.getAll(req, res)
);

router.get(
  "/:id",
  authMiddleware,
  (req, res) => taskController.getById(req, res)
);

router.put(
  "/:id",
  authMiddleware,
  validate(updateTaskSchema),
  (req, res) => taskController.update(req, res)
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => taskController.delete(req, res)
);

export default router;