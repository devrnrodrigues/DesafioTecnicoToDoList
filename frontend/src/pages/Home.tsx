import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  User, 
  Plus, 
  Search, 
  Pencil, 
  Trash2, 
  Info, 
  Check,
  Menu,
} from 'lucide-react';
import * as S from '../styles/Home.styles';

interface Task {
  id: number;
  text: string;
  description: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: 1, 
      text: 'Finalizar a estilização do design responsivo', 
      description: 'Garantir que as seções do Workspace funcionem perfeitamente em resoluções mobile e tablets.'
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [visibleInfoTaskId, setVisibleInfoTaskId] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddTask = () => {
    const timeString = new Date().toLocaleTimeString();
    const novaTarefa: Task = {
      id: Date.now(),
      text: `Nova tarefa (${timeString})`,
      description: `Esta tarefa foi gerada automaticamente às ${timeString}. Clique no ícone de editar para personalizar as informações.`
    };
    setTasks([...tasks, novaTarefa]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (visibleInfoTaskId === id) setVisibleInfoTaskId(null);
    if (editingTaskId === id) setEditingTaskId(null);
  };

  const startEditing = (id: number, currentText: string) => {
    setEditingTaskId(id);
    setEditingText(currentText);
  };

  const saveEdit = (id: number) => {
    if (!editingText.trim()) return;
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editingText } : task));
    setEditingTaskId(null);
  };

  const toggleInfo = (id: number) => {
    setVisibleInfoTaskId(visibleInfoTaskId === id ? null : id);
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <S.HomeWrapper>
      {/* Header visível apenas em telas mobile/tablet */}
      <S.MobileHeader>
        <S.MenuButton onClick={() => setIsSidebarOpen(true)}>
          <Menu size={24} />
        </S.MenuButton>
        <S.MobileLogoText>
          <S.Dot /> Anywhere app
        </S.MobileLogoText>
      </S.MobileHeader>

      {isSidebarOpen && <S.Overlay onClick={() => setIsSidebarOpen(false)} />}

      <S.Sidebar $isOpen={isSidebarOpen}>
        <div>
          <S.LogoArea>
            <S.Dot /> To-Do list .

          </S.LogoArea>
          
          <S.NavMenu>
            <S.NavItem active onClick={() => setIsSidebarOpen(false)}>
              <LayoutDashboard size={18} />
              Workspace
            </S.NavItem>
            <S.NavItem onClick={() => setIsSidebarOpen(false)}>
              <Calendar size={18} />
              Calendário
            </S.NavItem>
            <S.NavItem onClick={() => setIsSidebarOpen(false)}>
              <Info size={18} />
              Sobre 
            </S.NavItem>
          </S.NavMenu>
        </div>

        <S.ThemeButton>
          <User size={18} />
          Modo Visitante
        </S.ThemeButton>
      </S.Sidebar>

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

          <S.BtnAdd type="button" onClick={handleAddTask}>
            <Plus size={18} strokeWidth={2.5} />
            Criar tarefa
          </S.BtnAdd>
        </S.ControlsContainer>

        <S.TaskList>
          {filteredTasks.map(task => (
            <S.TaskCardWrapper key={task.id}>
              <S.TaskCard>
                <S.TaskContent>
                  {editingTaskId === task.id ? (
                    <S.EditInput 
                      type="text" 
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && saveEdit(task.id)}
                      autoFocus
                    />
                  ) : (
                    <S.TaskText>{task.text}</S.TaskText>
                  )}
                </S.TaskContent>

                <S.ActionsArea>
                  <S.IconButton 
                    variant="info" 
                    title="Informações"
                    onClick={() => toggleInfo(task.id)}
                  >
                    <Info size={18} />
                  </S.IconButton>

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
                      onClick={() => startEditing(task.id, task.text)}
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
                <S.InfoSection>
                  {task.description}
                </S.InfoSection>
              )}
            </S.TaskCardWrapper>
          ))}
        </S.TaskList>
      </S.MainContainer>
    </S.HomeWrapper>
  );
};

export default Home;