import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Pencil, 
  Trash2, 
  Info, 
  Check, 
  Calendar 
} from 'lucide-react';
import * as S from '../styles/Workspace.styles';
import { TaskModal } from './TaskModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { taskService } from '../services/taskService';
import type { Task } from '../types/task';

interface WorkspaceProps {
  setIsCalendarOpen: (isOpen: boolean) => void;
}

export const Workspace: React.FC<WorkspaceProps> = ({ setIsCalendarOpen }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [editingDescription, setEditingDescription] = useState('');
  const [visibleInfoTaskIds, setVisibleInfoTaskIds] = useState<(string | number)[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const currentDateFormatted = new Date().toLocaleDateString('pt-BR');

  useEffect(() => {
    async function loadTasks() {
      const data = await taskService.getAll();
      setTasks(data);
    }
    loadTasks();
  }, []);

  const handleCreateManualTask = async (title: string, description: string) => {
    try {
      const newTask = await taskService.create(title, description);
      setTasks([newTask, ...tasks]);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const openDeleteConfirmation = (task: Task) => {
    setTaskToDelete(task);
  };

  const handleConfirmDelete = async () => {
    if (!taskToDelete) return;
    try {
      await taskService.delete(taskToDelete.id);
      setTasks(tasks.filter(task => task.id !== taskToDelete.id));
      setVisibleInfoTaskIds(visibleInfoTaskIds.filter(id => id !== taskToDelete.id));
      if (editingTaskId === taskToDelete.id) setEditingTaskId(null);
      setTaskToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  const startEditing = (id: string | number, currentText: string, currentDescription: string) => {
    setEditingTaskId(id);
    setEditingText(currentText);
    setEditingDescription(currentDescription);
    if (!visibleInfoTaskIds.includes(id)) {
      setVisibleInfoTaskIds([...visibleInfoTaskIds, id]);
    }
  };

  const saveEdit = async (id: string | number) => {
    if (!editingText.trim()) return;
    try {
      const updated = await taskService.update(id, {
        title: editingText,
        description: editingDescription
      });
      if (updated) {
        setTasks(tasks.map(task => task.id === id ? updated : task));
      }
      setEditingTaskId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleInfo = (id: string | number) => {
    if (editingTaskId === id) return;
    if (visibleInfoTaskIds.includes(id)) {
      setVisibleInfoTaskIds(visibleInfoTaskIds.filter(taskId => taskId !== id));
    } else {
      setVisibleInfoTaskIds([...visibleInfoTaskIds, id]);
    }
  };

  const toggleComplete = async (id: string | number) => {
    const taskToToggle = tasks.find(t => t.id === id);
    if (!taskToToggle) return;
    try {
      const updated = await taskService.update(id, {
        completed: !taskToToggle.completed
      });
      if (updated) {
        setTasks(tasks.map(task => task.id === id ? updated : task));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <S.MainContainer>
      <S.HeaderSection>
        <S.Heading>Workspace<span>.</span></S.Heading>
        <S.Subtitle>Gerencie suas tarefas.</S.Subtitle>
      </S.HeaderSection>

      <S.ControlsContainer>
        <S.SearchInputWrapper>
          <Search size={18} />
          <S.SearchInput 
            type="text" 
            placeholder="Buscar tarefas..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </S.SearchInputWrapper>

        <S.ActionButtonsGroup>
          <S.CalendarQuickBtn title="Ver Calendário" onClick={() => setIsCalendarOpen(true)}>
            <Calendar size={18} />
          </S.CalendarQuickBtn>

          <S.BtnAdd type="button" onClick={() => setIsModalOpen(true)}>
            <Plus size={18} strokeWidth={2.5} />
            Criar tarefa
          </S.BtnAdd>
        </S.ActionButtonsGroup>
      </S.ControlsContainer>

      <S.InfoBox>
        <Info size={18} />
        <p>
          Apenas as tarefas do dia <strong>{currentDateFormatted}</strong> estão sendo exibidas.
        </p>
      </S.InfoBox>

      <S.TaskList>
        {filteredTasks.map(task => (
          <S.TaskCardWrapper key={task.id}>
            <S.TaskCard>
              <S.TaskContent>
                <S.CheckboxWrapper>
                  <S.CheckboxInput 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleComplete(task.id)} 
                  />
                  <S.CustomCheckbox $checked={task.completed}>
                    {task.completed && <Check size={12} strokeWidth={3} />}
                  </S.CustomCheckbox>
                </S.CheckboxWrapper>

                {editingTaskId === task.id ? (
                  <S.EditInput 
                    type="text" 
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && saveEdit(task.id)}
                    autoFocus
                  />
                ) : (
                  <S.TaskText $completed={task.completed}>{task.title}</S.TaskText>
                )}
              </S.TaskContent>

              <S.ActionsArea>
                {editingTaskId !== task.id && (
                  <S.IconButton 
                    variant="info" 
                    title="Informações"
                    onClick={() => toggleInfo(task.id)}
                  >
                    <Info size={18} />
                  </S.IconButton>
                )}

                {editingTaskId === task.id ? (
                  <S.IconButton 
                    variant="primary" 
                    title="Salvar"
                    onClick={() => saveEdit(task.id)}
                  >
                    <Check size={18} />
                  </S.IconButton>
                ) : (
                  <S.IconButton 
                    variant="primary" 
                    title="Editar"
                    onClick={() => startEditing(task.id, task.title, task.description)}
                  >
                    <Pencil size={18} />
                  </S.IconButton>
                )}

                <S.IconButton 
                  variant="danger" 
                  title="Excluir"
                  onClick={() => openDeleteConfirmation(task)}
                >
                  <Trash2 size={18} />
                </S.IconButton>
              </S.ActionsArea>
            </S.TaskCard>

            <S.InfoSection 
              $completed={task.completed} 
              $isOpen={visibleInfoTaskIds.includes(task.id)}
            >
              {editingTaskId === task.id ? (
                <S.EditTextArea 
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                  rows={3}
                  placeholder="Editar descrição..."
                />
              ) : (
                task.description.trim() ? (
                  task.description
                ) : (
                  <span style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    Sem descrição fornecida.
                  </span>
                )
              )}
            </S.InfoSection>
          </S.TaskCardWrapper>
        ))}
      </S.TaskList>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreateTask={handleCreateManualTask} 
      />

      <DeleteConfirmModal
        isOpen={taskToDelete !== null}
        onClose={() => setTaskToDelete(null)}
        onConfirm={handleConfirmDelete}
        taskTitle={taskToDelete?.title || ''}
      />
    </S.MainContainer>
  );
};