import React from 'react';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/#">RactShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">О нас</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Доставка</a>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-primary float-right mr-2"><i className="fas fa-shopping-cart"></i><span className="badge badge-primary badge-pill">14</span></button>
          <button type="button" className="btn btn-primary">Вход</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
