import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-dark text-center text-light py-3">
      <hr/>
      <span>Все права защищены &copy; {year}</span>
    </footer>
  );
}

export default Footer;
