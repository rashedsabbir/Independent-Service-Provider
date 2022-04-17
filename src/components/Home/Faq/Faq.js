import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';
import faqImg from '../../../img/faq-img.svg';

const Faq = () => {
   return (
      <>
         <div className="faq_section">
            <div className="container">
               <div className="sec_title" data-aos="fade-up">
                  <h2>FAQ</h2>
               </div>
               <div className="row mt-5 align-items-center" data-aos="fade-up">
                  <div className="col-lg-6">
                     <div className="faq_content">
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
                           <Accordion.Item eventKey="3">
                              <Accordion.Header>Who are my travelling companions?</Accordion.Header>
                              <Accordion.Body>
                                 For privacy reasons we cannot provide you with advance details on your traveling companions. However, our tours appeal to a wide range of travellers, most of whom share an adventurous spirit and a desire to experience these destinations at a grass-roots level.
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="faq_img">
                        <img src={faqImg} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Faq;