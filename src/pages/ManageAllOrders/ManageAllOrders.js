import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
   // all user state
   const [allUsersBooking, setAllUsersBooking] = useState([]);
   // pending update state 
   const [isPending,setIsPending] = useState(false);
   // loading state
   const [isLoading,setIsLoading] = useState(true);
   useEffect(() => {
      fetch(`https://thawing-bayou-70947.herokuapp.com/bookingAllUsers`)
         .then(res => res.json())
         .then(data => {
            setAllUsersBooking(data)
            setIsLoading()
         })
   }, [isPending]);

   // handleDelete
   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure you want to delete this ?')
      if (proceed) {
         fetch(`https://thawing-bayou-70947.herokuapp.com/deleteManageUsers/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            const remaining = allUsersBooking.filter(booking => booking._id !== id)
            setAllUsersBooking(remaining)
         })
      }
   };
   // handleUpdate
   const handleUpdate = (id) => {
      fetch(`https://thawing-bayou-70947.herokuapp.com/updateStatus/${id}`,{
         method:'PUT'
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if(data.acknowledged){
            alert('Booking Approved')
            setIsPending(true)
         }
      })
   }
   return (
      <>
      <div className="manageAllOrders_banner"></div>
         <div className="manageAllOrders_section">
            <div className="container">
               <div className="row">
               {isLoading && <div className="text-center my-5"><Spinner animation="border" /></div>}
                  {
                     allUsersBooking.map(allBooking => {
                        return (
                           <div key={allBooking._id} className="col-lg-4 col-md-6" data-aos="fade-up">
                              <div className="card mb-3">
                                 <div className="row g-0">
                                    <div className="col-md-5 booking_img">
                                       <img src={allBooking?.bookingOrder?.imgUrl} className="img-fluid rounded-start" alt="..." />
                                       <div className="status">
                                          <span>{allBooking?.status}</span>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="card-body">
                                          <h5 className="card_title">{allBooking?.bookingOrder?.title}</h5>
                                          <p className="card-text">{allBooking?.date}</p>
                                          <button onClick={() => handleDelete(allBooking._id)}
                                             className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
                                          <button title="Approve booking" onClick={() => handleUpdate(allBooking._id)}
                                             className="btn btn-success mx-2"><FontAwesomeIcon icon={faPen}/></button>
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

export default ManageAllOrders;