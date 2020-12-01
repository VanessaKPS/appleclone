import React from 'react';
import ProductLarge from './ProductLarge';
import iPadSnowflake from '../Images/ipad__snowflake.png';
import iPhoneSnowflake from '../Images/iphone_snowflake.png';
import WatchSnowflake from '../Images/watch__snowflake.png';

const Gifts = () => {
  
return    <ProductLarge title="Give something wonderful."   id="gifts"  imgURL0={iPhoneSnowflake} imgURL1={WatchSnowflake} imgURL2={iPadSnowflake} link0URL='https://www.apple.com/uk/shop/gifts'  link0Text='Shop gifts'/>
}

export default Gifts;