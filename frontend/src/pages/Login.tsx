import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/Login.styles';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.BodyWrapper>
      <S.Container>
        <S.Logo>
          <S.Dot /> To-Do list .
        </S.Logo>

        <S.StartText>Olá novamente!</S.StartText>
        <S.Heading>Acessar conta<span>.</span></S.Heading>
        <S.RegisterLink>
          Não tem uma conta?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/register'); }}>
            Cadastre-se
          </a>
        </S.RegisterLink>

        <form id="loginForm" onSubmit={handleFormSubmit}>
          <S.FormGrid>
            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>E-mail<span>*</span></S.Label>
                <S.InputField type="email" required />
              </S.InputWrapper>
              <S.IconContainer>
                <Mail />
              </S.IconContainer>
            </S.InputGroup>

            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>Senha<span>*</span></S.Label>
                <S.InputField 
                  type={showPassword ? 'text' : 'password'} 
                  id="passwordInput" 
                  required 
                />
              </S.InputWrapper>
              <S.PasswordToggleArea onClick={() => setShowPassword(!showPassword)}>
                <S.IconContainer>
                  {showPassword ? <EyeOff /> : <Eye />}
                </S.IconContainer>
              </S.PasswordToggleArea>
            </S.InputGroup>
          </S.FormGrid>

          <S.ButtonGroup>
            <S.BtnPrimary type="submit">Entrar</S.BtnPrimary>
          </S.ButtonGroup>
        </form>
      </S.Container>
    </S.BodyWrapper>
  );
};

export default Login;