import React from 'react';
import ProductSmall from './ProductSmall';
import MacMiniImg from '../Images/mac_mini.jpg';

const MacMini = () => {
  return <ProductSmall title='Mac mini' content='New guts. More glory.' id="MacMini" imgURL0={MacMiniImg} link0URL='https://www.apple.com/uk/mac-mini/' link1URL='https://www.apple.com/uk/shop/buy-mac/mac-mini' link0Text='Learn more' link1Text='Buy'/>

}

export default MacMini;
