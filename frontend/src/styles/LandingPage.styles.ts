import styled from 'styled-components';

export const GlobalStyleHelper = styled.div`
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background: #0f1115;
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const TopRightIcon = styled.i`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 10;
  font-size: 2rem;
  color: #3b9dfa;
`;

export const Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-weight: 800;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
`;

export const Dot = styled.div`
  height: 12px;
  width: 12px;
  background-color: #3b9dfa;
  border-radius: 50%;
`;

export const Hero = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(15, 17, 21, 1)),
    url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.2rem);
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 800;

  span {
    color: #3b9dfa;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #b0b0b0;
  margin-bottom: 40px;
  max-width: 550px;
`;

export const CtaContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 16px 35px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: #3b9dfa;
  color: white;
  box-shadow: 0 8px 20px rgba(59, 157, 250, 0.3);

  &:hover {
    background-color: #56aeff;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 16px 15px;
  background-color: #4a505e;
  color: #e0e0e0;

  &:hover {
    background-color: #5a6275;
    color: white;
    transform: translateY(-2px);
  }
`;

export const Features = styled.section`
  padding: 80px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 30px;
  border-radius: 18px;

  h3 {
    color: #3b9dfa;
    margin-bottom: 10px;
  }

  p {
    color: #8e8e8e;
    font-size: 0.95rem;
  }
`;