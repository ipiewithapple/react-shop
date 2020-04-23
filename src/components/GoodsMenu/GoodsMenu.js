import React from 'react';

function GoodsMenu() {
  return (
    <aside className="col-12 col-lg-2 mb-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="/#">Консоли</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Аксессуары</a>
        </li>
      </ul>
    </aside>
  );
}

export default GoodsMenu;
