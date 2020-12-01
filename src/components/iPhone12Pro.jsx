import React from 'react';
import ProductSmall from './ProductSmall';
import iPhone12ProImg from '../Images/iphone_12_pro.jpg';

const iPhone12Pro = () => {
  return <ProductSmall title="iPhone 12 Pro" content="It's a leap year." id="iPhone12Pro" imgURL0={iPhone12ProImg} link0URL='https://www.apple.com/uk/iphone-12-pro/' link1URL='https://www.apple.com/uk/shop/buy-iphone/iphone-12-pro' link0Text='Learn more' link1Text='Buy'/>

}

export default iPhone12Pro;
