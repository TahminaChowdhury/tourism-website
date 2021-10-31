import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Hotels = (props) => {
    const {_id, name, location, description, img} =props.hotel;
    return (
        <Col className="col-md-4 col-lg-4 g-5 box">
        <div className="card p-2 h-100">
          <div className="h-100">
          <Image src={img} thumbnail></Image>
          <h5 className="fw-bold">{name}</h5>
          <p className="text-start">{description.slice(0, 100)}...</p>
          </div>
          <Card.Footer className="text-center my-2">
          <Link to={`/hotels/${_id}`}>
            <button className="btn btn-regular">View Details <i class="fas fa-arrow-right"></i></button>
            </Link>
          </Card.Footer>
        </div>
      </Col>
    );
};

export default Hotels;

