import React from 'react';

function GoodsMenu() {
  return (
    <aside class="col-12 col-lg-2 mb-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="/#">Товар1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Товар2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Товар3</a>
        </li>
      </ul>
    </aside>
  );
}

export default GoodsMenu;
