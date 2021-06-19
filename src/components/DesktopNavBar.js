import React from 'react';

function DesktopNavBar({ onSignOut, email }) {
  return (
    <>
      <p className="header__email">{email}</p>
      <button className="header__button header__button_logout page__button" onClick={onSignOut}>Выйти</button>
    </>
  );
}

export default DesktopNavBar;
