import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, Plus } from 'lucide-react';
import * as S from '../styles/CalendarView.styles';
import { taskService } from '../services/taskService';
import type { Task } from '../types/task';

interface CalendarViewProps {
  onSelectDate: (date: Date) => void;
  setView: (view: 'workspace' | 'calendar' | 'howuse') => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ onSelectDate, setView }) => {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const monthsNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const blankDays = Array(firstDayOfMonth).fill(null);
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await taskService.getAll();
        setTasks(data);
      } catch (error) {
        console.error('Erro ao buscar tarefas no calendário:', error);
      }
    }
    loadTasks();
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleGoToToday = () => {
    setCurrentDate(new Date());
  };

  const checkIsToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const getTasksForDay = (day: number) => {
    const targetDateStr = new Date(currentYear, currentMonth, day).toLocaleDateString('pt-BR');
    
    return tasks.filter(task => {
      const taskDateStr = task.createdAt 
        ? new Date(task.createdAt).toLocaleDateString('pt-BR') 
        : new Date().toLocaleDateString('pt-BR');
      return taskDateStr === targetDateStr;
    });
  };

  const handleDayClick = (day: number) => {
    const targetDate = new Date(currentYear, currentMonth, day);
    onSelectDate(targetDate);
    setView('workspace');
  };

  return (
    <S.CalendarContainer>
      <S.HeaderSection>
        <S.Heading>Calendário<span>.</span></S.Heading>
        <S.Subtitle>Planeje seu mês, organize seus prazos e visualize sua produtividade em tempo real.</S.Subtitle>
      </S.HeaderSection>

      <S.InfoBox>
        <Info size={18} />
        <p>
          <strong>Dica de Organização:</strong> Utilize a visão mensal para antecipar prazos importantes e planejar a distribuição das suas tarefas ao longo das semanas, evitando sobrecarga.
        </p>
      </S.InfoBox>

      <S.CalendarCardWrapper>
        <S.CalendarHeader>
          <S.MonthTitle>{`${monthsNames[currentMonth]} ${currentYear}`}</S.MonthTitle>
          <S.NavigationActions>
            <S.NavBtn onClick={handlePrevMonth} title="Mês Anterior">
              <ChevronLeft size={20} />
            </S.NavBtn>
            <S.TodayBtn onClick={handleGoToToday} title="Ir para hoje">
              Hoje
            </S.TodayBtn>
            <S.NavBtn onClick={handleNextMonth} title="Próximo Mês">
              <ChevronRight size={20} />
            </S.NavBtn>
          </S.NavigationActions>
        </S.CalendarHeader>

        <S.CalendarGrid>
          {daysOfWeek.map((day) => (
            <S.WeekDayHeader key={day}>{day}</S.WeekDayHeader>
          ))}

          {blankDays.map((_, index) => (
            <S.DayCell key={`blank-${index}`} $isCurrentMonth={false} />
          ))}

          {monthDays.map((day) => {
            const isToday = checkIsToday(day);
            const dayTasks = getTasksForDay(day);
            const hasTasks = dayTasks.length > 0;

            return (
              <S.DayCell 
                key={day} 
                $isCurrentMonth={true} 
                $isToday={isToday}
                onClick={() => handleDayClick(day)}
              >
                <S.DayNumber $isToday={isToday}>{day}</S.DayNumber>
                
                <S.TaskIndicatorArea>
                  {hasTasks && (
                    <S.MiniTaskTag data-count={dayTasks.length}>
                      {dayTasks.length} {dayTasks.length === 1 ? 'tarefa' : 'tarefas'}
                    </S.MiniTaskTag>
                  )}
                </S.TaskIndicatorArea>

                <S.AddEventHint className="add-hint">
                  <Plus size={14} />
                </S.AddEventHint>
              </S.DayCell>
            );
          })}
        </S.CalendarGrid>
      </S.CalendarCardWrapper>
    </S.CalendarContainer>
  );
};