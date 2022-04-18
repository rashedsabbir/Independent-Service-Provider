
import React from 'react';
import { Accordion } from 'react-bootstrap';

import './Contact.css';


const Contact = () => {

   //////////////  Blog  /////////////////

   return (
      <>
         <div className="contact_banner">
            <div data-aos="fade-up"><h3>Blogs</h3></div>
         </div>
         <div className="contact_wrapper">
            <div className="container">
               <div className="row my-5" data-aos="fade-up">
                  <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>Do your tours include international airfare?</Accordion.Header>
                        <Accordion.Body>
                           Travelers arrive from all over the world to begin our tours and it is not possible to include international airfare in our prices. We would be happy to help you arrange flights. Just ask for an air quote when making your booking.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>Can you help arrange my travel visas?</Accordion.Header>
                        <Accordion.Body>
                           Requirements for travel visas vary widely depending on your nationality and your destination. Although we are unable to arrange visas on your behalf we have provided links on our “Resources” page to websites that will help you determine if visas are required.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header>How many people can join a tour?</Accordion.Header>
                        <Accordion.Body>
                           We keep our group sizes low so you have the freedom to move around and get involved with your surroundings, as well as more personal attention from our local guides. This intimate size ensures that your group will not crowd your experience.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </div>



            </div>
         </div>
      </>
   );
};

export default Contact;