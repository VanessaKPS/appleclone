import React from 'react';
import AdditionalInformation from './AdditionalInformation';
import Directory from './Directory';
import FooterNav from './FooterNav'

const Footer = () => {

  return <section className='footer-section'><div className='footer-container'>
  <AdditionalInformation />
    <Directory />
    <FooterNav />
  </div></section>
}

export default Footer;