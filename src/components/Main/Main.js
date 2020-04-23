import React, { Component } from 'react';
import GoodsList from '../GoodsList/GooldsList';
import GoodsMenu from '../GoodsMenu/GoodsMenu';

export default class Main extends Component {  
  render() {    
    const {goods, addGood} = this.props;
    return (
      <main className=" my-3 my-lg-5">
        <div className="container">
          <div className="row">
            <GoodsMenu />
            <section className="content col-12 col-lg 10">
              <GoodsList goods={goods} addGood={addGood}/>
            </section>
          </div>
        </div>

      </main>
    );
  }
}


