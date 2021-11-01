import React, { useEffect, useState } from 'react';
import './Home.css'
import { Card, Col, Container, Image, Row} from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';


const Home = () => {

    const [hotels, setHotels] = useState([]);
    const [addServices, setaddServices] = useState([]);
    useEffect(() => {
        fetch("https://rocky-inlet-36889.herokuapp.com/hotels")
        .then(res => res.json())
        .then(data => setHotels(data))
    },[])

    useEffect(() => {
        fetch("https://rocky-inlet-36889.herokuapp.com/addService")
        .then(res => res.json())
        .then(data => setaddServices(data))
    },[])
    
    return (
        <div>
   
            <Banner></Banner>
            <Container className="mt-5">
                <h1 className="heading">Hotels Near To Tourist Spots</h1>
            <Row className="mb-5 pb-5">
            {
                hotels.map((hotel, index) => <Hotels 
                    key={hotel._id}
                    hotel={hotel}></Hotels>)
            }
            </Row>
            </Container>
            <Container>
                <h1 className="heading">Discover New Cities</h1>
                <Row>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/RpC43Yc/8d4fe0d8-city-28030-164fcc85915.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Dhaka</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div>
                        <Card.Img variant="top" src="https://i.ibb.co/MVw2SQx/146.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Sylhet</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/kQkgTFT/image007.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Chittagong</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div>
                        <Card.Img variant="top" src="https://i.ibb.co/vZdcxTK/images.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Mymensingh</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/jW27D6m/maxresdefault.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Rajshahi</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/kH5vPp7/6fed647a06d92e1e980c4dac744dd12b.jpg" />
                        </div>
                   
                    <Card.Body>
                    <Card.Title>Khulna</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/Yyb9V22/barisal-bangladesh-november-parabat-launch-passenger-ship-barisal-river-port-terminal-bangladesh-bar.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Barsial</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col md={3} className="my-3">
                    <Card className="h-100">
                        <div className="h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/vwjx6Jd/Itakumari-Zamindar-Bari.jpg" />
                        </div>
                    
                    <Card.Body>
                    <Card.Title>Rangpur</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Row>

                <Row className="my-5 py-5 bg">
                    <h1 className="mb-5 heading">Visitor experience</h1>
                    <Col md={4}>
                        <div className="d-flex ">
                            <div className="visitor-exp">
                                <Image src="https://i.ibb.co/cvjvL5N/thoughtful-blonde-forty-years-old-european-woman-wears-spectacles-knitted-orange-sweater-pointing-co.jpg" roundedCircle  alt="" />
                            </div>
                            <div className="p-3">
                                <p className="">Great Experience.They provide good service.well mannered staff.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex ">
                            <div className="visitor-exp">
                                <Image src="https://i.ibb.co/5rwNjvD/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg" roundedCircle  alt="" />
                            </div>
                            <div className="p-3">
                                <p>Great Experience.They provide good service.well mannered staff.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex ">
                            <div className="visitor-exp">
                                <Image src="https://i.ibb.co/5T7d4qj/portrait-cheerful-handsome-man-keeps-hands-together-smiles-broadly-dressed-elegant-shirt-273609-1660.jpg" roundedCircle  alt="" />
                            </div>
                            <div className="p-3">
                                <p>Great Experience.They provide good service.well mannered staff.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="my-5 py-5">
                    <h1 className="heading">Your services</h1>
                    {
                        addServices.map(service =>  <Col md={3} className="my-3">
                        <Card className="h-100">
                            <div className="h-100">
                            <Card.Img variant="top" src={service.img} />
                            </div>
                        
                        <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            <p>{service.description}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>)}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
