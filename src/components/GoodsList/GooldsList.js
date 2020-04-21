import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsList() {
  return (
    <div className="container">
      <div className="row">
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </div>
    </div>

  );
}

export default GoodsList;
