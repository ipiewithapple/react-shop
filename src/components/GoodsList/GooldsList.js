import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import data from '../../data/goods.json';

function GoodsList() {

  const goodsCards = data.goods.map((card) => {
    return <GoodsCard key={card.id} title={card.title} desc={card.desc} src={card.img} price={card.price}/>
  })

  return (
      <div className="row">
        {goodsCards}
      </div>
  );
}

export default GoodsList;
