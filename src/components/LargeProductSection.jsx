        
import React from 'react';
import MacBookAir from './MacBookAir';
import MacBookPro from './MacBookPro';
import Gifts from './Gifts';

const LargeProductSection = () => {
return (<section className='large-product'>
<MacBookAir />
        <MacBookPro />
        <Gifts />

</section>)
}
export default LargeProductSection;