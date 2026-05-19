import styled from 'styled-components';

export const MainContainer = styled.main`
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
  margin-bottom: 40px;
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
`;

export const ControlsContainer = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SearchInputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0 16px;
  border-radius: 12px;
  color: #b0b0b0;
  min-height: 48px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #3b9dfa;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 0.95rem;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #707580;
  }
`;

export const ActionButtonsGroup = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CalendarQuickBtn = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  height: 48px;
  width: 48px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const BtnAdd = styled.button`
  background-color: #3b9dfa;
  color: white;
  border: none;
  padding: 0 24px;
  height: 48px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(59, 157, 250, 0.3);

  &:hover {
    background-color: #56aeff;
    box-shadow: 0 6px 20px rgba(59, 157, 250, 0.4);
  }

  @media (max-width: 480px) {
    flex: 1;
    width: auto;
  }
`;

export const TaskList = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TaskCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
`;

export const TaskCard = styled.div`
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  width: 100%;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomCheckbox = styled.div<{ $checked: boolean }>`
  height: 20px;
  width: 20px;
  background: ${props => props.$checked ? '#3b9dfa' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.$checked ? '#3b9dfa' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3b9dfa;
    background: ${props => props.$checked ? '#3b9dfa' : 'rgba(59, 157, 250, 0.1)'};
  }
`;

export const TaskText = styled.p<{ $completed?: boolean }>`
  font-size: 1rem;
  color: ${props => props.$completed ? '#707580' : '#ffffff'};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  word-break: break-word;
  transition: all 0.2s ease;
`;

export const EditInput = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #3b9dfa;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  padding: 6px 12px;
  outline: none;
  flex: 1;
  width: 100%;
`;

export const ActionsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 12px;
  }
`;

export const IconButton = styled.button<{ variant?: 'danger' | 'info' | 'primary' }>`
  background: transparent;
  border: none;
  color: ${props => {
    if (props.variant === 'danger') return '#ff5252';
    if (props.variant === 'info') return '#b0b0b0';
    return '#3b9dfa';
  }};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => {
      if (props.variant === 'danger') return 'rgba(255, 82, 82, 0.1)';
      if (props.variant === 'info') return 'rgba(255, 255, 255, 0.08)';
      return 'rgba(59, 157, 250, 0.1)';
    }};
    color: ${props => props.variant === 'info' && 'white'};
  }
`;

export const InfoSection = styled.div<{ $completed?: boolean; $isOpen: boolean }>`
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  font-size: 0.88rem;
  color: ${props => props.$completed ? '#505560' : '#f7f7f7'};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  line-height: 1.4;
  transition: all 0.2s ease;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              padding 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 0.2s ease;

  max-height: ${(props) => (props.$isOpen ? '200px' : '0px')};
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  
  padding-top: ${(props) => (props.$isOpen ? '12px' : '0px')};
  padding-bottom: ${(props) => (props.$isOpen ? '12px' : '0px')};
  padding-left: 16px;
  padding-right: 16px;
`;

export const EditTextArea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  font-size: 0.88rem;
  padding: 8px 12px;
  outline: none;
  resize: none;
  font-family: inherit;
  margin-top: 4px;
  transition: all 0.2s ease;

  &:focus {
    border-color: #3b9dfa;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: #707580;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  max-width: 450px;
  background: rgba(59, 157, 250, 0.05);
  border: 1px solid rgba(59, 157, 250, 0.15);
  padding: 12px 18px;
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

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: #b4b3b3;
  text-align: center;
  gap: 16px;
  width: 100%;
  max-width: 650px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  margin-top: 8px;

  p {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 500;
  }
`;