import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  User, 
  CircleHelp,
  Menu,
  LogOut,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from '../styles/Home.styles';
import { Workspace } from '../components/Workspace';
import { CalendarView } from '../components/CalendarView';
import { HowUse } from '../components/HowUse';
import { CalendarModal } from '../components/CalendarModal';
import { LogoutModal } from '../components/LogoutModal';
import type { User as UserType } from '../types/auth';

type ViewType = 'workspace' | 'calendar' | 'howuse';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('workspace');
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [showAllTasks, setShowAllTasks] = useState<boolean>(true);
  
  const [userName, setUserName] = useState<string>('Modo Visitante');
  const [showLogout, setShowLogout] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isVisitor = userName === 'Modo Visitante';

  useEffect(() => {
    if (location.state?.showWelcomeToast) {
      const { userName: stateName, isNewUser } = location.state;
      
      if (isNewUser) {
        toast.success(`Seja bem-vindo, ${stateName}!`);
      } else {
        toast.success(`Seja bem-vindo novamente, ${stateName || ''}!`);
      }

      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    const savedUser = localStorage.getItem('@TodoApp:user');
    if (savedUser) {
      try {
        const user: UserType = JSON.parse(savedUser);
        setUserName(user.name);
      } catch (e) {
        console.error("Erro ao converter dados do usuário", e);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowLogout(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogoutClick = () => {
    if (isVisitor) {
      localStorage.removeItem('@TodoApp:token');
      localStorage.removeItem('@TodoApp:user');
      toast.error('Sessão encerrada!');
      navigate('/register');
    } else {
      setIsLogoutModalOpen(true);
      setShowLogout(false);
    }
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('@TodoApp:token');
    localStorage.removeItem('@TodoApp:user');
    setIsLogoutModalOpen(false);
    toast.error('Sessão encerrada!');
    navigate('/login');
  };

  return (
    <S.HomeWrapper>
      <S.MobileHeader>
        <S.MenuButton onClick={() => setIsSidebarOpen(true)}>
          <Menu size={24} />
        </S.MenuButton>
        <S.MobileLogoText>
          <S.Dot /> To-Do list .
        </S.MobileLogoText>
      </S.MobileHeader>

      {isSidebarOpen && <S.Overlay onClick={() => setIsSidebarOpen(false)} />}

      <S.Sidebar $isOpen={isSidebarOpen}>
        <div>
          <S.LogoArea>
            <S.Dot /> To-Do list .
          </S.LogoArea>
          
          <S.NavMenu>
            <S.NavItem 
              $active={currentView === 'workspace'} 
              onClick={() => { setIsSidebarOpen(false); setCurrentView('workspace'); }}
            >
              <LayoutDashboard size={18} />
              Workspace
            </S.NavItem>
            
            <S.NavItem 
              $active={currentView === 'calendar'} 
              onClick={() => { setIsSidebarOpen(false); setCurrentView('calendar'); }}
            >
              <Calendar size={18} />
              Calendário
            </S.NavItem>

            <S.NavItem 
              $active={currentView === 'howuse'} 
              onClick={() => { setIsSidebarOpen(false); setCurrentView('howuse'); }}
            >
              <CircleHelp size={18} />
              Como usar
            </S.NavItem>
          </S.NavMenu>
        </div>

        <div 
          ref={userMenuRef} 
          style={{ 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <S.ThemeButton 
            onClick={() => setShowLogout(!showLogout)} 
            style={{ 
              cursor: 'pointer',
              userSelect: 'none',
              background: showLogout ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
              border: 'none',
              borderRadius: '0',
              margin: '0',
              width: '100%',
              transition: 'background 0.2s ease',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <User size={18} />
            <span style={{ flex: 1, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              {userName}
            </span>
          </S.ThemeButton>

          <div 
            style={{ 
              display: 'grid',
              gridTemplateRows: showLogout ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
              <button 
                onClick={handleLogoutClick} 
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 16px',
                  color: isVisitor ? '#2ecc71' : '#ff6b6b',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isVisitor ? 'rgba(46, 204, 113, 0.08)' : 'rgba(255, 107, 107, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <LogOut size={16} />
                {isVisitor ? 'Cadastre-se' : 'Sair da conta'}
              </button>
            </div>
          </div>
        </div>
      </S.Sidebar>

      {currentView === 'workspace' && (
        <Workspace 
          setIsCalendarOpen={() => setIsCalendarModalOpen(true)} 
          selectedDate={selectedDate}
          showAllTasks={showAllTasks}
          setShowAllTasks={setShowAllTasks}
        />
      )}
      
      {currentView === 'calendar' && (
        <CalendarView 
          onSelectDate={(date) => {
            setSelectedDate(date);
            setShowAllTasks(false);
          }}
          setView={setCurrentView}
        />
      )}
      
      {currentView === 'howuse' && (
        <HowUse />
      )}

      <CalendarModal 
        isOpen={isCalendarModalOpen} 
        onClose={() => setIsCalendarModalOpen(false)} 
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        setShowAllTasks={setShowAllTasks}
      />

      <LogoutModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </S.HomeWrapper>
  );
};

export default Home;