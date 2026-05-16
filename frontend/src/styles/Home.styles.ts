import styled from 'styled-components';

export const HomeWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  color: white;
  position: relative;
  overflow: hidden;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

interface SidebarProps {
  $isOpen: boolean;
}

export const Sidebar = styled.aside<SidebarProps>`
  width: 260px;
  background: rgba(15, 15, 15, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 100;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    background: rgba(20, 20, 20, 0.95);
    box-shadow: ${props => props.$isOpen ? '5px 0 25px rgba(0,0,0,0.5)' : 'none'};
  }
`;

export const Overlay = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 90;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 80;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MobileLogoText = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  margin-left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 40px;
  padding-left: 10px;
`;

export const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: #3b9dfa;
  border-radius: 50%;
  display: inline-block;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.button<NavItemProps>`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.08)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#b0b0b0'};
  border: ${props => props.active ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  padding: 12px 15px;
  border-radius: 12px;
  text-align: left;
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }
`;

export const ThemeButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MainContainer = styled.main`
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 100%;

  @media (max-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 8px;
  letter-spacing: -1px;

  span {
    color: #3b9dfa;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
`;

export const ControlsContainer = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SearchInputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0 16px;
  border-radius: 12px;
  color: #b0b0b0;
  min-height: 48px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #3b9dfa;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 0.95rem;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #707580;
  }
`;

export const BtnAdd = styled.button`
  background-color: #3b9dfa;
  color: white;
  border: none;
  padding: 0 24px;
  height: 48px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(59, 157, 250, 0.3);

  &:hover {
    background-color: #56aeff;
    box-shadow: 0 6px 20px rgba(59, 157, 250, 0.4);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TaskList = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TaskCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
`;

export const TaskCard = styled.div`
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  width: 100%;
`;

export const TaskText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  word-break: break-word;
`;

export const EditInput = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #3b9dfa;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  padding: 6px 12px;
  outline: none;
  flex: 1;
  width: 100%;
`;

export const ActionsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 12px;
  }
`;

export const IconButton = styled.button<{ variant?: 'danger' | 'info' | 'primary' }>`
  background: transparent;
  border: none;
  color: ${props => {
    if (props.variant === 'danger') return '#ff5252';
    if (props.variant === 'info') return '#b0b0b0';
    return '#3b9dfa';
  }};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => {
      if (props.variant === 'danger') return 'rgba(255, 82, 82, 0.1)';
      if (props.variant === 'info') return 'rgba(255, 255, 255, 0.08)';
      return 'rgba(59, 157, 250, 0.1)';
    }};
    color: ${props => props.variant === 'info' && 'white'};
  }
`;

export const InfoSection = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  font-size: 0.88rem;
  color: #b0b0b0;
  line-height: 1.4;
`;