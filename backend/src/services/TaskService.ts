import { prisma } from "../lib/prisma";

import { AppError } from "../errors/AppError";

export class TaskService {

  async createTask(
    title: string,
    description: string | undefined,
    completed: boolean | undefined,
    userId: string
  ) {

    const task = await prisma.task.create({
      data: {
        title,
        description,
        completed,
        userId,
      },
    });

    return task;
  }

  async getAllTasks(userId: string) {

    return await prisma.task.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getTaskById(
    id: string,
    userId: string
  ) {

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!task) {
      throw new AppError(
        "Tarefa não encontrada",
        404
      );
    }

    return task;
  }

  async updateTask(
    id: string,
    userId: string,
    data: {
      title?: string;
      description?: string;
      completed?: boolean;
    }
  ) {

    const taskExists = await prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!taskExists) {
      throw new AppError(
        "Tarefa não encontrada",
        404
      );
    }

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data,
    });

    return updatedTask;
  }

  async deleteTask(
    id: string,
    userId: string
  ) {

    const taskExists = await prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!taskExists) {
      throw new AppError(
        "Tarefa não encontrada",
        404
      );
    }

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return {
      message: "Tarefa deletada com sucesso",
    };
  }
}