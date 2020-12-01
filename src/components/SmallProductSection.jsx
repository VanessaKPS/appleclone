import React from 'react';
import MacMini from './MacMini';
import IPhone12Pro from './iPhone12Pro';
import IPhone12 from './iPhone12';
import HomePodMini from './HomePodMini';
import AppleTV from './AppleTV';
import Fitness from './Fitness+';


const SmallProductSection = ()=> {
  return (<section className='small-product'>
 <MacMini />
 <IPhone12Pro /> 
 <IPhone12 />
 <HomePodMini />
 <AppleTV />
 <Fitness />
</section>)
}

export default SmallProductSection;