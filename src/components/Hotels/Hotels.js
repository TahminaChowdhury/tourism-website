import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hotels = (props) => {
    const {_id,name,location,description,img} =props.hotel
    return (
        <Col md={4}>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to="/login">
                <button className="btn btn-primary">Book Now</button>
                </Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Hotels;