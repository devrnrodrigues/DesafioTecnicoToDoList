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

      return res.status(201).json({
        sucesso: true,
        mensagem: "Tarefa criada com sucesso!",
        tarefa: task,
      });

    } catch (err: any) {

      return res.status(400).json({
        sucesso: false,
        mensagem: err.message,
      });
    }
  }

  async getAll(req: AuthRequest, res: Response) {

    try {

      const tasks = await taskService.getAllTasks(
        req.userId!
      );

      return res.status(200).json({
        sucesso: true,
        tarefas: tasks,
      });

    } catch (err: any) {

      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao buscar tarefas",
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

      return res.status(200).json({
        sucesso: true,
        tarefa: task,
      });

    } catch (err: any) {

      return res.status(404).json({
        sucesso: false,
        mensagem: err.message,
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

      return res.status(200).json({
        sucesso: true,
        mensagem: "Tarefa atualizada com sucesso!",
        tarefa: updatedTask,
      });

    } catch (err: any) {

      return res.status(404).json({
        sucesso: false,
        mensagem: err.message,
      });
    }
  }

  async delete(req: AuthRequest, res: Response) {

    try {

      const id = req.params.id as string;

      await taskService.deleteTask(
        id,
        req.userId!
      );

      return res.status(200).json({
        sucesso: true,
        mensagem: "Tarefa removida com sucesso!",
      });

    } catch (err: any) {

      return res.status(404).json({
        sucesso: false,
        mensagem: err.message,
      });
    }
  }
}