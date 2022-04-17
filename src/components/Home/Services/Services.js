import { faBed, faHamburger, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
   const servicesData = [
      {
         id: 1,
         icon: <FontAwesomeIcon icon={faBed} />,
         title: 'Delux Room',
         desc: 'Our rooms and suites are designed to ensure both sea and hill side of beautiful Switzerland'
      },
      {
         id: 2,
         icon: <FontAwesomeIcon icon={faHamburger} />,
         title: 'Delicious Food',
         desc: 'Enjoy delicious food and have a good time at one of our amazing restaurants'
      },
      {
         id: 3,
         icon: <FontAwesomeIcon icon={faTaxi} />,
         title: 'Airport Taxi',
         desc: 'if you have any familiar, relative or friend in Travelo Tour, ask them to book a taxi for you.'
      },
   ]
   return (
      <>
         <div className="services_container">
            <div className="container" data-aos="fade-up">
               <div className="sec_title mb-5">
                  <h2>Services</h2>
               </div>
               <div className="row">
                  {
                     servicesData.map(service => {
                        return (
                           <div key={service.id} className="col-lg-4 col-md-4 text-center mb-3">
                              <div className="service_item">
                                 <div className="ser_icon">
                                    <i>{service.icon}</i>
                                 </div>
                                 <div className="ser_content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Services;