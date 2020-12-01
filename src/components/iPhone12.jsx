import React from 'react';
import ProductSmall from './ProductSmall';
import iPhone12Img from '../Images/iphone_12.jpg';

const iPhone12 = () => {
  return <ProductSmall title="iPhone 12" content="Blast past fast." id="iPhone12" imgURL0={iPhone12Img} link0URL='https://www.apple.com/uk/iphone-12/' link1URL='https://www.apple.com/uk/shop/buy-iphone/iphone-12' link0Text='Learn more' link1Text='Buy'/>

}

export default iPhone12;