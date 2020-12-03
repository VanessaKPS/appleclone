import React from 'react';
import './styles.css'

const FooterNav = () => {
  return <div className='footer-nav-wrapper'>
            <div className='footer-shop-link'>
              <p>More ways to shop: <a href='https://www.apple.com/uk/retail/'>find an Apple Store</a> or <a href='https://locate.apple.com/uk/en/'>other retailer</a> near you. Or call 0800 048 0408.</p>
            </div>
            <div className='footer-legal'>
              <div className='footer-legal-copyright'>
                <p>Copyright © 2020 Apple Inc. All rights reserved.</p>
              </div>
            
              <div className='footer-legal-links'>
                <a href='https://www.apple.com/uk/legal/privacy/'>Privacy Policy</a>
                <a href='https://www.apple.com/legal/privacy/en-ww/cookies/'>Use of Cookies</a>
                <a href='https://www.apple.com/uk/legal/internet-services/terms/site.html'>Terms of Use</a>
                <a href='https://www.apple.com/uk/shop/browse/open/salespolicies'>Sales and Refunds</a>
                <a href='https://www.apple.com/uk/legal/'>Legal</a>
                <a className='site-map' href='https://www.apple.com/uk/sitemap/'>Site Map</a> 
              </div>
              <div className='location'>
              <p>UK</p>
              </div>
            </div>
          </div>
}
export default FooterNav;