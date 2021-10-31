import React from 'react';
import { Image } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div className="top-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="my-5 py-5">
                            <h1 className="text-white">Welcome to <br /> GUESTerra</h1>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <div className="row banner my-5 py-5">
                            <div className="col-md-4 ">
                                <div>
                                <Image src='https://i.ibb.co/PYtL0ph/maldives-island-74190-478.jpg' rounded></Image>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div>
                                <Image src='https://i.ibb.co/jDqv1c9/skyscrapers-building-new-york-city-181624-5718.jpg' rounded></Image>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div>
                                <Image src='https://i.ibb.co/vvg0MRM/elegant-hotel-room-with-big-bed-1203-1494.jpg' rounded></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


