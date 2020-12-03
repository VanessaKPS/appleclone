import React from 'react';
import ProductLarge from '../ProductLarge';
import MacBookProImg from '../../Images/macbook_pro_13.jpg';

const MacBookPro = () => {
return  <ProductLarge title="MacBook Pro" content="All systems Pro." id="MacBookPro" model="13-inch model" imgURL0={MacBookProImg} link0URL='https://www.apple.com/uk/macbook-pro-13/' link1URL='https://www.apple.com/uk/shop/buy-mac/macbook-pro/13-inch' link0Text='Learn more' link1Text='Buy'/>
}

export default MacBookPro;