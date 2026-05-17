import React, { useState } from 'react';
import { Contact2, Mail, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import type { ValidationErrorDetail } from '../types/auth';
import * as S from '../styles/Register.styles';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrorDetail[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setValidationErrors([]);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    setLoading(true);
    try {
      const data = await authService.register(name, email, password);
      
      if (data.sucesso) {
        setSuccessMessage('Conta criada com sucesso! Autenticando...');
        
        const loginData = await authService.login(email, password);
        
        if (loginData.sucesso) {
          localStorage.setItem('@TodoApp:token', loginData.token);
          localStorage.setItem('@TodoApp:user', JSON.stringify(loginData.usuario));
          
          setTimeout(() => {
           
            navigate('/home', { 
              state: { 
                showWelcomeToast: true, 
                userName: name, 
                isNewUser: true 
              } 
            });
          }, 1500);
        } else {
          navigate('/login');
        }
      }
    } catch (err: any) {
      const responseData = err.response?.data;
      if (responseData?.detalhes && Array.isArray(responseData.detalhes)) {
        setValidationErrors(responseData.detalhes);
      } else {
        setErrorMessage(responseData?.mensagem || 'Erro ao criar conta.');
      }
    } finally {
      setLoading(false);
    }
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

            {validationErrors.length > 0 && (
              <div style={{ background: 'rgba(255, 107, 107, 0.15)', border: '1px solid #ff6b6b', padding: '12px', borderRadius: '8px', color: '#ff8787', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {validationErrors.map((err, idx) => (
                  <span key={idx}>• {err.mensagem}</span>
                ))}
              </div>
            )}

            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>Nome<span>*</span></S.Label>
                <S.InputField 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </S.InputWrapper>
              <S.IconContainer>
                <Contact2 />
              </S.IconContainer>
            </S.InputGroup>

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

            <S.InputGroup>
              <S.InputWrapper>
                <S.Label>Confirmar senha<span>*</span></S.Label>
                <S.InputField 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  id="confirmPasswordInput" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <S.BtnPrimary type="submit" disabled={loading}>
              {loading ? 'Criando...' : 'Criar conta'}
            </S.BtnPrimary>
          </S.ButtonGroup>
        </form>
      </S.Container>
    </S.BodyWrapper>
  );
};

export default Register;