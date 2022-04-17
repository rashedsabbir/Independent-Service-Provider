import React from 'react';
import './AboutUs.css';
import aboutImg from '../../img/about_img.svg';

const AboutUs = () => {
   return (
      <>
      <div className="about_banner">
         <div data-aos="fade-up"><h2>About Us</h2></div>
      </div>
         <div className="aboutUs_section" data-aos="fade-up">
            <div className="container">
               <div className="row align-items-center about_wrapper">
                  <div className="col-lg-6">
                     <div className="about_img">
                        <img src={aboutImg} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about_content">
                           <strong>About Us</strong>
                           <h2>Get ready for real time adventure</h2>
                           <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                           <button className="regular_btn">Book Your Destination</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutUs;