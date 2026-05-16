import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import * as S from '../styles/TaskModal.styles';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (title: string, description: string) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onCreateTask }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onCreateTask(newTitle, newDescription);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <h2>Nova Tarefa</h2>
          <S.CloseButton onClick={onClose}>
            <X size={20} />
          </S.CloseButton>
        </S.ModalHeader>
        
        <S.ModalForm onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>Título da Tarefa</label>
            <S.ModalInput 
              ref={inputRef}
              type="text" 
              placeholder="Digite o título..." 
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </S.FormGroup>
          
          <S.FormGroup>
            <label>Descrição</label>
            <S.ModalTextArea 
              placeholder="Digite a descrição da tarefa..." 
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              rows={4}
            />
          </S.FormGroup>
          
          <S.ModalActions>
            <S.CancelButton type="button" onClick={onClose}>
              Cancelar
            </S.CancelButton>
            <S.SubmitButton type="submit">
              Salvar Tarefa
            </S.SubmitButton>
          </S.ModalActions>
        </S.ModalForm>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};