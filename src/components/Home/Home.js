import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
            <Container>
            <Row>
            {
                hotels.map((hotel, index) => <Hotels 
                    key={hotel._id}
                    hotel={hotel}></Hotels>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Home;