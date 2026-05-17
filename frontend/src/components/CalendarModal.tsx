import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import * as S from '../styles/CalendarModal.styles';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  setShowAllTasks: (showAll: boolean) => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedDate, 
  onSelectDate,
  setShowAllTasks
}) => {
  const [currentDate, setCurrentDate] = useState(new Date(selectedDate));

  if (!isOpen) return null;

  const hojeReal = new Date();
  const anoAtivo = currentDate.getFullYear();
  const mesAtivo = currentDate.getMonth();

  const nomeMes = currentDate.toLocaleDateString('pt-BR', { month: 'long' });

  const handlePrevMonth = () => {
    setCurrentDate(new Date(anoAtivo, mesAtivo - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(anoAtivo, mesAtivo + 1, 1));
  };

  const handleGoToToday = () => {
    const hoje = new Date();
    setCurrentDate(hoje);
    onSelectDate(hoje);
    setShowAllTasks(false);
    onClose();
  };

  const handleShowAll = () => {
    setShowAllTasks(true);
    onClose();
  };

  const handleSelectDay = (dia: number) => {
    const dataSelecionada = new Date(anoAtivo, mesAtivo, dia);
    onSelectDate(dataSelecionada);
    setShowAllTasks(false);
    onClose();
  };

  const primeiroDiaDoMes = new Date(anoAtivo, mesAtivo, 1).getDay();
  const totalDiasNoMes = new Date(anoAtivo, mesAtivo + 1, 0).getDate();
  
  const dias = [];

  for (let i = 0; i < primeiroDiaDoMes; i++) {
    dias.push(<S.DayCell key={`empty-${i}`} $isEmpty />);
  }

  for (let dia = 1; dia <= totalDiasNoMes; dia++) {
    const isHoje = 
      dia === hojeReal.getDate() && 
      mesAtivo === hojeReal.getMonth() && 
      anoAtivo === hojeReal.getFullYear();

    const isSelecionado = 
      dia === selectedDate.getDate() &&
      mesAtivo === selectedDate.getMonth() &&
      anoAtivo === selectedDate.getFullYear();

    dias.push(
      <S.DayCell 
        key={dia} 
        $isToday={isHoje} 
        onClick={() => handleSelectDay(dia)}
        style={isSelecionado ? { border: '1px solid #3b82f6', background: 'rgba(59, 130, 246, 0.15)' } : {}}
      >
        {dia}
      </S.DayCell>
    );
  }

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.TitleArea>
            <S.MonthTitleContainer>
              <S.ControlBtn type="button" onClick={handlePrevMonth} title="Mês anterior">
                <ChevronLeft size={20} />
              </S.ControlBtn>
              
              <S.MonthTitle>{nomeMes}<span>.</span></S.MonthTitle>
              
              <S.ControlBtn type="button" onClick={handleNextMonth} title="Próximo mês">
                <ChevronRight size={20} />
              </S.ControlBtn>
            </S.MonthTitleContainer>
            <S.YearSubtitle>{anoAtivo}</S.YearSubtitle>
          </S.TitleArea>
          
          <S.ActionButtonsArea style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <S.TodayButton type="button" onClick={handleGoToToday}>
              Hoje
            </S.TodayButton>
            <S.TodayButton type="button" onClick={handleShowAll} style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              Ver Todas
            </S.TodayButton>
            <S.CloseButton onClick={onClose} title="Fechar">
              <X size={20} />
            </S.CloseButton>
          </S.ActionButtonsArea>
        </S.ModalHeader>

        <S.InfoLegend>
          Clique em um dia para ver apenas as tarefas referentes a ele.
        </S.InfoLegend>

        <S.WeekDaysGrid>
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
            <S.WeekDayLabel key={d}>{d}</S.WeekDayLabel>
          ))}
        </S.WeekDaysGrid>

        <S.DaysGrid>
          {dias}
        </S.DaysGrid>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};