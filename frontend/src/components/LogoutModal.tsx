import React, { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import * as M from '../styles/LogoutModal.styles';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <M.Overlay onClick={onClose}>
      <M.ModalContainer onClick={(e) => e.stopPropagation()}>
        <M.HeaderArea>
          <AlertCircle size={16} strokeWidth={2.5} />
          <M.Title>Deseja realmente sair?</M.Title>
        </M.HeaderArea>
        
        <M.Description>
          Sua sessão será encerrada e você precisará fazer login novamente para acessar suas tarefas.
        </M.Description>

        <M.ButtonGroup>
          <M.CancelButton type="button" onClick={onClose}>
            Cancelar
          </M.CancelButton>
          
          <M.ConfirmButton type="button" onClick={onConfirm}>
            Sair da conta
          </M.ConfirmButton>
        </M.ButtonGroup>
      </M.ModalContainer>
    </M.Overlay>
  );
};