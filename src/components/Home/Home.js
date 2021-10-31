import React, { useEffect, useState } from 'react';
import './Home.css'
import { Container, Image, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';

const Home = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch("https://rocky-inlet-36889.herokuapp.com/hotels")
        .then(res => res.json())
        .then(data => setHotels(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <Container>
                <h1 className="text-center">Hotels Near To Tourist Spots</h1>
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

