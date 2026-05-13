import { Response } from "express";
import { TaskService } from "../services/TaskService";
import { AuthRequest } from "../middlewares/authMiddleware";

const taskService = new TaskService();

export class TaskController {

  async create(req: AuthRequest, res: Response) {
    try {
      const { title, description, completed } = req.body;

      const task = await taskService.createTask(
        title,
        description,
        completed,
        req.userId!
      );

      return res.status(201).json(task);

    } catch (err: any) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  async getAll(req: AuthRequest, res: Response) {
    try {

      const tasks = await taskService.getAllTasks(req.userId!);

      return res.json(tasks);

    } catch (err: any) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  async getById(req: AuthRequest, res: Response) {
    try {

      const id = req.params.id as string;

      const task = await taskService.getTaskById(
        id,
        req.userId!
      );

      return res.json(task);

    } catch (err: any) {
      return res.status(404).json({
        message: err.message,
      });
    }
  }

  async update(req: AuthRequest, res: Response) {
    try {

      const id = req.params.id as string;

      const { title, description, completed } = req.body;

      const updatedTask = await taskService.updateTask(
        id,
        req.userId!,
        {
          title,
          description,
          completed,
        }
      );

      return res.json(updatedTask);

    } catch (err: any) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  async delete(req: AuthRequest, res: Response) {
    try {

      const id = req.params.id as string;

      const result = await taskService.deleteTask(
        id,
        req.userId!
      );

      return res.json(result);

    } catch (err: any) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
}