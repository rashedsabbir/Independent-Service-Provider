import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../img/notFound-img.svg';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="notFound_bg"></div>
            <div className="notFount">
                <div className="container">
                    <div className="notFound_img text-center">
                        <img src={notFoundImg} alt="" />
                    </div>
                    <div className="back_home text-center mb-5">
                        <Link to="/home">
                            <button className="btn btn-danger">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;