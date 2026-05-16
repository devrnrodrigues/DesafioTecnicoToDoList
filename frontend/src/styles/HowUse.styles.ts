import styled from 'styled-components';

export const Container = styled.main`
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

export const GuideCard = styled.div`
  width: 100%;
  max-width: 750px;
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

export const FaqList = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FaqItem = styled.div<{ $isOpen: boolean }>`
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${props => props.$isOpen ? 'rgba(59, 157, 250, 0.2)' : 'rgba(255, 255, 255, 0.06)'};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s ease;
`;

export const FaqHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  gap: 16px;
  color: #ffffff;

  &:hover {
    background: rgba(255, 255, 255, 0.02);
    color: #3b9dfa;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const QuestionText = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

export const FaqAnswer = styled.div`
  padding: 0 20px 20px 52px;
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.6;
  white-space: pre-wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.02);
  margin-top: -4px;
  padding-top: 16px;

  @media (max-width: 480px) {
    padding: 0 20px 20px 20px;
  }
`;