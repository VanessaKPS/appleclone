import React from 'react';
import LazyImage from './LazyImage';
import ProductCopy from './ProductCopy';
import CTALink from './CTALink';


const ProductSmall = (props) => {
return (
<a href={props.link0URL} className="product-wrapper small-unit " id={props.id}>
<LazyImage imgURL0={props.imgURL0} alt='background-img'  />

<div className='information-wrapper'>
<ProductCopy icon={props.icon} title={props.title} content={props.content} model={props.model} />
<CTALink link0URL={props.link0URL} link0Text={props.link0Text} link1URL={props.link1URL} link1Text={props.link1Text} />
</div></a>
)}

export default ProductSmall;