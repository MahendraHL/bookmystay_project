import React from 'react';
import Drawer from './Drawer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './HotelCard.css'; 

const HotelCard = ({ hotel }) => {
  const { imageSrc, hotelName, description, link } = hotel;
  
  return (
    <Row className="hotel-card">
      <Col xs={12} sm={4} className="mb-3 mb-sm-0">
        <img src={imageSrc} className="hotel-image" alt="Resort" />
      </Col>
      <Col xs={12} sm={8} className="hotel-details">
        <h2>{hotelName}</h2>
        <p>{description}</p>
        <Link to={link} className="lstyle" onClick={() => window.scrollTo(0, 0)}>
          <Button>View Details</Button>
        </Link>
      </Col>
    </Row>
  );
};

const HotelList = ({ location, hotels }) => {
  return (
    <Container fluid style={{ fontFamily: "Serif", backgroundColor: "whitesmoke" }}>
      <h1 className="hotel-list-title">{location} Hotels</h1>
      <Row>
        <Col xs={12} md={3} className="mb-3 mb-md-0">
          <Drawer />
        </Col>
        <Col xs={12} md={9}>
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HotelList;
