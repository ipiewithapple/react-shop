import React, {Component} from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import data from './data/goods.json';


export default class App extends Component {

  state = {
    cartCnt: 0
  }

  addGood = () => {
    this.setState({cartCnt: this.state.cartCnt + 1 });
  }

  render() {
    return (
      <>
        <Header cartCnt = {this.state.cartCnt} />
        <Main {...data} addGood={this.addGood}/>
        <Footer />
      </>
    );
  }
}

