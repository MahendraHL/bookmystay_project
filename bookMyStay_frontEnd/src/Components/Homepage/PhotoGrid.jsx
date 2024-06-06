import React from 'react';
import Apartment from '../Assets/images/Apartment.jpg';
import Resort from '../Assets/images/Resort.webp';
import Villa from '../Assets/images/Villa.jpg';
import Hostel from '../Assets/images/Hostel.jpg';
import GuestHouse from '../Assets/images/GuestHouse.jpg';
import Hotel from '../Assets/images/Hotel.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PhotoGrid.css';  // Importing the CSS file

const photoData = [
  { src: Apartment, alt: "Apartment", label: "Apartments" },
  { src: Resort, alt: "Resort", label: "Resorts" },
  { src: Villa, alt: "Villa", label: "Villas" },
  { src: GuestHouse, alt: "Guest House", label: "Guest Houses" },
  { src: Hotel, alt: "Hotel", label: "Hotels" },
  { src: Hostel, alt: "Hostel", label: "Hostels" },
];

export default function PhotoGrid() {
  return (
    <Container className="container fluid-container">
      <p className="title">Homes Guest Loves</p>
      <Row>
        {photoData.map((photo, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="fade-in col-style">
            <img src={photo.src} alt={photo.alt} className="photo" />
            <p>{photo.label}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
