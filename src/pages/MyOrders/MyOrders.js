import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
   // booking state
   const [userBooking, setUserBooking] = useState([]);
   // loading state
   const [isLoading,setIsLoading] = useState(true);
   // use auth
   const { user } = useAuth();
   // user email
   const userEmail = user?.email;
   // console.log(userEmail);

   useEffect(() => {
      fetch(`https://thawing-bayou-70947.herokuapp.com/userBooking/${userEmail}`)
         .then(res => res.json())
         .then(data => {
            setUserBooking(data);
            setIsLoading(false)
         })
   }, [userEmail])

   // handleDelete
   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure you want to delete this ?')
      if (proceed) {
         fetch(`https://thawing-bayou-70947.herokuapp.com/deleteBooking/${id}`, {
            method: 'DELETE'
         })
            .then(res => res.json)
            .then(data => {
               const remaining = userBooking.filter(booking => booking._id !== id)
               setUserBooking(remaining)
            })
      }
   }

   return (
      <>
      <div className="myOrder_banner"></div>
         <div className="myOrder_section">
            <div className="container">
               <div className="row" data-aos="fade-up">
               {isLoading && <div className="text-center my-5"><Spinner animation="border" /></div>}
                  {
                     userBooking.map(booking => {
                        return (
                           <div key={booking._id} className="col-lg-4 col-md-6">
                              <div className="card mb-3">
                                 <div className="row g-0">
                                    <div className="col-md-6 booking_img">
                                       <img src={booking?.bookingOrder?.imgUrl} className="img-fluid rounded-start" alt="..." />
                                       <div className="status">
                                          <span>{booking?.status}</span>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="card-body">
                                          <h5 className="card_title">{booking?.bookingOrder?.title}</h5>
                                          <p className="card-text">{booking?.date}</p>
                                          <button onClick={() => handleDelete(booking._id)}
                                             className="btn btn-danger">cancel</button>
                                       </div>
                                    </div>
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

export default MyOrders;