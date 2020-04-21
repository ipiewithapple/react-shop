import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-dark text-center text-light">
      <span>Все права защищены &copy; {year}</span>
    </footer>
  );
}

export default Footer;
