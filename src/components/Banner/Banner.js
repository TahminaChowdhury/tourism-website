import React from 'react';
import { Card, Carousel, Image } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div className="">
                 <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.ibb.co/vvg0MRM/elegant-hotel-room-with-big-bed-1203-1494.jpg"
                            alt="First slide"
                            />
                            <div className="container">
                            <Card.ImgOverlay className="text-dark m-5 text-center">
                                <Card.Title className="fs-1 heading ">Find Your Perfect Hotel</Card.Title>
                                <Card.Text >
                                <h5> Great Deals to Send <br /> Your Loved Ones Somewhere Nice and Close or Far</h5>
                                </Card.Text>
                                <button className="btn btn-regular text-white">Log in</button>
                            </Card.ImgOverlay>
                            </div>
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.ibb.co/M5sFYy2/swimming-pool-74190-2104.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                    
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.ibb.co/N2FpG1D/illuminated-city-night-1127-2144.jpg"
                            alt="Third slide"
                            />
                              
                            <Carousel.Caption>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;

