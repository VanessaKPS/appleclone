import React from 'react';
import ProductSmall from '../ProductSmall';
import './styles.css';
import {SiApple} from 'react-icons/si';
import AppleTVImg from '../../Images/apple_tv.jpg';

const AppleTV = () => {
  return <ProductSmall icon={<SiApple />} title='tv+'  content="Get one year of Apple TV+ free when you buy an Apple device.*" id="AppleTV" imgURL0={AppleTVImg} link0URL='https://www.apple.com/uk/apple-tv-plus/' link1URL='https://tv.apple.com/?itscg=10000&itsct=atv-0-apl_hp-pmo_try-apl-bnd-200204' link0Text='Learn more' link1Text='Try it free'/>

}

export default AppleTV;