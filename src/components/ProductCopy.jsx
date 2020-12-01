import React from 'react';
import {useInView} from 'react-intersection-observer';


const ProductCopy = (props) => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -60px 0px'
  });

return(<div ref={ref} className='copy-wrapper'>
<p className='detail'>{props.model}</p>
{(inView && props.id === 'gifts') && <div className='gift-icon-wrapper' />}
<p className="product-title">{props.icon}{props.title}</p>
<p className='description'>{props.content}</p>
</div>)
}

export default ProductCopy;