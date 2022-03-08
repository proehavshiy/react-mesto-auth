import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoPath from '../images/Mesto-logo.svg';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';
import ExpandedNavBar from './ExpandedNavBar';

function HeaderContent({ onSignOut, email }) {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 481px)' })

  const [isExpandedNavBar, setIsExpandedNavBar] = React.useState(false);

  //если разрешение десктопное или перешли на другую страницу, то автоматически скрываем меню
  React.useEffect(() => {
    setIsExpandedNavBar(false);
  }, [isDesktop, location])

  //в зависимости от текущей страницы и статуса логина отображаем нужные поля
  return (
    <div className="header__content" >
      {isExpandedNavBar &&
        <ExpandedNavBar
          onSignOut={onSignOut}
          email={email} />
      }
      <div className="header__main page__animation">
        <img className="logo" src={logoPath} alt="логотип Место" />
        <nav className="header__nav-bar">
          {
            (location.pathname === '/' && (
              (isMobile && <MobileNavBar expandNavBar={setIsExpandedNavBar} />) ||
              (isDesktop && <DesktopNavBar onSignOut={onSignOut} email={email} />)
            )) ||
            (location.pathname === '/sign-in' && <NavLink className="header__button page__button" to="/sign-up">Регистрация</NavLink>)
            ||
            (location.pathname === '/sign-up' && <NavLink className="header__button page__button" to="/sign-in">Войти</NavLink>)
          }
        </nav>
      </div >
    </div >
  );
}

export default HeaderContent;