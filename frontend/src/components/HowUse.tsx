import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import * as S from '../styles/HowUse.styles';

export const HowUse: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como faço para criar uma nova tarefa?',
      answer: 'No menu lateral, clique em "Workspace". No topo da página, clique no botão azul "+ Criar tarefa". Um modal se abrirá para você preencher o título e a descrição da sua atividade. Basta confirmar para que ela seja listada no seu painel.'
    },
    {
      question: 'Como posso editar ou excluir uma tarefa existente?',
      answer: 'Cada cartão de tarefa possui um conjunto de ações rápidas no lado direito. O ícone de lápis ativa o modo de edição direta no título e na descrição. O ícone de lixeira remove permanentemente a tarefa do seu Workspace.'
    },
    {
      question: 'Para que serve o recurso de informações da tarefa?',
      answer: 'Ao clicar no ícone de informação (um círculo com a letra "i") em qualquer tarefa, um painel inferior se expandirá revelando a descrição detalhada que você definiu para aquele item, ajudando a manter o foco nos detalhes do que precisa ser feito.'
    },
    {
      question: 'Como funciona a alternância entre o Workspace e o Calendário?',
      answer: 'Você pode usar o menu lateral para alternar completamente a tela central entre a lista de tarefas e o calendário dinâmico. Além disso, o Workspace possui um atalho rápido de calendário que abre uma janela flutuante sem tirar você da sua tela de trabalho atual.'
    },
   {
      question: 'O sistema salva minhas tarefas automaticamente?',
      answer: 'Sim! No Modo Visitante, suas tarefas são salvas automaticamente no armazenamento local do seu navegador (localStorage), garantindo que seus dados não sumam ao atualizar a página. Para proteger suas tarefas de forma permanente, acessá-las de qualquer dispositivo e sincronizá-las com segurança em nuvem, basta criar uma conta e fazer login no sistema.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <S.Container>
      <S.HeaderSection>
        <S.Heading>Como usar<span>.</span></S.Heading>
        <S.Subtitle>Encontre respostas rápidas para as principais dúvidas sobre as funcionalidades da plataforma.</S.Subtitle>
      </S.HeaderSection>

      <S.GuideCard>
        <BookOpen size={20} />
        <p>
          <strong>Guia Rápido:</strong> Esta plataforma foi desenhada para ser minimalista e intuitiva. Utilize o menu lateral para navegar e gerenciar sua rotina.
        </p>
      </S.GuideCard>

      <S.FaqList>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <S.FaqItem key={index} $isOpen={isOpen}>
              <S.FaqHeader onClick={() => toggleFaq(index)}>
                <S.QuestionWrapper>
                  <HelpCircle size={18} />
                  <S.QuestionText>{faq.question}</S.QuestionText>
                </S.QuestionWrapper>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </S.FaqHeader>
              {isOpen && <S.FaqAnswer>{faq.answer}</S.FaqAnswer>}
            </S.FaqItem>
          );
        })}
      </S.FaqList>
    </S.Container>
  );
};