import React from 'react';

import Navbar from '../Navbar/Navbar';

function Header(props) {
  const { cartCnt } = props;
  return (
    <header>
      <Navbar cartCnt={cartCnt} />
    </header>
  );
}

export default Header;
