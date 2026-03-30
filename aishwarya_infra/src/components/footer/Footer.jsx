import logo from "../../assets/company-logo.png";
import { Link } from "react-router-dom"
import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className="footer-section">
             <div className="footer-hold-container">
                 <div className="footer-first-sect">
                      <img src={logo} alt="company-img" className="company-icon-img" />
                      <p>Building the foundations of tomorrow with innovation</p>
                 </div>
                 <div className="footer-second-container">
  <h2>Quick Links</h2>
  <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/contact">Contact Us</Link>
  <Link to="/services">Services</Link>
  <Link to="/gallery">Gallery</Link>
</div>

<div className="footer-third-container">
  <h2>Useful Links</h2>
  <Link to="/privacy-policy">Privacy Policy</Link>
  <Link to="/terms">Terms & Conditions</Link>
  <div className="logo-imges-container">
                            <span className="ic--baseline-facebook"></span>
                            <span className="mage--instagram-circle"></span>
                            <span className="formkit--twitter"></span>
                            <span className="entypo-social--linkedin-with-circle"></span>
                        </div>
</div>
                 <div className="footer-fourth-container">
                     <h2>Office Address</h2>
                     <p>Aishwarya Lakshmi Infra, Plot no. 12, Madhapur, Hyderabad, Telangana-500081, India.</p>
                     <p>+91 9000012345</p>
                     <p>info@aishwaryalakshmiinfra.com</p>
                 </div>
             </div>
             <hr />
                <div className='copyright-container'>
                    <div className='three-content'>
                        <p>Terms of Use</p><span className="ph--line-vertical-thin"></span>
                        <p>Privacy Policy</p><span className="ph--line-vertical-thin"></span>
                        <p>Disclaimer</p>
                    </div>
                   <p>Copyright © 2025 All rights reserved. Designed by <a href="https://saanvikasolutions.com/" target="_blank">Saanvika Software Solutions.</a></p>
                </div>
                
        </div>
        </>
    )
}
export default Footer