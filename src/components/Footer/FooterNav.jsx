import React from 'react';
import './styles.css'

const FooterNav = () => {
  return <div className='footer-nav-wrapper'>
            <div className='footer-shop-link'>
              <p>More ways to shop: <a href='https://www.apple.com/uk/retail/' target='_blank' rel="noopener noreferrer">find an Apple Store</a> or <a href='https://locate.apple.com/uk/en/' target='_blank' rel="noopener noreferrer">other retailer</a> near you. Or call 0800 048 0408.</p>
            </div>
            <div className='footer-legal'>
              <div className='footer-legal-copyright'>
                <p>Copyright © 2020 Apple Inc. All rights reserved.</p>
              </div>
            
              <div className='footer-legal-links'>
                <a href='https://www.apple.com/uk/legal/privacy/' target='_blank' rel="noopener noreferrer">Privacy Policy</a>
                <a href='https://www.apple.com/legal/privacy/en-ww/cookies/' target='_blank' rel="noopener noreferrer">Use of Cookies</a>
                <a href='https://www.apple.com/uk/legal/internet-services/terms/site.html' target='_blank' rel="noopener noreferrer">Terms of Use</a>
                <a href='https://www.apple.com/uk/shop/browse/open/salespolicies' target='_blank' rel="noopener noreferrer">Sales and Refunds</a>
                <a href='https://www.apple.com/uk/legal/' target='_blank' rel="noopener noreferrer">Legal</a>
                <a className='site-map' href='https://www.apple.com/uk/sitemap/' target='_blank' rel="noopener noreferrer"ghu>Site Map</a> 
              </div>
              <div className='location'>
              <p>UK</p>
              </div>
            </div>
          </div>
}
export default FooterNav;