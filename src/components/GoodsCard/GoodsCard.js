import React, { useState } from 'react';

function GoodsCard(props) {
  const { title, desc, price, src, addGood } = props
  const [isInCart, changeIsInCart] = useState(false);
  const onAddCartClick = () => {
    if(!isInCart) {
      changeIsInCart(true);
      addGood();
    }
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img src={src} className="card-img-top" alt={title} height="200" style={{objectFit: "contain"}}/>
        <div className="card-body">
          <a href="/#" className="card-title">{title}</a>
          <p className="card-text">{desc}</p>
          <h4 className="text-light">{`${price} руб.`}</h4>
          <button className="btn btn-primary" onClick={onAddCartClick}>{!isInCart ? "Купить" : "В корзине"}</button>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
