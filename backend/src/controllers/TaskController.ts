import { Response } from "express";

import { TaskService } from "../services/TaskService";

import { AuthRequest } from "../middlewares/authMiddleware";

const taskService = new TaskService();

export class TaskController {

  async create(
    req: AuthRequest,
    res: Response
  ) {

    const {
      title,
      description,
      completed,
    } = req.body;

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
  }

  async getAll(
    req: AuthRequest,
    res: Response
  ) {

    const tasks = await taskService.getAllTasks(
      req.userId!
    );

    return res.status(200).json({
      sucesso: true,
      tarefas: tasks,
    });
  }

  async getById(
    req: AuthRequest,
    res: Response
  ) {

    const id = req.params.id as string;

    const task = await taskService.getTaskById(
      id,
      req.userId!
    );

    return res.status(200).json({
      sucesso: true,
      tarefa: task,
    });
  }

  async update(
    req: AuthRequest,
    res: Response
  ) {

    const id = req.params.id as string;

    const {
      title,
      description,
      completed,
    } = req.body;

    const updatedTask =
      await taskService.updateTask(
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
  }

  async delete(
    req: AuthRequest,
    res: Response
  ) {

    const id = req.params.id as string;

    await taskService.deleteTask(
      id,
      req.userId!
    );

    return res.status(200).json({
      sucesso: true,
      mensagem: "Tarefa removida com sucesso!",
    });
  }
}