import { Card, Col, Image, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Hotels.css'


const Hotels = (props) => {
  const {isLoading} =useAuth();
  if (isLoading) {
    return <div className="text-center"><Spinner animation="border" variant="dark" /></div>
  }
    const {_id, name, location, description, img} =props.hotel;
    return (
        <Col className="col-md-4 col-lg-4 g-5">
        <div className="card p-2 h-100">
          <div className="h-100">
          <Image src={img} thumbnail></Image>
          <div className="pt-3">
          <h5 className="fw-bold color">{name}</h5>
          <p className="text-start">{description.slice(0, 100)}...</p>
          </div>
          </div>
          <Card.Footer className="text-center my-2">
          <Link to={`/hotels/${_id}`}>
            <button className="btn btn-regular text-white">Reserve Now <i class="fas fa-arrow-right"></i></button>
            </Link>
          </Card.Footer>
        </div>
      </Col>
    );
};

export default Hotels;

