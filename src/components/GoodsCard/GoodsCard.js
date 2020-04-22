import React from 'react';

function GoodsCard() {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img src="assets/img/ps4.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Название карточки</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/#" className="btn btn-primary">Переход куда-нибудь</a>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
