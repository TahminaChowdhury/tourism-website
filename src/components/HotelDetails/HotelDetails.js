import React, { useEffect, useState } from 'react';
import './HotelDetails.css'
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HotelDetails = () => {

  const {id} = useParams();
 
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://rocky-inlet-36889.herokuapp.com/hotels/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data))
  },[])

  
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
           <h1><span className="heading">Welcome</span>
           </h1>

           <p>where business and leisure blend together. Enjoying an unrivalled location, overlooking the Bay of Bengal (only 25 yards from the Bay water) and sitting in the laps of hills, we offer deluxe accommodation in 181 well appointed guest rooms and suites. The panoramic view of the ocean, the majestic hills and the natural beauty of the tamarisk trees are all wonderfully complemented by luxury facilities and Bangladeshi hospitality.</p>
           <h1 className="heading">Rooms & Suites</h1>
           <p>Come and experience what our guests talk wildly about – splendid feelings of staying very close to sea! Our rooms and suites are designed to ensure both sea and hill side of beautiful Cox’s bazar. Whatever your expectation, we can match it with rooms and suites ranging from deluxe to presidential suite.We have both hill side and sea side rooms and suites to meet the needs of all type of guest.</p>
        </div>
        </div>

        {/* Rooms and suits */}
        <div>
          <div className="row">
            <div className="col-md-6">
                  <Card className="h-100 mt-3">
                    <div className="h-100">
                    <Card.Img variant="top" src="https://i.ibb.co/tqDZ8mD/2typebroom.jpg" />
                    </div>
                    
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div>
                      <Card.Title>Regular Room
                      </Card.Title>
                      </div>
                      <div>
                        <h4>BDT 4500++</h4>
                      </div>
                      </div>
                      <Link to="/reservation">
                      <button className="btn btn-regular text-white">Book Now</button>
                      </Link>
                    </Card.Body>
                  </Card>

            </div>
            <div className="col-md-6">
            <Card className="h-100 mt-3">
              <div className="h-100">
              <Card.Img variant="top" src="https://i.ibb.co/MMtjFf3/hotel-room-design-trends-italianbark-interior-design-blog.jpg" />
              </div>
                   
                    <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                      <Card.Title>Deluxe Room
                      </Card.Title>
                      </div>
                      <div>
                        <h4>BDT 6000++</h4>
                      </div>
                      </div>
                      <Link to="/reservation">
                      <button className="btn btn-regular text-white">Book Now</button>
                      </Link>
                    </Card.Body>
                  </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
            <Card className="h-100 mt-3">
              <div className="h-100">
              <Card.Img variant="top" src="https://i.ibb.co/VQdV61g/bc741db40e5cb56705c74e45d1ed0af4.jpg" />
              </div>
              <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                      <Card.Title>Suite
                      </Card.Title>
                      </div>
                      <div>
                        <h4>BDT 12000++</h4>
                      </div>
                      </div>
                      <Link to="/reservation">
                      <button className="btn btn-regular text-white">Book Now</button>
                      </Link>
                    </Card.Body>
                  </Card>
            </div>
            <div className="col-md-6">
                  <Card className="h-100 mt-3">
                    <div className="h-100">
                    <Card.Img variant="top" src="https://i.ibb.co/16mskHH/unnamed.jpg" />
                    </div>
                    
                    <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                      <Card.Title>Madhurima Suite
                      </Card.Title>
                      </div>
                      <div>
                        <h4>BDT 18000++</h4>
                      </div>
                      </div>
                      <Link to="/reservation">
                      <button className="btn btn-regular text-white">Book Now</button>
                      </Link>
                    </Card.Body>
                  </Card>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className="heading">Hotel Facilities</h1>
          <ul>
            <li>Central air conditioning</li>
            <li>Hot & cold water</li>
            <li>Cable television with over 84 channels</li>
            <li>Comfortable working desk with table lamp</li>
            <li>High Speed Internet access</li>
            <li>In room safe (suite only)</li>
            <li>Doctor on call</li>
            <li>24 hours room services</li>
            <li>Conference and Banquet facility</li>
            <li>Airport transfer</li>
          </ul>
        </div>
        </div>
    );
};

export default HotelDetails;



