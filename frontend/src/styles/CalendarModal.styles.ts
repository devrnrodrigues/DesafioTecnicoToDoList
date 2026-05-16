import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  color: white;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px; /* Reduzido para aproximar da legenda */
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MonthTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -8px;
`;

export const MonthTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  user-select: none;
  span { color: #3b9dfa; }
`;

export const YearSubtitle = styled.p`
  color: #707580;
  font-size: 0.9rem;
  padding-left: 32px;
`;

export const ActionButtonsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TodayButton = styled.button`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #e0e0e0;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 157, 250, 0.15);
    border-color: rgba(59, 157, 250, 0.3);
    color: #3b9dfa;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #b0b0b0;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }
`;

export const ControlBtn = styled.button`
  background: transparent;
  border: none;
  color: #808590;
  cursor: pointer;
  display: flex;
  padding: 6px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover { 
    background: rgba(255, 255, 255, 0.06); 
    color: white;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const InfoLegend = styled.p`
  color: #707580;
  font-size: 0.82rem;
  line-height: 1.4;
  margin-bottom: 24px;
  padding-left: 32px; /* Alinha perfeitamente com o texto do ano e do mês */
  max-width: 280px;
`;

export const WeekDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 12px;
  padding: 0 4px;
`;

export const WeekDayLabel = styled.span`
  color: #707580;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  padding: 0 4px;
`;

export const DayCell = styled.div<{ $isEmpty?: boolean; $isToday?: boolean }>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: ${props => props.$isToday ? '700' : '400'};
  cursor: ${props => props.$isEmpty ? 'default' : 'pointer'};
  background: ${props => props.$isToday ? '#3b9dfa' : 'transparent'};
  color: ${props => props.$isToday ? 'white' : props.$isEmpty ? 'transparent' : '#e0e0e0'};
  box-shadow: ${props => props.$isToday ? '0 4px 14px rgba(59, 157, 250, 0.4)' : 'none'};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => !props.$isEmpty && !props.$isToday && 'rgba(255, 255, 255, 0.05)'};
    color: ${props => !props.$isEmpty && 'white'};
  }

  &:active {
    transform: ${props => !props.$isEmpty && 'scale(0.92)'};
  }
`;