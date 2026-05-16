import React, { useState } from 'react';
import { Contact2, Mail, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/Register.styles';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
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

        <S.StartText>Comece gratuitamente</S.StartText>
        <S.Heading>Criar nova conta<span>.</span></S.Heading>
        <S.LoginLink>
          Já tem uma conta?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
            Faça login
          </a>
        </S.LoginLink>

        <form id="registrationForm" onSubmit={handleFormSubmit}>
          <S.FormGrid>
            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>Nome<span>*</span></S.Label>
                <S.InputField type="text" required />
              </S.InputWrapper>
              <S.IconContainer>
                <Contact2 />
              </S.IconContainer>
            </S.InputGroup>

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

            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>Confirmar senha<span>*</span></S.Label>
                <S.InputField 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  id="confirmPasswordInput" 
                  required 
                />
              </S.InputWrapper>
              <S.PasswordToggleArea onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                <S.IconContainer>
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </S.IconContainer>
              </S.PasswordToggleArea>
            </S.InputGroup>
          </S.FormGrid>

          <S.ButtonGroup>
            <S.BtnSecondary type="button" onClick={() => navigate('/home')}>Modo visitante</S.BtnSecondary>
            <S.BtnPrimary type="submit" onClick={() => navigate('/home')}>Criar conta</S.BtnPrimary>
          </S.ButtonGroup>
        </form>
      </S.Container>
    </S.BodyWrapper>
  );
};

export default Register;