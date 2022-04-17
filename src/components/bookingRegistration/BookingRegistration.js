import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './bookingRegistration.css';

const BookingRegistration = () => {
   // booking state
   const [bookingOrder, setOrderBooking] = useState({});
   // use auth
   const { user } = useAuth()
   // params id
   const { id } = useParams();
   // hook form
   const { register, handleSubmit, reset } = useForm();
   // use history
   const history = useHistory();

   // load dynamic data
   useEffect(() => {
      fetch(`https://thawing-bayou-70947.herokuapp.com/bookingOrder/${id}`)
         .then(res => res.json())
         .then(result => {
            setOrderBooking(result)
            // console.log(result);
         })
   }, [id])

   // form submit
   const onSubmit = (data) => {
      data.bookingOrder = bookingOrder;
      data.status = 'pending';
      // console.log(data);
      fetch('https://thawing-bayou-70947.herokuapp.com/bookingOrder', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(result => {
            if (result.acknowledged) {
               alert('Booking successfully')
               history.push('/myOrder')
            }
            // console.log(result);
         })
      reset();
      // console.log(data);
   };
   return (
      <>
         <div className="bookingRegistration_banner"></div>
         <div className="bookingRegistration_section">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                     <div className="booking_details">
                        <div className="booking_image">
                           <img src={bookingOrder?.imgUrl} alt="" />
                        </div>
                        <div className="booking_content text-center mt-5">
                           <h3>{bookingOrder?.title}</h3>
                           <p>{bookingOrder?.description}</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="bookingRegistration_form" data-aos="fade-up">
                        <h2>Booking Your Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input defaultValue={user?.displayName} {...register("name")} placeholder="Name" />
                           <input defaultValue={user?.email} {...register("email")} placeholder="Email" />
                           <input {...register("address")} placeholder="Address" required />
                           <input type="date" {...register("date")} placeholder="Date" required />
                           <input type="number" {...register("phone")} placeholder="Phone" required />
                           <input defaultValue={bookingOrder?.title} {...register("bookingName")} />
                           <input className="text-white" type="submit" value="Place Order" />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BookingRegistration;