
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
                        <Accordion.Header>What are differences between authorization and authentication?</Accordion.Header>
                        <Accordion.Body>
                           Consider someone approaching a locked door to look after a pet while the family is on vacation. That person requires the following:
                           The use of a key for authentication. In the same way that a system only permits access to users who have the necessary credentials, the lock on the door only allows entrance to those who have the correct key.
                           Permissions are a form of authorization. Once inside, the individual has the authority to enter the kitchen and open the pet food cabinet. It's possible that the individual does not have authorization to enter the bedroom for a little nap.
                           In this case, authentication and authorization are combined. The right to enter the residence is granted to a pet sitter (authentication), they have access to certain areas once they arrive (authorization).
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                           Indeed, using Firebase as a backend for dynamic apps is a less technical and time-consuming alternative to building full-fledged backend code. You might also want to use this tool if you intend to host and administer your app in the cloud in the future. Because Firebase is serverless, it eliminates the need to bother about cloud server configuration details. It also allows you access to other Google goods and capabilities, such as Google Drive and Sheets, as a Google Cloud service. For example, you can import dummy data from Google Sheets and utilize it to serve your app momentarily. Different ways to Authenticate a Web Application <li>Cookie-Based authentication</li>
                           <li>Token-Based authentication</li>
                           <li>Third party access(OAuth, API-token)</li>
                           <li>OpenId</li>
                           <li>SAML</li>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header> What other services does firebase provide other than authentication?</Accordion.Header>
                        <Accordion.Body>
                           Firebase is a complete package that may help you construct mobile or web applications faster and more efficiently with fewer resources. Let's take a look at some of the services and how they're used. Firebase offers a variety of services, the most useful of which are:
                           <br /><br />
                           Cloud Functions <br /> Cloud Firestore <br />
                           Authentication <br /> Hosting <br />
                           Storage in the Cloud <br />
                           Predictions <br /> Google Analytics <br />
                           Messaging in the Cloud <br />
                           Links that are constantly changing <br />
                           Remote Configuration <br /><br />
                           Firebase is a complete package that may help you construct mobile or web applications faster and more efficiently with fewer resources. Let's take a look at some of the services and how they're used.
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