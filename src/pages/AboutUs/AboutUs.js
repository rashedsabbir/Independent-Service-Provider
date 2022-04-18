import React from 'react';
import './AboutUs.css';
import aboutImg from '../../img/about.jpg';

const AboutUs = () => {
   return (
      <>
         <div className="about_banner">
            <div data-aos="fade-up"><h2>About</h2></div>
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
                        <strong>About</strong>
                        <h2>MD Rashedul Hassan Sabbir</h2>
                        <p>I've established some goals for myself that I'd like to accomplish in my lifetime. Some of these objectives are personal in nature, while others are professional in nature. My professional goals in life are to find a good work that makes me happy, to obtain a decent education, to find a career that pays well enough for me to support my family, and to assist others. Goals Getting a decent education is very essential to me. Most occupations necessitate some level of schooling. I wouldn't be able to operate well at work if I didn't have an education because I wouldn't know what to do.</p>
                        <button className="regular_btn">Provided Services</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutUs;