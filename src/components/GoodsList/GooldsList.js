import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';


function GoodsList(props) {
  const {goods, addGood} = props;
  const goodsCards = goods.map((card) => {
    return <GoodsCard key={card.id} title={card.title} desc={card.desc} src={card.img} price={card.price} addGood={addGood}/>
  })

  return (
      <div className="row">
        {goodsCards}
      </div>
  );
}

export default GoodsList;
