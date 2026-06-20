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
  flex-shrink: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
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
    background: rgba(15, 15, 15, 0.6);
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
  $active?: boolean; 
}

export const NavItem = styled.button<NavItemProps>`
  position: relative;
  overflow: hidden; /* Garante que a linha fique contida nas bordas arredondadas do botão */
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#b0b0b0'};
  border: none;
  padding: 12px 15px;
  border-radius: 8px; /* Arredondamento do botão */
  text-align: left;
  font-size: 0.95rem;
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;  
    background: #3b9dfa; 
    border-radius: ${props => props.$active ? '8px 0 0 8px' : '0'};
    opacity: ${props => props.$active ? 1 : 0};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
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