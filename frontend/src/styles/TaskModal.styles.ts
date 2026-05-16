import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 350px;
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: white;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #b0b0b0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.88rem;
    font-weight: 600;
    color: #b0b0b0;
  }
`;

export const ModalInput = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
  font-size: 0.95rem;
  padding: 12px 16px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #3b9dfa;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: #707580;
  }
`;

export const ModalTextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
  font-size: 0.95rem;
  padding: 12px 16px;
  outline: none;
  resize: none;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    border-color: #3b9dfa;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: #707580;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0 20px;
  height: 44px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const SubmitButton = styled.button`
  background-color: #3b9dfa;
  color: white;
  border: none;
  padding: 0 20px;
  height: 44px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(59, 157, 250, 0.3);
  transition: all 0.2s;

  &:hover {
    background-color: #56aeff;
    box-shadow: 0 6px 20px rgba(59, 157, 250, 0.4);
  }
`;
