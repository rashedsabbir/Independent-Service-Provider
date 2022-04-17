import React from 'react';
import './Testimonial.css';
import testimonialImg_1 from '../../../img/testimonial-1.png';
import testimonialImg_2 from '../../../img/testimonial-2.png';


const Testimonial = () => {
   const testimonialData = [
      {
         id: 1,
         img: testimonialImg_1,
         feedBack: " Everything was perfect, and I would have to say it was the vacation of a life time (...) I will do all I can to promote your company and your services. (...) Thank you so very much for having arranged the magnificent trip we took!! ",
         name: 'Amy Johnson',
         identity: 'Traveler'
      },
      {
         id: 2,
         img: testimonialImg_2,
         feedBack: " If I were speaking to someone about Travelo tour, I would stress that you are a travel company, with accommodation and dining near the top of your priorities. I myself have usually traveled in a little less style. At the same time, it was not so expensive and I thoroughly enjoyed the comforts. Thanks! ",
         name: 'Mike Hardson',
         identity: 'Traveler'
      },
      {
         id: 3,
         img: testimonialImg_1,
         feedBack: "Absolutely! Will use you again. You were recommended to us by a couple friends of mine. I'm glad they had such a good experience with you. I also want to personally thank you for being so flexible when Brenda and I had to cancel our first trip with you due to a skiing accident she had.",
         name: 'Luaka Smith',
         identity: 'Traveler'
      },
   ]
   return (
      <>
         <div className="testimonial_section">
            <div className="container">
               <div className="sec_title" data-aos="fade-up">
                  <h2>Testimonials</h2>
               </div>
               <div className="row mt-5">
                  {
                     testimonialData.map(testimonial => {
                        return (
                           <div key={testimonial.id} className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                              <div className="shadow p-3">
                                 <div className="testi_img">
                                    <img src={testimonial.img} alt="" />
                                 </div>
                                 <div className="testi_content">
                                    <p className="feedback">{testimonial.feedBack}</p>
                                    <h4 className="name">{testimonial.name}</h4>
                                    <p className="traveler">{testimonial.identity}</p>
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

export default Testimonial;