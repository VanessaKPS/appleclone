import React from 'react';

import {useInView} from 'react-intersection-observer';

const LazyImage = (props) => {

const [ref, inView] = useInView({
  triggerOnce: true,
  rootMargin: '0px 0px -50px 0px'
});

return  <div ref={ref} className='background-img-wrapper' id={props.id}>
  {inView && <img className='background-img background-img-0'  src={props.imgURL0} alt='background-img' /> }
 {(inView && props.imgURL1)? <img className='background-img background-img-1'   src={props.imgURL1} alt='background-img' />: null}
 {(inView && props.imgURL2) ?<img className='background-img background-img-2'   src={props.imgURL2} alt='background-img' /> : null} 
</div> 
}

export default LazyImage;