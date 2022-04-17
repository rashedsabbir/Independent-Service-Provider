import React from 'react';
import './Footer.css';
import logo from '../../../img/white-logo.webp';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   return (
      <>
         <footer className="footer_section">
            <div className="container">
               <div className="footer_wrapper">
                  <div className="row">
                     <div className="col-lg-3 col-sm-6 text-white mb-4">
                        <div className="footer_item">
                           <div className="footer_title">
                              <h4>About</h4>
                           </div>
                           <p className="footer_about_text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <div className="social_links d-flex">
                              <div><FontAwesomeIcon className="icon" icon={faFacebookF}/></div>
                              <div><FontAwesomeIcon className="icon" icon={faTwitter}/></div>
                              <div><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 text-white mb-4">
                        <div className="footer_item">
                           <div className="footer_title mb-4">
                              <h4>Navigation</h4>
                           </div>
                           <p><Link to="/">Home</Link></p>
                           <p><Link to="/">About</Link></p>
                           <p><Link to="/">Blog</Link></p>
                           <p><Link to="/">Contact</Link></p>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 text-white mb-4">
                        <div className="footer_item">
                           <div className="footer_title">
                              <h4>Support</h4>
                           </div>
                           <p>Customer Support</p>
                           <p>Terms & Condition</p>
                           <p>Privacy and Policy</p>
                           <p>Forum</p>
                           <p>Tour Guid</p>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 text-white mb-4">
                        <div className="footer_logo mb-4">
                           <img src={logo} alt="" />
                        </div>
                        <p className="address">5th flora, 700/D kings road, green
                           lane New York-1782</p>
                        <p>Phone: +10 367 826 2567</p>
                        <p>Email: demo@email.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;