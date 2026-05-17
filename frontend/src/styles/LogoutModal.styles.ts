import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(8px) scale(0.98); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 12, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 20px;
  animation: ${fadeIn} 0.15s ease-out;
`;

export const ModalContainer = styled.div`
  background: rgba(24, 24, 27, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 24px;
  max-width: 340px;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.02), 0 30px 60px rgba(0, 0, 0, 0.4);
  animation: ${slideUp} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: #ff3b30;
`;

export const Title = styled.h3`
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.02em;
  font-family: system-ui, -apple-system, sans-serif;
`;

export const Description = styled.p`
  color: #8e8e93;
  font-size: 0.88rem;
  margin: 0 0 24px 0;
  line-height: 1.5;
  text-align: left;
  font-family: system-ui, -apple-system, sans-serif;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CancelButton = styled.button`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 8px 14px;
  color: #eaeaea;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.12s ease;
  font-family: system-ui, -apple-system, sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ConfirmButton = styled.button`
  background: #ff3b30;
  border: 1px solid #ff453a;
  border-radius: 6px;
  padding: 8px 14px;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.12s ease;
  font-family: system-ui, -apple-system, sans-serif;

  &:hover {
    background: #e0241b;
    border-color: #e0241b;
    box-shadow: 0 0 16px rgba(255, 59, 48, 0.4);
  }
`;