import React from 'react';
import ProductSmall from '../ProductSmall';
import './styles.css';
import HomePodMiniImg from '../../Images/homepod_mini.jpg';
const HomePodMini = () => {
  return <ProductSmall title="HomePod mini"  id="HomePodMini" imgURL0={HomePodMiniImg} link0URL='https://www.apple.com/uk/homepod-mini/' link1URL='https://www.apple.com/uk/shop/buy-homepod/homepod-mini' link0Text='Learn more' link1Text='Buy'/>

}

export default HomePodMini;