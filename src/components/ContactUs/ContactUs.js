import React from 'react';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                <div class="card ">
                <img src="https://i.ibb.co/2cLL1DJ/woman-working-call-center-23-2148094886.jpg" class="card-img" alt="..."/>
                <div class="card-img-overlay text">
                    <div className="m-5 p-5">
                        <h3>Contact-Info</h3>
                        <h5><i class="far fa-envelope"></i>        Email:guesterra@gmail.com</h5>
                        <h5><i class="fas fa-phone-alt"></i> Call us: 01755-555-80</h5>
                        <h5><i class="fas fa-map-marker-alt"></i>Sector-1,Road-3,Uttara,Dhaka-1230</h5>
                    </div>
                </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default ContactUs;

