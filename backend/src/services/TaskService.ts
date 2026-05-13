import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

  async getTaskById(id: string, userId: string) {
    const task = await prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!task) {
      throw new Error("Task not found");
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
      throw new Error("Task not found");
    }

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data,
    });

    return updatedTask;
  }

  async deleteTask(id: string, userId: string) {
    const taskExists = await prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!taskExists) {
      throw new Error("Task not found");
    }

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return {
      message: "Task deleted successfully",
    };
  }
}