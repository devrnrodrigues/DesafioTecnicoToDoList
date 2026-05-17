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
        return response.data.tarefas.map((t: any) => ({
          id: String(t.id),
          title: t.title,
          description: t.description || '',
          completed: t.completed,
          createdAt: t.createdAt || t.created_at || new Date().toISOString()
        }));
      } catch (error) {
        console.error('Erro ao buscar tarefas do servidor', error);
        return [];
      }
    } else {
      return getLocalTasks().map(t => ({ ...t, id: String(t.id) }));
    }
  },

  async create(title: string, description: string): Promise<Task> {
    if (hasToken()) {
      try {
        const response = await api.post<TaskResponse>('/tasks', {
          title,
          description
        });
        const t = response.data.tarefa as any;
        return {
          id: String(t.id),
          title: t.title,
          description: t.description || '',
          completed: t.completed,
          createdAt: t.createdAt || t.created_at || new Date().toISOString()
        };
      } catch (error) {
        console.error('Erro ao criar tarefa no servidor', error);
        throw error;
      }
    } else {
      const localTasks = getLocalTasks();
      const newTask: Task = {
        id: String(Date.now()),
        title,
        description: description,
        completed: false,
        createdAt: new Date().toISOString()
      };
      localTasks.unshift(newTask);
      saveLocalTasks(localTasks);
      return newTask;
    }
  },

  async update(id: string | number, data: { title?: string; description?: string; completed?: boolean }): Promise<Task | null> {
    const idString = String(id);

    if (hasToken()) {
      try {
        const response = await api.put<TaskResponse>(`/tasks/${idString}`, data);
        const t = response.data.tarefa as any;
        return {
          id: String(t.id),
          title: t.title,
          description: t.description || '',
          completed: t.completed,
          createdAt: t.createdAt || t.created_at || new Date().toISOString()
        };
      } catch (error) {
        console.error('Erro ao atualizar tarefa no servidor', error);
        throw error;
      }
    } else {
      const localTasks = getLocalTasks();
      let updatedTask: Task | null = null;
      
      const updatedList = localTasks.map(t => {
        if (String(t.id) === idString) {
          updatedTask = { ...t, ...data, id: idString };
          return updatedTask;
        }
        return t;
      });
      
      saveLocalTasks(updatedList);
      return updatedTask;
    }
  },

  async delete(id: string | number): Promise<void> {
    const idString = String(id);

    if (hasToken()) {
      try {
        await api.delete(`/tasks/${idString}`);
      } catch (error) {
        console.error('Erro ao deletar tarefa no servidor', error);
        throw error;
      }
    } else {
      const localTasks = getLocalTasks();
      const filtered = localTasks.filter(t => String(t.id) !== idString);
      saveLocalTasks(filtered);
    }
  }
};