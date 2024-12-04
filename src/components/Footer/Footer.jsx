// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tenetur, consequatur error modi dolore voluptatem!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-centre">
                <h2>Company</h2>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-435-9470</li>
                <li>contact@panku.com</li>
             </ul>
            </div>
      </div>
      <hr/>
      <p className="Footer-copyright">Copyright 2024 © Bundl Technologies Pvt. Ltd</p>
    </div>
  )
}

export default Footer
