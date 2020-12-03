        
import React from 'react';
import MacBookAir from './MacBookAir/MacBookAir.jsx';
import MacBookPro from './MacBookPro/MacBookPro.jsx';
import Gifts from './Gifts/Gifts.jsx';

const LargeProductSection = () => {
return (<section className='large-product'>
<MacBookAir />
        <MacBookPro />
        <Gifts />

</section>)
}
export default LargeProductSection;