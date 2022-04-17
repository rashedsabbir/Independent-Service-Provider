import React from 'react';
import './RecentsTrips.css';
import blogImg_1 from '../../../img/tour-blog-1.jpg';
import blogImg_2 from '../../../img/tour-blog-2.jpg';
import blogImg_3 from '../../../img/tour-blog-3.webp';
import { Card } from 'react-bootstrap';

const blogData = [
  {
    id: 1,
    img: blogImg_1,
    desc: 'Life is a beautiful journey not a destination',
    date: 'Oct 12, 2021'
  },
  {
    id: 2,
    img: blogImg_2,
    desc: 'Take only memories, leave only footprints',
    date: 'Sep 22, 2021'
  },
  {
    id: 3,
    img: blogImg_3,
    desc: 'Journeys are best measured in new friends',
    date: 'May 15, 2021'
  },
]

const RecentTrips = () => {
  return (
    <>
      <div className="recent_trips">
        <div className="container">
          <div className="sec_title" data-aos="fade-up">
            <h2>Our Recent Trips</h2>
          </div>
          <div className="row mt-5">
            {
              blogData.map(blog => {
                return (
                  <div key={blog.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                    <Card>
                      <div className="blog_img">
                        <Card.Img variant="top" src={blog.img} />
                      </div>
                      <Card.Body>
                        <Card.Text className="blog_text">
                          {blog.date}
                        </Card.Text>
                        <Card.Title>{blog.desc}</Card.Title>
                      </Card.Body>
                    </Card>
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

export default RecentTrips;