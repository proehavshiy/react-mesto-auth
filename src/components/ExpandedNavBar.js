import React from 'react';

function ExpandedNavBar({ onSignOut, email }) {
  return (
    <div className={`header__expanded-nav-bar`}>
      <p className="header__email">{email}</p>
      <button className="header__button header__button_logout page__button" onClick={onSignOut}>Выйти</button>
    </div>
  );
}

export default ExpandedNavBar;


