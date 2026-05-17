export interface Task {
  id: string | number;
  title: string;
  description: string;
  completed: boolean;
  userId?: string;
  createdAt?: string;
}

export interface TaskResponse {
  sucesso: boolean;
  tarefa: {
    id: string | number;
    title: string;
    description: string | null;
    completed: boolean;
    userId: string;
    createdAt: string;
  };
}

export interface TasksListResponse {
  sucesso: boolean;
  tarefas: Array<{
    id: string | number;
    title: string;
    description: string | null;
    completed: boolean;
    userId: string;
    createdAt: string;
  }>;
}