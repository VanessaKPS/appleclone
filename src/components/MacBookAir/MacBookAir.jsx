import React from 'react';
import ProductLarge from '../ProductLarge';
import MacBookAirImg from '../../Images/macbook_air.jpg';
 
const MacBookAir = () => {
return <ProductLarge title="MacBook Air" content="Power. It's in the Air." id="MacBookAir" imgURL0={MacBookAirImg} link0URL='https://www.apple.com/uk/macbook-air/' link1URL='https://www.apple.com/uk/shop/buy-mac/macbook-air' link0Text='Learn more' link1Text='Buy'/>
}

export default MacBookAir;