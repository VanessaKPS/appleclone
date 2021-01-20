import React from 'react'
import AdditionalInformation from './Footer/AdditionalInformation.jsx'
import Directory from './Footer/Directory.jsx'
import FooterNav from './Footer/FooterNav.jsx'

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-container'>
                <AdditionalInformation />
                <Directory />
                <FooterNav />
            </div>
        </section>
    )
}

export default Footer
