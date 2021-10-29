import React from 'react';
import './NotFound.css'
import img from '../../images/page-found-with-people-connecting-plug-concept-illustration_114360-1939.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center m-5">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
            <Link>
            <button className="btn btn-primary">Go to home</button>
            </Link>
            </div>
        </div>
    
    );
};

export default NotFound;