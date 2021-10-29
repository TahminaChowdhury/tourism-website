import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';

const Home = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/hotels")
        .then(res => res.json())
        .then(data => setHotels(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <Row>
            {
                hotels.map(hotel => <Hotels 
                    key={hotel._id}
                    hotel={hotel}></Hotels>)
            }
            </Row>
        </div>
    );
};

export default Home;