import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import * as S from '../styles/Login.styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      const data = await authService.login(email, password);
      
      if (data.sucesso) {
        localStorage.setItem('@TodoApp:token', data.token);
        localStorage.setItem('@TodoApp:user', JSON.stringify(data.usuario));
        
        setSuccessMessage('Login realizado com sucesso! Redirecionando...');
        
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      }
    } catch (err: any) {
      setErrorMessage('Email ou senha inválidos');
      setLoading(false);
    }
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
            {successMessage && (
              <div style={{ background: 'rgba(46, 204, 113, 0.15)', border: '1px solid #2ecc71', padding: '12px', borderRadius: '8px', color: '#2ecc71', fontSize: '0.85rem' }}>
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div style={{ background: 'rgba(255, 107, 107, 0.15)', border: '1px solid #ff6b6b', padding: '12px', borderRadius: '8px', color: '#ff8787', fontSize: '0.85rem' }}>
                {errorMessage}
              </div>
            )}
            
            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>E-mail<span>*</span></S.Label>
                <S.InputField 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <S.BtnPrimary type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </S.BtnPrimary>
          </S.ButtonGroup>
        </form>
      </S.Container>
    </S.BodyWrapper>
  );
};

export default Login;