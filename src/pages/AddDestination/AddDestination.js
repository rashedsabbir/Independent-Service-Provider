import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
   // use form
   const { register, handleSubmit,reset } = useForm();
   const onSubmit = data => {
      // console.log(data)
      fetch('https://thawing-bayou-70947.herokuapp.com/addDestination',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
         // console.log(data);
         if(data.acknowledged){
            alert('Submitted successfully');
            reset();
         }
      })
   };
   return (
      <>
      <div className="addDestination_banner"></div>
         <div className="addDestination_section">
            <div className="container">
               <div className="addDestination_form" data-aos="fade-up">
                  <h4 className="text-center mb-5">Add Destination</h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input {...register("title")} placeholder="Title" />
                     <textarea className="mb-3" {...register("description")} placeholder="Description" />
                     <input type="number" {...register("price")} placeholder="Price" />
                     <input type="date" {...register("date")} placeholder="Price" />
                     <input {...register("imgUrl")} placeholder="ImgUrl" />
                     <input type="submit" />
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default AddDestination;