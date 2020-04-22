import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsList() {
  return (
      <div className="row">
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </div>
  );
}

export default GoodsList;
