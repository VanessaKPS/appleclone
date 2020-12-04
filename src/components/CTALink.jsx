import React from 'react';
import {FiChevronRight, FiArrowUpRight} from 'react-icons/fi';


const CTALink = (props) => {
return <div className='cta-link-wrapper'>
  <a  href={props.link0URL} target='_blank' rel="noopener noreferrer">
    <div className='cta-link'>
      <p>{props.link0Text}</p> 
      <FiChevronRight className='cta-icon'/>
    </div>
  </a>
  {!props.link1URL? null :<a href={props.link1URL} target='_blank' rel="noopener noreferrer">
      <div className='cta-link'>
        <p>{props.link1Text}</p>
        {props.link1Text ==='Try it free'? <FiArrowUpRight className='cta-icon'/> : <FiChevronRight className='cta-icon'/>}
        
      </div>
    </a>
  }

</div>
}

export default CTALink;