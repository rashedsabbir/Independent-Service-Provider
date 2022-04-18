import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <>
            <div className="heroBanner_section">
                <div className="container">
                    <div className="hero_content" data-aos="fade-up">
                        <h2>Discover Your Favorite Place</h2>
                        <p>Let’s start your journey, your dream will come true</p>
                        <button className="btn_dark">Explore Services</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;