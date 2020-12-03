import React from 'react';
import MacMini from './MacMini/MacMini.jsx';
import IPhone12Pro from './iPhone12Pro/iPhone12Pro.jsx';
import IPhone12 from './iPhone12/iPhone12.jsx';
import HomePodMini from './HomepodMini/HomePodMini.jsx';
import AppleTV from './AppleTv/AppleTV.jsx';
import Fitness from './Fitness/Fitness+.jsx';


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