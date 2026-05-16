import styled from 'styled-components';

export const BodyWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

export const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: #3b9dfa;
  border-radius: 50%;
  display: inline-block;
`;

export const StartText = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: #b0b0b0;
  margin-bottom: 10px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;

  span {
    color: #3b9dfa;
  }
`;

export const RegisterLink = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-bottom: 30px;

  a {
    color: #3b9dfa;
    text-decoration: none;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 15px;
`;

export const InputGroup = styled.div`
  background: rgba(45, 49, 58, 0.8);
  padding: 10px 15px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:focus-within {
    border-color: #3b9dfa;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  color: #b0b0b0;
  margin-bottom: 4px;
  font-weight: 500;

  span {
    color: #3b9dfa;
    margin-left: 3px;
  }
`;

export const InputField = styled.input`
  background: transparent;
  border: none;
  color: white;
  width: 100%;
  font-size: 1rem;
  outline: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    -webkit-text-fill-color: white !important;
    transition: background-color 9999s ease-in-out 0s;
  }
`;

export const IconContainer = styled.div`
  color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const PasswordToggleArea = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${IconContainer} {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

export const BtnPrimary = styled.button`
  padding: 15px;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  background-color: #3b9dfa;
  color: white;
  flex: 1;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;