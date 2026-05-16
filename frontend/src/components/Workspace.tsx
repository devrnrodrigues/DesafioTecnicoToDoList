import React, { useState } from 'react';
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

interface Task {
  id: number;
  text: string;
  description: string;
  completed: boolean;
}

interface WorkspaceProps {
  setIsCalendarOpen: (isOpen: boolean) => void;
}

export const Workspace: React.FC<WorkspaceProps> = ({ setIsCalendarOpen }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: 1, 
      text: 'Finalizar a estilização do design responsivo', 
      description: 'Garantir que as seções do Workspace funcionem perfeitamente em resoluções mobile e tablets.',
      completed: false
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [editingDescription, setEditingDescription] = useState('');
  const [visibleInfoTaskId, setVisibleInfoTaskId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentDateFormatted = new Date().toLocaleDateString('pt-BR');

  const handleCreateManualTask = (title: string, description: string) => {
    const novaTarefa: Task = {
      id: Date.now(),
      text: title,
      description: description || 'Sem descrição fornecida.',
      completed: false
    };

    setTasks([...tasks, novaTarefa]);
    setIsModalOpen(false);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (visibleInfoTaskId === id) setVisibleInfoTaskId(null);
    if (editingTaskId === id) setEditingTaskId(null);
  };

  const startEditing = (id: number, currentText: string, currentDescription: string) => {
    setEditingTaskId(id);
    setEditingText(currentText);
    setEditingDescription(currentDescription);
    setVisibleInfoTaskId(id);
  };

  const saveEdit = (id: number) => {
    if (!editingText.trim()) return;
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, text: editingText, description: editingDescription } 
        : task
    ));
    setEditingTaskId(null);
  };

  const toggleInfo = (id: number) => {
    if (editingTaskId === id) return;
    setVisibleInfoTaskId(visibleInfoTaskId === id ? null : id);
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
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
          Todas as tarefas do dia <strong>{currentDateFormatted}</strong> estão sendo exibidas.
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
                  <S.TaskText $completed={task.completed}>{task.text}</S.TaskText>
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
                    onClick={() => startEditing(task.id, task.text, task.description)}
                  >
                    <Pencil size={18} />
                  </S.IconButton>
                )}

                <S.IconButton 
                  variant="danger" 
                  title="Excluir"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Trash2 size={18} />
                </S.IconButton>
              </S.ActionsArea>
            </S.TaskCard>

            {visibleInfoTaskId === task.id && (
              <S.InfoSection $completed={task.completed}>
                {editingTaskId === task.id ? (
                  <S.EditTextArea 
                    value={editingDescription}
                    onChange={(e) => setEditingDescription(e.target.value)}
                    rows={3}
                    placeholder="Editar descrição..."
                  />
                ) : (
                  task.description
                )}
              </S.InfoSection>
            )}
          </S.TaskCardWrapper>
        ))}
      </S.TaskList>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreateTask={handleCreateManualTask} 
      />
    </S.MainContainer>
  );
};