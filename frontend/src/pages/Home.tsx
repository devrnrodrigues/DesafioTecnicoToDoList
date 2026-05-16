import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  User, 
  CircleHelp,
  Menu,
} from 'lucide-react';
import * as S from '../styles/Home.styles';
import { Workspace } from '../components/Workspace';
import { CalendarView } from '../components/CalendarView';
import { HowUse } from '../components/HowUse';
import { CalendarModal } from '../components/CalendarModal';

type ViewType = 'workspace' | 'calendar' | 'howuse';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('workspace');
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

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

        <S.ThemeButton>
          <User size={18} />
          Modo Visitante
        </S.ThemeButton>
      </S.Sidebar>

      {currentView === 'workspace' && (
        <Workspace setIsCalendarOpen={() => setIsCalendarModalOpen(true)} />
      )}
      
      {currentView === 'calendar' && (
        <CalendarView />
      )}
      
      {currentView === 'howuse' && (
        <HowUse />
      )}

      <CalendarModal 
        isOpen={isCalendarModalOpen} 
        onClose={() => setIsCalendarModalOpen(false)} 
      />
    </S.HomeWrapper>
  );
};

export default Home;