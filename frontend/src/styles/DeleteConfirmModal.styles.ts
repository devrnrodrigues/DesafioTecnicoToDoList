import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContainer = styled.div`
   background: rgba(15, 15, 15, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  width: 100%;
  max-width: 400px;
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  animation: ${scaleUp} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #f43f5e;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    color: #f8fafc;
  }
`;

export const Message = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #f1f5f9;
    font-weight: 600;
  }
`;

export const WarningAlert = styled.div`
  background: rgba(244, 63, 94, 0.1);
  border-left: 4px solid #f43f5e;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #fda4af;
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const ButtonCancel = styled.button`
  background: rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ButtonConfirm = styled.button`
  background: #e11d48;
  color: #ffffff;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #be123c;
  }
`;