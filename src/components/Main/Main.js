import React, { Component } from 'react';
import GoodsList from '../GoodsList/GooldsList';

export default class Main extends Component {
  render() {
    return (
      <main className=" my-3 my-lg-5">
        <GoodsList />
      </main>
    );
  }
}


