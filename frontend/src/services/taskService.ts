import { api } from './api';
import type { Task, TaskResponse, TasksListResponse } from '../types/task';

const LOCAL_STORAGE_KEY = '@TodoApp:local_tasks';

const getLocalTasks = (): Task[] => {
  const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!tasks) return [];
  try {
    return JSON.parse(tasks);
  } catch {
    return [];
  }
};

const saveLocalTasks = (tasks: Task[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

const hasToken = (): boolean => {
  return !!localStorage.getItem('@TodoApp:token');
};

export const taskService = {
  async getAll(): Promise<Task[]> {
    if (hasToken()) {
      try {
        const response = await api.get<TasksListResponse>('/tasks');
        return response.data.tarefas.map(t => ({
          id: t.id,
          title: t.title,
          description: t.description || '',
          completed: t.completed
        }));
      } catch (error) {
        console.error('Erro ao buscar tarefas do servidor', error);
        return [];
      }
    } else {
      return getLocalTasks();
    }
  },

  async create(title: string, description: string): Promise<Task> {
    if (hasToken()) {
      const response = await api.post<TaskResponse>('/tasks', {
        title,
        description
      });
      const t = response.data.tarefa;
      return {
        id: t.id,
        title: t.title,
        description: t.description || '',
        completed: t.completed
      };
    } else {
      const localTasks = getLocalTasks();
      const newTask: Task = {
        id: Date.now(),
        title,
        description: description,
        completed: false
      };
      localTasks.unshift(newTask);
      saveLocalTasks(localTasks);
      return newTask;
    }
  },

  async update(id: string | number, data: { title?: string; description?: string; completed?: boolean }): Promise<Task | null> {
    if (hasToken()) {
      const response = await api.put<TaskResponse>(`/tasks/${id}`, data);
      const t = response.data.tarefa;
      return {
        id: t.id,
        title: t.title,
        description: t.description || '',
        completed: t.completed
      };
    } else {
      const localTasks = getLocalTasks();
      let updatedTask: Task | null = null;
      const updatedList = localTasks.map(t => {
        if (t.id === id) {
          updatedTask = { ...t, ...data };
          return updatedTask;
        }
        return t;
      });
      saveLocalTasks(updatedList);
      return updatedTask;
    }
  },

  async delete(id: string | number): Promise<void> {
    if (hasToken()) {
      await api.delete(`/tasks/${id}`);
    } else {
      const localTasks = getLocalTasks();
      const filtered = localTasks.filter(t => t.id !== id);
      saveLocalTasks(filtered);
    }
  }
};