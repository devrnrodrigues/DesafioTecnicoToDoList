import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as S from '../styles/LandingPage.styles';

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <S.GlobalStyleHelper>
      <S.Logo>
        <S.Dot /> To-Do list
      </S.Logo>

    

      <S.Hero>
        <S.Title>
          Planeje suas tarefas<br />
          <span>To-Do list.</span>
        </S.Title>
        <S.Description>
          Assuma o controle do seu tempo. Planeje, execute e acompanhe suas tarefas.
        </S.Description>

        <S.CtaContainer>
          
          <S.PrimaryButton onClick={() => navigate('/register')}>
            Cadastre-se
          </S.PrimaryButton>
          <S.SecondaryButton onClick={() => navigate('/home')}>
            Modo Visitante
          </S.SecondaryButton >
        </S.CtaContainer>
      </S.Hero>

      <S.Features>
        <S.Card>
          <h3>Modo Visitante</h3>
          <p>
            Experimente o sistema sem cadastro. Suas tarefas ficam salvas apenas no navegador.
          </p>
        </S.Card>
        <S.Card>
          <h3>Cadastre-se</h3>
          <p>
            Crie uma conta para salvar suas tarefas com segurança e acessar seus dados a qualquer momento.
          </p>
        </S.Card>
        <S.Card>
          <h3>O projeto</h3>
          <p>
            Uma aplicação de gerenciamento de tarefas com mini-API integrada e interface simples, rápida e intuitiva.
          </p>
        </S.Card>
      </S.Features>
    </S.GlobalStyleHelper>
  );
};

export default LandingPage;