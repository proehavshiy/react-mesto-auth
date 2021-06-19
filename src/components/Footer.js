import React from 'react';

function Footer() {
  return(
    <footer className="footer page__section page__animation">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  )
}

export default Footer;
