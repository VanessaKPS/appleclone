import React from 'react';
import LazyImage from './LazyImage';
import ProductCopy from './ProductCopy';
import CTALink from './CTALink';


const ProductLarge = (props) => {



return(
<a href={props.link0URL} target='_blank' rel="noopener noreferrer" className="product-wrapper" id={props.id}>
<LazyImage id={props.id} imgURL0={props.imgURL0} alt='background-img' imgURL1={props.imgURL1} imgURL2={props.imgURL2} />
<div className='information-wrapper'>
<ProductCopy title={props.title} content={props.content} model={props.model} id={props.id}/>
<CTALink link0URL={props.link0URL} link0Text={props.link0Text} link1URL={props.link1URL} link1Text={props.link1Text} />
</div></a>
)
}

export default ProductLarge;

