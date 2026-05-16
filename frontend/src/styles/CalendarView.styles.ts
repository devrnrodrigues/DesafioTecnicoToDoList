import styled from 'styled-components';

export const CalendarContainer = styled.main`
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 100%;

  @media (max-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 8px;
  letter-spacing: -1px;

  span {
    color: #3b9dfa;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  max-width: 600px;
  line-height: 1.5;
`;

export const InfoBox = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(59, 157, 250, 0.05);
  border: 1px solid rgba(59, 157, 250, 0.15);
  padding: 14px 20px;
  border-radius: 12px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #9cd0ff;
  font-size: 0.9rem;
  line-height: 1.4;

  p {
    margin: 0;
  }

  strong {
    color: #fff;
  }
`;

export const CalendarCardWrapper = styled.div`
  width: 100%;
  max-width: 900px; /* Expandido para ficar maior e mais imponente */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 4px;
`;

export const MonthTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const NavigationActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavBtn = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const TodayBtn = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  padding: 0 16px;
  height: 36px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const WeekDayHeader = styled.div`
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: #707580;
  padding-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

interface DayCellProps {
  $isCurrentMonth: boolean;
  $isToday?: boolean;
}

export const DayCell = styled.div<DayCellProps>`
  min-height: 100px;
  background: ${props => props.$isToday ? 'rgba(59, 157, 250, 0.05)' : 'rgba(255, 255, 255, 0.01)'};
  border: 1px solid ${props => props.$isToday ? 'rgba(59, 157, 250, 0.3)' : 'rgba(255, 255, 255, 0.04)'};
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  opacity: ${props => props.$isCurrentMonth ? 1 : 0.2};
  pointer-events: ${props => props.$isCurrentMonth ? 'auto' : 'none'};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.15);
    
    .add-hint {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    min-height: 70px;
    padding: 6px;
  }
`;

export const DayNumber = styled.span<{ $isToday?: boolean }>`
  font-size: 0.95rem;
  font-weight: ${props => props.$isToday ? '700' : '500'};
  color: ${props => props.$isToday ? '#3b9dfa' : '#ffffff'};
  align-self: flex-start;
`;

export const TaskIndicatorArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  flex: 1;
  overflow: hidden;
`;

export const MiniTaskTag = styled.div`
  background: rgba(59, 157, 250, 0.15);
  border-left: 3px solid #3b9dfa;
  color: #e0f0ff;
  font-size: 0.72rem;
  padding: 4px 6px;
  border-radius: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
`;

export const AddEventHint = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #3b9dfa;
  opacity: 0;
  transition: opacity 0.2s ease;
`;