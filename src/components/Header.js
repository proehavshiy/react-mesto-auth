import React from 'react';
import HeaderContent from './HeaderContent';


function Header({ onSignOut, email }) {
  return (
    <header className="header page__section page__animation">
      <HeaderContent
        onSignOut={onSignOut}
        email={email} />
    </header>
  )
}

export default Header;
