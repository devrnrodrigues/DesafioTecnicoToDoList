import styled from 'styled-components';

export const CalendarContainer = styled.main`
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 80px 16px 40px 16px;
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

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.8rem;
  }
`;

export const CalendarCardWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 12px;
    border-radius: 16px;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 4px;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
`;

export const MonthControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const MonthTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  min-width: 140px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    min-width: auto;
  }
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

  @media (max-width: 480px) {
    width: 100%;
    height: 34px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;

  @media (max-width: 600px) {
    gap: 4px;
  }
`;

export const WeekDayHeader = styled.div`
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: #707580;
  padding-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    letter-spacing: 0;
    padding-bottom: 6px;
  }
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
  box-sizing: border-box;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.15);
    
    .add-hint {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    min-height: 80px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    min-height: 55px;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;

    &:hover .add-hint {
      opacity: 0;
    }
  }
`;

export const DayNumber = styled.span<{ $isToday?: boolean }>`
  font-size: 0.95rem;
  font-weight: ${props => props.$isToday ? '700' : '500'};
  color: ${props => props.$isToday ? '#3b9dfa' : '#ffffff'};
  align-self: flex-start;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    align-self: center;
  }
`;

export const TaskIndicatorArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  flex: 1;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 480px) {
    margin-top: 2px;
    align-items: center;
    justify-content: center;
  }
`;

export const MiniTaskTag = styled.div`
  background: rgba(59, 157, 250, 0.12);
  border-left: 3px solid #3b9dfa;
  color: #9cd0ff;
  font-size: 0.72rem;
  padding: 4px 6px;
  border-radius: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 0.65rem;
    padding: 2px 4px;
  }

  @media (max-width: 480px) {
    background: #3b9dfa;
    border-left: none;
    color: #fff;
    width: 16px;
    height: 16px;
    padding: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    text-align: center;
    
    &::before {
      content: attr(data-count);
      font-size: 0.65rem;
    }
  }
`;

export const AddEventHint = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #3b9dfa;
  opacity: 0;
  transition: opacity 0.2s ease;

  @media (max-width: 600px) {
    display: none;
  }
`;