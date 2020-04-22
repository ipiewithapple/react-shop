import React, { useState } from 'react';

function GoodsCard() {

  const [isInCart, changeIsInCart] = useState(true);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img src="assets/img/ps4.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <a href="/#" className="card-title">Sony Playstation 4</a>
          <p className="card-text">500 Gb, Геймпад, Wi-Fi, Bluetooth, Ethernet</p>
          <button className="btn btn-primary" onClick={() => changeIsInCart(!isInCart)}>{isInCart ? "Купить" : "В корзине"}</button>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
