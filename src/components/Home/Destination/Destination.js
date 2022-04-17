import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = () => {
   // destinations state
   const [destinations, setDestinations] = useState([]);
   // loading state
   const [isLoading,setIsLoading] = useState(true);
   // load data
   useEffect(() => {
      fetch('https://thawing-bayou-70947.herokuapp.com/destinations')
         .then(res => res.json())
         .then(data => {
            setDestinations(data);
               setIsLoading(false)
         })
   }, [])
   // loading condition
   if(isLoading){
     return <div className="text-center my-5"><Spinner animation="border" /></div>
   }
   return (
      <>
         <div className="destination_section">
            <div className="container">
               <div className="sec_title" data-aos="fade-up">
                  <h2>Our Destinations</h2>
               </div>
               <div className="row mt-5">
                  {
                     destinations.map(desItem => {
                        return (
                           <div key={desItem._id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                              <Card>
                                 <div className="destination_img">
                                    <img src={desItem?.imgUrl} alt="" />
                                    <div className="price">
                                       <p>$ {desItem?.price}</p>
                                    </div>
                                 </div>
                                 <Card.Body>
                                    <Card.Title>{desItem?.title}</Card.Title>
                                    <Card.Text className="card_desc">
                                       {desItem?.description}
                                    </Card.Text>
                                    <Link to={`bookingRegistration/${desItem._id}`}>
                                       <button className="regular_btn">Book Now</button></Link>
                                 </Card.Body>
                              </Card>
                           </div>
                        )
                     })
                  }
               </div>
               <div className="text-center mt-5" data-aos="fade-up">
                  <button className="regular_btn">Coming More Destinations</button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Destination;