import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import contactImg from '../../img/contact-us.svg'

const Contact = () => {
   // contact data
   const contactData = [
      {
         id: 1,
         icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
         title: 'Address',
         contactSmText_1: '31 park street, 5th Avenue,',
         contactSmText_2: 'New York'
      },
      {
         id: 2,
         icon: <FontAwesomeIcon icon={faPhoneAlt} />,
         title: 'Phone',
         contactSmText_1: '+31 666 888 0001',
         contactSmText_2: '+31 666 888 0001'
      },
      {
         id: 3,
         icon: <FontAwesomeIcon icon={faEnvelope} />,
         title: 'Email',
         contactSmText_1: 'info@example.com',
         contactSmText_2: 'info@example.com'
      },
   ]
   return (
      <>
         <div className="contact_banner">
            <div data-aos="fade-up"><h3>Contact</h3></div>
         </div>
         <div className="contact_wrapper">
            <div className="container">
               <div className="row my-5" data-aos="fade-up">
                  {
                     contactData.map(contactItem => <div key={contactItem.id} className="col-lg-4 mb-3">
                        <div className="contact_item shadow p-4 d-flex">
                           <div className="contact_icon">
                              <i>{contactItem.icon}</i>
                           </div>
                           <div className="contact_content">
                              <h3>{contactItem.title}</h3>
                              <p>{contactItem.contactSmText_1}</p>
                              <p>{contactItem.contactSmText_2}</p>
                           </div>
                        </div>
                     </div>)
                  }
               </div>
               <div className="row mt-5 align-items-center" data-aos="fade-up">
                  <div className="col-lg-6">
                     <div className="contact-img">
                        <img src={contactImg} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="contact-form">
                        <form>
                           <div className="row">
                              <div className="col-lg-6">
                                 <input type="text" placeholder="Name" />
                              </div>
                              <div className="col-lg-6">
                                 <input type="email" placeholder="Email" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-lg-6">
                                 <input type="number" placeholder="Phone Number" />
                              </div>
                              <div className="col-lg-6">
                                 <input type="text" placeholder="Subject" />
                              </div>
                           </div>
                           <textarea cols="20" rows="7" placeholder="Write message"></textarea>
                           <input className="mt-3" type="submit" value="Submit" />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Contact;