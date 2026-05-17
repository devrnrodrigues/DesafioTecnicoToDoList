import React, { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import * as S from '../styles/DeleteConfirmModal.styles';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  taskTitle: string;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  taskTitle,
}) => {
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
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <AlertTriangle size={22} />
          <h3>Excluir Tarefa</h3>
        </S.Header>

        <S.Message>
          Tem certeza de que deseja apagar a tarefa <strong>"{taskTitle}"</strong>?
        </S.Message>

        <S.WarningAlert>
          Aviso: Esta ação não poderá ser desfeita e os dados serão perdidos permanentemente.
        </S.WarningAlert>

        <S.ButtonGroup>
          <S.ButtonCancel type="button" onClick={onClose}>
            Cancelar
          </S.ButtonCancel>
          <S.ButtonConfirm type="button" onClick={onConfirm}>
            Excluir permanentemente
          </S.ButtonConfirm>
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.Overlay>
  );
};